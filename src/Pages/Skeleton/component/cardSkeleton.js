import { Skeleton } from '@mui/material';
import styled from 'styled-components';
import { theme } from 'Styles/theme';

const CardSkeleton = () => {
	return (
		<SkeletonBox>
			<Skeleton
				animation="wave"
				variant="rounded"
				sx={{
					width: '100%',
					height: '100%',
					bgcolor: theme.color.gray[100],
				}}
			/>
		</SkeletonBox>
	);
};
export default CardSkeleton;

const SkeletonBox = styled.div`
	width: 100%;
	min-width: 160px;
	max-width: 280px;
	height: 370px;
	border-radius: 10px;
`;
