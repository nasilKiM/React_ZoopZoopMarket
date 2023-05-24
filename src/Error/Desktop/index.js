import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DesktopError = () => {
	return (
		<S.Wrapper>
			<S.ImageContainer>
				<S.ErrorImage src="/Assets/Error.png"></S.ErrorImage>
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
	width: 70%;
	max-width: 1200px;
	min-width: 700px;
	margin: 0 auto;
`;

const ImageContainer = styled.div`
	margin-top: 100px;
	margin-bottom: 60px;
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
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	margin-bottom: 30px;
`;

const Emphasize = styled.div`
	margin-bottom: 25px;
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
	background-color: ${({ theme }) => theme.color.gray[200]};
	padding: 20px;
	border-radius: 10px;
	:hover {
		background-color: ${({ theme }) => theme.color.primary[400]};
		color: ${({ theme }) => theme.color.white};
	}
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
