import React from 'react';
import { theme } from 'Styles/theme';
import styled from 'styled-components';
import { Skeleton } from '@mui/material';

const MainPageSkeleton = () => {
	const skeletonArray = [1, 2, 3, 4];
	const skeletonCategory = [1, 2, 3, 4, 5, 6, 7, 8];

	let maxSkeletonCategories = skeletonCategory.length;
	if (window.innerWidth <= 700) {
		maxSkeletonCategories = 5;
	}

	return (
		<Cover>
			<Wrapper>
				<Banner>
					<Skeleton
						variant="rounded"
						width="100%"
						height={500}
						color="black"
						animation="wave"
					/>
				</Banner>
				<S.SkeletonCategoryContainer>
					<TitleCategoryWrapper>
						{skeletonCategory.slice(0, maxSkeletonCategories).map(index => (
							<S.CategoryBox key={index}>
								<Skeleton
									animation="wave"
									variant="circular"
									sx={{
										width: '100%',
										height: '100%',
										bgcolor: theme.color.gray[100],
									}}
								/>
							</S.CategoryBox>
						))}
					</TitleCategoryWrapper>
				</S.SkeletonCategoryContainer>
			</Wrapper>
			<PreviewBg>
				<S.SkeletonContainer>
					{skeletonArray.map(index => (
						<S.SkeletonBox>
							<Skeleton
								animation="wave"
								key={index}
								variant="rounded"
								sx={{
									width: '100%',
									height: '100%',
									bgcolor: theme.color.gray[100],
								}}
							/>
						</S.SkeletonBox>
					))}
				</S.SkeletonContainer>
			</PreviewBg>
			<Blank></Blank>
			<PreviewBg>
				<S.SkeletonContainer>
					{skeletonArray.map(index => (
						<S.SkeletonBox>
							<Skeleton
								animation="wave"
								key={index}
								variant="rounded"
								sx={{
									width: '100%',
									height: '100%',
									bgcolor: theme.color.gray[100],
								}}
							/>
						</S.SkeletonBox>
					))}
				</S.SkeletonContainer>
			</PreviewBg>
		</Cover>
	);
};

export default MainPageSkeleton;

const Cover = styled.div`
	width: 100%;
`;

const Wrapper = styled.div`
	width: 70%;
	min-width: 350px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 900px) {
		width: 90%;
	}
	margin: 0 auto;
	padding-top: 10px;
`;

const Banner = styled.div`
	width: 100%;
	padding-bottom: 20px;
`;

const PreviewBg = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.color.bg};
	padding: 30px 0;
	> * {
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
	}
`;

const Blank = styled.div`
	width: 100%;
	height: 50px;
`;

const SkeletonCategoryContainer = styled.div`
	width: 100%;
	min-width: 350px;
	max-width: 1200px;
`;

const TitleCategoryWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding-bottom: 30px;
`;

const SkeletonContainer = styled.div`
	display: flex;
	margin-top: 30px;
	width: 100%;
	min-width: 350px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
	@media (max-width: 1500px) {
		width: 80%;
	}
`;

const CategoryBox = styled.div`
	width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
`;

const SkeletonBox = styled.div`
	width: 100%;
	min-width: 200px;
	max-width: 280px;
	height: 360px;
	border-radius: 10px;
	padding: 10px;
`;

const S = {
	SkeletonCategoryContainer,
	SkeletonContainer,
	CategoryBox,
	SkeletonBox,
};
