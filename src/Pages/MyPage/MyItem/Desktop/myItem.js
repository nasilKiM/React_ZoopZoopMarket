import MyItemCard from 'Components/Card/Desktop/Card_MyItem'
import { useInfiniteMyItem } from 'Hooks/Queries/get-infinite-myItem';
import { flexAllCenter, gridAllCenter, gridColumn } from 'Styles/common';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const MyItemPage = () => {
	const [category, setCategory] = useState(0); // 0:중고 1:무료
	const res = useInfiniteMyItem(category);
	const { data, fetchNextPage, hasNextPage, refetch } = res;
	const [ref, inView] = useInView();

	data && console.log( '/////', data, hasNextPage );
	
	useEffect(() => {
		if (!inView) {
			return;
		}
		// if (hasNextPage) {
			fetchNextPage();
		// }
	}, [inView]);

	// useEffect(() => {
	// 	window.scroll(0, 0);
	// }, []);


	useEffect(() => {
		refetch()
	}, [category]);

	const onClickSaleCategory = () => {
		setCategory(0);
	};

	const onClickFreeCategory = () => {
		setCategory(1);
	};

	return (
		<S.Div>
			<S.CategoryZone>
				<S.Category category={category === 0} onClick={onClickSaleCategory}>중고 물품</S.Category>
				<S.Category category={category === 1} onClick={onClickFreeCategory}>무료 나눔</S.Category>
			</S.CategoryZone>
			<S.Wrapper>
				<S.Container>
				{data?.pages.map(page => (
					page?.data.products.map(item => (
					<MyItemCard index={item.idx} products={item}/>
					))
				))}
				</S.Container>
			<div ref={ref}></div>
			</S.Wrapper>
		</S.Div>
	);
};

export default MyItemPage;

const Div = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
`;

const Container = styled.div`
	width: 100%;
	${gridColumn(4)}
	${gridAllCenter}
	@media ${({ theme }) => theme.device.tablet} {
		${gridColumn(3)}
	}
	@media ${({ theme }) => theme.device.mobile} {
		${gridColumn(2)}
	}
`;

const CategoryZone = styled.div`
	display: flex;
	margin-bottom: 30px;
	& > div:first-child {
		border-right: solid 3px ${({theme}) => theme.color.primary[100]};
	}
`;

const Category = styled.div`
	width: 130px;
	height: 30px;
	${flexAllCenter}
	:hover {
		font-size: ${({theme}) => theme.fontSize.md};
	}
	color: ${({category}) => category ? '#FF3647' : 'black'}
`;

const S = {
	Div,
	Wrapper,
	Container,
	CategoryZone,
	Category
};
