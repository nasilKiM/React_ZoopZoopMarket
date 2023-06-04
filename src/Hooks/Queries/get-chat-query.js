import { useQuery } from '@tanstack/react-query';

import ChatApis from 'Apis/chatApis';

import { QUERY_KEY } from 'Consts/QueryKey';

export const useGetChatList = params => {
	const { data, error, status, isLoading } = useQuery(
		[QUERY_KEY.GET_CHAT],
		() => ChatApis.loadSpecificChatRoom(params),
		{
			retry: 5,
			onSuccess: () => {},
			onError: () => {},
		},
	);
	return { data, error, status, isLoading };
};

export const useGetAllChatList = params => {
	const { data, error, status, isLoading } = useQuery(
		[QUERY_KEY.GET_ALL_CHAT],
		() => ChatApis.loadAllChatList(params),
		{
			retry: 5,
			onSuccess: () => {},
			onError: () => {},
		},
	);
	return { data, error, status, isLoading };
};

export const useGetChatLog = params => {
	const { data, error, status, isLoading } = useQuery(
		[QUERY_KEY.GET_CHAT_LOG],
		() => ChatApis.loadChatLog(params),
		{
			retry: 5,
			onSuccess: res => {
				console.log(res);
			},
			onError: err => {
				console.log(err);
			},
		},
	);
	return { data, error, status, isLoading };
};
