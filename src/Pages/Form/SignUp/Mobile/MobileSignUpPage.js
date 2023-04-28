import {
	flexAlignCenter,
	flexAllCenter,
	flexJustifyCenter,
} from 'Styles/common';
import styled from 'styled-components';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileSignUpPage = () => {
	return (
		<S.Div>
			<S.Wrap>
				<S.Head>
					<span>
						<FontAwesomeIcon icon={faChevronLeft} />
					</span>
					<span>회원가입</span>
				</S.Head>

				<S.Form>
					<S.InputWrapBtn>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>아이디</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<input placeholder="E-mail" />
							<button>중복확인</button>
						</S.InputBoxWrap>
					</S.InputWrapBtn>
					<S.InputWrap>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>비밀번호</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<input
								placeholder="특수문자, 영어, 숫자 포함 6자이상"
								type="password"
							/>
						</S.InputBoxWrap>
					</S.InputWrap>
					<S.InputWrap>
						<S.ItemWrap>
							<S.Mark>*</S.Mark>
							<span>비밀번호 확인</span>
						</S.ItemWrap>
						<S.InputBoxWrap>
							<input placeholder="PW check" type="password" />
						</S.InputBoxWrap>
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
};
