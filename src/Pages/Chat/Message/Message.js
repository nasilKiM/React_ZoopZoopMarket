import styled from 'styled-components';
import YourMessage from './Components/YourChat';
import MyMessage from './Components/MyChat';

const MessageDetail = ({ chat }) => {
	console.log(chat);
	return (
		<div>
			<S.DateDivideContainer>
				<S.DateDivide>{chat?.createdAt}</S.DateDivide>
			</S.DateDivideContainer>

			{chatDetail.messages.map(msg => {
				return msg.sender === '김영수' ? (
					<MyMessage msg={msg} isRead={chatDetail.isRead} />
				) : (
					<YourMessage msg={msg} isRead={chatDetail.isRead} />
				);
			})}
		</div>
	);
};

export default MessageDetail;

const DateDivideContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
`;

const DateDivide = styled.div`
	padding: 0.5rem;
	background-color: grey;
	border-radius: 1rem;
	color: white;
	font-size: ${({ theme }) => theme.fontSize.micro};
`;

const S = {
	DateDivide,
	DateDivideContainer,
};
