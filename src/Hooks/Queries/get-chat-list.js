import { useQuery } from '@tanstack/react-query';

import ChatApis from 'Apis/chatApis';

import { QUERY_KEY } from 'Consts/QueryKey';

const useGetChatList = params => {
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

export default useGetChatList;
