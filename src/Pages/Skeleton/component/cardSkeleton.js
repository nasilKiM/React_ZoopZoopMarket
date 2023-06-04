import { Skeleton } from '@mui/material';
import styled from 'styled-components';

import { theme } from 'Styles/theme';

const CardSkeleton = () => {
	return (
		<S.Wrapper>
			<S.SkeletonBox>
				<Skeleton
					animation="wave"
					variant="rounded"
					sx={{
						width: '100%',
						height: '100%',
						bgcolor: theme.color.gray[100],
					}}
				/>
			</S.SkeletonBox>
		</S.Wrapper>
	);
};
export default CardSkeleton;
const Wrapper = styled.div`
	position: relative;
	margin: 0 auto;
`;

const SkeletonBox = styled.div`
	width: 100%;
	min-width: 160px;
	max-width: 280px;
	height: 370px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.color.white};
	cursor: pointer;
	border-radius: 10px;
	box-shadow: rgba(100, 111, 124, 0.2) 0px 2px 5px;
	:hover {
		box-shadow: rgba(100, 111, 124, 0.2) 0px 5px 10px;
		transition: all 0.3s ease 0s;
	}
	@media (min-width: 350px) {
		width: 160px;
		height: 315px;
	}
	@media (min-width: 600px) {
		width: 200px;
		height: 320px;
	}
	@media (min-width: 900px) {
		width: 220px;
		height: 330px;
	}
	@media (min-width: 1100px) {
		width: 230px;
		height: 340px;
	}
	@media (min-width: 1200px) {
		width: 240px;
		height: 350px;
	}
	@media (min-width: 1350px) {
		width: 280px;
		height: 370px;
	}
`;

const S = {
	Wrapper,
	SkeletonBox,
};
