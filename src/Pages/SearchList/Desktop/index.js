import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import FreeProduct from './components/freeProduct';
import UsedProduct from './components/usedProduct';
import { useQuery } from '@tanstack/react-query';
import ProductApi from 'Apis/productApi';
import IndexSkeleton from '../../Skeleton/page/searchIndexSkele';

const DesktopSearchList = () => {
	const [selected, setSelected] = useState(2);
	const { word } = useParams();
	const navigate = useNavigate();
	const onSelectBoxClick = option => {
		setSelected(option);
	};

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

	const { data, isSuccess, isLoading } = useQuery(['SEARCH_ALL', word], () => {
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
					{isSuccess && data && (
						<S.ResultContainer>
							{data.data.pagination.count > 0 ? (
								<S.ResultText>
									<S.ResultWord>"{word}"</S.ResultWord>에 대한 통합 검색 결과 (
									총 {data.data.pagination.count}개 )
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

			{isLoading && <IndexSkeleton></IndexSkeleton>}
		</>
	);
};

export default DesktopSearchList;

const Wrapper = styled.div`
	width: 70%;
	min-width: 414px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
	margin: 0 auto;
`;

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
`;

// 메뉴(통합/중고/무료)
const SelectContainer = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.color.gray[100]};
`;

const ResultText = styled.div`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	margin-top: 30px;
	margin-left: 20px;
	/* @media screen and (max-width: 767px) {
		flex-direction: column;
	} */
`;

const CategoryBox = styled.div`
	cursor: pointer;
	margin-top: 40px;
`;

const Category = styled.div`
	margin-top: 40px;
	margin-bottom: 10px;
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
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

const SelectBox = styled.div`
	cursor: pointer;
	margin: 10px 10px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ isSelected }) =>
		isSelected
			? ({ theme }) => theme.color.primary[300]
			: ({ theme }) => theme.color.black};
`;

const ResultWord = styled.div`
	color: ${({ theme }) => theme.color.primary[300]};
`;
const ResultContainer = styled.div`
	width: 100%;
`;

const S = {
	Wrapper,
	Container,
	ResultText,
	CategoryBox,
	Category,
	Wall,
	ItemList,
	SelectContainer,
	SelectBox,
	ResultWord,
	ResultContainer,
};
