import ItemCard from 'Components/Card/Desktop/Card';
import styled from 'styled-components';

const SearchList = ({ products }) => {
	return (
		<S.Wrapper>
			<ItemCard index={products.idx} products={products} />
			{/* <ItemCardMock index={products} products={products} /> */}
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
