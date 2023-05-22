import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import TokenService from 'Repository/TokenService';
import { useEffect } from 'react';
import UserApi from 'Apis/userApi';
import { FORM_TYPE } from 'Consts/FormType';
import { flexAllCenter, flexJustifyCenter } from 'Styles/common';
import Input from 'Components/Input/input';
import CustomButton from 'Components/Buttons/button';

const LoginPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (TokenService.getToken()) {
			alert('이미 로그인 중입니다. 메인으로 이동합니다.');
			navigate('/main');
		}
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const onSubmit = async data => {
		const loginInfo = {
			email: data.email,
			pw: data.password,
		};
		try {
			const res = await UserApi.login(loginInfo);
			TokenService.setToken(res.data.tokenForHeader);
			alert(`${res.data.user.nickName}님 안녕하세요.`);
			navigate('/main');
		} catch (err) {
			alert(
				`${err.response.data.message.info} 아이디와 비밀번호를 확인해주세요.`,
			);
		}
	};

	const full = !errors.email && !errors.password;
	return (
		<>
		<S.Logo src="/Assets/web_logo.png"></S.Logo>
		<S.Div>
			<S.Wrap>
				<S.Header>
					<p>이메일로 줍줍하기</p>
				</S.Header>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<S.InputWrap
						shape={'littleShape'}
						{...register('email', FORM_TYPE.EMAIL)}
						placeholder="E-mail"
					/>
					{errors.email && <S.Error>{errors.email.message}</S.Error>}
					<S.InputWrap
						shape={'littleShape'}
						{...register('password', FORM_TYPE.PASSWORD_simple)}
						placeholder="PW"
						type="password"
					/>
					{errors.password && <S.Error>{errors.password.message}</S.Error>}
					<S.LoginBtn size={'submitBtn'} shape={'submitBtn'} disabled={!full}>
						로그인하기
					</S.LoginBtn>
					<S.WrapPW>
						<S.FindPassword>비밀번호 재설정</S.FindPassword>
					</S.WrapPW>
					<S.SingUp>아직 줍줍 회원이 아니신가요?</S.SingUp>
					<S.SignUpBtn
						size={'submitBtn'}
						shape={'submitBtn'}
						onClick={() => navigate(`/form/signup`)}
					>
						이메일로 가입하기
					</S.SignUpBtn>
				</S.Form>
			</S.Wrap>
		</S.Div>
		</>
	);
};

export default LoginPage;

const Div = styled.div`
	width: 100%;
	${flexJustifyCenter}
`;

const Logo = styled.img`
	${flexJustifyCenter}
	margin: 50px auto 0;
	max-width: 300px;
`;

const Wrap = styled.div`
	width: 80%;
	flex-direction: column;
	${flexAllCenter}
`;

const Header = styled.div`
	width: 100%;
	/* margin-bottom: 30px; */
	height: 130px;
	padding-top: 10px;
	${flexAllCenter}
	font-size: ${({ theme }) => theme.fontSize.lg};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Form = styled.form`
	position: relative;
	display: flex;
	border-top: 1px solid ${({ theme }) => theme.color.gray[200]};
	flex-direction: column;
	align-items: center;
	width: 60%;
	/* height: 45%; */
	padding: 30px 30px;
	max-width: 700px;
	min-width: 600px;
`;

const InputWrap = styled(Input)`
	max-width: 400px;
	min-height: 45px;
	margin: 10px;
`;

const LoginBtn = styled(CustomButton)`
	margin-top: 20px;
	border: none;
	min-height: 50px;
	color: ${({ theme }) => theme.color.fontColor[100]};
	background: linear-gradient(
		${({ theme }) => theme.color.primary[400]},
		${({ theme }) => theme.color.primary[200]}
	);
`;
const WrapPW = styled.div`
	width: 62%;
	margin: 10px 0 60px 0;
	text-align: end;
`;
const FindPassword = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	color: ${({ theme }) => theme.color.fontColor[200]};
	cursor: pointer;
`;
const SingUp = styled.p`
	${flexAllCenter}
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	color: ${({ theme }) => theme.color.fontColor[200]};
	padding-bottom: 20px;
`;

const SignUpBtn = styled(CustomButton)`
	min-height: 50px;
	border: none;
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	:hover {
		background: ${({ theme }) => theme.color.primary[100]};
		color: ${({ theme }) => theme.color.fontColor[100]};
	}
`;

const Error = styled.div`
	width: 60%;
	text-align: start;
	color: ${({ theme }) => theme.color.error};
	font-size: ${({ theme }) => theme.fontSize.sm};
`;

const S = {
	Div,
	Logo,
	Wrap,
	Header,
	InputWrap,
	Form,
	SingUp,
	SignUpBtn,
	Error,
	LoginBtn,
	FindPassword,
	WrapPW,
};
