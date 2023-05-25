import MyPageApi from "Apis/myPageApi"
import { useInfiniteQuery } from "react-query"

let currentPage = 1;
export const useInfiniteMyItem = (category) => {
    const res = useInfiniteQuery(
        ['MY_ITEMS'],
        ({ pageParam = 3 }) => MyPageApi.productList({page:pageParam, category}),
        {
            getNextPageParam: (lastPage, allPages) => {
                // console.log('lastpage', lastPage);
                // console.log('allpage', allPages);
                if(currentPage < allPages[0].data.pagination.endPage) {
                    return currentPage + 1;
                } else return;
            }
        }
    )
    return res;
}
