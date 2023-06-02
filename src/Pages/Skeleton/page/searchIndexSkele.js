import CardSkeleton from '../component/cardSkeleton';

import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const IndexSkeleton = () => {
	const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<S.Wrapper>
			<S.Container>
				<S.ResultText>
					<Skeleton
						variant="text"
						width="100%"
						height={70}
						color="black"
						animation="wave"
					/>
				</S.ResultText>

				<S.Category>중고 아이템</S.Category>
				<Desktop>
					<S.SkeletonContainer>
						{skeletonArray.slice(0, 8).map(index => (
							<CardSkeleton />
						))}
					</S.SkeletonContainer>
				</Desktop>
				<NoteBook16>
					<S.SkeletonContainer>
						{skeletonArray.slice(0, 6).map(index => (
							<CardSkeleton />
						))}
					</S.SkeletonContainer>
				</NoteBook16>
				<NoteBook14>
					<S.SkeletonContainer>
						{skeletonArray.slice(0, 4).map(index => (
							<CardSkeleton />
						))}
					</S.SkeletonContainer>
				</NoteBook14>
				<Tablet>
					<S.SkeletonContainer>
						{skeletonArray.slice(0, 2).map(index => (
							<CardSkeleton />
						))}
					</S.SkeletonContainer>
				</Tablet>
				<S.Category>무료 아이템</S.Category>
				<Desktop>
					<S.SkeletonContainer>
						{skeletonArray.slice(0, 8).map(index => (
							<CardSkeleton />
						))}
					</S.SkeletonContainer>
				</Desktop>
				<NoteBook16>
					<S.SkeletonContainer>
						{skeletonArray.slice(0, 6).map(index => (
							<CardSkeleton />
						))}
					</S.SkeletonContainer>
				</NoteBook16>
				<NoteBook14>
					<S.SkeletonContainer>
						{skeletonArray.slice(0, 4).map(index => (
							<CardSkeleton />
						))}
					</S.SkeletonContainer>
				</NoteBook14>
				<Tablet>
					<S.SkeletonContainer>
						{skeletonArray.slice(0, 2).map(index => (
							<CardSkeleton />
						))}
					</S.SkeletonContainer>
				</Tablet>
			</S.Container>
		</S.Wrapper>
	);
};

export default IndexSkeleton;

const SkeletonContainer = styled.div`
	display: grid;
	width: 100%;
	margin-top: 30px;
	place-items: center;
	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(1, minmax(280px, 1fr));
		row-gap: 10px;
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
	width: 70%;
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

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	margin-bottom: 20px;
`;

const ResultText = styled.div`
	display: flex;
	margin-top: 40px;
	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

const Category = styled.div`
	margin-top: 40px;
	margin-bottom: 10px;
`;

const S = {
	Wrapper,
	Container,
	ResultText,
	Category,
	SkeletonContainer,
};

const Desktop = styled.div`
	@media screen and (max-width: 1500px) {
		display: none;
	}
`;
const NoteBook16 = styled.div`
	@media screen and (max-width: 1001px), (min-width: 1499px) {
		//1069이하일때만 적용
		//1330이상일때만 적용
		display: none;
	}
`;

const NoteBook14 = styled.div`
	@media screen and (max-width: 768px), (min-width: 1000px) {
		display: none;
	}
`;

const Tablet = styled.div`
	@media screen and (min-width: 767px) {
		display: none;
	}
`;
