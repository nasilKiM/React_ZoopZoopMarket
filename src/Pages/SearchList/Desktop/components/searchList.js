import ItemCardMock from 'Components/Card/Desktop/Card copy';
import styled from 'styled-components';

const SearchList = ({ products }) => {
	//console.log(products);
	return (
		<S.Wrapper>
			{/* {products &&
				products.map(product => (
					// <ItemCard index={product.idx} products={product} />
					
				))} */}
			<ItemCardMock index={products} products={products} />
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
