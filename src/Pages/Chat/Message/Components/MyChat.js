import styled from 'styled-components';

const MyMessage = ({ msg, isRead }) => {
	return (
		<>
			<S.MessageContainer>
				<S.MessageTimeUnreadContainer>
					<S.Unread>{isRead ? 0 : 1}</S.Unread>
					<S.MessageTime>{msg.timestamp}</S.MessageTime>
				</S.MessageTimeUnreadContainer>
				<S.Message>{msg.message}</S.Message>
			</S.MessageContainer>
		</>
	);
};

export default MyMessage;

const MessageContainer = styled.div`
	display: inline-flex;
	justify-content: left;
	/* align-items: flex-start; */
	right: 0;
	width: 100%;
	padding: 0 1rem;
	margin-bottom: 15px;
`;

const Message = styled.span`
	width: 100%;
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
