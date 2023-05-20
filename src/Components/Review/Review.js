import styled from 'styled-components';

const ReviewMessage = () => {
	return (
		<>
			<S.ChatContent>
				<img src="/Assets/Images/bicycle.jpg" />
				<div>
					<S.ChatContentUpper>
						<S.NickName>닉네임</S.NickName>
						<span>서울시 강남구</span>
					</S.ChatContentUpper>
					<S.ChatContentdown>
						<span>리뷰내용을 작성해주세요</span>
						<div>2023-04-28</div>
					</S.ChatContentdown>
				</div>
			</S.ChatContent>
		</>
	);
};

export default ReviewMessage;

const ChatContent = styled.div`
	box-shadow: -1px 5px 5px -3px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 10px;
	width: 100%;
	display: inline-flex;
	margin-bottom: 20px;

	img {
		min-width: 50px;
		max-height: 50px;
		border-radius: 50%;
		object-fit: fill;
		margin-right: 20px;
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
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

const ChatContentdown = styled.div`
	display: flex;
	flex-direction: column;
	font-size: ${({ theme }) => theme.fontSize.sm};

	span {
		margin-top: 5px;
		margin-bottom: 10px;
	}
	div {
		font-size: ${({ theme }) => theme.fontSize.xs};
		color: ${({ theme }) => theme.color.gray};
		margin-bottom: 10px;
	}
`;

const S = {
	ChatContent,
	ChatContentUpper,
	NickName,
	ChatContentdown,
};
