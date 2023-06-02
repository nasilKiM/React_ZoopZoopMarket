import { useInfiniteQuery } from '@tanstack/react-query';
import ProductApi from 'Apis/productApi';

export const useInfiniteSearch = (word, selected, status) => {
	const res = useInfiniteQuery(
		['SEARCH_ITEMS', word, selected],
		({ pageParam = 1 }) =>
			ProductApi.searchItems(pageParam, word, selected, status),
		{
			getNextPageParam: lastPage => {
				return lastPage.data.pagination.curPage + 1;
			},
		},
	);
	return res;
};
