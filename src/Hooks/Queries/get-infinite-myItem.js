import MyPageApi from "Apis/myPageApi"
import { useInfiniteQuery } from "react-query"

export const useInfiniteMyItem = (category) => {
    const res = useInfiniteQuery(
        ['MY_ITEMS'],
        async ({ pageParam = 1 }) => {
            const {data} =  await MyPageApi.productList({page:pageParam, category});
            const nextPage = data.products.length >= 10 ? pageParam+1 : undefined; 
            return {
                result: data,
                nextPage
            }
        },
        {
            getNextPageParam: (lastPage) => {
                console.log(lastPage)
                // return lastPage.result.nextPage;
                // if (lastPage.result.products.length % 10 === 0) {
                //     return lastPage.nextPage;
                // } else {
                //     return undefined;
                // }
                return lastPage.nextPage;
                // const nextPage = currentPage.data.startPage + 1;
                // return nextPage > currentPage.data.totalPage ? null : nextPage;
            }
        }
        )
    return res;
}