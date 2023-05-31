import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useInfiniteSearch } from 'Hooks/Queries/get-infinite-search';
import SearchList from './components/searchList';
import { useInView } from 'react-intersection-observer';
import CategoryConverter from './components/categoryConverter';
import WholeListSkeleton from 'Pages/Skeleton/page/wholeListSkele';

const WholeListPage = () => {
	const { word } = useParams();
	const { category } = useParams(); //useParams는 다 string으로 변환.
	const [selected, setSelected] = useState(category);
	const [ref, inView] = useInView({ threshold: 0.5 });
	const navigate = useNavigate();
	const onSelectBoxClick = option => {
		setSelected(option);
	};
	const searchKey = word.split('·')[0];

	const res =
		word == ','
			? useInfiniteSearch(word.split(','), category, '판매중')
			: useInfiniteSearch(word.split('·')[0], category, '판매중');
	let searchWord = word;
	if (word == ',') {
		searchWord = '전체';
	}
	useEffect(() => {
		window.scrollTo(0, 0);
		res.refetch();
	}, [category]);

	const { data, isLoading, isSuccess } = res;
	useEffect(() => {
		window.scrollTo(0, 0);
		if (selected == 1) {
			navigate(`/search_list/${word}/1`);
		} else if (selected == 0) {
			navigate(`/search_list/${word}/0`);
		} else {
			navigate(`/search_list/${word}`);
		}
	}, [selected]);

	let categoryResult = '';

	category == 0 ? (categoryResult = '중고템') : (categoryResult = '무료템');
	useEffect(() => {
		if (!inView) {
			return;
		}

		res.fetchNextPage();
	}, [inView]);

	const convertedCategory = CategoryConverter(word.split(','));

	//const searchWord = word === ',' ? '전체' : word;

	return (
		<S.Wrapper>
			<S.SelectContainer>
				<S.BoxContainer>
					{word.split(',').length <= 2 && word !== ',' && (
						<S.SelectBox
							isSelected={selected === 2}
							onClick={() => onSelectBoxClick(2)}
						>
							통합
						</S.SelectBox>
					)}
					<S.SelectBox
						isSelected={selected == 0}
						onClick={() => onSelectBoxClick(0)}
					>
						중고
					</S.SelectBox>
					<S.SelectBox
						isSelected={selected == 1}
						onClick={() => onSelectBoxClick(1)}
					>
						무료
					</S.SelectBox>
				</S.BoxContainer>
			</S.SelectContainer>
			{isSuccess && (
				<S.ResultContainer>
					{data && data.pages[0].data.product[0] ? (
						<S.ResultText>
							<S.ResultWord>"{searchWord}"</S.ResultWord>에 대한{' '}
							{categoryResult} 검색 결과
						</S.ResultText>
					) : (
						<S.ResultText>
							<S.ResultWord>"{searchWord}"</S.ResultWord> {categoryResult}에
							대한 검색 결과가 없습니다.
						</S.ResultText>
					)}
				</S.ResultContainer>
			)}
			{isSuccess && (
				<S.Container>
					{data &&
						data.pages.map(pageItems =>
							pageItems.data.product.map(product => (
								<SearchList products={product} />
							)),
						)}
				</S.Container>
			)}
			{isLoading && <WholeListSkeleton />}
			<S.refDiv ref={ref}></S.refDiv>
		</S.Wrapper>
	);
};
export default WholeListPage;
const refDiv = styled.div``;

const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
`;
const BoxContainer = styled.div`
	width: 70%;
	display: flex;
	min-width: 414px;
	max-width: 1200px;

	margin: 0 auto;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
`;

const Container = styled.div`
	width: 70%;
	display: grid;
	justify-items: center;
	margin: 30px auto;

	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
	@media screen and (max-height: 767px) {
		grid-template-rows: repeat(1, minmax(300px, 1fr));
	}
	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(1, minmax(220px, 1fr));

		width: 220px;
		margin: 20px auto;
		column-gap: 20px;
		row-gap: 20px;
	}
	@media screen and (min-width: 768px) and (max-width: 1000px) {
		grid-template-columns: repeat(2, minmax(250px, 1fr));
		column-gap: 20px;
		row-gap: 30px;
	}
	@media screen and (min-width: 1001px) and (max-width: 1499px) {
		grid-template-columns: repeat(3, minmax(270px, 1fr));
		column-gap: 20px;
		row-gap: 35px;
	}
	@media screen and (min-width: 1500px) {
		grid-template-columns: repeat(4, minmax(280px, 1fr));
		row-gap: 40px;
	}
`;
const ResultText = styled.div`
	width: 70%;
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	min-width: 414px;
	max-width: 1200px;
	margin: 0 auto;
	margin-top: 30px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
`;
const ResultWord = styled.div`
	color: ${({ theme }) => theme.color.primary[300]};
`;

const SelectContainer = styled.div`
	width: 100%;
	height: 40px;
	text-align: center;
	display: flex;

	background-color: ${({ theme }) => theme.color.gray[100]};
`;

const SelectBox = styled.div`
	cursor: pointer;
	margin: 10px 10px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ isSelected }) =>
		isSelected
			? ({ theme }) => theme.color.primary[300]
			: ({ theme }) => theme.color.black};
`;
const ResultContainer = styled.div`
	/* margin: 0 auto;
	width: 70%;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	} */
`;
const S = {
	Wrapper,
	Container,
	ResultText,
	ResultWord,
	SelectContainer,
	SelectBox,
	refDiv,
	BoxContainer,
	ResultContainer,
};

// // const res = useInfiniteSearch(word, selected);

// //const { data } = res;

// let selectedItem = '';

// if (selected === 0) {
// 	selectedItem = '중고물품';
// } else if (selected === 1) {
// 	selectedItem = '무료나눔';
// }

// // useEffect(() => {
// // 	res.refetch(); // 현재 쿼리를 다시 실행하여 새로운 데이터를 가져오는 함수.
// // }, [selected]); // refetch 함수는 react-query 내부적으로 캐시를 업데이트.

// // useEffect(() => {
// // 	if (!inView) {
// // 		return;
// // 	}
// // 	res.fetchNextPage();
// // }, [inView]);
