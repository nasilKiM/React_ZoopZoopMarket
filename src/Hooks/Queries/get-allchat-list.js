import { useQuery } from '@tanstack/react-query';

import ChatApis from 'Apis/chatApis';

import { QUERY_KEY } from 'Consts/QueryKey';
import { queryConfig } from './@config';

const useGetAllChatList = params => {
	const { data, error, status, isLoading } = useQuery(
		[QUERY_KEY.GET_ALL_CHAT],
		() => ChatApis.loadAllChatList(params),
		queryConfig,
	);
	return { data, error, status, isLoading };
};

export default useGetAllChatList;
