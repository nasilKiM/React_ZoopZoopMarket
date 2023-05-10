import styled from 'styled-components';

const SearchList = ({ key, product }) => {
	return (
		<S.SampleCard key={product.idx}>
			<div> 물품 id: {product.idx}</div>
			<div> 제목: {product.title}</div>
			{product.ProductsTags.map(productTag => (
				<div>{productTag.Tag.tag}</div>
			))}
			<div>{product.price && product.price.toLocaleString()}원</div>
			<img
				src={product.img_url}
				alt="item"
				style={{ width: '180px', maxHeight: '200px' }}
			/>
		</S.SampleCard>
	);
};

export default SearchList;

const Wrapper = styled.div`
	width: 60%;
	max-width: 1000px;
	min-width: 700px;
	margin: 0 auto;
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
