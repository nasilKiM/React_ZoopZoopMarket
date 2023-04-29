import styled from 'styled-components';
import ChatDetail from '../ChatDetail/ChatDetail';

const MobileChatDetail = () => {
	return (
		<S.ChatContainer>
			<S.ChatRightContainer>
				<ChatDetail />
			</S.ChatRightContainer>
		</S.ChatContainer>
	);
};

export default MobileChatDetail;

const ChatContainer = styled.div`
	display: flex;
	width: 90%;
	height: 70vh;
	max-width: 400px;
	min-height: 700px;
	max-height: 800px;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	border-radius: 10px;
	border: solid lightgrey 1px;
	margin-top: 50px;
`;

const ChatRightContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const S = {
	ChatContainer,
	ChatRightContainer,
};
