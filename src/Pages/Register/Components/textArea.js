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
	width: 600px;
	display: flex;
	flex-direction: column;
	padding: 0 10px 20px 10px;
	position: relative;
	margin: 0 auto;
`;

const Mark = styled.span`
	position: absolute;
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	top: 0;
	left: 0;
`;

const Txt = styled.span`
	width: 100px;
	margin-bottom: 20px;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const TxtArea = styled.textarea`
	width: 100%;
	height: 400px;
	font-size: ${({ theme }) => theme.fontSize.base};
	padding: 15px;

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
