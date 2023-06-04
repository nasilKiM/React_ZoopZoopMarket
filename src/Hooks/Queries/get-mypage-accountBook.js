import { useQuery } from "@tanstack/react-query"

import MyPageApi from "Apis/myPageApi"

const useGetAccountBook = ({page, category, start, end}) => {
    const { isLoading, isError, data, error } = useQuery(
        ['accountBook', category, start, end], 
        () => MyPageApi.accountBook({page, category, start, end}),
    );
    return {isLoading, isError, data, error};
};

export default useGetAccountBook;