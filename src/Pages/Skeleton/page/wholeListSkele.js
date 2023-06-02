import CardSkeleton from '../component/cardSkeleton';

import styled from 'styled-components';

const WholeListSkeleton = () => {
	const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<S.Wrapper>
			<S.SkeletonContainer>
				{skeletonArray.slice(0, 9).map(index => (
					<CardSkeleton />
				))}
			</S.SkeletonContainer>
		</S.Wrapper>
	);
};

export default WholeListSkeleton;

const SkeletonContainer = styled.div`
	display: grid;
	width: 100%;
	margin-top: 30px;
	place-items: center;

	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(1, minmax(280px, 1fr));
		row-gap: 10px;
		width: 80%;
		border: 1px solid green;
	}
	@media screen and (min-width: 768px) and (max-width: 1000px) {
		grid-template-columns: repeat(2, minmax(280px, 1fr));
		column-gap: 20px;
		row-gap: 20px;
	}
	@media screen and (min-width: 1001px) and (max-width: 1499px) {
		grid-template-columns: repeat(3, minmax(280px, 1fr));
		column-gap: 10px;
		row-gap: 30px;
	}
	@media screen and (min-width: 1500px) {
		grid-template-columns: repeat(4, minmax(260px, 1fr));
		column-gap: 40px;
		row-gap: 40px;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	min-width: 350px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
	margin: 0 auto;
	padding-top: 10px;
`;

const S = {
	Wrapper,
	SkeletonContainer,
};
