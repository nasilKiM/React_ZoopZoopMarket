import styled from 'styled-components';
// import MyPageApi from 'Apis/myPageApi';
// import { useState } from 'react';
// import InterestCard from 'Components/Card/Desktop/Card_Interest';
import ItemCardMock from 'Components/Card/Desktop/Card copy';
import { MockAxios } from 'Apis/@core';
import { useQuery } from 'react-query';

const MyInterestPage = () => {
	// const [likeList, setLikeList] = useState();

	// const myInterest = async () => {
	// 	try {
	// 		const res = await MyPageApi.likeProductList({ page: 1 });
	// 		setLikeList(res.data.LikeList);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	myInterest();
	// }, []);

	const { data } = useQuery(['product'], () => {
		return MockAxios.get('/product').then(res => {
			return res.data;
		});
	});

	return (
		<S.Container>
			{data &&
				data.map(product => (
					<S.Card>
						<ItemCardMock products={product} />
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
