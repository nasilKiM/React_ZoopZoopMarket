import styled from 'styled-components';

const Line = ({ txt, placeholder, err }) => {
	return (
		<S.Wrapper>
			<S.Mark>*</S.Mark>
			<S.Txt>{txt}</S.Txt>
			<S.InputBox placeholder={placeholder}></S.InputBox>
			<S.Error>{err}</S.Error>
		</S.Wrapper>
	);
};

export default Line;

const Wrapper = styled.div`
	width: 600px;
	display: flex;
	align-items: center;
	padding: 0 10px 30px 10px;
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
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const InputBox = styled.input`
	width: 300px;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.color.subBeige};
	padding-left: 10px;
	font-size: ${({ theme }) => theme.fontSize.base};
	:focus {
		outline: none;
	}
`;

const Error = styled.div`
	/* font-size: ${({ theme }) => theme.fontSize.xs}; */
	font-size: 10px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.primary};
	margin-left: 30px;
	margin-top: 5px;
`;

const S = {
	Wrapper,
	Mark,
	Txt,
	InputBox,
	Error,
};
