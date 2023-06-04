import ItemCard from 'Components/Card/Desktop/Card';

import styled from 'styled-components';

import { gridAllCenter, gridColumn } from 'Styles/common';

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
	width: 100%;
	${gridColumn(4)}
	${gridAllCenter}
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
	@media screen and (max-width: 400px) {
		grid-template-rows: repeat(2, minmax(180px, 1fr));
		column-gap: 10px;
	}
	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(2, minmax(180px, 1fr));
		column-gap: 10px;
		row-gap: 20px;
	}
	@media screen and (min-width: 768px) and (max-width: 1000px) {
		grid-template-columns: repeat(2, minmax(250px, 1fr));
		column-gap: 20px;
		row-gap: 30px;
	}
	@media screen and (min-width: 1001px) and (max-width: 1499px) {
		grid-template-columns: repeat(3, minmax(270px, 1fr));
		column-gap: 20px;
		row-gap: 35px;
	}
	@media screen and (min-width: 1500px) {
		grid-template-columns: repeat(4, minmax(280px, 1fr));
		column-gap: 20px;
		row-gap: 40px;
	}
`;

const S = {
	Wrapper,
	ProductList,
};
