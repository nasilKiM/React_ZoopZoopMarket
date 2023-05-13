import ChatApis from 'Apis/chatApis';
import { useEffect } from 'react';

const AllChat = () => {
	useEffect(() => {
		const fetchChatList = async () => {
			try {
				const res = await ChatApis.loadAllChatList(1);
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		};

		fetchChatList();
	}, []);
	return (
		<>
			<>:)</>
		</>
	);
};

export default AllChat;
