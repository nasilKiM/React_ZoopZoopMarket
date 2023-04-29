import ChatMessage from 'Components/ChatMessage/ChatMessage';
import styled from 'styled-components';

const ReviewPage = () => {
	return (
		<StyledReviewPage>
			<label>거래한 아이템 후기남기기</label>
			<ChatMessage />

			<ReviewTitle>판매자 님과의 거래 후기</ReviewTitle>

			<RatingWrapper>
				<label>평점</label>
				<select>
					<option value="0">선택하세요</option>
					<option value="1">⭐️</option>
					<option value="2">⭐️⭐️</option>
					<option value="3">⭐️⭐️⭐️</option>
					<option value="4">⭐️⭐️⭐️⭐️</option>
					<option value="5">⭐️⭐️⭐️⭐️⭐️</option>
				</select>
			</RatingWrapper>

			<S.TxtArea placeholder="본문 내용을 입력해주세요."></S.TxtArea>
			<S.Container>
				<S.RegisterBtn>등록하기</S.RegisterBtn>
			</S.Container>
		</StyledReviewPage>
	);
};

export default ReviewPage;

const StyledReviewPage = styled.div`
	width: 700px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ReviewTitle = styled.h2`
	font-size: 24px;
	margin-bottom: 16px;
`;

const RatingWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 16px;

	& > label {
		font-size: 20px;
		margin-right: 16px;
	}

	& > select {
		font-size: 20px;
		padding: 8px;
	}
`;

const Container = styled.div`
	width: 700px;
	margin: 0 auto;
	padding: 10px;
	display: flex;
`;

const TxtArea = styled.textarea`
	width: 700px;
	height: 400px;
	font-size: ${({ theme }) => theme.fontSize.md};
	padding: 20px;

	:focus {
		outline: none;
	}
`;

const RegisterBtn = styled.button`
	width: 340px;
	height: 54px;
	border: none;
	border-radius: 5px;
	font-size: ${({ theme }) => theme.fontSize.big};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	background-color: ${({ theme }) => theme.color.subBeige};
	margin-left: auto;
	cursor: pointer;
	:hover {
		background-color: ${({ theme }) => theme.color.primary};
		color: ${({ theme }) => theme.color.white};
	}
`;

const S = {
	Container,
	TxtArea,
	RegisterBtn,
};
