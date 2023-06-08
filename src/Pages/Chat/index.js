import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import ChatList from './ChatList/ChatList';
import ChatDetail from './ChatDetail/ChatDetail';
import {
	useGetAllChatList,
	useGetChatList,
} from 'Hooks/Queries/get-chat-query';

import styled from 'styled-components';

import { flexAlignCenter, flexAllCenter } from 'Styles/common';

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
		setShowChatDetail(false);
	};

	const handleChatList = () => {
		setShowChatDetail(true);
	};

	return (
		<>
			{isTablet && showChatDetail && (
				<S.ToggleButton onClick={handleChatDetailToggle}>
					&lt; 목록보기
				</S.ToggleButton>
			)}
			<S.ChatContainer>
				<S.ChatLeftContainer show={isTablet ? !showChatDetail : true}>
					<ChatList
						onClick={handleChatList}
						chatroomList={chatroomList}
						setChatroomIdx={setChatroomIdx}
						idx={idx}
						item={item}
						setItemInfo={setItemInfo}
					/>
				</S.ChatLeftContainer>

				<S.ChatRightContainer show={isTablet ? showChatDetail : true}>
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
			</S.ChatContainer>
		</>
	);
};

export default ChattingPage;

const ChatContainer = styled.div`
	position: relative;
	${flexAlignCenter}
	width: 70%;
	height: 75vh;
	min-width: 750px;
	max-width: 1000px;
	min-height: 500px;
	margin: 0 auto;
	border-radius: 10px;
	border: solid lightgrey 1px;
	margin-top: 20px;

	@media (max-width: 700px) {
		width: 100%;
		min-width: 350px;
		overflow: hidden;
	}
`;

const ChatLeftContainer = styled.div`
	height: 100%;
	flex: 1;
	min-height: 500px;
	max-height: 1000px;
	${props => (props.show ? '' : 'display: none')};
`;

const ChatRightContainer = styled.div`
	${flexAllCenter}
	flex-direction: column;
	flex: 1;
	height: 100%;
	min-height: 500px;
	max-height: 1000px;
	${props => (props.show ? '' : 'display: none')};

	@media (max-width: 700px) {
		width: 100%;
		z-index: 98;
		position: relative;
	}
`;

const NoChat = styled.div`
	width: 100%;
	height: 100%;
	${flexAllCenter}
	text-align: center;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	background-color: ${({ theme }) => theme.color.gray[100]};
`;

const ToggleButton = styled.div`
	cursor: pointer;
	margin-top: 20px;
	width: 110px;
	padding: 10px 15px;
	background-color: ${({ theme }) => theme.color.gray[100]};
	left: 25px;
	border-radius: 10px;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	text-align: left;
	align-items: center;
	z-index: 99999;
	:hover {
		color: ${({ theme }) => theme.color.primary[400]};
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
		background-color: ${({ theme }) => theme.color.white};
	}

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
