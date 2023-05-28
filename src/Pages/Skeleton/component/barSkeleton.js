import { Skeleton } from '@mui/material';

const BarSkeleton = () => {
	return (
		<Skeleton
			variant="text"
			width="70%"
			height="40px"
			color="black"
			animation="wave"
		/>
	);
};
export default BarSkeleton;
