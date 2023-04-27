import BasicFooter from 'Components/Layout/Footer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MobileLandingPage = () => {
	return (
		<>
			<S.Wrapper>
				<S.LandingHeader>
					<S.LogoImage src="Assets/mob_logo.png" />
				</S.LandingHeader>
				<S.Section1>
					<marquee>
						- ZOOP ZOOP MARKET - ZOOP ZOOP MARKET- ZOOP ZOOP MARKET- ZOOP ZOOP
						MARKET- ZOOP ZOOP MARKET -
					</marquee>
					<p>
						이미 회원이시라면?&nbsp;&nbsp;
						<Link to="/form/login">
							<S.GoToLogin>회원가입</S.GoToLogin>
						</Link>
					</p>
					<p>
						서비스를 이용하고싶다면?&nbsp;&nbsp;
						<Link to="/form/signup">
							<S.GoToSignup>회원가입</S.GoToSignup>
						</Link>
					</p>
				</S.Section1>
				<S.Section2> 줍줍마켓 서비스설명1+이미지</S.Section2>
				<S.Section2> 줍줍마켓 서비스설명2+이미지</S.Section2>
			</S.Wrapper>
			<BasicFooter />
		</>
	);
};

export default MobileLandingPage;

const Wrapper = styled.div`
	width: 90%;
	max-width: 400px;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	border: 1px solid red;
`;

const LandingHeader = styled.div`
	width: 100%;
	height: 100px;
	padding-top: 20px;
	display: flex;
	justify-content: center;
`;

const LogoImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const Section1 = styled.section`
	height: 500px;
	background-color: #f2f2f2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	line-height: 1.5;

	& > marquee {
		width: 350px;
		height: 40px;
		background-color: #fff;
		margin-bottom: 15px;
	}
	& > p {
		font-size: ${({ theme }) => theme.fontSize.base};
		margin-top: 10px;
	}

	@keyframes slide {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}
`;

const GoToLogin = styled.span`
	color: #0077c2;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

const GoToSignup = styled.span`
	color: #0077c2;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

const Section2 = styled.section`
	height: 500px;
	margin-top: 50px;
	background-color: #f2f2f2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	line-height: 1.5;
`;

const S = {
	Wrapper,
	LandingHeader,
	LogoImage,
	Section1,
	GoToLogin,
	GoToSignup,
	Section2,
};
