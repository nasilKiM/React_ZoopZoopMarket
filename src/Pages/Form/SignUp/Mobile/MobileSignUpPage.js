import {
	flexAlignCenter,
	flexAllCenter,
	flexJustifyCenter,
} from 'Styles/common';
import styled from 'styled-components';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';

const MobileSignUpPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const onSubmit = data => alert(JSON.stringify(data));
	return (
		<S.Div>
			<S.Wrap>
				<S.Head>
					<span>
						<FontAwesomeIcon icon={faChevronLeft} />
					</span>
					<span>회원가입</span>
				</S.Head>

				<S.Form onSubmit={handleSubmit(onSubmit)}>
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
						{errors.email && <S.Error>{errors.email.message}</S.Error>}
					</S.InputWrapBtn>
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
						{errors.password && <S.Error>{errors.password.message}</S.Error>}
					</S.InputWrap>
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
						{errors.confirmPW && <S.Error>{errors.confirmPW.message}</S.Error>}
					</S.InputWrap>
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
							<input placeholder="010-0000-0000" />
						</S.InputBoxWrap>
						{errors.phone && <S.Error>{errors.phone.message}</S.Error>}
					</S.InputWrap>
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

export default MobileSignUpPage;

const Div = styled.div`
	${flexJustifyCenter}
`;

const Wrap = styled.div`
	border: 1px solid black;
	width: 414px;
	height: 736px;
	flex-direction: column;
`;

const Head = styled.div`
	height: 80px;
	width: 100%;
	${flexAllCenter}
	position: relative;
	& > span {
		font-size: ${({ theme }) => theme.fontSize.big};
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}
	& > span:first-child {
		padding: 30px;
		position: absolute;
		left: 0;
		cursor: pointer;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 40px 20px;

	& > p {
		font-size: ${({ theme }) => theme.fontSize.lg};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		margin-bottom: 20px;
	}
`;

const Button = styled.button`
	height: 40px;
	width: 100%;
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
	& > span {
		font-size: ${({ theme }) => theme.fontSize.sm};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const InputBoxWrap = styled.div`
	${flexAlignCenter}
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
	margin-bottom: 10px;
`;

const InputWrapBtn = styled.div`
	width: 100%;
	margin-bottom: 10px;
`;

const Mark = styled.span`
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Error = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.primary};
	padding-left: 15px;
`;

const S = {
	Div,
	Wrap,
	Form,
	Button,
	InputWrap,
	InputWrapBtn,
	Mark,
	Head,
	ItemWrap,
	InputBoxWrap,
	Error,
};
