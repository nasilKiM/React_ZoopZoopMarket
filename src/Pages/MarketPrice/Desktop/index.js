import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import ProductApi from 'Apis/productApi';

import SearchBar from 'Components/SearchBar/Desktop/SearchBar';
import MarketPriceSkeleton from 'Pages/Skeleton/page/marketPriceSkele';
import Chart from './components/chart';
import RecentSoldOut from './components/recentSoldout';

import styled from 'styled-components';
import dayjs from 'dayjs';
import {
	basicSetting,
	flexAlignCenter,
	flexJustifyCenter,
} from 'Styles/common';

const DesktopMarketPrice = () => {
	const props = 'market_price';
	const { word } = useParams();
	const today = dayjs().format('YYYY-MM-DD');
	const monthsAgo = dayjs().subtract(1, 'month').format('YYYY-MM-DD');
	const { data, isLoading, isSuccess } = useQuery(['SEARCH_PRICE', word], () =>
		ProductApi.searchMarket(word, monthsAgo, today),
	);

	const formatData = data => {
		return data.map(product => {
			const date = product.date.split('-');
			const month = parseInt(date[1]);
			const day = parseInt(date[2]);
			let avgPrice = parseInt(product.avgPrice);
			if (avgPrice > 100000000) {
				avgPrice = Math.floor(avgPrice / 100000000);
			} else if (avgPrice > 10000) {
				avgPrice = Math.floor(avgPrice / 10000);
			}

			return {
				date: `${month}-${day}`,
				avgPrice: avgPrice.toFixed(0),
			};
		});
	};

	const arr =
		data?.data?.cumulativeAvgPrice && formatData(data.data.cumulativeAvgPrice);

	let average = 0;
	let roundedAverage = 0;
	if (data && data.data.cumulativeAvgPrice) {
		const forLastData = data.data.cumulativeAvgPrice.length - 1;
		average = data.data.cumulativeAvgPrice[forLastData].avgPrice;
		let numberAverage = parseInt(average);
		if (numberAverage > 100000000) {
			numberAverage = Math.floor(numberAverage / 100000000);
			roundedAverage = `${numberAverage.toLocaleString()}억원`;
		} else if (numberAverage > 10000) {
			numberAverage = Math.floor(numberAverage / 10000);
			roundedAverage = `${numberAverage.toLocaleString()}만원`;
		}
	}

	return (
		<>
			{isSuccess && (
				<S.Wrapper>
					<S.UpperPart>
						<S.LeftPart>
							<S.Title>
								시세 조회
								{word ? (
									<S.SubTitle>
										원하시는 상품이 얼마에 거래되고 있는지 알아보세요.
									</S.SubTitle>
								) : (
									<S.SubTitle>시세를 알고싶은 물품을 검색해주세요.</S.SubTitle>
								)}
							</S.Title>
						</S.LeftPart>
						<S.SearchBarContainer>
							<SearchBar props={props} />
						</S.SearchBarContainer>
					</S.UpperPart>
					<S.ChartContainer>
						{word && (
							<Chart data={arr} average={parseInt(average).toFixed(0)}></Chart>
						)}
					</S.ChartContainer>
					{average == 0 ? (
						<S.Average>검색어가 입력되지 않았습니다.</S.Average>
					) : (
						<S.Average>
							<S.ResultWord>"{word}"</S.ResultWord>의 평균 시세는
							<S.ResultWord>{roundedAverage}</S.ResultWord> 입니다.
						</S.Average>
					)}
					<S.RecentlyClosed>
						<S.Title>최근 거래 종료 품목</S.Title>
						{word && <RecentSoldOut word={word} />}
					</S.RecentlyClosed>
				</S.Wrapper>
			)}
			{isLoading && <MarketPriceSkeleton />}
		</>
	);
};

export default DesktopMarketPrice;

const Wrapper = styled.div`
	${basicSetting}
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const UpperPart = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 720px) {
		align-items: center;
		flex-direction: column;
	}
`;

const LeftPart = styled.div`
	width: 60%;
	margin-left: 20px;
	@media screen and (max-width: 720px) {
		width: 100%;
	}
`;
const Title = styled.div`
	text-align: start;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize.md};
	@media screen and (max-width: 720px) {
		text-align: center;
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}
	margin-top: 30px;
	margin-bottom: 20px;
`;
const SubTitle = styled.div`
	margin-top: 15px;
	font-size: ${({ theme }) => theme.fontSize.base};
	@media screen and (max-width: 920px) {
		font-size: ${({ theme }) => theme.fontSize.sm};
		color: ${({ theme }) => theme.color.gray[300]};
	}
`;
const ChartContainer = styled.div`
	width: 100%;
	${flexAlignCenter}
	margin-top: 50px;
	@media screen and (max-width: 767px) {
		margin-top: 20px;
	}
`;
const Average = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.base};
	margin-top: 30px;
	${flexJustifyCenter}
	@media screen and (max-width: 767px) {
		font-size: ${({ theme }) => theme.fontSize.xs};
	}
`;

const RecentlyClosed = styled.div`
	margin-top: 40px;
	@media screen and (max-width: 767px) {
		margin-top: 20px;
	}
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

const ItemList = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 80px;
	justify-content: space-evenly;
`;

const ResultWord = styled.div`
	color: ${({ theme }) => theme.color.primary[300]};
`;

const SearchBarContainer = styled.div`
	width: 250px;
	margin-top: 45px;
	margin-right: 10px;
	@media screen and (max-width: 720px) {
		width: 220px;
		margin: 0 auto;
		margin-top: 25px;
	}
`;
const S = {
	Wrapper,
	UpperPart,
	LeftPart,
	Title,
	SubTitle,
	ChartContainer,
	Average,
	RecentlyClosed,
	ItemList,
	ResultWord,
	SearchBarContainer,
};
