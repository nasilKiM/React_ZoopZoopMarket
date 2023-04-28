import styled from 'styled-components';
import YourMessage from './Components/YourChat';
import MyMessage from './Components/MyChat';

const MessageDetail = () => {
	return (
		<div>
			<S.DateDivideContainer>
				<S.DateDivide>메세지 일자</S.DateDivide>
			</S.DateDivideContainer>
			{/*메세지 컴포넌트로 구별하기
				MessageContainer 에서 align-items 를 flex-start & end 구분해야할듯 */}

			<MyMessage />
			<YourMessage />
			<MyMessage />
			<YourMessage />
			<MyMessage />
			<YourMessage />
			<MyMessage />
			<YourMessage />
			<MyMessage />
			<YourMessage />
			<MyMessage />
			<YourMessage />
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
