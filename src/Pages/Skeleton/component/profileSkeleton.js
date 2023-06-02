import { Skeleton } from '@mui/material';

const ProfileSkelton = () => {
	return (
		<Skeleton
			variant="circular"
			width="100px"
			height="100px"
			color="red"
			animation="wave"
		/>
	);
};

export default ProfileSkelton;
