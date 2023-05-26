import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useInfiniteSearch } from 'Hooks/Queries/get-infinite-search';
import SearchList from './components/searchList';
import { useInView } from 'react-intersection-observer';

const WholeListPage = () => {
	const { word } = useParams();
	const { category } = useParams(); //useParams는 다 string으로 변환.
	const [selected, setSelected] = useState(category);
	const [ref, inView] = useInView({ threshold: 0.5 });
	const navigate = useNavigate();
	const onSelectBoxClick = option => {
		setSelected(option);
	};

	const res = useInfiniteSearch(word, selected);

	useEffect(() => {
		res.refetch(); // 현재 쿼리를 다시 실행하여 새로운 데이터를 가져오는 함수.
	}, [selected]); // refetch 함수는 react-query 내부적으로 캐시를 업데이트.

	const { data } = res;

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

	category == 0 ? (categoryResult = '중고물품') : (categoryResult = '무료물품');
	useEffect(() => {
		if (!inView) {
			return;
		}

		res.fetchNextPage();
	}, [inView]);
	//400px
	return (
		<S.Wrapper>
			<S.SelectContainer>
				<S.SelectBox
					isSelected={selected == 2}
					onClick={() => onSelectBoxClick(2)}
				>
					통합
				</S.SelectBox>
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
			</S.SelectContainer>
			<S.ResultText>
				<S.ResultWord>"{word}"</S.ResultWord>에 대한 {categoryResult} 검색 결과
			</S.ResultText>
			<S.Container>
				{data &&
					data.pages.map(pageItems =>
						pageItems.data.product.map(product => (
							<SearchList products={product} />
						)),
					)}
			</S.Container>
			<S.refDiv ref={ref}></S.refDiv>
		</S.Wrapper>
	);
};
export default WholeListPage;
const refDiv = styled.div``;

const Wrapper = styled.div`
	width: 70%;
	margin: 0 auto;
	display: grid;
	flex-wrap: wrap;
`;
const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-gap: 20px;
	justify-items: center;
	margin-top: 30px;
	border: 1px solid red;
`;
const ResultText = styled.div`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	margin-top: 40px;
	margin-left: 40px;
`;
const ResultWord = styled.div`
	color: ${({ theme }) => theme.color.primary[300]};
`;

const SelectContainer = styled.div`
	width: 100%;
	margin-top: 20px;
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
const S = {
	Wrapper,
	Container,
	ResultText,
	ResultWord,
	SelectContainer,
	SelectBox,
	refDiv,
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
