import { useQuery } from '@tanstack/react-query';

import UserApi from 'Apis/userApi';
import { queryConfig } from './@config';

const emailCheck = async email => {
	const res = await UserApi.checkEmail(email);
	return res.data;
};

const useCheckEmail = email => {
	const { isLoading, isError, data, refetch, error } = useQuery(
		['checkEmail', email],
		() => emailCheck(email),
		{
			onSuccess: data => {
				console.log(data.message);
			},
			onError: data => {
				console.log(data.response.data.message);
			},
		},
		queryConfig,
	);

	return { isLoading, isError, data, refetch, error };
};
export default useCheckEmail;
