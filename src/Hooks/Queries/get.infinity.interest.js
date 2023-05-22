// import { useInfiniteQuery } from '@tanstack/react-query';
import MyPageApi from 'Apis/myPageApi';
import { useInfiniteQuery } from 'react-query';

const useInfiniteMy = () => {
	const res = useInfiniteQuery(
		['myInterest'],
		({ pageParam = 1 }) => MyPageApi.likeProductList({ page: pageParam }),

		{
			getNextPageParam: lastPage => {
				const { endPage, no, page_size, startPage, totalPage, totalSet } =
					lastPage.data.pagination;
				// 게시물 개수에 따른 필요한 페이지 개수
				const page = no === 0 ? 1 : Math.ceil(no / page_size);
				if (page < endPage) {
					return page + 1;
				} else {
					return undefined;
				}
			},
		},
	);

	return res;
};
export default useInfiniteMy;
