import { useQuery } from '@tanstack/react-query';
import ProductApi from 'Apis/productApi';

const recentPrd = async () => {
	const res = await ProductApi.getRecent();
	return res.data;
};

const useRecentProduct = () => {
	const { isLoading, isError, data, refetch, error } = useQuery(
		['recent'],
		() => recentPrd(),
		{
			onSuccess: data => {
				console.log(data);
			},
		},
	);

	return { isLoading, isError, data, refetch, error };
};
export default useRecentProduct;
