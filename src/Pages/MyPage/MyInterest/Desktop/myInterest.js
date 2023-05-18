import styled from 'styled-components';
import MyPageApi from 'Apis/myPageApi';
import { useEffect, useState } from 'react';
import InterestCard from 'Components/Card/Desktop/Card_Interest';

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
	);
};

export default MyInterestPage;

const Container = styled.div`
	max-width: 60vw;
	height: 100%;
	margin: 30px auto;
	display: flex;
	justify-content: flex-start;
	flex-flow: wrap;
`;
const Card = styled.div`
	margin: 10px;
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
};
