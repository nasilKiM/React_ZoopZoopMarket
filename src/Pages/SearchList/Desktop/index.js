import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import UsedProduct from './components/usedProduct';
import FreeProduct from './components/freeProduct';
import { useQuery } from 'react-query';
import { MockAxios } from 'Apis/@core';
import { useRecoilState } from 'recoil';
import { itemListState } from 'Atoms/search.atom';

const DesktopSearchList = () => {
	const [selected, setSelected] = useState(0);
	const { word } = useParams();
	const [ref, inView] = useInView({ threshold: 0.5 });
	const props = 'search_list';

	// const res = useInfiniteSearch(word, selected);

	//const { data } = res;

	let selectedItem = '';

	if (selected === 0) {
		selectedItem = '중고물품';
	} else if (selected === 1) {
		selectedItem = '무료나눔';
	}

	// useEffect(() => {
	// 	res.refetch(); // 현재 쿼리를 다시 실행하여 새로운 데이터를 가져오는 함수.
	// }, [selected]); // refetch 함수는 react-query 내부적으로 캐시를 업데이트.

	// useEffect(() => {
	// 	if (!inView) {
	// 		return;
	// 	}
	// 	res.fetchNextPage();
	// }, [inView]);

	const { data } = useQuery(['product'], () => {
		return MockAxios.get('/product').then(res => {
			return res.data;
		});
	});

	const [itemList, setItemList] = useRecoilState(itemListState);
	const PAGE_LIMIT = 10;
	const fetchItems = (page = 0) => {
		const startIndex = page * PAGE_LIMIT;
		const endIndex = (page + 1) * PAGE_LIMIT;
		const items = data.slice(startIndex, endIndex);
		setItemList(items); // data.itemList 값을 setItemList 함수를 사용하여 itemListState 상태에 저장
		return { items };
	};

	useEffect(() => {
		//data && console.log(data);
		data && fetchItems();
		data && console.log(itemList);
	}, [word]);

	return (
		<>
			<S.Wrapper>
				<S.Container>
					{/* <S.SearchBarContainer>
						<SearchBar props={props} />
					</S.SearchBarContainer> */}
					{/* {!data && (
						<S.ResultText>
							<div>{word}에 대한 검색 결과가 없습니다.</div>
						</S.ResultText>
					)}
					{data && (
						<S.ResultText>
							{
								<div>
									찾으신 '{word}'에 대한 결과 입니다.(총
									{data && data.pages && data.pages[0].data.product.length} 개)
								</div>
							}
						</S.ResultText>
					)} */}
					{
						<>
							<S.ResultText>"{word}"에 대한 검색결과</S.ResultText>
							<S.Category>중고 아이템</S.Category>

							<UsedProduct word={word} data={data}></UsedProduct>

							<S.Category>무료 아이템</S.Category>
							<FreeProduct word={word} data={data}></FreeProduct>
						</>
					}

					{/* <S.CategoryBox> */}
					{/* <S.Category
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
						</S.Category> */}
					{/* </S.CategoryBox> */}
					<S.ItemList>
						{/* {data &&
							data.pages.map(pageItems => (
								<SearchList products={pageItems.data.product} />
							))} */}

						{/* <S.refDiv ref={ref}></S.refDiv> */}
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
	width: 80%;
	/* max-width: 1000px; */
	min-width: 700px;
	margin: 0 auto;
	border: 2px solid red;
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

	margin-top: 40px;
`;

const Category = styled.div`
	margin-top: 40px;
	font-size: ${({ theme }) => theme.fontSize.big};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	border: 5px solid green;
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
	margin-bottom: 30px;
	border: 3px solid powderblue;
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
