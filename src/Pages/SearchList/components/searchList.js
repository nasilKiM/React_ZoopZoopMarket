import ItemCard from 'Components/Card/Card';

import styled from 'styled-components';

const SearchList = ({ products }) => {
	return (
<<<<<<< HEAD:src/Pages/SearchList/Desktop/components/searchList.js
		<S.Wrapper className="searchListxxxx">
			<ItemCard index={products.idx} products={products} createdAt={false}/>
=======
		<S.Wrapper>
			<ItemCard index={products.idx} products={products} />
>>>>>>> Develop/pair1:src/Pages/SearchList/components/searchList.js
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
