import { useQuery } from '@tanstack/react-query';

import ChatApis from 'Apis/chatApis';

import { QUERY_KEY } from 'Consts/QueryKey';
import { queryConfig } from './@config';

const useGetChatLog = params => {
	const { data, error, status, isLoading } = useQuery(
		[QUERY_KEY.GET_CHAT_LOG],
		() => ChatApis.loadChatLog(params),
		queryConfig,
	);
	return { data, error, status, isLoading };
};

export default useGetChatLog;
