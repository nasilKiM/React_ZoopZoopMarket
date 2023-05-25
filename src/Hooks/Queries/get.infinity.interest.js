// import { useInfiniteQuery } from '@tanstack/react-query';
import MyPageApi from 'Apis/myPageApi';
import { useInfiniteQuery } from 'react-query';

const useInfiniteMy = () => {
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
export default useInfiniteMy;
