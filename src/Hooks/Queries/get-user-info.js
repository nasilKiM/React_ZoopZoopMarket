import { useQuery } from '@tanstack/react-query';
import UserApi from 'Apis/userApi';
import { queryConfig } from './@config';

const userInfoProfile = async () => {
	const res = await UserApi.userInfo();
	return res.data;
};

const useUserInfo = () => {
	const { isLoading, isError, data, refetch, error, isSuccess } = useQuery(
		['userInfoProfile'],
		() => userInfoProfile(),
		{
			pollInterval: 0, // usequery polling disabled 관련 옵션 찾아보기
		},
		queryConfig,
	);

	return { isLoading, isError, data, refetch, error, isSuccess };
};
export default useUserInfo;
