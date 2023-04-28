import styled from 'styled-components';

const LineWithBtn = ({ txt, placeholder, btnTxt, err }) => {
	return (
		<S.Wrapper>
			<S.Mark>*</S.Mark>
			<S.Txt>{txt}</S.Txt>
			<S.Container>
				<S.InputBox placeholder={placeholder}></S.InputBox>
				<S.Error>{err}</S.Error>
			</S.Container>
			<S.Btn>{btnTxt}</S.Btn>
		</S.Wrapper>
	);
};

export default LineWithBtn;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 15px;
	position: relative;
	margin-bottom: 20px;
`;

const Container = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
`;

const Mark = styled.span`
	position: absolute;
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	top: 0;
	left: 4px;
`;

const Txt = styled.span`
	width: 80px;
	margin-right: 16px;
	margin-bottom: 25px;
	font-size: ${({ theme }) => theme.fontSize.es};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const InputBox = styled.input`
	width: 100%;
	height: 30px;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	border-radius: 10px;
	padding-left: 10px;
	font-size: ${({ theme }) => theme.fontSize.es};
	:focus {
		outline: none;
	}
`;

const Error = styled.span`
	font-size: ${({ theme }) => theme.fontSize.es};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.primary};
	margin-left: 10px;
	margin-top: 5px;
`;

const Btn = styled.button`
	width: 80px;
	height: 30px;
	border: 1px solid ${({ theme }) => theme.color.primary};
	border-radius: 10px;
	font-size: ${({ theme }) => theme.fontSize.es};
	background: none;
	margin-left: 10px;
	margin-bottom: 15px;
	cursor: pointer;
`;

const S = {
	Wrapper,
	Container,
	Mark,
	Txt,
	InputBox,
	Error,
	Btn,
};
