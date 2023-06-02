import BarSkeleton from '../component/barSkeleton';

import styled from 'styled-components';
import { Skeleton } from '@mui/material';

import { theme } from 'Styles/theme';

const MarketPriceSkeleton = () => {
	const viewportWidth = window.innerWidth;
	let variable;
	if (viewportWidth < 414) {
		variable = 400;
	} else if (viewportWidth < 768) {
		variable = 550;
	} else if (viewportWidth < 1000) {
		variable = 1000;
	} else if (viewportWidth < 1440) {
		variable = 1500;
	} else {
		variable = 1600;
	}

	return (
		<S.Wrapper>
			<S.UpperPart>
				<S.LeftPart>
					<S.Title>
						시세 조회
						<S.SubTitle>시세를 알고싶은 물품을 검색해주세요.</S.SubTitle>
					</S.Title>
				</S.LeftPart>
			</S.UpperPart>
			<S.ChartContainer width={variable}>
				<Skeleton
					animation="wave"
					variant="rounded"
					sx={{
						width: '100%',
						height: '100%',
						bgcolor: theme.color.gray[100],
					}}
				/>
			</S.ChartContainer>
			<S.Average>
				<BarSkeleton />
			</S.Average>
			<S.RecentlyClosed>
				최근 거래 종료 품목
				<S.ItemList></S.ItemList>
			</S.RecentlyClosed>
		</S.Wrapper>
	);
};

export default MarketPriceSkeleton;

const Wrapper = styled.div`
	width: 70%;
	min-width: 350px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
	margin: 0 auto;
	padding-top: 10px;
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
`;
const Title = styled.div`
	text-align: start;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize.md};
	@media screen and (max-width: 720px) {
		text-align: center;
		font-size: ${({ theme }) => theme.fontSize.base};
	}
	margin-top: 40px;
`;
const SubTitle = styled.div`
	margin-top: 10px;
	@media screen and (max-width: 920px) {
		font-size: ${({ theme }) => theme.fontSize.xs};
	}
`;
const ChartContainer = styled.div`
	width: ${props => props.width * 0.6}px;
	height: ${props => props.width * 0.6 * 0.6}px;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;
const Average = styled.div`
	width: 100%;

	margin-top: 10px;
	display: flex;
	justify-content: center;
`;

const ItemList = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 80px;
	justify-content: space-evenly;
`;

const RecentlyClosed = styled.div`
	margin-top: 80px;
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
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
};
