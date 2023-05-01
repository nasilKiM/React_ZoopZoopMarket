import { itemListState } from 'Atoms/search.atom';
import SearchBar from 'Components/SearchBar/Desktop/SearchBar';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const DesktopSearchList = () => {
	/*
	로직 변경 목표 : 지금은 데이터를 가져온 후 필터링 없이  itemListState에 저장.
	저장된걸 필터링 해서 출력하는 방식. 
	근데 지역을 기준으로 필터링 해보니 생기는 문제점이 1페이지에서 해당 조건에 맞는 아이템이 없거나 적으면 inView가 안닿아서 작동을 안함.

	가격의 경우 있거나 없거나 둘중 하나로 필터링
	지역의 경우 a,b,c,d 이므로 필터링이 가격보다 2배더됨.

	아이템 데이터가 많다면 이럴일이 없겠지만 혹시 page하나에 그런 확률이 생길 수도 있으니 로직을 알맞게 변경해봐야함.

	1) recoil을 이용해서 저장할 때 지역별로 따로 저장하고 불러올 때 해당 지역 아이템들만 불러오기
	2) inView를 더 알아보고 세세하게 설정하기.(아이템이 적을 때도 동작하게)
	*/
	const [itemList, setItemList] = useRecoilState(itemListState);
	const PAGE_LIMIT = 10;
	const fetchItems = async (page = 0) => {
		const response = await fetch('Mock/ItemData/items.json'); //Mock/mock.json 경로에서 데이터를 가져옴
		const data = await response.json();
		const startIndex = page * PAGE_LIMIT;
		const endIndex = (page + 1) * PAGE_LIMIT;
		const items = data.itemList.slice(startIndex, endIndex);
		const hasNextPage = data.itemList.length > endIndex;
		setItemList(data.itemList); // data.itemList 값을 setItemList 함수를 사용하여 itemListState 상태에 저장
		return { items, hasNextPage };
	};

	const temList = () => {
		const res = useInfiniteQuery(
			['items'],
			({ pageParam = 0 }) => fetchItems(pageParam),
			{
				getNextPageParam: (lastPage, pages) => {
					return pages.length;
				},
			},
		);
		return res;
	};
	const res = temList();
	const { data } = res;

	const [selected, setSelected] = useState(0);

	let selectedItem = '';

	let searchKeyword = '벤츠 자전거';

	if (selected === 0) {
		selectedItem = '중고물품';
	} else if (selected === 1) {
		selectedItem = '무료나눔';
	}
	const [ref, inView] = useInView();

	//

	useEffect(() => {
		if (!inView) {
			res.fetchNextPage();
		}
	}, [inView]);

	console.log(data);

	const userLocation = 'a';

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
					{/* {itemList.map(item => (
						<ItemCard key={item} />
					))} */}
					{data &&
						data.pages.map(pageItems =>
							pageItems.items.map(item => {
								// if (item.location !== userLocation) return null; // location이 b가 아니면 null 반환
								if (selected === 0 && !item.price) return null; // selected가 0이고 price가 없으면 null 반환
								if (selected === 1 && item.price) return null; // selected가 1이고 price가 있으면 null 반환
								return (
									<S.SampleCard key={item.id}>
										<div> 물품 id: {item.id}</div>
										<div>{item.price && item.price.toLocaleString()}원</div>
										<div>동네 : {item.location}</div>
									</S.SampleCard>
								);
							}),
						)}
				</S.ItemList>
			</S.Container>
			<div ref={ref}></div>
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
