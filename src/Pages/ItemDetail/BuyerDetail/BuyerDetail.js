import styled from 'styled-components';
import DetailHead from '../Components/DetailHead/detailHead';
import DetailContent from '../Components/DetailContent/detailContent';
import { flexAllCenter } from 'Styles/common';
import AnotherProduct from '../Components/AnotherProduct/anotherProduct';
import KaMap from 'Components/Map/Map';

const BuyerDetailPage = ({ state, product }) => {
	const item = product && product.data.searchProduct;
	console.log(item);
	return (
		<S.Wrapper>
			<div>
				<DetailHead item={item} />
			</div>
			<DetailContent state={state} item={item} />
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
	width: 70%;
	min-width: 700px;
	max-width: 1200px;
	margin: 0 auto;
	& > div:first-child {
		border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
	}
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
