import { useInfiniteQuery } from '@tanstack/react-query';
import MyPageApi from 'Apis/myPageApi';

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
