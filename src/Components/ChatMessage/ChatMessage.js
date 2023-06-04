import ProductApi from 'Apis/productApi';
import dayjs from 'dayjs';

import styled from 'styled-components';

import { flexAllCenter } from 'Styles/common';

let date;
const ChatMessage = ({ chat, setChatroomIdx, item, setItemInfo }) => {
	const now = dayjs();
	const timeStamp = dayjs(chat.lastMessageCreatedAt);
	if (now.diff(timeStamp, 'day') === 0) {
		const AMPM = timeStamp.hour() >= 12 ? '오후' : '오전';
		date = `${AMPM} ${timeStamp.hour()}시 ${timeStamp.minute()}분`;
	} else if (now.diff(timeStamp, 'day') === 1) {
		date = '어제';
	} else {
		date = timeStamp.format('YYYY.MM.DD');
	}
	const onClickChat = async () => {
		setChatroomIdx(chat.idx);
		if (item) return;
		try {
			const res = await ProductApi.detail(chat.product.idx);
			setItemInfo(res.data);
		} catch (err) {
			console.log(err);
		}
	};
	console.log(chat)
	return (
		<>
			<S.ChatContent onClick={onClickChat}>
				<div>
					<div>{chat.lastMessageUser.nick_name}</div>
					<div>
						<div>{chat.lastMessage}</div>
					</div>
				</div>
				<div>
					{!chat.isRead && <div>New!</div>}
					<div>{date}</div>
				</div>
			</S.ChatContent>
		</>
	);
};

export default ChatMessage;

const ChatContent = styled.div`
	box-shadow: 2px 5px 5px -2px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	padding: 20px 15px;
	${flexAllCenter}
	justify-content: space-between;
	cursor: pointer;
	& > div:first-child {
		& > div {
			margin: 10px 0;
		}
	}
	& > div:last-child {
		font-size: ${({ theme }) => theme.fontSize.xs};
		& > div {
			margin: 10px 0;
		}
		& > div:first-child {
			font-weight: ${({ theme }) => theme.fontWeight.bold};
		}
	}
`;

const ChatContentUpper = styled.div`
	width: 100%;
	min-width: 300px;
	display: flex;
	justify-content: space-between;
	margin-top: 5px;
	margin-bottom: 10px;
	font-size: ${({ theme }) => theme.fontSize.xs};
`;

const NickName = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

const ChatContentdown = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
	text-align: right;
`;

const S = {
	ChatContent,
	ChatContentUpper,
	NickName,
	ChatContentdown,
};
