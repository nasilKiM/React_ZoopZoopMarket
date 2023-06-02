import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import ProductApi from 'Apis/productApi';

import FreeProduct from './components/freeProduct';
import UsedProduct from './components/usedProduct';
import IndexSkeleton from '../../Skeleton/page/searchIndexSkele';

import styled from 'styled-components';

const DesktopSearchList = () => {
	const [selected, setSelected] = useState(2);
	const { word } = useParams();
	const navigate = useNavigate();
	const onSelectBoxClick = option => {
		setSelected(option);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		if (selected <= 1) {
			navigate(`${selected}`);
		}
	}, [selected]);

	const freeData = useQuery(['SEARCH_FREE', word], () => {
		return ProductApi.searchItems(1, word.split('·')[0], 1, '판매중');
	});

	const usedData = useQuery(['SEARCH_USED', word], () => {
		return ProductApi.searchItems(1, word.split('·')[0], 0, '판매중');
	});

	const { data, isSuccess, isLoading } = useQuery(['SEARCH_ALL', word], () => {
		return ProductApi.searchItems(1, word.split('·')[0], '', '판매중');
	});

	return (
		<>
			<S.Wrapper>
				<S.Container>
					<S.SelectContainer>
						<S.BoxContainer>
							<S.SelectBox
								isSelected={selected === 2}
								onClick={() => onSelectBoxClick(2)}
							>
								통합
							</S.SelectBox>
							<S.SelectBox
								isSelected={selected === 0}
								onClick={() => onSelectBoxClick(0)}
							>
								중고
							</S.SelectBox>
							<S.SelectBox
								isSelected={selected === 1}
								onClick={() => onSelectBoxClick(1)}
							>
								무료
							</S.SelectBox>
						</S.BoxContainer>
					</S.SelectContainer>
					{isSuccess && data && (
						<S.ResultContainer>
							{data.data.pagination.count > 0 ? (
								<S.ResultText>
									<S.ResultWord>"{word}"</S.ResultWord>에 대한 통합 검색 결과 (
									총 {data.data.pagination.count}개 )
								</S.ResultText>
							) : (
								<S.ResultText>
									<S.ResultWord>"{word}"</S.ResultWord>에 대한 검색결과가
									없습니다.
								</S.ResultText>
							)}

							<S.Category>중고 아이템</S.Category>

							{usedData.data && (
								<UsedProduct word={word} data={usedData.data}></UsedProduct>
							)}

							<S.Category>무료 아이템</S.Category>
							{freeData.data && (
								<FreeProduct word={word} data={freeData.data}></FreeProduct>
							)}
						</S.ResultContainer>
					)}
				</S.Container>
			</S.Wrapper>

			{isLoading && <IndexSkeleton></IndexSkeleton>}
		</>
	);
};

export default DesktopSearchList;

const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
`;

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
`;

const SelectContainer = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.color.gray[100]};
`;

const BoxContainer = styled.div`
	width: 70%;
	display: flex;
	min-width: 350px;
	max-width: 1200px;

	margin: 0 auto;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
`;
const SelectBox = styled.div`
	cursor: pointer;
	margin: 10px 10px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ isSelected }) =>
		isSelected
			? ({ theme }) => theme.color.primary[300]
			: ({ theme }) => theme.color.black};
`;

const ResultContainer = styled.div`
	margin: 0 auto;
	width: 70%;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
`;
const ResultText = styled.div`
	width: 100%;
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	min-width: 414px;
	max-width: 1200px;
	margin: 0 auto;
	margin-top: 30px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
`;

const ResultWord = styled.div`
	color: ${({ theme }) => theme.color.primary[300]};
`;
const Category = styled.div`
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	width: 100%;
	display: flex;
	margin-top: 30px;
	min-width: 350px;
	max-width: 1200px;
	margin: 0 auto;
	margin-top: 40px;
	margin-bottom: 10px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
`;

const S = {
	Wrapper,
	Container,
	SelectContainer,
	BoxContainer,
	SelectBox,
	ResultContainer,
	ResultText,
	ResultWord,
	Category,
};
