import { flexAlignCenter, flexAllCenter, flexJustifyCenter } from 'Styles/common';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FindAddress from 'Components/Address/Desktop/address';
import UserApi from 'Apis/userApi';
import { FORM_TYPE } from 'Consts/FormType';
import TokenService from 'Repository/TokenService';
import Input from 'Components/Input/input';
import CustomButton from 'Components/Buttons/button';

const SignUpPage = () => {
	const navigate = useNavigate();
	const [address, setAddress] = useState();
	const [idMsg, setIdMsg] = useState('');
	const [nickMsg, setNickMsg] = useState('');

	useEffect(() => {
		if (TokenService.getToken()) {
			alert('이미 로그인 중입니다. 메인으로 이동합니다.');
			navigate('/main');
		}
	}, []);

	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const onSubmit = async data => {
		const info = {
			email: data.email,
			pw: data.password,
			nickName: data.nick,
			phone: data.phone,
			region: address,
		};
		try {
			await UserApi.signup(info);
			alert('회원가입이 완료되었습니다.');
			navigate('/form/login');
		} catch (err) {
			alert(err.response.data.message);
		}
	};

	const onCheckId = async e => {
		e.preventDefault();
		const value = getValues('email');
		try {
			const res = await UserApi.checkEmail(value);
			setIdMsg(res.data.message);
		} catch (err) {
			setIdMsg(err.response.data.message);
		}
	};

	// input 값에 변화가 생길때 msg 칸을 비워주는
	useEffect(() => {
		setIdMsg('');
	}, [getValues('email')]);

	const onCheckNick = async e => {
		e.preventDefault();
		const value = getValues('nick');
		try {
			const res = await UserApi.checkNickname(value);
			setNickMsg(res.data.message);
		} catch (err) {
			setNickMsg(err.response.data.message);
		}
	};

	useEffect(() => {
		setNickMsg();
	}, [getValues('nick')]);

	const full =
		!errors.email &&
		!errors.password &&
		!errors.confirmPW &&
		!errors.phone &&
		address;

	return (
		<>
		<S.Logo src="/Assets/web_logo.png"></S.Logo>
		<S.Div>
			<S.Wrap>
				<S.Header>
					<p>회원가입</p>
				</S.Header>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<S.InputWrapBtn>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>아이디</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<S.InputHalf
								shape={'littleShape'}
								{...register('email', FORM_TYPE.EMAIL)}
								placeholder="E-mail"
							/>
							<S.CheckBtn
								disabled={errors.email || !'email'}
								onClick={onCheckId}
								shape={'submitBtn'}
								size={'submitBtn'}
							>
								중복확인
							</S.CheckBtn>
						</S.InputBoxWrap>
					</S.InputWrapBtn>
					{errors.email && <S.Error>{errors.email.message}</S.Error>}
					{<S.Error>{idMsg}</S.Error>}
					<S.InputWrap>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>비밀번호</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<S.InputCustom
								shape={'littleShape'}
								{...register('password', FORM_TYPE.PASSWORD)}
								placeholder="특수문자, 영어, 숫자 포함 8자이상"
								type="password"
							/>
						</S.InputBoxWrap>
					</S.InputWrap>
					{errors.password && <S.Error>{errors.password.message}</S.Error>}
					<S.InputWrap>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>비밀번호 확인</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<S.InputCustom
								shape={'littleShape'}
								{...register('confirmPW', {
									required: true,
									validate: value => {
										if (getValues('password') !== value) {
											return '비밀번호를 다시 확인해 주세요';
										}
									},
								})}
								placeholder="PW check"
								type="password"
							/>
						</S.InputBoxWrap>
					</S.InputWrap>
					{errors.confirmPW && <S.Error>{errors.confirmPW.message}</S.Error>}
					<S.InputWrapBtn>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>닉네임</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<S.InputHalf
								shape={'littleShape'}
								{...register('nick', FORM_TYPE.NICKNAME)}
								placeholder="Nick_Name"
							/>

							<S.CheckBtn
								disabled={errors.nick || !'nick'}
								onClick={onCheckNick}
								shape={'submitBtn'}
								size={'submitBtn'}
							>
								중복확인
							</S.CheckBtn>
						</S.InputBoxWrap>
					</S.InputWrapBtn>
					{<S.Error>{nickMsg}</S.Error>}
					{errors.nick && <S.Error>{errors.nick.message}</S.Error>}
					<S.InputWrap>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>전화번호</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<S.InputCustom
								shape={'littleShape'}
								maxLength="13"
								{...register('phone', {
									onChange: e => {
										setValue(
											'phone',
											e.target.value
												.replace(/[^0-9]/g, '')
												.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`),
										);
									},
								})}
								placeholder="010-0000-0000"
							/>
						</S.InputBoxWrap>
					</S.InputWrap>
					{errors.phone && <S.Error>{errors.phone.message}</S.Error>}
					<S.InputWrapBtn>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>주소</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<S.Address>{address}</S.Address>
							<FindAddress setter={setAddress} />
						</S.InputBoxWrap>
					</S.InputWrapBtn>
					<S.BtnWrap>
						<S.Button
							type="submit"
							disabled={!full}
							size={'submitBtn'}
							shape={'submitBtn'}
						>
							회원가입
						</S.Button>
					</S.BtnWrap>
				</S.Form>
			</S.Wrap>
		</S.Div>
		</>
	);
};

export default SignUpPage;

const Div = styled.div`
	width: 100%;
	${flexAllCenter}
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
	height: 130px;
	padding-top: 10px;
	${flexAllCenter}
	font-size: ${({ theme }) => theme.fontSize.lg};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 30px 30px;
	max-width: 800px;
	min-width: 600px;
	border-top: 1px solid ${({ theme }) => theme.color.gray[200]};
`;

const BtnWrap = styled.div`
	width: 100%;
	text-align: end;
`;
const Button = styled(CustomButton)`
	margin-top: 20px;
	width: 82%;
	background: linear-gradient(
		${({ theme }) => theme.color.primary[400]},
		${({ theme }) => theme.color.primary[200]}
	);
	border: none;
	color: ${({ theme }) => theme.color.fontColor[100]};
`;

const ItemWrap = styled.div`
	display: flex;
	width: 20%;
`;

const InputBoxWrap = styled.div`
	${flexAlignCenter}
	width: 100%;
	& > button {
		width: 120px;
		height: 40px;
		border-radius: 10px;
		background: none;
		margin-left: 10px;
		cursor: pointer;
	}
`;
const InputCustom = styled(Input)`
	min-height: 45px;
	margin: 10px;
	border: 2px solid ${({ theme }) => theme.color.gray[100]};
`;
const InputHalf = styled(Input)`
	min-height: 45px;
	margin: 10px;
	width: 74%;
	border: 2px solid ${({ theme }) => theme.color.gray[100]};
`;

const InputWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
`;

const InputWrapBtn = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
`;

const Mark = styled.span`
	color: ${({ theme }) => theme.color.primary[400]};
	font-size: 20px;
`;

const Error = styled.div`
	width: 60%;
	text-align: start;
	color: ${({ theme }) => theme.color.error};
	font-size: ${({ theme }) => theme.fontSize.sm};
`;

const Address = styled.div`
	display: flex;
	height: 40px;
	margin: 10px 0px;
	padding-left: 10px;
	margin-right: 5px;
	align-items: center;
`;
const CheckBtn = styled(CustomButton)`
	font-weight: normal;
	min-height: 45px;
	border: 2px solid ${({ theme }) => theme.color.primary[400]};
	&:hover {
		color: ${({ theme }) => theme.color.fontColor[100]};
		background-color: ${({ theme }) => theme.color.primary[400]};
	}
`;

const S = {
	Div,
	Logo,
	Wrap,
	Header,
	Form,
	Button,
	InputWrap,
	InputWrapBtn,
	Mark,
	ItemWrap,
	InputBoxWrap,
	Error,
	Address,
	InputCustom,
	InputHalf,
	CheckBtn,
	BtnWrap,
};
