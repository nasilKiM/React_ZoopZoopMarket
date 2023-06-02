import ChatApis from 'Apis/chatApis';

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEY } from 'Consts/QueryKey';

const useGetAllChatList = params => {
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

export default useGetAllChatList;
