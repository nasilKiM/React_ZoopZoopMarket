import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MobileError = () => {
	return (
		<S.MobileWrapper>
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
		</S.MobileWrapper>
	);
};

export default MobileError;
const MobileWrapper = styled.div`
	border: 2px solid magenta;
	width: 414px;
	height: 736px;
	margin: 0 auto;
`;
const Wrapper = styled.div`
	width: 60%;
	margin: 0 auto;
`;

const ImageContainer = styled.div`
	margin: 100px;
	display: flex;
	justify-content: center;
`;
const ErrorImage = styled.img`
	width: 300px;
	margin-top: 20px;
`;

const Text = styled.div`
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.sm};
	margin-bottom: 20px;
`;

const Emphasize = styled.div`
	margin-bottom: 20px;
	color: ${({ theme }) => theme.color.primary};
	font-size: ${({ theme }) => theme.fontSize.md};
`;
const ButtonBox = styled.div`
	width: 60%;
	margin: 0 auto;
	padding: 10px;
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.color.primary};
	border-radius: 15px;
	margin-top: 200px;
`;

const GoMain = styled(Link)`
	color: ${({ theme }) => theme.color.black};
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	text-decoration: none;
`;

const S = {
	MobileWrapper,
	Wrapper,
	ImageContainer,
	ErrorImage,
	Text,
	Emphasize,
	ButtonBox,
	GoMain,
};
