import MyPageApi from "Apis/myPageApi"
import { useInfiniteQuery } from "react-query"


export const useInfiniteMyItem = (category) => {
    const res = useInfiniteQuery(
        ['MY_ITEMS'],
        ({ pageParam = 3 }) => MyPageApi.productList({page:pageParam, category}),
        {
            getNextPageParam: (lastPage, allPages) => {
                // console.log('lastpage', lastPage);
                console.log('allpage', allPages);
                if(allPages[0].data.pagination.curPage < allPages[0].data.pagination.endPage) {
                    return allPages[0].data.pagination.curPage + 1;
                } else return;
            }
        }
    )
    return res;
}
