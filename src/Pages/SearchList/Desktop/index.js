import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import UsedProduct from './components/usedProduct';
import FreeProduct from './components/freeProduct';

const DesktopSearchList = () => {
	const [selected, setSelected] = useState(2);
	const { word } = useParams();
	const [ref, inView] = useInView({ threshold: 0.5 });
	const props = 'search_list';
	const navigate = useNavigate();
	const onSelectBoxClick = option => {
		setSelected(option);
	};

	// const res =
	// 	selected === 2
	// 		? useInfiniteSearch(word) //통합으로 검색요청.
	// 		: useInfiniteSearch(word, selected);

	// const { data } = res;

	// useEffect(() => {
	// 	res.refetch(); // 현재 쿼리를 다시 실행하여 새로운 데이터를 가져오는 함수.
	// }, [selected]); // refetch 함수는 react-query 내부적으로 캐시를 업데이트.
	//data && console.log(data.pages[0].data.product); //실제 API 리턴.

	// useEffect(() => {
	// 	if (!inView) {
	// 		return;
	// 	}
	// 	res.fetchNextPage();
	// }, [inView]);

	// const { data } = useQuery(['product'], () => {
	// 	return MockAxios.get('/product').then(res => {
	// 		return res.data;
	// 	});
	// }); //목데이터용

	useEffect(() => {
		if (selected <= 1) {
			navigate(`${selected}`);
		}
	}, [selected]);

	//400px

	return (
		<>
			<S.Wrapper>
				<S.Container>
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
					<S.SelectContainer>
						<S.SelectBox
							isSelected={selected === 2}
							onClick={() => onSelectBoxClick(2)}
						>
							통합
						</S.SelectBox>
						<S.SelectBox
							isSelected={selected === 0}
							onClick={() => onSelectBoxClick(0)}
						>
							중고
						</S.SelectBox>
						<S.SelectBox
							isSelected={selected === 1}
							onClick={() => onSelectBoxClick(1)}
						>
							무료
						</S.SelectBox>
					</S.SelectContainer>
					<S.ResultContainer>
						<S.ResultText>
							<S.ResultWord>"{word}"</S.ResultWord>에 대한 통합 검색 결과
						</S.ResultText>
						<S.Category>중고 아이템</S.Category>

						<UsedProduct word={word}></UsedProduct>

						<S.Category>무료 아이템</S.Category>
						<FreeProduct word={word}></FreeProduct>
					</S.ResultContainer>
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
	width: 70%;
	/* max-width: 1000px; */
	/* min-width: 700px; */
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
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.base};
	margin-top: 40px;
`;
const ResultWord = styled.div`
	color: ${({ theme }) => theme.color.primary[300]};
`;
const ResultContainer = styled.div``;

const CategoryBox = styled.div`
	cursor: pointer;

	margin-top: 40px;
`;

const Category = styled.div`
	margin-top: 40px;
	font-size: ${({ theme }) => theme.fontSize.big};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	margin-bottom: 40px;
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
`;
const SampleCard = styled.div`
	width: 200px;
	height: 400px;
	border: 1px solid black;
`;

const SelectContainer = styled.div`
	display: flex;
	margin-top: 20px;
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
	CategoryBox,
	Category,
	Wall,
	ItemList,
	SearchBarContainer,
	SampleCard,
	refDiv,
	SelectContainer,
	SelectBox,
	ResultWord,
	ResultContainer,
};
