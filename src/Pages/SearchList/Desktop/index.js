import { Axios } from 'Apis/@core';
import SearchBar from 'Components/SearchBar/Desktop/SearchBar';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchList from './searchList';

const DesktopSearchList = () => {
	const [selected, setSelected] = useState(0);
	const { word } = useParams();
	const [ref, inView] = useInView({ threshold: 0.5 });
	const props = 'search_list';

	const fetchItems = (page, searchWord) => {
		return Axios.get('/api/product/search', {
			params: {
				category: selected,
				keyword: searchWord,
				page: page,
			},
		});
	};

	const useInfiniteSearch = () => {
		const res = useInfiniteQuery(
			['searchItems'],
			({ pageParam = 1 }) => fetchItems(pageParam, word),
			{
				getNextPageParam: lastPage => {
					let page =
						lastPage.data.pagination.no === 0
							? 1
							: Math.floor(lastPage.data.pagination.no / 20) + 1;
					if (page < lastPage.data.pagination.endPage) {
						return page + 1;
					} else {
						return undefined;
					}
				},
			},
		);
		return res;
	};

	const res = useInfiniteSearch();

	const { data } = res;

	let selectedItem = '';

	if (selected === 0) {
		selectedItem = '중고물품';
	} else if (selected === 1) {
		selectedItem = '무료나눔';
	}

	useEffect(() => {
		res.refetch();
	}, [selected]);

	useEffect(() => {
		if (!inView) {
			return;
		}
		res.fetchNextPage();
	}, [inView]);

	return (
		<>
			<S.Wrapper>
				<S.Container>
					<S.SearchBarContainer>
						<SearchBar props={props} />
					</S.SearchBarContainer>
					<S.ResultText>
						{/*삼항연산자로 검색키워드가 있을때 + 없을때 구별해서 보여줘야함 */}
						<div>원하시는 키워드를 입력해주세요</div>
						찾으신 '{word}'에 대한 결과 입니다.(총{} 개)
					</S.ResultText>
					<S.CategoryBox>
						<S.Category
							onClick={() => setSelected(0)}
							style={selected === 0 ? { fontWeight: 700 } : {}}
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
						{data &&
							data.pages.map(pageItems => (
								<SearchList products={pageItems.data.product} />
							))}
						<S.refDiv ref={ref}></S.refDiv>
					</S.ItemList>
				</S.Container>
			</S.Wrapper>
		</>
	);
};

export default DesktopSearchList;

const refDiv = styled.div`
	border: 4px solid red;
`;

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
	padding-top: 40px;
`;

const ResultText = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	margin-top: 40px;
`;

const CategoryBox = styled.div`
	cursor: pointer;
	display: flex;
	margin-top: 40px;
`;

const Category = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
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
	refDiv,
};
