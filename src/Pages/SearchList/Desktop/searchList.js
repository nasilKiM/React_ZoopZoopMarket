import ItemCard from 'Components/Card/Desktop/Card';
import styled from 'styled-components';

const SearchList = ({ products }) => {
	return (
		<S.Wrapper>
			{products.map(product => (
				<ItemCard index={product.idx} products={product} />
			))}
		</S.Wrapper>
	);
};

export default SearchList;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-around;
`;

const Container = styled.div`
	margin: 0 auto;
`;
const SearchBarContainer = styled.div`
	display: flex;
	justify-content: center;
`;
const ResultText = styled.div`
	font-size: ${({ theme }) => theme.fontSize.md};
	margin-top: 80px;
`;
const CategoryBox = styled.div`
	cursor: pointer;
	display: flex;
	margin-top: 40px;
`;

const Category = styled.div`
	font-size: ${({ theme }) => theme.fontSize.md};
`;
const Wall = styled.div`
	border-right: 1px solid black;
	border-color: ${({ theme }) => theme.color.primary};
	margin: 0 15px;
`;

const ItemList = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 30px;
`;
const SampleCard = styled.div`
	width: 200px;
	height: 400px;
	border: 1px solid black;
`;
const S = {
	Wrapper,
	Container,
	ResultText,
	CategoryBox,
	Category,
	Wall,
	ItemList,
	SearchBarContainer,
	SampleCard,
};
