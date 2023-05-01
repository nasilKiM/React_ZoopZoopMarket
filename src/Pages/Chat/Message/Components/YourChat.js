import ChatProfile from 'Components/Profile/Desktop/chatProfile';
import styled from 'styled-components';

const YourMessage = ({ msg, isRead }) => {
	return (
		<>
			<S.MessageContainer>
				<div>
					<ChatProfile />
				</div>
				<S.Message>{msg.message}</S.Message>
				<S.MessageTimeUnreadContainer>
					<S.Unread>{isRead ? 0 : 1}</S.Unread>
					<S.MessageTime>{msg.timestamp}</S.MessageTime>
				</S.MessageTimeUnreadContainer>
			</S.MessageContainer>
		</>
	);
};

export default YourMessage;

const MessageContainer = styled.div`
	display: inline-flex;
	justify-content: left;
	align-items: flex-end;
	width: 100%;
	padding: 0 1rem;
	margin-bottom: 15px;
	& div {
		width: 50px;
		height: 50px;
	}
`;

const Message = styled.span`
	max-width: 60%;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	background-color: white;
	word-break: break-all;
	white-space: pre-line;
`;

const MessageTimeUnreadContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-end;
	height: 100%;
	margin: 0 0.5rem 0 0.5rem;
`;

const Unread = styled.span`
	color: red;
	font-size: ${({ theme }) => theme.fontSize.micro};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const MessageTime = styled.span`
	margin-top: 0.25rem;
	color: grey;
	font-size: ${({ theme }) => theme.fontSize.micro};
`;

const S = {
	MessageContainer,
	Message,
	MessageTimeUnreadContainer,
	Unread,
	MessageTime,
};
