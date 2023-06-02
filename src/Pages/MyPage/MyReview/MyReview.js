import { useQuery } from '@tanstack/react-query';
import ReviewApi from 'Apis/reviewApi';
import ReviewItemCard from 'Components/Card/Desktop/ReviewCard';
import styled from 'styled-components';

const MyReview = () => {
	const { data } = useQuery(['reviews'], () => ReviewApi.reviewList());

	const list = data?.data.reviewList;
	const total = data?.data.reviewList.length;

	return (
		<Wrapper>
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
	);
};

export default MyReview;

const Wrapper = styled.div`
	width: 70%;
	max-width: 1200px;
	min-width: 350px;
	margin: 0 auto;
`;

const Title = styled.div`
	width: 100%;
	padding: 15px;
	margin-top: 20px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	background-color: ${({ theme }) => theme.color.gray[200]};
	@media ${({ theme }) => theme.device.mobile} {
		padding: 10px;
		font-size: ${({ theme }) => theme.fontSize.xs};
	}
`;
