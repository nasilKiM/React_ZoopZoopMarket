import { useQuery } from "@tanstack/react-query"

import MyPageApi from "Apis/myPageApi"

import { queryConfig } from "./@config"

const accountBook = async ({page, category, start, end}) => {
    const res = await MyPageApi.accountBook({page, category, start, end})
    return res.data;
};

export const getAccountBook = ({page, category, start, end}) => {
    const {
        isLoading,
        isError,
        data,
        error
    } = useQuery(
        ['accountBook'], 
        () => accountBook({page, category, start, end}), 
        queryConfig);

    return {isLoading, isError, data, error};
}