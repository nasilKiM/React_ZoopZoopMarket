import { useQuery } from '@tanstack/react-query';
import MyPageApi from 'Apis/myPageApi';
import { queryConfig } from './@config';

const userInfo = async () => {
	const res = await MyPageApi.myMainPage();
	return res.data;
};

const useMyUserInfo = () => {
	const { isLoading, isError, data, refetch, error } = useQuery(
		['userInfo'],
		() => userInfo(),
		queryConfig,
	);

	return { isLoading, isError, data, refetch, error };
};
export default useMyUserInfo;
