import styled from 'styled-components';
import MyPageApi from 'Apis/myPageApi';
import { useEffect, useState } from 'react';
import InterestCard from 'Components/Card/Desktop/Card_Interest';
import { gridAllCenter, gridColumn } from 'Styles/common';
import { useInfiniteQuery } from 'react-query';

const MyInterestPage = () => {
	const [likeList, setLikeList] = useState();

	// const myInterest = async () => {
	// 	try {
	// 		const res = await MyPageApi.likeProductList({ page: 1 });
	// 		setLikeList(res.data.LikeList);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		['myInterest'];
	}, []);

	const projects = async ({ pageParam }) => {
		const res = await MyPageApi.likeProductList({ page: pageParam });
		return res;
	};

	const {
		data,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
		isLoading,
		isError,
	} = useInfiniteQuery(['myInterest'], projects, {
		getNextPageParam: currentPage => {
			// return lastPage.pages ? lastPage.pages + 1 : 'ddd';
			const nextPage = currentPage.page + 1;
			return nextPage > currentPage.total_pages ? null : nextPage;
		},
	});

	console.log({ hasNextPage });
	console.log({ fetchNextPage });

	const real = data?.pages.map(el => el.data.LikeList);
	console.log(real);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <span>Error</span>;
	}

	const nextPageGo = () => {
		if (hasNextPage) {
			fetchNextPage();
		}
	};

	return (
		<S.Wrap>
			<S.Container>
				{real.map(product => (
					<S.Card>
						<InterestCard products={product} />
					</S.Card>
				))}
			</S.Container>
			<button onClick={nextPageGo} disabled={!hasNextPage}>
				{isFetchingNextPage
					? 'Loading more...'
					: hasNextPage
					? 'Load More'
					: 'Nothing more to load'}
			</button>
		</S.Wrap>
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
	}
	@media ${({ theme }) => theme.device.mobile} {
		${gridColumn(2)}
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
