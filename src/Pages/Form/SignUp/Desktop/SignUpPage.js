import { flexAlignCenter, flexAllCenter } from 'Styles/common';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Axios } from 'Apis/@core';

const SignUpPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	// const onSubmit = data => console.log(data);

	const onSubmit = data =>
		Axios.post('/api/user', {
			email: data.email,
			pw: data.password,
			nickName: 'nasilkimkim',
			phone: data.phone,
			region: '서울시 강남구',
		});

	// 회원가입 데이터 백엔드에 저장하기
	// Axios.post('/', data)

	return (
		<S.Div>
			<S.Wrap>
				<S.Header>
					<S.LogoImage src="/Assets/web_logo.png" />
				</S.Header>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<p>회원가입</p>
					<S.InputWrapBtn>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>아이디</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<input
								{...register('email', {
									required: 'email을 입력해주세요',
									maxLength: 20,
									pattern: {
										value:
											/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
										message: 'email 형식에 맞지 않습니다',
									},
								})}
								placeholder="E-mail"
							/>
							<button>중복확인</button>
						</S.InputBoxWrap>
					</S.InputWrapBtn>
					{errors.email && <S.Error>{errors.email.message}</S.Error>}
					<S.InputWrap>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>비밀번호</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<input
								{...register('password', {
									required: '비밀번호를 입력해주세요',
									maxLength: { value: 18, message: '최대 18글자입니다' },
									minLength: {
										value: 8,
										message: '최소 8글자 이상 비밀번호를 사용하세요.',
									},
									pattern: {
										value:
											/^.*(?=^.{8,18}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
										message:
											'특수문자, 문자, 숫자를 포함한 형태의 암호를 입력해 주세요',
									},
								})}
								placeholder="특수문자, 영어, 숫자 포함 6자이상"
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
							<input
								{...register('confirmPW', {
									required: true,
									validate: value => {
										if (watch('password') !== value) {
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
							<input placeholder="Nick_Name" />
							<button>중복확인</button>
						</S.InputBoxWrap>
					</S.InputWrapBtn>
					<S.InputWrap>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>전화번호</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<input
								{...register('phone', {
									required: '전화번호를 입력해주세요',
									pattern: {
										value: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
										message: '숫자만 입력해주세요',
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
							<input placeholder="Address" />
							<button>주소찾기</button>
						</S.InputBoxWrap>
					</S.InputWrapBtn>
					<BtnWrap>
						<S.Button>회원가입</S.Button>
					</BtnWrap>
				</S.Form>
			</S.Wrap>
		</S.Div>
	);
};

export default SignUpPage;

const Div = styled.div`
	width: 100%;
	${flexAllCenter}
`;

const Wrap = styled.div`
	width: 60%;
	flex-direction: column;
	${flexAllCenter}
`;

const Header = styled.div`
	width: 100%;
	height: 150px;
	padding-top: 50px;
	margin-bottom: 30px;
	display: flex;
	justify-content: center;
`;

const LogoImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const Form = styled.form`
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	border-radius: 10px;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	padding: 40px 30px;
	max-width: 700px;
	min-width: 600px;
	& > p {
		font-size: ${({ theme }) => theme.fontSize.lg};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		margin-bottom: 20px;
	}
`;

const Button = styled.button`
	height: 40px;
	width: 82%;
	border-radius: 10px;
	border: none;
	margin-top: 20px;
	cursor: pointer;
	background: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`;

const ItemWrap = styled.div`
	display: flex;
	width: 20%;
	& > span {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const InputBoxWrap = styled.div`
	${flexAlignCenter}
	width: 100%;
	& > input {
		width: 100%;
		height: 40px;
		border: 1px solid ${({ theme }) => theme.color.subBeige};
		border-radius: 10px;
		margin: 10px 0px;
		display: flex;
		padding: 20px;
		margin-left: 10px;
		padding-left: 10px;
	}

	& > button {
		width: 120px;
		height: 40px;
		border-radius: 10px;
		border: 1px solid ${({ theme }) => theme.color.primary};
		background: none;
		margin-left: 10px;
		cursor: pointer;
	}
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
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Error = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.primary};
`;

const S = {
	Div,
	Wrap,
	Header,
	LogoImage,
	Form,
	Button,
	InputWrap,
	InputWrapBtn,
	Mark,
	ItemWrap,
	InputBoxWrap,
	Error,
};
