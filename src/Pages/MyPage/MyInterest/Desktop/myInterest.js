import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ItemCard from 'Components/Card/Desktop/Card';

import styled from 'styled-components';

import useInfiniteMy from 'Hooks/Queries/get.infinity.interest';

import { gridAllCenter, gridColumn, gridGap } from 'Styles/common';

const MyInterestPage = () => {
	const res = useInfiniteMy();
	const [ref, inView] = useInView({ threshold: 0.5 });
	const { data, fetchNextPage, isLoading } = res;

	useEffect(() => {
		if (!inView) {
			return;
		}
		fetchNextPage();
	}, [inView]);

	return (
		<>
			{isLoading ? (
				<div>로딩</div>
			) : (
				<S.Wrap>
					{data.pages[0].data.LikeList.length <= 0 ? (
						<S.Txt>등록된 관심템이 없습니다.</S.Txt>
					) : (
						<S.Container>
							{data.pages.map(page =>
								page.data.LikeList.map(list => (
									<ItemCard index={list.Product.idx} products={list.Product} />
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
	margin: 0 auto;
	width: 70%;
	@media ${({ theme }) => theme.device.tablet} {
		width: 90%;
	}
	@media ${({ theme }) => theme.device.mobile} {
		width: 95%;
	}
`;

const Container = styled.div`
	width: 100%;
	${gridColumn(4)}
	${gridAllCenter}
	
	@media ${({ theme }) => theme.device.laptop} {
		${gridColumn(3)}
		${gridGap.tablet}
	}
	@media ${({ theme }) => theme.device.tablet} {
		${gridColumn(3)}
		${gridGap.tablet}
	}
	@media ${({ theme }) => theme.device.mobile} {
		${gridColumn(2)}
		${gridGap.mobile}
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
