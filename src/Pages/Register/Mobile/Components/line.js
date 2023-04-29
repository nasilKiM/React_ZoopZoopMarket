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
	width: 414px;
	display: flex;
	align-items: center;
	padding: 0 20px 10px 20px;
	position: relative;
	margin: 0 auto;
`;

const Container = styled.div`
	width: 414px;
	display: flex;
	flex-direction: column;
`;

const Mark = styled.span`
	position: absolute;
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	top: 12px;
	left: 18px;
`;

const Txt = styled.span`
	width: 80px;
	margin-left: 8px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const InputBox = styled.input`
	width: 300px;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.color.subBeige};
	padding: 10px;

	font-size: ${({ theme }) => theme.fontSize.sm};
	:focus {
		outline: none;
	}
`;

const Error = styled.div`
	font-size: ${({ theme }) => theme.fontSize.es};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.primary};
	margin-left: 10px;
	margin-top: 5px;
	top: 7px;
	right: 0;
`;

const S = {
	Wrapper,
	Container,
	Mark,
	Txt,
	InputBox,
	Error,
};
