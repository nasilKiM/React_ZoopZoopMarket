import ChatProfile from 'Components/Profile/Desktop/chatProfile';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const YourMessage = ({ msg }) => {
	const createdAt = new Date(msg.createdAt);
	const AMPM = createdAt.getHours() >= 12 ? '오후' : '오전';
	return (
		<S.Wrapper>
			{/* <S.MessageContainer>{
				<div>
					<ChatProfile />
				</div>
				<S.Message>{msg.message}</S.Message>
				<S.MessageTimeUnreadContainer>
					<S.Unread>{isRead ? 0 : 1}</S.Unread>
					<S.MessageTime>{msg.createdAt}</S.MessageTime>
				</S.MessageTimeUnreadContainer>
			</S.MessageContainer>} */}
			<div>
				<ChatProfile />
			</div>
			<div>{msg.message}</div>
			<div>
				<span>{AMPM}</span>
				<span>
					{createdAt.getHours()}:{createdAt.getMinutes()}
				</span>
			</div>
		</S.Wrapper>
	);
};

export default YourMessage;
const Wrapper = styled.div`
	${flexAllCenter}
	/* background-color: ${({ theme }) => theme.color.primary[100]}; */
	justify-content: left;
	margin: 20px 0;
	& > :nth-child(2) {
		word-break: break-all;
		background-color: ${({ theme }) => theme.color.primary[100]};
		line-height: 25px;
		margin-left: 5px;
		padding: 5px;
		border-radius: 10px;
	}
	& > div:nth-child(3) {
		margin-left: 5px;
		font-size: ${({ theme }) => theme.fontSize.es};
		& > span {
			margin: 0 1px;
		}
	}
`;

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
	Wrapper,
};
