import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { gridAllCenter, gridColumn, gridGap } from 'Styles/common';
import useInfiniteMy from 'Hooks/Queries/get.infinity.interest';
import InterestCard from 'Components/Card/Desktop/Card_Interest';

const MyInterestPage = () => {
	const [likeList, setLikeList] = useState();

	const res = useInfiniteMy();
	const { data } = res;

	if (data) {
		const likes = data.pages.map(el => el.data);
		console.log(likes[0].LikeList);
	}

	useEffect(() => {
		if (data) {
			const likes = data.pages.map(el => el.data);
			setLikeList(likes[0]?.LikeList);
		}
	}, []);
	return (
		<S.Wrap>
			<S.Container>
				{likeList &&
					likeList.map(product => (
						<S.Card>
							<InterestCard
								index={product.Product.idx}
								products={product.Product}
							/>
						</S.Card>
					))}
			</S.Container>
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
