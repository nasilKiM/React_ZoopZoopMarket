import MobileCard from 'Components/Card/Mobile/MobileCard';
import SearchBar from 'Components/SearchBar/SearchBar';
import { theme } from 'Styles/theme';
import { useState } from 'react';
import styled from 'styled-components';

const MobileSearchList = () => {
	const [selected, setSelected] = useState(0);

	let selectedItem = '';
	const itemList = [1, 2, 3, 4];

	if (selected === 0) {
		selectedItem = '중고물품';
	} else if (selected === 1) {
		selectedItem = '무료나눔';
	}

	return (
		<S.MobileWrapper>
			<S.Wrapper>
				<S.Container>
					<S.SearchBarContainer>
						<SearchBar></SearchBar>
					</S.SearchBarContainer>
					<S.CategoryBox>
						<S.Category
							onClick={() => setSelected(0)}
							style={
								selected === 0
									? {
											fontWeight: 700,
											borderBottom: `2px solid ${theme.color.black}`,
									  }
									: {}
							}
						>
							중고 물품
						</S.Category>
						<S.Wall></S.Wall>
						<S.Category
							onClick={() => setSelected(1)}
							style={
								selected === 1
									? {
											fontWeight: 700,
											borderBottom: `2px solid ${theme.color.black}`,
									  }
									: {}
							}
						>
							무료 나눔
						</S.Category>
					</S.CategoryBox>
					<S.ItemList>
						{itemList.map(item => (
							<MobileCard key={item} />
						))}
					</S.ItemList>
				</S.Container>
			</S.Wrapper>
		</S.MobileWrapper>
	);
};

export default MobileSearchList;

const MobileWrapper = styled.div`
	border: 2px solid magenta;
	width: 414px;
	height: 736px;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	margin: 0 auto;
`;

const Container = styled.div`
	margin: 0 auto;
`;
const SearchBarContainer = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: center;
`;
const ResultText = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
	margin-top: 20px;
`;
const CategoryBox = styled.div`
	cursor: pointer;
	display: flex;
	margin-top: 40px;
	margin-left: 10px;
`;

const Category = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
	border-bottom: ${props => (props.isSelected ? '2px solid black' : 'none')};
	padding: 5px;
`;
const Wall = styled.div`
	border-right: 1px solid black;
	border-color: ${({ theme }) => theme.color.primary};
	margin: 0 15px;
`;

const ItemList = styled.div`
	width: 70%;

	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	margin-top: 40px;
	> div {
		width: 100%;
		margin-bottom: 15px;
		border: 2px solid black;
		border-color: ${({ theme }) => theme.color.subBeigeGreen};
		border-radius: 10px;
	}
`;

const S = {
	MobileWrapper,
	Wrapper,
	Container,
	ResultText,
	CategoryBox,
	Category,
	Wall,
	ItemList,
	SearchBarContainer,
};
