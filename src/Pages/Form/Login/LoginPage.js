import styled from 'styled-components';

const LoginPage = () => {
	return (
		<S.Div>
			<S.Wrap>
				<S.Logo>Zoop Zoop</S.Logo>
				<img src="Assets/임시로고.png" />
				<S.Form>
					<p>Login</p>
					<input placeholder="E-mail" />
					<input placeholder="PW" type="password" />
					<S.Button>로그인</S.Button>
					<S.SignUpBtn>신규회원이신가요?</S.SignUpBtn>
				</S.Form>
			</S.Wrap>
		</S.Div>
	);
};

export default LoginPage;
const Div = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Wrap = styled.div`
	height: 800px;
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Form = styled.form`
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	border-radius: 10px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	height: 45%;
	padding: 40px 30px;
	max-width: 700px;
	min-width: 600px;

	& > input {
		width: 80%;
		height: 40px;
		border: 1px solid ${({ theme }) => theme.color.subBeige};
		border-radius: 10px;
		margin: 10px 0px;
		display: flex;
		padding: 20px;
	}
	& > p {
		font-size: ${({ theme }) => theme.fontSize.lg};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		margin-bottom: 20px;
	}
`;

const Button = styled.button`
	height: 40px;
	width: 80%;
	border-radius: 10px;
	border: none;
	margin-top: 20px;
	background: ${({ theme }) => theme.color.primary};
	cursor: pointer;
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Logo = styled.div`
	font-size: 100px;
`;

const SignUpBtn = styled.span`
	display: flex;
	position: absolute;
	top: 78%;
	right: 14%;
	color: #357aff;
	font-size: ${({ theme }) => theme.fontSize.xs};
	border-bottom: 1px solid #357aff;
	cursor: pointer;
`;

const S = {
	Div,
	Wrap,
	Form,
	Button,
	Logo,
	SignUpBtn,
};
