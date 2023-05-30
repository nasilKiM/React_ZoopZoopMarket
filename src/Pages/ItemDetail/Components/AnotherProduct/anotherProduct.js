import ItemCard from 'Components/Card/Desktop/Card';
import { flexAlignCenter } from 'Styles/common';
import styled from 'styled-components';

const AnotherProduct = ({ product, isMine }) => {
	const hasRelated = product && product.length > 0;

	return (
		<S.Wrapper>
			<div>연관상품</div>
			{hasRelated ? (
				<S.ProductList>
					{product.map(prod => {
						return (
							<ItemCard
								index={prod.idx}
								products={prod}
								isMine={isMine}
								isRelated={true}
							/>
						);
					})}
				</S.ProductList>
			) : (
				<div>연관된 아이템이 없습니다.</div>
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
	${flexAlignCenter}
`;

const S = {
	Wrapper,
	ProductList,
};
