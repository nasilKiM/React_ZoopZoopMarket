import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import ChatApis from 'Apis/chatApis';
import { useSocket } from 'Context/socket';
import MessageDetail from '../Message/Message';

const ChatDetail = ({ chatroomIdx, item, isSeller, itemInfo }) => {
	const [chat, setChat] = useState();
	const inputMsg = useRef();
	const [send, setSend] = useState();
	const [receiveMsg, setReceiveMsg] = useState();
	const [eventCheck, setEventCheck] = useState(true);
	const so = useSocket();
	const itemRes = item ? item : itemInfo?.searchProduct;
	const itemSeller = isSeller ? isSeller : itemInfo?.isSeller;
	console.log(itemRes);
	console.log(chat);
	console.log(111111111111111, isSeller);
	console.log(3333333, itemInfo);

	useEffect(() => {
		// 채팅 목록을 마운트시 불러오기
		const loadChatLog = async () => {
			try {
				const res = await ChatApis.loadChatLog(chatroomIdx);
				console.log(res.data);
				setChat(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		loadChatLog();
	}, []);

	useEffect(() => {
		so?.emit('join', { room_idx: chatroomIdx });
		so?.on('receiveMessage', async data => {
			console.log(data);
			try {
				const res = await ChatApis.loadChatLog(data.room_idx);
				console.log(res.data);
				setChat(res.data);
			} catch (err) {
				console.log(err);
			}
			setEventCheck(prev => !prev);
		});
		// return () => {
		// 	so.emit('leave', { room_idx: chatroomIdx });
		// };
	}, []);

	// 소켓 최초1회 리랜더링 재연결x (disconnect까지) (전역화)
	// emit은 이벤트 발생 on 이벤트 생성

	// useEffect(() => {
	// 	so.on('receiveMessage', async data => {
	// 		const res = await ChatApis.saveMsg(data);
	// 		so.on('newMessage', data => {
	// 			console.log(data);
	// 		});
	// 	});
	// }, []);
	console.log(item);
	const onClickSendMsgBtn = async e => {
		e.preventDefault();
		const message = {
			title: itemRes?.title,
			createdAt: itemRes?.createdAt,
			prod_idx: itemRes?.idx,
			room_idx: chatroomIdx,
			nickName: itemRes?.User.nick_name,
			message: inputMsg.current.value,
			isSeller: itemSeller,
		};
		console.log(message);
		so?.emit('sendMessage', message);
		try {
			const res = await ChatApis.saveMsg({
				room_idx: message.room_idx,
				message: message.message,
			});
			console.log(res);
		} catch (err) {
			console.log(err);
		}
		try {
			const res = await ChatApis.loadChatLog(message.room_idx);
			console.log(res.data);
			setChat(res.data);
		} catch (err) {
			console.log(err);
		}
		setEventCheck(prev => !prev);
		inputMsg.current.value = '';
		console.log('클릭');
	};

	return (
		<>
			<S.ChattingTitle>
				<img src="Assets/Images/bicycle.jpg" />
				<div>
					<S.CurrentChatting>
						{/* <div>{chatDetail.product.title}</div>
						<div> {chatDetail.product.status}</div> */}
					</S.CurrentChatting>
					<S.Price>
						{/* <span>{chatDetail.product.price}</span> */}
						{/* 판매자가 구매자를 구매확정했을경우에 보여야함
					+ 후기남긴경우에는 후기수정하기가 떠야함. */}
						{/* <button>후기 남기기</button>
						<button>후기 수정하기</button> */}
					</S.Price>
				</div>
			</S.ChattingTitle>
			<S.ChattingContent>
				<MessageDetail
					chat={chat}
					eventCheck={eventCheck}
					setEventCheck={setEventCheck}
				/>
			</S.ChattingContent>
			<S.ChattingFormContainer>
				<S.ChattingForm>
					<textarea ref={inputMsg} autoFocus={true} />
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
	display: inline-flex;
	align-items: center;
	padding: 0 2rem;
	background-color: ${({ theme }) => theme.color.subLightGreen};
	img {
		min-width: 50px;
		max-height: 50px;
		border-radius: 15%;
		object-fit: fill;
		margin-right: 15px;
	}
	span {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const CurrentChatting = styled.div`
	width: 100%;
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
	/* div {
		margin-right: 15px;
	} */
`;

const Price = styled.div`
	justify-content: space-between;
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
	CurrentChatting,
	Price,
	ChattingContent,
	ChattingFormContainer,
	ChattingForm,
	SubmitButton,
};
