import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const zoopFadeAnimation = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const marketFadeAnimation = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const LandingPage = () => {
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		// 2초 후에 컨텐츠를 보여줍니다.
		const timer = setTimeout(() => {
			setShowContent(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<S.Wrapper>
			{!showContent ? (
				<ZOOPContainer showContent={!showContent}>
					<ZOOPWrapper>
						<ZOOPText showContent={!showContent}>ZOOP ZOOP</ZOOPText>
						<MarketText showContent={!showContent}> MARKET</MarketText>
					</ZOOPWrapper>
				</ZOOPContainer>
			) : (
				<>
					<S.ContentWrapper showContent={showContent}>
						<S.LandingHeader>
							<S.LogoImage src="/Assets/web_logo_edit4.png" />
						</S.LandingHeader>

						{/* <Title>Connect with your community</Title> */}
						<S.Section1>
							{/*
							
							<marquee>
								- ZOOP ZOOP MARKET - ZOOP ZOOP MARKET- ZOOP ZOOP MARKET- ZOOP
								ZOOP MARKET- ZOOP ZOOP MARKET - ZOOP ZOOP MARKET - ZOOP ZOOP
								MARKET- ZOOP ZOOP MARKET- ZOOP ZOOP MARKET- ZOOP ZOOP MARKETZOOP
								ZOOP MARKET - ZOOP ZOOP MARKET- ZOOP ZOOP MARKET- ZOOP ZOOP
								MARKET- ZOOP ZOOP MARKETZOOP ZOOP MARKET - ZOOP ZOOP MARKET-
								ZOOP ZOOP MARKET- ZOOP ZOOP MARKET- ZOOP ZOOP MARKETZOOP ZOOP
								MARKET - ZOOP ZOOP MARKET- ZOOP ZOOP MARKET- ZOOP ZOOP MARKET-
								ZOOP ZOOP MARKET-
							</marquee>
							
							*/}
							<p>
								이미 회원이시라면?&nbsp;&nbsp;
								<Link to="/form/login">
									<S.GoToLogin>로그인</S.GoToLogin>
								</Link>
							</p>
							<p>
								서비스를 이용하고싶다면?&nbsp;&nbsp;
								<Link to="/form/signup">
									<S.GoToSignup>회원가입</S.GoToSignup>
								</Link>
							</p>
						</S.Section1>
						<S.Section2>
							<div>
								<h3>Buy and sell locally.</h3>
								<span>
									Zoop-zoop connects you with <br /> local people who are
									interested in
									<br />
									buying your used items. <br />
									You can also browse and buy items <br />
									from others nearby.
								</span>
							</div>
							<img src="/Assets/Images/landing1.png" />
						</S.Section2>
						<S.Section3>
							<img src="/Assets/Images/landing2.png" />
							<div>
								<h3>
									Reduce waste and promote <br />
									sustainability.
								</h3>
								<SpanContainer>
									<span>
										Instead of throwing away your used items,
										<br /> give them a second life by selling ! <br />
										Together, we can reduce waste and promote environmental
										sustainability.
									</span>
								</SpanContainer>
							</div>
						</S.Section3>
						<S.Section2>
							<div>
								<h3>
									Share love to <br />
									your community.
								</h3>
								<span>
									You can earn money by selling your items, <br />
									OR you can choose to give them away <br />
									for FREE to those in need.
									<br />
									Either way,you will be <br />
									contributing to your community.
								</span>
							</div>
							<img className="fade-right" src="/Assets/Images/landing3.png" />
						</S.Section2>
					</S.ContentWrapper>
				</>
			)}
		</S.Wrapper>
	);
};

export default LandingPage;

const Wrapper = styled.div`
	width: 80%;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;

// 처음 로딩 페이지
const ZOOPContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	opacity: ${({ showContent }) => (showContent ? 0 : 1)};
	animation: ${({ showContent }) => (showContent ? fadeAnimation : 'none')} 1s
		ease-in-out forwards;
`;

const ZOOPWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ZOOPText = styled.h1`
	font-size: 48px;
	font-weight: bold;
	color: #0077c2;
	opacity: ${({ showContent }) => (showContent ? 1 : 0)};
	animation: ${({ showContent }) => (showContent ? zoopFadeAnimation : 'none')}
		1s ease-in-out forwards;
`;

const MarketText = styled.h1`
	font-size: 48px;
	font-weight: bold;
	color: #0077c2;
	opacity: ${({ showContent }) => (showContent ? 1 : 0)};
	animation: ${({ showContent }) =>
			showContent ? marketFadeAnimation : 'none'}
		1s ease-in-out forwards;
`;

//랜딩페이지
const ContentWrapper = styled.div`
	width: 100%;
	opacity: ${({ showContent }) => (showContent ? 1 : 0)};
	animation: ${({ showContent }) => (showContent ? fadeAnimation : 'none')} 1s
		ease-in-out forwards;
`;

const LandingHeader = styled.div`
	width: 100%;
	height: 100px;
	padding-top: 50px;
	margin-bottom: 30px;
	display: flex;
	justify-content: center;
`;

const LogoImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const Title = styled.div`
	font-size: 100px;
	display: absolute;
	top: 0;
	left: 0;
	margin: auto;
`;

const Section1 = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* font-size: 18px; */
	line-height: 1.5;

	& > marquee {
		width: 100%;
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
	margin-top: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 1.5;

	@media (max-width: 768px) {
		flex-direction: column;
	}

	h3 {
		margin-bottom: 15px;
		letter-spacing: -0.02em;
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
		font-size: ${({ theme }) => theme.fontSize.lg};
	}

	span {
		letter-spacing: 0.12em;
		font-size: ${({ theme }) => theme.fontSize.sm};
	}

	img {
		position: relative;
		width: 50%;
		max-width: 650px;
		right: 0;
		border-radius: 15px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
		animation: slide 1s ease-out;

		@media (max-width: 768px) {
			position: static;
			width: 100%;
		}
	}
	@keyframes slide {
		from {
			right: -100px;
			opacity: 0;
		}
		to {
			right: 0;
			opacity: 1;
		}
	}
`;

const Section3 = styled.div`
	height: 500px;
	margin-top: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 1.5;
	animation: slide-left 1s ease-out;

	@media (max-width: 768px) {
		flex-direction: column;
	}

	h3 {
		text-align: right;
		margin-bottom: 15px;
		letter-spacing: -0.02em;
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
		font-size: ${({ theme }) => theme.fontSize.lg};
	}

	span {
		text-align: right;
		letter-spacing: 0.12em;
		font-size: ${({ theme }) => theme.fontSize.sm};
	}

	img {
		width: 50%;
		max-width: 650px;
		left: 0;
		border-radius: 15px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

		@media (max-width: 768px) {
			position: static;
			width: 100%;
		}
	}
`;

const SpanContainer = styled.div`
	text-align: right;
`;

const S = {
	Wrapper,
	ContentWrapper,
	LandingHeader,
	LogoImage,
	Section1,
	GoToLogin,
	GoToSignup,
	Section2,
	Section3,
};
