import { useQuery } from '@tanstack/react-query';
import UserApi from 'Apis/userApi';

const emailCheck = async email => {
	const res = await UserApi.checkEmail(email);
	console.log(res);
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
	);

	return { isLoading, isError, data, refetch, error };
};
export default useCheckEmail;
