import styled from 'styled-components';
import ChatDetail from './ChatDetail/ChatDetail';
import ChatList from './ChatList/ChatList';
import { useQuery } from 'react-query';
import { MockAxios } from '../../Apis/@core';
import { useState } from 'react';

const ChattingPage = () => {
	const [chatroomIdx, setChatroomIdx] = useState();

	const { data } = useQuery(['chatList'], () => {
		return MockAxios.get('/chatList').then(res => {
			return res.data;
		});
	});
	// console.log('----->', data);

	const { data: message } = useQuery(['chatDetail', chatroomIdx], () => {
		return axios.get(`/chatDetail/${chatroomIdx}`).then(res => {
			return res.data;
		});
	});
	// console.log('message', message);
	// console.log('chatroomIdx', chatroomIdx);

	return (
		<S.ChatContainer>
			<S.ChatLeftContainer>
				{data && (
					<ChatList
						chatList={data}
						chatroomIdx={chatroomIdx}
						setChatroomIdx={setChatroomIdx}
					/>
				)}
			</S.ChatLeftContainer>
			<S.ChatRightContainer>
				{message && <ChatDetail chatDetail={message} />}
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
