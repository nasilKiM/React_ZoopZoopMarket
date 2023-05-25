import styled from 'styled-components';
import ChatList from './ChatList/ChatList';
import { useEffect, useState } from 'react';
import ChatApis from 'Apis/chatApis';
import ChatDetail from './ChatDetail/ChatDetail';

const ChattingPage = ({ idx, item, setItem, isSeller }) => {
	const [chatroomIdx, setChatroomIdx] = useState();
	const [chatroomList, setChatroomList] = useState();
	const [isChatEntrance, setIsChatEntrance] = useState(false);
	const [itemInfo, setItemInfo] = useState();
	console.log(itemInfo);
	console.log(idx, item);
	// const { data } = useQuery(['chatList'], () => {
	// 	return axios.get('/chatList').then(res => {
	// 		return res.data;
	// 	});
	// });
	// console.log('----->', data);

	// const { data: message } = useQuery(['chatDetail', chatroomIdx], () => {
	// 	return axios.get(`/chatDetail/${chatroomIdx}`).then(res => {
	// 		return res.data;
	// 	});
	// });
	// console.log('message', message);
	// console.log('chatroomIdx', chatroomIdx);

	useEffect(() => {
		if (!idx) return;
		const getChatList = async prodIdx => {
			try {
				const res = await ChatApis.loadSpecificChatRoom(prodIdx);
				console.log(res.data);
				setChatroomList(res.data);
			} catch (err) {
				console.log(err);
			}
		};

		getChatList(idx);
	}, []);
	console.log(chatroomList);

	useEffect(() => {
		if (idx) return;
		const getAllChatList = async () => {
			try {
				const res = await ChatApis.loadAllChatList(1);
				console.log(res.data);
				setChatroomList(res.data);
				console.log('모든채팅');
			} catch (err) {
				console.log(err);
			}
		};

		getAllChatList();
	}, []);

	return (
		<S.ChatContainer>
			<S.ChatLeftContainer>
				<ChatList
					chatroomList={chatroomList}
					setChatroomList={setChatroomList}
					setIsChatEntrance={setIsChatEntrance}
					setChatroomIdx={setChatroomIdx}
					idx={idx}
					item={item}
					setItem={setItem}
					setItemInfo={setItemInfo}
				/>
			</S.ChatLeftContainer>
			<S.ChatRightContainer>
				{chatroomIdx && (
					<ChatDetail
						chatroomIdx={chatroomIdx}
						item={item}
						isSeller={isSeller}
						itemInfo={itemInfo}
					/>
				)}
				<div> 채팅선택 안했을때의 메세지 : 채팅을 선택해주세요.</div>
			</S.ChatRightContainer>
		</S.ChatContainer>
	);
};

export default ChattingPage;

const ChatContainer = styled.div`
	display: flex;
	width: 60%;
	height: 70vh;
	min-width: 800px;
	max-width: 1000px;
	min-height: 700px;
	max-height: 800px;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	border-radius: 10px;
	border: solid lightgrey 1px;
	margin-top: 50px;
`;

const ChatLeftContainer = styled.div`
	display: inline-block;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100%;
`;

const ChatRightContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100%;
`;

const S = {
	ChatContainer,
	ChatLeftContainer,
	ChatRightContainer,
};
