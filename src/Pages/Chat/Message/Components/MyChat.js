import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const MyMessage = ({ msg }) => {
	const createdAt = new Date(msg.createdAt);
	const AMPM = createdAt.getHours() >= 12 ? '오후' : '오전';
	return (
		<S.Wrapper>
			{/* <S.MessageContainer>
				<S.MessageTimeUnreadContainer>
					<S.MessageTime>{createdAt.toLocaleDateString()}</S.MessageTime>
				</S.MessageTimeUnreadContainer>
				<S.Message>{msg.message}</S.Message>
			</S.MessageContainer> */}
			<div>
				<span>{AMPM}</span>
				<span>
					{createdAt.getHours()}:{createdAt.getMinutes()}
				</span>
			</div>
			<div>{msg.message}</div>
		</S.Wrapper>
	);
};

export default MyMessage;

const Wrapper = styled.div`
	${flexAllCenter}
	/* background-color: ${({ theme }) => theme.color.primary[100]}; */
	justify-content: right;
	margin: 20px 0;
	/* padding: 20px; */
	align-items: end;
	& > div:first-child {
		font-size: ${({ theme }) => theme.fontSize.es};
		margin-right: 5px;
		& > span {
			margin: 0 1px;
		}
	}
	& > div:last-child {
		word-break: break-all;
		background-color: ${({ theme }) => theme.color.primary[100]};
		padding: 5px;
		border-radius: 10px;
		line-height: 25px;
	}
	white-space: pre-wrap;
`;

const MessageContainer = styled.div`
	border: 1px solid black;
	${flexAllCenter};
	right: 0;
	width: 100%;
	padding: 0 1rem;
	margin-bottom: 15px;
	text-align: right;
`;

const Message = styled.span`
	width: 100%;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	background-color: white;
	word-break: break-all;
	white-space: pre-line;
	/* text-align: right; */
`;

const MessageTimeUnreadContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-end;
	height: 100%;
	margin: 0 0.5rem 0 0.5rem;
	border: 1px solid red;
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
