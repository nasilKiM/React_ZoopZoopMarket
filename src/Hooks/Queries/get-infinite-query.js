import { useInfiniteQuery } from '@tanstack/react-query';

import MyPageApi from 'Apis/myPageApi';
import ProductApi from 'Apis/productApi';

export const useInfiniteMyItem = category => {
	const res = useInfiniteQuery(
		['MY_ITEMS'],
		({ pageParam = 1 }) => MyPageApi.productList({ page: pageParam, category }),
		{
			getNextPageParam: (lastPage, allPages) => {
				const { curPage, endPage } = allPages[0].data.pagination;
				if (curPage < endPage) {
					return lastPage.data.pagination.curPage + 1;
				} else return undefined;
			},
		},
	);
	return res;
};

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

export const useInfiniteMyInterest = () => {
	const res = useInfiniteQuery(
		['myInterest'],
		({ pageParam = 1 }) => MyPageApi.likeProductList({ page: pageParam }),
		{
			getNextPageParam: (lastPage, allPages) => {
				const { totalPage } = lastPage.data.pagination;
				const nextPage = allPages.length + 1;
				return nextPage > totalPage ? undefined : nextPage;
			},
		},
	);
	return res;
};

