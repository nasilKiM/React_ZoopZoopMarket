import styled from 'styled-components';

const LoginPage = () => {
	return (
		<Div>
			<Wrap>
				<Logo>Zoop Zoop</Logo>
				<Form>
					<input placeholder="E-mail" />
					<input placeholder="PW" />
					<Button>로그인</Button>
					<SignUpBtn>신규회원이신가요?</SignUpBtn>
				</Form>
			</Wrap>
		</Div>
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
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Form = styled.form`
	border: 1px solid gray;
	border-radius: 10px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
	height: 45%;
	padding-top: 60px;

	& > input {
		width: 80%;
		height: 20px;
		border: 1px solid gray;
		border-radius: 10px;
		margin: 10px 0px;
		display: flex;
		padding: 20px;
		font-size: 16px;
	}
`;

const Button = styled.button`
	/* width: 140px; */
	/* height: 40px; */
	height: 50px;
	width: 86%;
	font-size: 16px;
	border-radius: 10px;
	border: none;
	margin-top: 20px;
	color: white;
	background-color: #ff3647;
	cursor: pointer;
`;

const Logo = styled.div`
	font-size: 100px;
`;

const SignUpBtn = styled.span`
	display: flex;
	position: absolute;
	top: 75%;
	right: 7%;
	color: #357aff;
	font-size: 12px;
	border-bottom: 1px solid #357aff;
	cursor: pointer;
`;
