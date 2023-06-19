import ItemCard from 'Components/Card/Card';

import styled from 'styled-components';

const SearchList = ({ products }) => {
	return (
		<S.Wrapper className="searchListxxxx">
			<ItemCard index={products.idx} products={products} />
		</S.Wrapper>
	);
};

export default SearchList;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const S = {
	Wrapper,
};
