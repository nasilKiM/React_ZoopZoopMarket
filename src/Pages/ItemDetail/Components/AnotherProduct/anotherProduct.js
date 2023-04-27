import ItemCard from 'Components/Card/Desktop/Card';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const AnotherProduct = () => {
	return (
		<S.Wrapper>
			<div>연관상품</div>
			<div>
				<ItemCard />
				<ItemCard />
				<ItemCard />
				<ItemCard />
			</div>
		</S.Wrapper>
	);
};

export default AnotherProduct;

const Wrapper = styled.div`
	& > div:first-child {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		font-size: ${({ theme }) => theme.fontSize.md};
		margin-top: 40px;
	}
	& > div:last-child {
		${flexAllCenter}
	}
`;

const S = {
	Wrapper,
};
