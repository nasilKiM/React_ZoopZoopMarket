import styled from 'styled-components';
import { gridAllCenter, gridColumn, gridGap } from 'Styles/common';
import useInfiniteMy from 'Hooks/Queries/get.infinity.interest';
import InterestCard from 'Components/Card/Desktop/Card_Interest';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const MyInterestPage = () => {
	const res = useInfiniteMy();
	const [ref, inView] = useInView({ threshold: 0.5 });
	const { data, hasNextPage, fetchNextPage, isLoading } = res;

	// const loadMore = () => {
	// 	if (hasNextPage) {
	// 		fetchNextPage();
	// 	}
	// };

	data && console.log(data);

	useEffect(() => {
		if (!inView) {
			return;
		}
		fetchNextPage();
	}, [inView]);

	return (
		<>
			{isLoading ? (
				<div>로딩</div> // 임시 로딩
			) : (
				<S.Wrap>
					<S.Container>
						{data.pages.map(page =>
							page.data.LikeList.map(list => (
								<S.Card>
									<InterestCard index={list.idx} products={list.Product} />
								</S.Card>
							)),
						)}
					</S.Container>
					{/* <button onClick={() => loadMore()} disabled={!hasNextPage}>
						더보기
					</button> */}
					<div ref={ref}></div>
				</S.Wrap>
			)}
		</>
	);
};

export default MyInterestPage;

const Wrap = styled.div`
	width: 100%;
	margin: 0 auto;
`;

const Container = styled.div`
	width: 100%;
	${gridColumn(4)}
	${gridAllCenter}
	@media ${({ theme }) => theme.device.tablet} {
		${gridColumn(3)}
		${gridGap.tablet}
	}
	@media ${({ theme }) => theme.device.mobile} {
		${gridColumn(2)}
		${gridGap.mobile}
	}
`;

const Card = styled.div`
	width: 100%;
`;

const HeartZone = styled.div`
	width: 250px;
	height: 80px;
	background-color: lightgray;
`;

const S = {
	Container,
	Card,
	HeartZone,
	Wrap,
};
