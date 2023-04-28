import styled from 'styled-components';
import Line from './Components/line';
import UploadFiles from './Components/uploadFiles';
import TextArea from './Components/textArea';

const RegisterPage = () => {
	return (
		<S.Wrapper>
			<UploadFiles />
			<S.Blank></S.Blank>
			<Line
				txt={'글 제목'}
				placeholder={'최대 20자까지 입력 가능합니다.'}
				err={'20자 이하로 입력해주세요 :)'}
				max={'19'}
			/>
			<Line
				txt={'가격'}
				placeholder={'0원 기입시 무료 나눔템으로 분류됩니다.'}
				err={'필수 입력 사항입니다.'}
			/>
			<Line
				txt={'태그'}
				placeholder={'#재훈이네  #금쪽이  #이재훈'}
				err={'최소 1개 이상 입력해주세요.'}
			/>
			<TextArea txt={'본문 내용'} />
			<S.Container>
				<S.RegisterBtn>등록하기</S.RegisterBtn>
			</S.Container>
		</S.Wrapper>
	);
};

export default RegisterPage;

const Wrapper = styled.div`
	margin: 50px 0;
`;

const Blank = styled.div`
	width: 100%;
	height: 20px;
`;

const Container = styled.div`
	width: 700px;
	margin: 0 auto;
	padding: 10px;
	display: flex;
`;

const RegisterBtn = styled.button`
	width: 340px;
	height: 54px;
	border: none;
	border-radius: 5px;
	font-size: ${({ theme }) => theme.fontSize.big};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	background-color: ${({ theme }) => theme.color.subBeige};
	margin-left: auto;
	cursor: pointer;
	:hover {
		background-color: ${({ theme }) => theme.color.primary};
		color: ${({ theme }) => theme.color.white};
	}
`;

const S = {
	Wrapper,
	Blank,
	Container,
	RegisterBtn,
};
