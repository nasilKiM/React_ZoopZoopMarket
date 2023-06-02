import ChatApis from 'Apis/chatApis';

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from 'Consts/QueryKey';

const useGetChatLog = params => {
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

export default useGetChatLog;
