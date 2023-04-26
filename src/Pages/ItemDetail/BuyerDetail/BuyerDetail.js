import styled from 'styled-components';
import DetailHead from '../Components/DetailHead/detailHead';
import DetailContent from '../Components/DetailContent/detailContent';
import { flexAllCenter } from 'Styles/common';

const BuyerDetailPage = ({ state }) => {
	return (
		<S.Wrapper>
			<div>구매자페이지</div>
			<DetailHead />
			<DetailContent state={state} />
			<S.Map>
				<div>거래장소</div>
				<div>지도</div>
			</S.Map>
			<S.AnotherProduct>
				<div>연관상품</div>
				<div></div>
			</S.AnotherProduct>
		</S.Wrapper>
	);
};

export default BuyerDetailPage;

const Wrapper = styled.div`
	width: 80%;
	border: 1px solid;
	margin: 0 auto;
`;

const Map = styled.div`
	margin: 50px 0;
	& > div:first-child {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
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

const AnotherProduct = styled.div`
	& > div:first-child {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const S = {
	Wrapper,
	Map,
	AnotherProduct,
};
