import ItemCard from 'Components/Card/Desktop/Card';
import SearchBar from 'Components/SearchBar/SearchBar';
import { useState } from 'react';
import styled from 'styled-components';

const DesktopSearchList = () => {
	const [selected, setSelected] = useState(0);

	let selectedItem = '';
	let searchKeyword = '벤츠 자전거';
	const itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	if (selected === 0) {
		selectedItem = '중고물품';
	} else if (selected === 1) {
		selectedItem = '무료나눔';
	}
	return (
		<S.Wrapper>
			<S.Container>
				<S.SearchBarContainer>
					<SearchBar></SearchBar>
				</S.SearchBarContainer>
				<S.ResultText>
					찾으신 '{searchKeyword}'에 대한 결과 입니다.(총
					{itemList.length} 개)
				</S.ResultText>
				<S.CategoryBox>
					<S.Category
						onClick={() => setSelected(0)}
						style={
							selected === 0
								? {
										fontWeight: 700,
								  }
								: {}
						}
					>
						중고 물품
					</S.Category>
					<S.Wall></S.Wall>
					<S.Category
						onClick={() => setSelected(1)}
						style={selected === 1 ? { fontWeight: 700 } : {}}
					>
						무료 나눔
					</S.Category>
				</S.CategoryBox>
				<S.ItemList>
					{itemList.map(item => (
						<ItemCard key={item} />
					))}
				</S.ItemList>
			</S.Container>
		</S.Wrapper>
	);
};

export default DesktopSearchList;

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

const S = {
	Wrapper,
	Container,
	ResultText,
	CategoryBox,
	Category,
	Wall,
	ItemList,
	SearchBarContainer,
};
