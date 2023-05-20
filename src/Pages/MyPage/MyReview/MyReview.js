import ReviewMessage from 'Components/Review/Review';
import styled from 'styled-components';

const MyReview = () => {
	return (
		<>
			<Wrapper>
				<Title>거래후기 총 00건</Title>
				<Container>
					<ReviewMessage />
					<ReviewMessage />
					<ReviewMessage />
					<ReviewMessage />
				</Container>
			</Wrapper>
		</>
	);
};

export default MyReview;

const Wrapper = styled.div`
	width: 100%;
`;

const Container = styled.div`
	width: 100%;
`;

const Title = styled.div`
	width: 100%;
	height: 50px;
	padding: 50px 0;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
