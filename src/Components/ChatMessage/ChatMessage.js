import ProductApi from 'Apis/productApi';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const ChatMessage = ({
	chat,
	chatroomList,
	setChatroomIdx,
	setItem,
	item,
	setItemInfo,
}) => {
	console.log(chat);
	const now = new Date();
	console.log(now.toLocaleTimeString());
	const timeStamp = new Date(chat.lastMessageCreatedAt);
	const onClickChat = async () => {
		setChatroomIdx(chat.idx);
		console.log(item);
		console.log(setItemInfo);
		if (item) return;
		try {
			const res = await ProductApi.detail(chat.product.idx);
			console.log(res);
			setItemInfo(res.data);
		} catch (err) {
			console.log(err);
		}
		console.log('채팅방클릭!!!!!!!!!!!!!');
	};

	// console.log(chat.User.socket);
	// console.log(chat.User.nick_name);

	return (
		<>
			<S.ChatContent onClick={onClickChat}>
				<div>
					<div>{chat.User.nick_name}</div>
					<div>{chat.lastMessage}</div>
				</div>
				<div>
					<div>{chat.lastMessageCreatedAt}</div>
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
	/* background-color: red; */
	cursor: pointer;
	& > div:first-child {
	}
	& > div:last-child {
		font-size: ${({ theme }) => theme.fontSize.xs};
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

	/* ${({ isNewMessage }) =>
		isNewMessage &&
		`
    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.red};
      margin-right: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    &::after {
      content: 'new!';
      font-size: ${({ theme }) => theme.fontSize.xs};
      color: ${({ theme }) => theme.color.red};
      margin-left: 10px;
    }
  `} */
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
