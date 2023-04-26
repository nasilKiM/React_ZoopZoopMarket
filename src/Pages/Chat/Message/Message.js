import Profile from 'Components/Profile/Profile';
import styled from 'styled-components';

const MessageDetail = () => {
	return (
		<div>
			<S.DateDivideContainer>
				<S.DateDivide>메세지 일자</S.DateDivide>
			</S.DateDivideContainer>
			<>
				{/*메세지 컴포넌트로 구별하기
				MessageContainer 에서 align-items 를 flex-start & end 구분해야할듯 */}
				<S.MessageContainer>
					<S.MessageTimeUnreadContainer>
						<S.Unread>1</S.Unread>
						<S.MessageTime>메세지시간</S.MessageTime>
					</S.MessageTimeUnreadContainer>
					<S.Message>내가보내는 메세지입니다</S.Message>
				</S.MessageContainer>
			</>
			<>
				<S.MessageContainer>
					<Profile />
					<S.Message>상대방이 보내는 메세지입니다.</S.Message>
					<S.MessageTimeUnreadContainer>
						<S.Unread>1</S.Unread>
						<S.MessageTime>메세지시간</S.MessageTime>
					</S.MessageTimeUnreadContainer>
				</S.MessageContainer>
			</>
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
	background-color: lightgray;
	border-radius: 1rem;
	color: white;
	font-size: 0.6rem;
`;

const MessageContainer = styled.div`
	display: inline-flex;
	justify-content: left;
	align-items: flex-end;
	width: 100%;
	padding: 0 1rem;
	margin-bottom: 0.5rem;
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
	font-size: 0.6rem;
	font-weight: 700;
`;

const MessageTime = styled.span`
	margin-top: 0.25rem;
	color: grey;
	font-size: 0.6rem;
`;

const S = {
	DateDivide,
	DateDivideContainer,
	Message,
	MessageContainer,
	MessageTimeUnreadContainer,
	MessageTime,
	Unread,
};
