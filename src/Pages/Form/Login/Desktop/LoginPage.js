import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import TokenService from 'Repository/TokenService';
import { useEffect } from 'react';
import UserApi from 'Apis/userApi';
import { FORM_TYPE } from 'Consts/FormType';
import { flexJustifyCenter } from 'Styles/common';
import Input from 'Components/Input/input';

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
		<S.Div>
			<S.Wrap>
				<S.Header>
					<p>이메일로 줍줍하기</p>
				</S.Header>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<S.InputWrap
						shape={'shape'}
						{...register('email', FORM_TYPE.EMAIL)}
						placeholder="E-mail"
					/>
					{errors.email && <S.Error>{errors.email.message}</S.Error>}
					<S.InputWrap
						shape={'shape'}
						{...register('password', FORM_TYPE.PASSWORD_simple)}
						placeholder="PW"
						type="password"
					/>
					<S.Button disabled={!full}>로그인</S.Button>
					<S.SignUpBtn onClick={() => navigate(`/form/signup`)}>
						신규회원이신가요?
					</S.SignUpBtn>
				</S.Form>
			</S.Wrap>
		</S.Div>
	);
};

export default LoginPage;
const Div = styled.div`
	width: 100%;
	${flexJustifyCenter}
`;

const Wrap = styled.div`
	height: 800px;
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Header = styled.div`
	width: 100%;
	height: 150px;
	padding-top: 50px;
	margin-bottom: 30px;
	background-color: red;
	${flexJustifyCenter}
`;

const Form = styled.form`
	position: relative;
	display: flex;
	border-top: 1px solid black;
	flex-direction: column;
	align-items: center;
	width: 60%;
	height: 45%;
	padding: 40px 30px;
	max-width: 700px;
	min-width: 600px;
`;

const InputWrap = styled(Input)`
	max-width: 420px;
	min-height: 45px;
`;

const Button = styled.button`
	height: 40px;
	width: 80%;
	border-radius: 10px;
	border: none;
	margin-top: 20px;

	cursor: pointer;

	:disabled {
	}
`;

const SignUpBtn = styled.span`
	margin: 10px 0 0 370px;
	min-width: 95px;
	max-width: 100px;
	display: flex;
	right: 14%;
	color: #357aff;

	border-bottom: 1px solid #357aff;
	cursor: pointer;
`;

const Error = styled.div``;

const S = {
	Div,
	Wrap,
	Header,
	InputWrap,
	Form,
	Button,
	SignUpBtn,
	Error,
};
