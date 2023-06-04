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

	return (
		<>
			<S.ChatContent onClick={onClickChat}>
				<div>
					<div>{chat.User.nick_name}</div>
					<div>
						<div>{chat.lastMessage}</div>
					</div>
				</div>
				<div>
					{!chat.isRead && <S.NewMessage>New!</S.NewMessage>}
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
			font-size: ${({ theme }) => theme.fontSize.sm};
			margin: 10px 0;
		}
	}
	& > div:last-child {
		font-size: ${({ theme }) => theme.fontSize.xs};
		${flexAllCenter}
		flex-direction: column;
		align-items: flex-end;
		& > div {
			margin: 10px 0;
		}
		& > div:first-child {
			font-weight: ${({ theme }) => theme.fontWeight.bold};
		}
	}
`;

const NewMessage = styled.div`
	background-color: ${({ theme }) => theme.color.primary[200]};
	border-radius: 10px;
	padding: 5px;
	text-align: center;
`;

const S = {
	ChatContent,
	NewMessage,
};
