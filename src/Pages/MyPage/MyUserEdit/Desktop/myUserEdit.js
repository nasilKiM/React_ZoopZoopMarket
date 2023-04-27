import styled from 'styled-components';
import Line from './Components/line';
import LineWithBtn from './Components/lineWithBtn';

const MyUserEdit = () => {
	return (
		<S.Wrapper>
			<Line
				txt={'비밀번호'}
				placeholder={'특수문자, 영어, 숫자 포함 6자 이상'}
				err={'비밀번호 조건이 맞지 않습니다'}
			/>
			<Line
				txt={'비밀번호 확인'}
				placeholder={'Password Check'}
				err={'비밀번호가 일치하지 않습니다'}
			/>
			<LineWithBtn
				txt={'닉네임'}
				placeholder={'Nickname'}
				err={'사용중인 닉네임입니다'}
				btnTxt={'중복확인'}
			/>
			<Line txt={'전화번호'} placeholder={'010-0000-0000'} />
			<LineWithBtn txt={'주소'} placeholder={'Address'} btnTxt={'주소찾기'} />
			<S.Btn>저장하기</S.Btn>
		</S.Wrapper>
	);
};

export default MyUserEdit;

const Wrapper = styled.div`
	width: 60%;
	max-width: 700px;
	min-width: 600px;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	border-radius: 10px;
	padding: 50px 20px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Btn = styled.button`
	width: 80%;
	height: 40px;
	cursor: pointer;
	border: none;
	border-radius: 10px;
	background: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const S = {
	Wrapper,
	Btn,
};
