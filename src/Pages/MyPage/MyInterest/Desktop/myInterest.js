import styled from 'styled-components';
import MyPageApi from 'Apis/myPageApi';
import { useEffect, useState } from 'react';
import InterestCard from 'Components/Card/Desktop/Card_Interest';
import { gridAllCenter, gridColumn } from 'Styles/common';

const MyInterestPage = () => {
	const [likeList, setLikeList] = useState();

	const myInterest = async () => {
		try {
			const res = await MyPageApi.likeProductList({ page: 1 });
			setLikeList(res.data.LikeList);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		myInterest();
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
