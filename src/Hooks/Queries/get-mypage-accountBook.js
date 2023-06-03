import { useQuery } from "@tanstack/react-query"

import MyPageApi from "Apis/myPageApi"

import { queryConfig } from "./@config"

const useGetAccountBook = ({page, category, start, end}) => {
    const { isLoading, isError, data, error } = useQuery(
        ['accountBook'], 
        () => MyPageApi.accountBook({page, category, start, end}),
        queryConfig,
    );
    return {isLoading, isError, data, error};
};

export default useGetAccountBook;