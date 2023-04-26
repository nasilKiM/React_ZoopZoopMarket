import styled from 'styled-components';
import MessageDetail from '../Message/Message';

const ChatDetail = () => {
	return (
		<>
			<S.ChattingTitle>
				<img src="Assets/Images/bicycle.jpg" />
				<div>
					<S.CurrentChatting>
						<div>게시글제목</div>
						<div> 판매중</div>
					</S.CurrentChatting>
					<span>가격</span>
				</div>
			</S.ChattingTitle>
			<S.ChattingContent>
				<MessageDetail />
			</S.ChattingContent>
			<S.ChattingFormContainer>
				<S.ChattingForm>
					<textarea autoFocus={true} />
					<div>
						<S.SubmitButton type="submit">전송</S.SubmitButton>
					</div>
				</S.ChattingForm>
			</S.ChattingFormContainer>
		</>
	);
};

export default ChatDetail;

const ChattingTitle = styled.div`
	width: 100%;
	height: 10%;
	display: inline-flex;
	align-items: center;
	padding: 0 2rem;
	background-color: ${({ theme }) => theme.color.LightGreen};
	img {
		min-width: 50px;
		max-height: 50px;
		border-radius: 15%;
		object-fit: fill;
		margin-right: 15px;
	}
	span {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const CurrentChatting = styled.div`
	width: 100%;
	margin-bottom: 10px;
	display: flex;
	div {
		margin-right: 15px;
	}
`;
const ChattingContent = styled.div`
	width: 100%;
	padding: 1rem;
	flex: 8 0;
	overflow-y: scroll;
	background-color: ${({ theme }) => theme.color.subBeige};
`;

const ChattingFormContainer = styled.div`
	display: block;
	width: 100%;
	flex: 1 0;
`;

const ChattingForm = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: lightgray;
	textarea {
		flex: 8 0;
		height: 100%;
		padding: 0.5rem;
		border: none;
		outline: none;
		font-family: 'Arial', sans-serif;
		resize: none;
	}
	div {
		display: inline-flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		flex: 2 0;
	}
`;

const SubmitButton = styled.button`
	display: inline-block;
	width: 100%;
	height: 100%;
	border: none;
	background-color: ${({ theme }) => theme.color.primary};
	color: white;
`;

const S = {
	ChattingTitle,
	CurrentChatting,
	ChattingContent,
	ChattingFormContainer,
	ChattingForm,
	SubmitButton,
};
