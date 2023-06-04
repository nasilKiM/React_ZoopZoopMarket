import React from 'react';

import { Skeleton } from '@mui/material';
import styled from 'styled-components';
import { basicSetting } from 'Styles/common';

const ItemDetailPageSkeleton = () => {
	return (
		<Cover>
			<Wrapper>
				<Upper>
					<Skeleton
						variant="text"
						width="100%"
						height={100}
						color="black"
						animation="wave"
					/>
					<Skeleton
						variant="rounded"
						width="100%"
						height={300}
						color="black"
						animation="wave"
					/>
				</Upper>
				<S.SkeletonProfile>
					<Pic>
						<Skeleton
							variant="circular"
							animation="wave"
							width="100%"
							color="black"
							height="100%"
						/>
					</Pic>
					<Info>
						<Skeleton
							variant="text"
							animation="wave"
							width="100%"
							color="black"
							height="100%"
						/>
						<Skeleton
							variant="text"
							animation="wave"
							width="100%"
							color="black"
							height="100%"
						/>
					</Info>
				</S.SkeletonProfile>
				<S.Section>
					<Skeleton
						variant="text"
						width="49%"
						height={100}
						color="black"
						animation="wave"
					/>
					<Skeleton
						variant="text"
						width="49%"
						height={100}
						color="black"
						animation="wave"
					/>
				</S.Section>
				<S.SkeletonContainer>
					<Title>
						<Skeleton
							variant="text"
							width="50%"
							height={60}
							color="black"
							animation="wave"
						/>
						<Skeleton
							variant="text"
							width="70%"
							height={50}
							color="black"
							animation="wave"
						/>
						<Skeleton
							variant="text"
							width="20%"
							height={50}
							color="black"
							animation="wave"
						/>
					</Title>
				</S.SkeletonContainer>
				<Content>
					<Skeleton
						variant="text"
						width="20%"
						height={40}
						color="black"
						animation="wave"
					/>
					<Skeleton
						variant="text"
						width="50%"
						height={40}
						color="black"
						animation="wave"
					/>
					<Skeleton
						variant="text"
						width="60%"
						height={40}
						color="black"
						animation="wave"
					/>
				</Content>
				<Map>
					<Skeleton
						variant="rounded"
						width="100%"
						height={300}
						color="black"
						animation="wave"
					/>
				</Map>
			</Wrapper>

			<Blank></Blank>
		</Cover>
	);
};

export default ItemDetailPageSkeleton;

const Cover = styled.div`
	width: 100%;
`;

const Wrapper = styled.div`
	${basicSetting}
	padding-top: 10px;
`;

const Upper = styled.div`
	width: 100%;
	padding-bottom: 20px;
`;

const Blank = styled.div`
	width: 100%;
	height: 50px;
`;

const SkeletonProfile = styled.div`
	display: flex;
	width: 100%;
	min-width: 414px;
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

const Pic = styled.div`
	width: 70px;
	height: 70px;
`;

const Info = styled.div`
	width: 120px;
	display: flex;
	flex-direction: column;
	padding-left: 20px;
`;

const SkeletonContainer = styled.div`
	display: flex;
	margin-top: 10px;
	width: 100%;
	min-width: 414px;
	max-width: 1200px;
`;

const Section = styled.div`
	display: flex;
	gap: 10px;
`;

const Title = styled.div`
	width: 100%;
	margin: 0 10px;
	border-bottom: 2px dashed ${({ theme }) => theme.color.gray[100]};
`;

const Content = styled.div`
	width: 100%;
	margin: 0 10px;
	padding-top: 20px;
	height: 200px;
	border-bottom: 2px solid ${({ theme }) => theme.color.gray[100]};
`;

const Map = styled.div`
	width: 100%;
`;

const S = {
	Cover,
	Wrapper,
	Upper,
	Blank,
	Pic,
	Info,
	Section,
	Title,
	Content,
	Map,
	SkeletonProfile,
	SkeletonContainer,
};
