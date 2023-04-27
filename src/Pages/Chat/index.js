import styled from 'styled-components';
import ChatDetail from './ChatDetail/ChatDetail';
import ChatList from './ChatList/ChatList';

const ChattingPage = () => {
	return (
		<S.ChatContainer>
			<S.ChatLeftContainer>
				<ChatList />
			</S.ChatLeftContainer>
			<S.ChatRightContainer>
				{/*삼항연산자 */}
				<ChatDetail />
				<div> 채팅선택 안했을때의 메세지 : 채팅을 선택해주세요.</div>
			</S.ChatRightContainer>
		</S.ChatContainer>
	);
};

export default ChattingPage;

const ChatContainer = styled.div`
	display: flex;
	width: 60%;
	height: 70vh;
	min-width: 800px;
	max-width: 1000px;
	min-height: 700px;
	max-height: 800px;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	border-radius: 10px;
	border: solid lightgrey 1px;
	margin-top: 50px;
`;

const ChatLeftContainer = styled.div`
	display: inline-block;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100%;
`;

const ChatRightContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100%;
`;

const S = {
	ChatContainer,
	ChatLeftContainer,
	ChatRightContainer,
};
