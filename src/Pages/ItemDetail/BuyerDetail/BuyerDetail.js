import styled from 'styled-components';
import DetailHead from '../Components/DetailHead/detailHead';
import DetailContent from '../Components/DetailContent/detailContent';
import { flexAllCenter } from 'Styles/common';
import AnotherProduct from '../Components/AnotherProduct/anotherProduct';
import KaMap from 'Components/Map/Map';

const BuyerDetailPage = ({ state }) => {
	return (
		<S.Wrapper>
			<div>구매자페이지</div>
			<DetailHead />
			<DetailContent state={state} />
			<S.MapContent>
				<div>거래장소</div>
				<KaMap />
			</S.MapContent>
			<AnotherProduct />
		</S.Wrapper>
	);
};

export default BuyerDetailPage;

const Wrapper = styled.div`
	width: 60%;
	max-width: 1000px;
	min-width: 700px;
	border: 1px solid;
	margin: 0 auto;
`;

const MapContent = styled.div`
	margin: 50px 0;
	& > div:first-child {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		font-size: ${({ theme }) => theme.fontSize.md};
		margin: 25px 0;
	}
	& > div:last-child {
		border: 1px solid;
		width: 100%;
		height: 200px;
		${flexAllCenter}
		background-color: #d9d9d9;
	}
`;

const S = {
	Wrapper,
	MapContent,
};
