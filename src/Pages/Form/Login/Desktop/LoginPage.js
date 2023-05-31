import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TokenService from 'Repository/TokenService';
import { useEffect, useState } from 'react';
import { FORM_TYPE } from 'Consts/FormType';
import { flexAllCenter, flexJustifyCenter } from 'Styles/common';
import Input from 'Components/Input/input';
import CustomButton from 'Components/Buttons/button';
import { useSocket } from 'Context/socket';
import { useMutation } from '@tanstack/react-query';
import UserApi from 'Apis/userApi';
import { useForm } from 'react-hook-form';
import AlertModal from 'Components/Alert/alertModal';
import NotificationModal from 'Components/Alert/notificationModal';

const LoginPage = () => {
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);
	const [loginModal, setLoginModal] = useState(false);

	const so = useSocket();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	useEffect(() => {
		if (TokenService.getToken()) {
			setLoginModal(true);
		}
	}, []);

	const { mutate, data } = useMutation(loginInfo => UserApi.login(loginInfo), {
		onSuccess: res => {
			setModal(true);
			setTimeout(() => {
				setModal(false);
			}, 500);
			TokenService.setToken(res.data.tokenForHeader);
			so?.emit('connect-user', { token: TokenService.getToken() });
		},
		onError: err => {
			alert(
				`${err.response.data.message.info} 아이디와 비밀번호를 확인해주세요.`,
			);
		},
	});
	const onSubmit = data => {
		const loginInfo = {
			email: data.email,
			pw: data.password,
		};
		mutate(loginInfo);
	};

	const full = !errors.email && !errors.password;
	return (
		<>
			<S.Logo src="/Assets/web_logo_edit4.png"></S.Logo>
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
						{modal && (
							<NotificationModal
								content={`${data.data.user.nickName}님 안녕하세요!`}
								props={'/main'}
							/>
						)}
						{loginModal && (
							<AlertModal
								content={'이미 로그인 중입니다. 메인으로 이동합니다.'}
								props={'/main'}
							/>
						)}
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
	width: 40%;
	flex-direction: column;
	${flexAllCenter}
	@media ${({ theme }) => theme.device.mobile} {
		width: 90%;
	}
`;

const Header = styled.div`
	width: 100%;
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
	padding: 30px 30px;
	width: 600px;
	@media ${({ theme }) => theme.device.mobile} {
		width: 100%;
	}
`;

const InputWrap = styled(Input)`
	width: 400px;
	min-height: 45px;
	font-family: 'Nanum_regular';
	margin: 10px;
	@media ${({ theme }) => theme.device.mobile} {
		width: 100%;
	}
`;

const LoginBtn = styled(CustomButton)`
	margin-top: 20px;
	border: none;
	min-height: 50px;
	width: 400px;
	font-family: 'Nanum_bold';
	color: ${({ theme }) => theme.color.fontColor[100]};
	background: linear-gradient(
		${({ theme }) => theme.color.primary[400]},
		${({ theme }) => theme.color.primary[200]}
	);
	@media ${({ theme }) => theme.device.mobile} {
		width: 100%;
	}
`;

const SingUp = styled.p`
	${flexAllCenter}
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	color: ${({ theme }) => theme.color.fontColor[200]};
	padding-bottom: 20px;
	margin-top: 70px;
`;

const SignUpBtn = styled(CustomButton)`
	min-height: 50px;
	border: none;
	width: 400px;
	font-family: 'Nanum_regular';
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	:hover {
		background: ${({ theme }) => theme.color.primary[100]};
		color: ${({ theme }) => theme.color.fontColor[100]};
	}
	@media ${({ theme }) => theme.device.mobile} {
		width: 100%;
	}
`;

const Error = styled.div`
	width: 72%;
	text-align: start;
	color: ${({ theme }) => theme.color.error};
	font-size: ${({ theme }) => theme.fontSize.sm};
	@media ${({ theme }) => theme.device.mobile} {
		width: 100%;
		margin-bottom: 10px;
	}
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
};
