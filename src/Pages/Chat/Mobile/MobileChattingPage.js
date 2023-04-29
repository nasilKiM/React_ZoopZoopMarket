import styled from 'styled-components';
import ChatList from '../ChatList/ChatList';
import { Link } from 'react-router-dom';

const MobileChattingPage = () => {
	return (
		<S.ChatContainer>
			<S.ChatLeftContainer>
				<Link to="/m-chat/${chat.id}">
					<ChatList />
				</Link>
			</S.ChatLeftContainer>
		</S.ChatContainer>
	);
};

export default MobileChattingPage;

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

const ChatLeftContainer = styled.div`
	display: inline-block;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const S = {
	ChatContainer,
	ChatLeftContainer,
};
