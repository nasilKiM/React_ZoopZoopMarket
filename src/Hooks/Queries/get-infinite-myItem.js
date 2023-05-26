import { useInfiniteQuery } from "@tanstack/react-query";
import MyPageApi from "Apis/myPageApi"

export const useInfiniteMyItem = (category) => {
    const res = useInfiniteQuery(
        ['MY_ITEMS'],
        ({ pageParam = 1 }) => MyPageApi.productList({page:pageParam, category}),
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
