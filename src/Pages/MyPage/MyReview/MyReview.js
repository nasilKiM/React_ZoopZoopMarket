import { useQuery } from '@tanstack/react-query';
import ReviewApi from 'Apis/reviewApi';
import ReviewItemCard from 'Components/Card/Desktop/ReviewCard';
import styled from 'styled-components';

const MyReview = () => {
	const { data } = useQuery(['reviews'], () => ReviewApi.reviewList());

	const list = data?.data.reviewList;
	const total = data?.data.reviewList.length;

	return (
		<>
			<Wrapper>
				{/* <span>지금까지 남긴 구매후기를 확인해보세요 🤓</span> */}
				<Title>구매 총 {total}건</Title>
				{list &&
					list.map(item => (
						<ReviewItemCard
							payIdx={item.idx}
							item={item.Product}
							original={item}
						/>
					))}
			</Wrapper>
		</>
	);
};

export default MyReview;

const Wrapper = styled.div`
	width: 70%;
	max-width: 1200px;
	min-width: 350px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 850px) {
		width: 90%;
	}
	margin: 0 auto;
`;

const Title = styled.div`
	width: 100%;
	height: 50px;
	padding: 50px 0;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
