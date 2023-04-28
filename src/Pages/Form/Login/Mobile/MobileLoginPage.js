import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const MobileLoginPage = () => {
	return (
		<S.Div>
			<S.Wrap>
				<S.Img src="/Assets/임시로고.png" />
				<S.Form>
					<p>로그인</p>
					<input placeholder="E-mail" />
					<input placeholder="PW" type="password" />
					<S.Button>로그인</S.Button>
					<S.SignUpBtn>신규회원이신가요?</S.SignUpBtn>
				</S.Form>
			</S.Wrap>
		</S.Div>
	);
};

export default MobileLoginPage;

const Div = styled.div`
	${flexAllCenter}
`;

const Wrap = styled.div`
	border: 1px solid black;
	width: 414px;
	height: 736px;
	flex-direction: column;
	${flexAllCenter}
`;

const Form = styled.form`
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	border-radius: 10px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	height: 50%;
	padding: 40px 30px;

	& > input {
		width: 95%;
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
	width: 95%;
	border-radius: 10px;
	border: none;
	margin-top: 20px;
	background: ${({ theme }) => theme.color.primary};
	cursor: pointer;
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const SignUpBtn = styled.span`
	display: flex;
	position: absolute;
	top: 78%;
	${flexAllCenter}
	color: #357aff;
	font-size: ${({ theme }) => theme.fontSize.xs};
	border-bottom: 1px solid #357aff;
	cursor: pointer;
`;

const Img = styled.img`
	width: 100px;
	margin-bottom: 30px;
`;

const S = {
	Div,
	Wrap,
	Form,
	Button,
	SignUpBtn,
	Img,
};
