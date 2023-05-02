import styled from 'styled-components';

const ChatMessage = ({ chat, onClick, isNewMessage }) => {
	return (
		<>
			<S.ChatContent onClick={onClick}>
				<img src="Assets/Images/bicycle.jpg" />
				<div>
					<S.ChatContentUpper isNewMessage={isNewMessage}>
						<S.NickName>{chat.user.nickname}</S.NickName>
						<span>{chat.msg.createdAt}</span>
					</S.ChatContentUpper>
					<S.ChatContentdown>
						<span>{chat.msg.content}</span>
					</S.ChatContentdown>
				</div>
			</S.ChatContent>
		</>
	);
};

export default ChatMessage;

const ChatContent = styled.div`
	box-shadow: 2px 5px 5px -2px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	padding: 10px;
	width: 100%;
	display: inline-flex;

	img {
		min-width: 50px;
		max-height: 50px;
		border-radius: 15%;
		object-fit: fill;
		margin-right: 10px;
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

	${({ isNewMessage }) =>
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
  `}
`;

const NickName = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

const ChatContentdown = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
`;

const S = {
	ChatContent,
	ChatContentUpper,
	NickName,
	ChatContentdown,
};
