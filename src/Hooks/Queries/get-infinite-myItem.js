import MyPageApi from "Apis/myPageApi"
import { useInfiniteQuery } from "react-query"

export const useInfiniteMyItem = (category) => {
    const res = useInfiniteQuery(
        ['MY_ITEMS'],
        ({ pageParam = 1 }) => MyPageApi.productList({page:pageParam, category}),
        {
            getNextPageParam: lastPage => {
                console.log('lastpage', lastPage); // 확인용
                const nextPage = Math.ceil(lastPage.data.count / 10);
                if (nextPage < lastPage.data.endPage) {
                    return nextPage + 1;
                }
                else {
                    return undefined;
                }
                }
        }
    )
    return res;
}
