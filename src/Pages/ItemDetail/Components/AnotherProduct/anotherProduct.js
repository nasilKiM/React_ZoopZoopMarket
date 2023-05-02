import ItemCard from 'Components/Card/Desktop/Card';
import MobileCard from 'Components/Card/Mobile/MobileCard';
import { flexAllCenter } from 'Styles/common';
import { isDesktop } from 'react-device-detect';
import styled from 'styled-components';

const AnotherProduct = () => {
	return (
		<S.Wrapper>
			<div>연관상품</div>
			{isDesktop ? (
				<S.ProductList>
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
				</S.ProductList>
			) : (
				<div>
					<MobileCard />
					<MobileCard />
				</div>
			)}
		</S.Wrapper>
	);
};

export default AnotherProduct;

const Wrapper = styled.div`
	& > div:first-child {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		font-size: ${({ theme }) => theme.fontSize.md};
		margin-top: 40px;
		margin-bottom: 10px;
	}
`;

const ProductList = styled.div`
	${flexAllCenter}
`;

const S = {
	Wrapper,
	ProductList,
};
