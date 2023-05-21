import { LastPage } from "@mui/icons-material"
import MyPageApi from "Apis/myPageApi"
import { useInfiniteQuery } from "react-query"


export const useInfiniteMyItem = (category, page) => {
    const res = useInfiniteQuery(
        ['MY_ITEMS', category],
        ({ pageParam = 1 }) => MyPageApi.productList(pageParam, page),
        {
            getNextPageParam: LastPage => {
                let page =
                    LastPage.data.pagination.no === 0 ? 1
                    :
                    Math.floor(LastPage.data.pagination.no / 20) + 1;
                if (page < LastPage.data.pagination.endPage) {
                    return page + 1;
                } else {
                    return undefined;
                }
            }
        }
    );
    return res;
}