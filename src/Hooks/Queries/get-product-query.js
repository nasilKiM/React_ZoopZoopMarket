import { useQuery } from '@tanstack/react-query';

import ProductApi from 'Apis/productApi';

import { queryConfig } from './@config';

export const getMainList = () => {
	const {
		isLoading,
		error,
		data: mainList,
	} = useQuery(['mainList'], ProductApi.mainList, queryConfig);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return { mainList };
};

const recentPrd = async () => {
	const res = await ProductApi.getRecent();
	return res.data;
};

export const useRecentProduct = () => {
	const { isLoading, isError, data, refetch, error } = useQuery(
		['recent'],
		() => recentPrd(),
		{
			onSuccess: data => {},
		},
	);

	return { isLoading, isError, data, refetch, error };
};