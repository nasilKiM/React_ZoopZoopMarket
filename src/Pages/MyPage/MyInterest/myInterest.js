import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ItemCard from 'Components/Card/Card';
import { useInfiniteMyInterest } from 'Hooks/Queries/get-infinite-query';

import styled from 'styled-components';

import { basicSetting, gridAllCenter, gridColumn } from 'Styles/common';
import LoadingPage from 'Components/Loading/Loading';

const MyInterestPage = () => {
	const res = useInfiniteMyInterest();
	const [ref, inView] = useInView({ threshold: 0.5 });
	const { data, fetchNextPage, isLoading } = res;

	useEffect(() => {
		if (!inView) return;
		fetchNextPage();
	}, [inView]);

	return (
		<>
			{isLoading ? (
				<LoadingPage />
			) : (
				<S.Wrap>
					{data.pages[0].data.LikeList.length <= 0 ? (
						<S.Txt>등록된 관심템이 없습니다.</S.Txt>
					) : (
						<S.Container>
							{data.pages.map(page =>
								page.data.LikeList.map(list => (
									<ItemCard
										index={list.Product.idx}
										products={list.Product}
										isDone={false}
									/>
								)),
							)}
						</S.Container>
					)}
					<div ref={ref}></div>
				</S.Wrap>
			)}
		</>
	);
};

export default MyInterestPage;

const Wrap = styled.div`
	${basicSetting}
`;

const Container = styled.div`
	width: 100%;
	${gridColumn(4)}
	${gridAllCenter}
	
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
	@media screen and (max-width: 400px) {
		grid-template-rows: repeat(2, minmax(180px, 1fr));
		column-gap: 10px;
	}
	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(2, minmax(180px, 1fr));
		column-gap: 10px;
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
		column-gap: 20px;
		row-gap: 40px;
	}
`;

const Txt = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-left: 30px;
`;

const S = {
	Container,
	Wrap,
	Txt,
};
