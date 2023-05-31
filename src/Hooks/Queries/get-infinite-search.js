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

/*


export const useInfiniteSearch = (words, selected, status) => {
	const res = useInfiniteQuery(
		['SEARCH_ITEMS', words, selected],
		async ({ pageParam = 1 }) => {
			const result = await Promise.all(
				words.map(word =>
					ProductApi.searchItems(pageParam, word, selected, status),
				),
			);
			return {
				data: result.reduce(
					(acc, item) => {
						return {
							product: [...acc.product, ...item.data.product],
							pagination: item.data.pagination,
						};
					},
					{ product: [] },
				),
			};
		},
		{
			getNextPageParam: lastPage => {
				return lastPage.data.pagination.curPage + 1;
			},
		},
	);
	return res;
};

*/
