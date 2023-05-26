import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import FreeProduct from './components/freeProduct';
import UsedProduct from './components/usedProduct';
import { useQuery } from '@tanstack/react-query';
import ProductApi from 'Apis/productApi';

const DesktopSearchList = () => {
	const [selected, setSelected] = useState(2);
	const { word } = useParams();
	const navigate = useNavigate();
	const onSelectBoxClick = option => {
		setSelected(option);
	};

	// useEffect(async () => {
	// 	const res = await ProductApi.getRecent();
	// 	return console.log('마따따비', res);
	// }, []);

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

	const freeData = useQuery(['SEARCH_FREE', word], () => {
		return ProductApi.searchItems(1, word, 1);
	});

	const usedData = useQuery(['SEARCH_USED', word], () => {
		return ProductApi.searchItems(1, word, 0);
	});
	let productCount = 0;

	// if (freeData && usedData) {
	// 	productCount =
	// 		freeData.data.pagination.count + usedData.data.pagination.count;
	// }
	freeData && console.log(freeData);

	const { data } = useQuery(['SEARCH_ALL', word], () => {
		return ProductApi.searchItems(1, word);
	});

	return (
		<>
			<S.Wrapper>
				<S.Container>
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
					{data && (
						<S.ResultContainer>
							{productCount > 0 ? (
								<S.ResultText>
									<S.ResultWord>"{word}"</S.ResultWord>에 대한 통합 검색 결과
									(총 {productCount}개)
								</S.ResultText>
							) : (
								<S.ResultText>
									<S.ResultWord>"{word}"</S.ResultWord>에 대한 검색결과가
									없습니다.
								</S.ResultText>
							)}

							<S.Category>중고 아이템</S.Category>

							{usedData.data && (
								<UsedProduct word={word} data={usedData.data}></UsedProduct>
							)}

							<S.Category>무료 아이템</S.Category>
							{freeData.data && (
								<FreeProduct word={word} data={freeData.data}></FreeProduct>
							)}
						</S.ResultContainer>
					)}
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
