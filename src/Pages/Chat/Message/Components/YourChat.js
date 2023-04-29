import ChatProfile from 'Components/Profile/Desktop/chatProfile';
import styled from 'styled-components';

const YourMessage = () => {
	return (
		<>
			<S.MessageContainer>
				<div>
					<ChatProfile />
				</div>
				<S.Message>상대방이 보내는 메세지입니다.</S.Message>
				<S.MessageTimeUnreadContainer>
					<S.Unread>1</S.Unread>
					<S.MessageTime>메세지시간</S.MessageTime>
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
