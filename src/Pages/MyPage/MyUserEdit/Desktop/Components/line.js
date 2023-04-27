import styled from 'styled-components';

const Line = ({ txt, placeholder, err }) => {
	return (
		<S.Wrapper>
			<S.Mark>*</S.Mark>
			<S.Txt>{txt}</S.Txt>
			<S.Container>
				<S.InputBox placeholder={placeholder}></S.InputBox>
				<S.Error>{err}</S.Error>
			</S.Container>
		</S.Wrapper>
	);
};

export default Line;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	padding: 0 10px;
	position: relative;
	margin-bottom: 30px;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Mark = styled.span`
	position: absolute;
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	top: 0;
	left: 0;
`;

const Txt = styled.span`
	width: 150px;
	margin-bottom: 20px;
	margin-right: 10px;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const InputBox = styled.input`
	height: 40px;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	border-radius: 10px;
	padding-left: 10px;
	:focus {
		outline: none;
	}
`;

const Error = styled.div`
	/* font-size: ${({ theme }) => theme.fontSize.xs}; */
	font-size: 10px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.primary};
	margin-left: 10px;
	margin-top: 5px;
`;

const S = {
	Wrapper,
	Container,
	Mark,
	Txt,
	InputBox,
	Error,
};
