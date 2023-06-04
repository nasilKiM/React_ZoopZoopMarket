import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import ChatList from './ChatList/ChatList';
import ChatDetail from './ChatDetail/ChatDetail';

import useGetChatList from 'Hooks/Queries/get-chat-list';
import useGetAllChatList from 'Hooks/Queries/get-allchat-list';

import styled from 'styled-components';
import { flexAlignCenter } from 'Styles/common';

const ChattingPage = ({ idx, item, isSeller }) => {
	const [chatroomIdx, setChatroomIdx] = useState();
	const [chatroomList, setChatroomList] = useState();
	const [itemInfo, setItemInfo] = useState();
	const [showChatDetail, setShowChatDetail] = useState(true);
	const isTablet = useMediaQuery({ maxWidth: 700 });

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

	const handleChatDetailToggle = () => {
		console.log('클릭했음');
		setShowChatDetail(false);
	};

	return (
		<S.ChatContainer>
			{isTablet ? (
				<>
					<S.ChatRightContainer>
						{chatroomIdx && (
							<ChatDetail
								chatroomIdx={chatroomIdx}
								item={item}
								isSeller={isSeller}
								itemInfo={itemInfo}
							/>
						)}
						{!chatroomIdx && <S.NoChat>채팅을 선택해주세요.</S.NoChat>}
					</S.ChatRightContainer>
				</>
			) : (
				<>
					<S.ChatLeftContainer show={showChatDetail}>
						<ChatList
							chatroomList={chatroomList}
							setChatroomIdx={setChatroomIdx}
							idx={idx}
							item={item}
							setItemInfo={setItemInfo}
						/>
					</S.ChatLeftContainer>
					<S.ChatRightContainer show={showChatDetail}>
						{chatroomIdx && (
							<ChatDetail
								chatroomIdx={chatroomIdx}
								item={item}
								isSeller={isSeller}
								itemInfo={itemInfo}
							/>
						)}
						{!chatroomIdx && <S.NoChat>채팅을 선택해주세요.</S.NoChat>}
					</S.ChatRightContainer>
				</>
			)}
			{isTablet && (
				<S.ToggleButton onClick={handleChatDetailToggle}>
					뒤로가기
				</S.ToggleButton>
			)}
		</S.ChatContainer>
	);
};

export default ChattingPage;

const ChatContainer = styled.div`
	${flexAlignCenter}
	width: 70%;
	height: 75vh;
	min-width: 750px;
	max-width: 1000px;
	min-height: 500px;
	margin: 0 auto;
	border-radius: 10px;
	border: solid lightgrey 1px;
	margin-top: 50px;
	@media (max-width: 700px) {
		width: 100%;
		min-width: 350px;
		overflow: hidden;
	}
	/* @media (max-width: 800px) {
		flex-direction: column;
		border: none;
	} */
`;

const ChatLeftContainer = styled.div`
	display: inline-block;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100%;
	min-height: 500px;
	max-height: 1000px;
`;

const ChatRightContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100%;
	min-height: 500px;
	max-height: 1000px;
	@media (max-width: 700px) {
		width: 100%;
		z-index: 98;
		position: relative;
	}
`;

const NoChat = styled.div`
	width: 100%;
	background-color: white;
	border: 1px solid gray;
	text-align: center;
`;

const ToggleButton = styled.div`
	position: absolute;
	cursor: pointer;
	top: -15px;
	width: 100%;
	padding: 10px 10px;
	background-color: gray;
	left: ${props => (props.show ? 'calc(50% - 20px)' : '5px')};
	transform: translateY(-50%);
	color: white;
	border: none;
	font-size: 16px;
	text-align: left;
	align-items: center;
	z-index: 98;
	@media (max-width: 700px) {
		display: block;
	}
`;

const S = {
	ChatContainer,
	ChatLeftContainer,
	ChatRightContainer,
	NoChat,
	ToggleButton,
};
