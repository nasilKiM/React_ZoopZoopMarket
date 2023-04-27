import styled from 'styled-components';

const Line = ({ txt, placeholder, err, max }) => {
	return (
		<S.Wrapper>
			<S.Mark>*</S.Mark>
			<S.Txt>{txt}</S.Txt>
			<S.Container>
				<S.InputBox maxLength={max} placeholder={placeholder}></S.InputBox>
				<S.Error>{err}</S.Error>
			</S.Container>
		</S.Wrapper>
	);
};

export default Line;

const Wrapper = styled.div`
	width: 700px;
	display: flex;
	align-items: center;
	padding: 0 10px 30px 10px;
	position: relative;
	margin: 0 auto;
`;

const Container = styled.div`
	width: 600px;
	position: relative;
`;

const Mark = styled.span`
	position: absolute;
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	top: 0;
	left: 0;
`;

const Txt = styled.span`
	width: 80px;
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const InputBox = styled.input`
	width: 600px;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.color.subBeige};
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSize.md};
	:focus {
		outline: none;
	}
`;

const Error = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.primary};
	margin-left: 30px;
	margin-top: 5px;
	position: absolute;
	left: 400px;
	top: 10px;
`;

const S = {
	Wrapper,
	Container,
	Mark,
	Txt,
	InputBox,
	Error,
};
