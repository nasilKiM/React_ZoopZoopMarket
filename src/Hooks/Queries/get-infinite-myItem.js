import MyPageApi from "Apis/myPageApi"
import { all } from "axios";
import { useInfiniteQuery } from "react-query"

export const useInfiniteMyItem = (category) => {
    const res = useInfiniteQuery(
        ['MY_ITEMS'],
        ({ pageParam = 1 }) => MyPageApi.productList({page: pageParam, category}),
        {
            getNextPageParam: (lastPage) => {
                console.log(lastPage);
                if (lastPage.data.count % 10 != 0 && lastPage.data.products.length % 10 === 0) {
                    return lastPage.data.startPage + 1;
                } else if (lastPage.data.products.length % 10 != 0) {
                    return undefined;
                }
            }
        }
    );
    return res;
}