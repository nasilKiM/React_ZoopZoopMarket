import { useEffect, useRef, useState } from 'react';

import ChatApis from 'Apis/chatApis';

import MessageDetail from '../Message/Message';
// import useGetChatLog from 'Hooks/Queries/get-chat-log';

import { useSocket } from 'Context/socket';
import styled from 'styled-components';

import { flexAllCenter } from 'Styles/common';

const ChatDetail = ({ chatroomIdx, item, isSeller, itemInfo }) => {
	const [chat, setChat] = useState();
	const inputMsg = useRef();

	const so = useSocket();
	const itemRes = item ? item : itemInfo?.searchProduct;
	const itemSeller = isSeller ? isSeller : itemInfo?.isSeller;

	console.log(chatroomIdx);

	console.log(chat);

	useEffect(() => {
		const loadChatLog = async () => {
			try {
				const res = await ChatApis.loadChatLog(chatroomIdx);
				setChat(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		loadChatLog();
		setChat(loadChatLog?.data);
	}, [chatroomIdx]);

	useEffect(() => {
		so?.emit('join', { room_idx: chatroomIdx });
		so?.on('receiveMessage', async data => {
			try {
				const res = await ChatApis.loadChatLog(data.room_idx);
				setChat(res.data);
			} catch (err) {
				console.log(err);
			}
		});
		return () => {
			so?.emit('leave', { room_idx: chatroomIdx });
		};
	}, []);

	const onClickSendMsgBtn = async e => {
		e.preventDefault();
		if (!inputMsg.current.value.trim()) return;
		const message = {
			title: itemRes?.title,
			createdAt: itemRes?.createdAt,
			prod_idx: itemRes?.idx,
			room_idx: chatroomIdx,
			nickName: itemRes?.User.nick_name,
			message: inputMsg.current.value,
			isSeller: itemSeller,
		};
		so?.emit('sendMessage', message);
		try {
			const res = await ChatApis.saveMsg({
				room_idx: message.room_idx,
				message: message.message,
			});
		} catch (err) {
			console.log(err);
		}
		try {
			const res = await ChatApis.loadChatLog(message.room_idx);
			setChat(res.data);
		} catch (err) {
			console.log(err);
		}
		inputMsg.current.value = '';
	};

	const pressEnter = e => {
		if (e.nativeEvent.isComposing) return;
		if (e.key === 'Enter' && e.shiftKey) {
			return;
		} else if (e.key === 'Enter') {
			onClickSendMsgBtn(e);
		}
	};

	return (
		<>
			<S.ChattingTitle>
				<div>
					<img src={itemRes?.img_url} />
					<div>{itemRes?.title}</div>
				</div>
				<div>{itemRes?.price.toLocaleString()}원</div>
			</S.ChattingTitle>
			<S.ChattingContent>
				<MessageDetail chat={chat} />
			</S.ChattingContent>
			<S.ChattingFormContainer>
				<S.ChattingForm>
					<textarea ref={inputMsg} autoFocus={true} onKeyDown={pressEnter} />
					<div>
						<S.SubmitButton type="submit" onClick={onClickSendMsgBtn}>
							전송
						</S.SubmitButton>
					</div>
				</S.ChattingForm>
			</S.ChattingFormContainer>
		</>
	);
};

export default ChatDetail;

const ChattingTitle = styled.div`
	width: 100%;
	height: 10%;
	min-width: 300px;
	${flexAllCenter}
	justify-content: space-between;
	padding: 0 2rem;
	background-color: ${({ theme }) => theme.color.primary[100]};
	img {
		min-width: 50px;
		max-height: 50px;
		border-radius: 15%;
		object-fit: fill;
		margin-right: 15px;
	}
	& > div {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		word-break: break-all;
	}

	& > div:nth-of-type(1) {
		${flexAllCenter}
		&>div {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			width: 150px;
		}
	}
`;

const ChattingContent = styled.div`
	width: 100%;
	padding: 1rem;
	flex: 8 0;
	background-color: ${({ theme }) => theme.color.subBeigeGreen};
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

const ChattingFormContainer = styled.div`
	display: block;
	width: 100%;
	flex: 1 0;
`;

const ChattingForm = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: lightgray;
	textarea {
		flex: 8 0;
		height: 100%;
		padding: 0.5rem;
		border: none;
		outline: none;
		font-family: 'Arial', sans-serif;
		resize: none;
		white-space: pre-wrap;
		word-break: break-all;
	}
	div {
		display: inline-flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		flex: 2 0;
	}
`;

const SubmitButton = styled.button`
	display: inline-block;
	width: 100%;
	height: 100%;
	border: none;
	background-color: ${({ theme }) => theme.color.primary[400]};
	color: white;
`;

const S = {
	ChattingTitle,
	ChattingContent,
	ChattingFormContainer,
	ChattingForm,
	SubmitButton,
};
