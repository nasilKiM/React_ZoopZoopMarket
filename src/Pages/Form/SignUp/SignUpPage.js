import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';

const SignUpPage = () => {
	return (
		<S.Div>
			<S.Wrap>
				<S.Logo>Zoop Zoop</S.Logo>
				<S.Form>
					<S.InputWrapBtn>
						<FontAwesomeIcon
							icon={faStarOfLife}
							color="red"
							fontSize="10px"
							style={{ marginBottom: '30px' }}
						/>
						<span>아이디</span>
						<input placeholder="E-mail" />
						<button>중복확인</button>
					</S.InputWrapBtn>
					<S.InputWrap>
						<FontAwesomeIcon
							icon={faStarOfLife}
							color="red"
							fontSize="10px"
							style={{ marginBottom: '30px' }}
						/>
						<span>비밀번호</span>
						<input placeholder="특수문자, 영어, 숫자 포함 6자이상" />
					</S.InputWrap>
					<S.InputWrap>
						<FontAwesomeIcon
							icon={faStarOfLife}
							color="red"
							fontSize="10px"
							style={{ marginBottom: '30px' }}
						/>
						<span>비밀번호 확인</span>
						<input placeholder="PW check" />
					</S.InputWrap>
					<S.InputWrapBtn>
						<FontAwesomeIcon
							icon={faStarOfLife}
							color="red"
							fontSize="10px"
							style={{ marginBottom: '30px' }}
						/>
						<span>닉네임</span>
						<input placeholder="Nick_Name" />
						<button>중복확인</button>
					</S.InputWrapBtn>
					<S.InputWrap>
						<FontAwesomeIcon
							icon={faStarOfLife}
							color="red"
							fontSize="10px"
							style={{ marginBottom: '30px' }}
						/>
						<span>전화번호</span>
						<input placeholder="010-0000-0000" />
					</S.InputWrap>
					<S.InputWrapBtn>
						<FontAwesomeIcon
							icon={faStarOfLife}
							color="red"
							fontSize="10px"
							style={{ marginBottom: '30px' }}
						/>
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
	border: 1px solid gray;
	border-radius: 10px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	height: 75%;
	padding-top: 60px;
`;

const Button = styled.button`
	/* width: 140px; */
	/* height: 40px; */
	height: 50px;
	width: 60%;
	font-size: 16px;
	border-radius: 10px;
	border: none;
	margin-top: 20px;
	color: white;
	background-color: #ff3647;
	cursor: pointer;
	margin-left: 90px;
`;

const InputWrap = styled.div`
	display: flex;
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
	margin-right: 250px;

	& > input {
		width: 55%;
		height: 10px;
		border: 1px solid gray;
		border-radius: 10px;
		margin: 10px 0px;
		display: flex;
		padding: 20px;
		font-size: 16px;
		margin-left: 10px;
	}
	& > span {
		font-size: 28px;
		font-weight: 700;
	}
	& > button {
		width: 120px;
		height: 40px;
		border-radius: 10px;
		border: 1px solid #ff3647;
		background-color: white;
		cursor: pointer;
	}
`;

const InputWrapBtn = styled.div`
	display: flex;
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
	margin-right: 250px;

	& > input {
		width: 39%;
		height: 10px;
		border: 1px solid gray;
		border-radius: 10px;
		margin: 10px 0px;
		display: flex;
		padding: 20px;
		font-size: 16px;
		margin-left: 10px;
	}
	& > span {
		font-size: 28px;
		font-weight: 700;
	}
	& > button {
		width: 120px;
		height: 40px;
		border-radius: 10px;
		border: 1px solid #ff3647;
		background-color: white;
		margin-left: 17px;
		cursor: pointer;
	}
`;

const S = {
	Div,
	Wrap,
	Logo,
	Form,
	Button,
	InputWrap,
	InputWrapBtn,
};
