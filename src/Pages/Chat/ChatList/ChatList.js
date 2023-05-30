import ChatMessage from 'Components/ChatMessage/ChatMessage';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const ChatList = ({
	chatroomList,
	setChatroomIdx,
	chatroomIdx,
	idx,
	item,
	setItem,
	setItemInfo,
}) => {
	return (
		<>
			<S.LeftUpperBar>
				<span>채팅목록</span>
			</S.LeftUpperBar>
			<S.ListContainer>
				{idx &&
					chatroomList &&
					chatroomList.map(chat => {
						return (
							<ChatMessage
								chat={chat}
								setChatroomIdx={setChatroomIdx}
								chatroomIdx={chatroomIdx}
								item={item}
								setItem={setItem}
								setItemInfo={setItemInfo}
							/>
						);
					})}
				{!idx &&
					chatroomList &&
					chatroomList.chats.map(chat => {
						return (
							<ChatMessage
								chat={chat}
								chatroomList={chatroomList}
								setChatroomIdx={setChatroomIdx}
								chatroomIdx={chatroomIdx}
								setItem={setItem}
								item={item}
								setItemInfo={setItemInfo}
							/>
						);
					})}
			</S.ListContainer>
		</>
	);
};

export default ChatList;

const LeftUpperBar = styled.div`
	${flexAllCenter}
	height: 10%;
	background-color: ${({ theme }) => theme.color.primary[400]};
	/* border: 2px solid ${({ theme }) => theme.color.primary}; */
	color: white;
	cursor: pointer;
	border-radius: 5px 0 0 0;
`;

const ListContainer = styled.div`
	height: 90%;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 8px;
		background-color: #f5f5f5;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #aaa;
		&:hover {
			background-color: #999;
		}
	}
`;

const S = {
	LeftUpperBar,
	ListContainer,
};
