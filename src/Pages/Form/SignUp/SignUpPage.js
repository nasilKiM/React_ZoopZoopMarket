import styled from 'styled-components';

const SignUpPage = () => {
	return (
		<S.Div>
			<S.Wrap>
				<S.Logo>Zoop Zoop</S.Logo>
				<img src="Assets/임시로고.png" />
				<S.Form>
					<S.InputWrapBtn>
						<S.Mark>*</S.Mark>
						<span>아이디</span>
						<input placeholder="E-mail" />
						<button>중복확인</button>
					</S.InputWrapBtn>
					<S.InputWrap>
						<S.Mark>*</S.Mark>
						<span>비밀번호</span>
						<input placeholder="특수문자, 영어, 숫자 포함 6자이상" />
					</S.InputWrap>
					<S.InputWrap>
						<S.Mark>*</S.Mark>
						<span>비밀번호 확인</span>
						<input placeholder="PW check" />
					</S.InputWrap>
					<S.InputWrapBtn>
						<S.Mark>*</S.Mark>
						<span>닉네임</span>
						<input placeholder="Nick_Name" />
						<button>중복확인</button>
					</S.InputWrapBtn>
					<S.InputWrap>
						<S.Mark>*</S.Mark>
						<span>전화번호</span>
						<input placeholder="010-0000-0000" />
					</S.InputWrap>
					<S.InputWrapBtn>
						<S.Mark>*</S.Mark>
						<span>주소</span>
						<input placeholder="Address" />
						<button>주소찾기</button>
					</S.InputWrapBtn>
					<S.Button>회원가입</S.Button>
				</S.Form>
			</S.Wrap>
		</S.Div>
	);
};

export default SignUpPage;

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

const Logo = styled.div`
	font-size: 100px;
`;

const Form = styled.form`
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	border-radius: 10px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	padding: 40px 30px;
	max-width: 700px;
	min-width: 600px;
`;

const Button = styled.button`
	height: 40px;
	width: 77%;
	border-radius: 10px;
	border: none;
	margin-top: 20px;
	cursor: pointer;
	margin-left: 90px;
	background: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const InputWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: center;

	& > input {
		width: 80%;
		height: 40px;
		border: 1px solid ${({ theme }) => theme.color.subBeige};
		border-radius: 10px;
		margin: 10px 0px;
		display: flex;
		padding: 20px;
		margin-left: 10px;
		padding-left: 10px;
	}
	& > span {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const InputWrapBtn = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: center;

	& > input {
		width: 60%;
		height: 40px;
		border: 1px solid ${({ theme }) => theme.color.subBeige};
		border-radius: 10px;
		margin: 10px 0px;
		display: flex;
		padding: 20px;
		margin-left: 10px;
		padding-left: 10px;
	}
	& > span {
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
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

const Mark = styled.span`
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const S = {
	Div,
	Wrap,
	Logo,
	Form,
	Button,
	InputWrap,
	InputWrapBtn,
	Mark,
};
