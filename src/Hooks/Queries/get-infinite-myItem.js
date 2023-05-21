import MyPageApi from "Apis/myPageApi"
import { useInfiniteQuery } from "react-query"

export const useInfiniteMyItem = (category) => {
    const res = useInfiniteQuery(
        ['MY_ITEMS'],
        ({ pageParam = 3 }) => MyPageApi.productList({page: pageParam, category}),
        {
            getNextPageParam: lastPage => {
                let page =
                //     lastPage.data.id === 0 ? 
                //     1
                //     :
                //     Math.floor(lastPage.data.pagination.no / 20) + 1;
                // if (page < lastPage.data.pagination.endPage) {
                //     return page + 1;
                // } else {
                //     return undefined;
                // }
                console.log(lastPage);
            }
        }
    );
    return res;
}