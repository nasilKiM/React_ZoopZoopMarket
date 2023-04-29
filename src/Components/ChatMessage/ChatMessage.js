import styled from 'styled-components';

const ChatMessage = () => {
	return (
		<>
			<S.ChatContent>
				<img src="Assets/Images/bicycle.jpg" />
				<div>
					<S.ChatContentUpper>
						<S.NickName>닉네임</S.NickName>
						<span>채팅시간</span>
					</S.ChatContentUpper>
					<S.ChatContentdown>
						<span>마지막 채팅 내용</span>
					</S.ChatContentdown>
				</div>
			</S.ChatContent>
		</>
	);
};

export default ChatMessage;

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
	width: 100%;
	min-width: 300px;
	display: flex;
	justify-content: space-between;
	margin-top: 5px;
	margin-bottom: 10px;
	font-size: ${({ theme }) => theme.fontSize.xs};
`;

const NickName = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

const ChatContentdown = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
`;

const S = {
	ChatContent,
	ChatContentUpper,
	NickName,
	ChatContentdown,
};
