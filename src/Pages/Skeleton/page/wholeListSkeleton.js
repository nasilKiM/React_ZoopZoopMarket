import CardSkeleton from '../component/cardSkeleton';

import styled from 'styled-components';

const WholeListSkeleton = () => {
	const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<S.Wrapper>
			<S.SkeletonContainer>
				{skeletonArray.slice(0, 9).map(index => (
					<CardSkeleton key={index} />
				))}
			</S.SkeletonContainer>
		</S.Wrapper>
	);
};

export default WholeListSkeleton;

const SkeletonContainer = styled.div`
	display: grid;
	width: 100%;
	margin-top: 20px;

	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(2, minmax(160px, 1fr));
		height: 315px;
		row-gap: 20px;
	}
	@media screen and (min-width: 768px) and (max-width: 1000px) {
		grid-template-columns: repeat(2, minmax(230px, 1fr));
		height: 320px;
		row-gap: 20px;
	}
	@media screen and (min-width: 1001px) and (max-width: 1499px) {
		grid-template-columns: repeat(3, minmax(230px, 1fr));
		column-gap: 10px;
		row-gap: 30px;
	}
	@media screen and (min-width: 1500px) {
		grid-template-columns: repeat(4, minmax(280px, 1fr));
		column-gap: 30px;
		row-gap: 40px;
	}
`;

const Wrapper = styled.div`
	width: 70%;
	min-width: 350px;
	max-width: 1200px;
	margin: 0 auto;

	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
`;

const S = {
	Wrapper,
	SkeletonContainer,
};
