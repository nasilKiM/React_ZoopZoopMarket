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
					<S.Price>
						<span>가격</span>
						{/* 판매자가 구매자를 구매확정했을경우에 보여야함
					+ 후기남긴경우에는 후기수정하기가 떠야함. */}
						<button>후기 남기기</button>
						<button>후기 수정하기</button>
					</S.Price>
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
	background-color: ${({ theme }) => theme.color.subLightGreen};
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
	justify-content: space-between;
	/* div {
		margin-right: 15px;
	} */
`;

const Price = styled.div`
	justify-content: space-between;
`;

const ChattingContent = styled.div`
	width: 100%;
	padding: 1rem;
	flex: 8 0;
	background-color: ${({ theme }) => theme.color.subBeigeGreen};
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 8px;
		background-color: #f5f5f5;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #aaa;
		&:hover {
			background-color: #999;
		}
	}
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
	Price,
	ChattingContent,
	ChattingFormContainer,
	ChattingForm,
	SubmitButton,
};
