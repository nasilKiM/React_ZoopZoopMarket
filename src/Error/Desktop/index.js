import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DesktopError = () => {
	return (
		<S.Wrapper>
			<S.ImageContainer>
				<S.ErrorImage src="Assets/Images/errorImg.png"></S.ErrorImage>
			</S.ImageContainer>
			<S.Text>
				<S.Emphasize>에러가 발생했습니다!</S.Emphasize>
				요청해주신 페이지를 찾을 수 없습니다.
			</S.Text>
			<S.ButtonBox>
				<S.GoMain to="/main">메인 페이지로 이동</S.GoMain>
			</S.ButtonBox>
		</S.Wrapper>
	);
};

export default DesktopError;

const Wrapper = styled.div`
	width: 60%;
	max-width: 1000px;
	min-width: 700px;
	margin: 0 auto;
`;

const ImageContainer = styled.div`
	margin: 100px;
	display: flex;
	justify-content: center;
`;
const ErrorImage = styled.img`
	width: 400px;
	margin-top: 100px;
`;

const Text = styled.div`
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.base};
	margin-bottom: 20px;
`;

const Emphasize = styled.div`
	margin-bottom: 20px;
	color: ${({ theme }) => theme.color.primary};
	font-size: ${({ theme }) => theme.fontSize.big};
`;
const ButtonBox = styled.div`
	width: 40%;
	margin: 0 auto;
	padding: 10px;
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.color.primary};
	border-radius: 15px;
`;

const GoMain = styled(Link)`
	color: ${({ theme }) => theme.color.black};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	text-decoration: none;
`;

const S = {
	Wrapper,
	ImageContainer,
	ErrorImage,
	Text,
	Emphasize,
	ButtonBox,
	GoMain,
};
