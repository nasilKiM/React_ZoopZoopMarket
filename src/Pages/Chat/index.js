import { useEffect, useState } from 'react';

import ChatList from './ChatList/ChatList';
import ChatDetail from './ChatDetail/ChatDetail';

import styled from 'styled-components';
import useGetChatList from 'Hooks/Queries/get-chat-list';
import useGetAllChatList from 'Hooks/Queries/get-allchat-list';
import { flexAllCenter } from 'Styles/common';

const ChattingPage = ({ idx, item, isSeller }) => {
	const [chatroomIdx, setChatroomIdx] = useState();
	const [chatroomList, setChatroomList] = useState();
	const [itemInfo, setItemInfo] = useState();

	const { data: getChatList } = useGetChatList(idx);
	const { data: getAllChatList } = useGetAllChatList(1);

	useEffect(() => {
		if (!idx) return;
		setChatroomList(getChatList?.data);
	}, [getChatList]);

	useEffect(() => {
		if (idx) return;
		setChatroomList(getAllChatList?.data);
	}, [getAllChatList]);
	return (
		<S.ChatContainer>
			<S.ChatLeftContainer>
				<ChatList
					chatroomList={chatroomList}
					setChatroomIdx={setChatroomIdx}
					idx={idx}
					item={item}
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
				{!chatroomIdx && <div>채팅을 선택해주세요.</div>}
			</S.ChatRightContainer>
		</S.ChatContainer>
	);
};

export default ChattingPage;

const ChatContainer = styled.div`
	${flexAllCenter}
	width: 60%;
	height: 70vh;
	min-width: 800px;
	max-width: 1000px;
	min-height: 700px;
	max-height: 800px;
	margin: 0 auto;
	border-radius: 10px;
	border: solid lightgrey 1px;
	margin-top: 50px;
`;

const ChatLeftContainer = styled.div`
	width: 50%;
	height: 100%;
`;

const ChatRightContainer = styled.div`
	${flexAllCenter}
	flex-direction: column;
	width: 50%;
	height: 100%;
`;

const S = {
	ChatContainer,
	ChatLeftContainer,
	ChatRightContainer,
};
