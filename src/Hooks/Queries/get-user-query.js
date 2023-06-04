import { useQuery } from '@tanstack/react-query';
import UserApi from 'Apis/userApi';

const userInfoProfile = async () => {
	const res = await UserApi.userInfo();
	return res.data;
};

export const useUserInfo = () => {
	const { isLoading, isError, data, refetch, error, isSuccess } = useQuery(
		['userInfoProfile'],
		() => userInfoProfile(),
		{
			pollInterval: 0,
		},
	);

	return { isLoading, isError, data, refetch, error, isSuccess };
};