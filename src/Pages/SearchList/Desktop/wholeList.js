import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchList from './components/searchList';

const WholeListPage = () => {
	const { word } = useParams();
	const { category } = useParams();
	const location = useLocation();
	console.log(location.state);

	let categoryResult = '';

	category === 0
		? (categoryResult = '중고물품')
		: (categoryResult = '무료물품');
	return (
		<S.Wrapper>
			<S.ResultText>
				<S.ResultWord>"{word}"</S.ResultWord>에 대한 {categoryResult} 검색 결과
			</S.ResultText>
			<S.Container>
				{location.state &&
					location.state.map(data => <SearchList products={data} />)}
			</S.Container>
		</S.Wrapper>
	);
};
export default WholeListPage;
const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	border: 10px solid beige;
`;
const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	border: 1px solid black;
	justify-content: center;
	margin-top: 30px;
`;
const ResultText = styled.div`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	margin-top: 40px;
	margin-left: 40px;
`;
const ResultWord = styled.div`
	color: ${({ theme }) => theme.color.primary};
`;
const S = {
	Wrapper,
	Container,
	ResultText,
	ResultWord,
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
