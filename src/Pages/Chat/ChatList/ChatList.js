import styled from 'styled-components';

const ChatList = () => {
	return (
		<>
			<S.LeftUpperBar>
				<span>채팅목록</span>
			</S.LeftUpperBar>
			<S.ListContainer>
				<S.ChatContent>
					<img src="Assets/Images/bicycle.jpg" />
					{/*컴포넌트로 뺴기? */}
					<div>
						<S.ChatContentUpper>
							<span>닉네임</span>
							<span>채팅시간</span>
						</S.ChatContentUpper>
						<div>
							<span>마지막 채팅 내용</span>
						</div>
					</div>
				</S.ChatContent>
			</S.ListContainer>
			<S.LeftLowerBar>
				{/* 조건에 따라서 더보기버튼 보이기 +숨기기 */}
				<S.MoreButton>더보기</S.MoreButton>
			</S.LeftLowerBar>
		</>
	);
};

export default ChatList;

const LeftUpperBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10%;
	background-color: ${({ theme }) => theme.color.primary};
	color: white;
`;

const ListContainer = styled.div`
	height: 80%;
	display: flex;
	flex-direction: column;
	padding: 0 0.2rem;
	overflow-y: scroll;
`;

const ChatContent = styled.div`
	box-shadow: 2px 5px 5px -2px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	padding: 10px;
	width: 100%;
	display: inline-flex;

	img {
		min-width: 50px;
		max-height: 50px;
		border-radius: 15%;
		object-fit: fill;
		margin-right: 10px;
	}
`;

const ChatContentUpper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 5px;
	margin-bottom: 10px;
`;

const LeftLowerBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10%;
`;

const MoreButton = styled.button`
	flex: 1 0;
	height: 100%;
	border: none;
`;

const S = {
	LeftLowerBar,
	LeftUpperBar,
	ListContainer,
	ChatContent,
	ChatContentUpper,
	MoreButton,
};
