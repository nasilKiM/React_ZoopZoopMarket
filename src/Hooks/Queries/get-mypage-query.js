import { useQuery } from "@tanstack/react-query"

import MyPageApi from "Apis/myPageApi"

export const useGetAccountBook = ({page, category, start, end}) => {
    const { isLoading, isError, data, error } = useQuery(
        ['accountBook', category, start, end], 
        () => MyPageApi.accountBook({page, category, start, end}),
    );
    return {isLoading, isError, data, error};
};

// useMyUserInfo 안에서 MyPageApi.myMainPage() 쓰는 방법으로 시도 예정
const userInfo = async () => {
	const res = await MyPageApi.myMainPage();
	return res.data;
};

export const useMyUserInfo = () => {
	const { isLoading, isError, data, refetch, error } = useQuery(
		['userInfo'],
		() => userInfo(),
	);

	return { isLoading, isError, data, refetch, error };
};