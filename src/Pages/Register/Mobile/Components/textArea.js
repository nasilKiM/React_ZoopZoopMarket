import styled from 'styled-components';

const TextArea = ({ txt }) => {
	return (
		<S.Wrapper>
			<S.Mark>*</S.Mark>
			<S.Txt>{txt}</S.Txt>
			<S.TxtArea placeholder="본문 내용을 입력해주세요."></S.TxtArea>
		</S.Wrapper>
	);
};

export default TextArea;

const Wrapper = styled.div`
	width: 414px;
	display: flex;
	flex-direction: column;
	padding: 0 20px 10px 20px;
	position: relative;
	margin: 0 auto;
`;

const Mark = styled.span`
	position: absolute;
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	top: 10px;
	left: 18px;
`;

const Txt = styled.span`
	width: 80px;
	margin-left: 8px;
	margin-top: 15px;
	margin-bottom: 10px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const TxtArea = styled.textarea`
	width: 360px;
	height: 250px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	padding: 20px;
	margin: 0 auto;
	:focus {
		outline: none;
	}
`;

const S = {
	Wrapper,
	Mark,
	Txt,
	TxtArea,
};
