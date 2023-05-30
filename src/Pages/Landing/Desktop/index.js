import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
			<S.ContentWrapper showContent={showContent}>
				<S.LandingHeader>
					<Logo>
						<S.LogoImage src="/Assets/web_logo_edit4_white.png" />
					</Logo>
					<div>
						<Link to="/form/login">
							<S.GoToLogin>로그인</S.GoToLogin>
						</Link>

						<Link to="/form/signup">
							<S.GoToSignup>회원가입</S.GoToSignup>
						</Link>
					</div>
				</S.LandingHeader>

				<S.Section1>
					<Title>
						원하는 상품은 ? 줍줍마켓 <br /> 싫증난 물건도 ? 줍줍마켓
						<br /> ... <br />
					</Title>
				</S.Section1>
				<S.Section2>
					<S.White>
						<div>
							<img src="/Assets/Images/Landing/w_baseball.png" />
						</div>
						<div>
							<img src="/Assets/Images/Landing/w_eyeball.png" />={' '}
						</div>
						<div>
							<img src="/Assets/Images/Landing/w_couch.png" />
						</div>
						<div>
							<img src="/Assets/Images/Landing/w_child.png" />
						</div>
						<div>
							<img src="/Assets/Images/Landing/w_heel.png" />
						</div>
						<div>
							<img src="/Assets/Images/Landing/w_cat.png" />
						</div>
					</S.White>
					<S.HoverWhite>
						<div>
							<OverlayImage src="/Assets/Images/Landing/c_baseball.png" />
						</div>
						<div>
							<OverlayImage src="/Assets/Images/Landing/c_eyeball.png" />={' '}
						</div>
						<div>
							<OverlayImage src="/Assets/Images/Landing/c_couch.png" />
						</div>
						<div>
							<OverlayImage src="/Assets/Images/Landing/c_child.png" />
						</div>
						<div>
							<OverlayImage src="/Assets/Images/Landing/c_heel.png" />
						</div>
						<div>
							<OverlayImage src="/Assets/Images/Landing/c_cat.png" />
						</div>
					</S.HoverWhite>
				</S.Section2>
			</S.ContentWrapper>
		</S.Wrapper>
	);
};

export default LandingPage;

const Wrapper = styled.div`
	width: 100%;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	background-image: url(https://static.wixstatic.com/media/9feeef_e187accd020c4b0499a3caaa86102c34f000.jpg/v1/fill/w_1020,h_725,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/9feeef_e187accd020c4b0499a3caaa86102c34f000.jpg);
	background-repeat: no-repeat;
	background-size: cover;
`;

//랜딩페이지
const ContentWrapper = styled.div`
	width: 100%;
	opacity: ${({ showContent }) => (showContent ? 1 : 0)};
`;

const LandingHeader = styled.div`
	width: 100%;
	height: 100px;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	@media (max-width: 768px) {
		height: 150px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
`;

const Logo = styled.div`
	width: 250px;
	margin-left: 20px;
`;

const LogoImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const GoToLogin = styled.button`
	cursor: pointer;
	background-color: ${({ theme }) => theme.color.gray[300]};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: white;
	padding: 10px 20px;
	margin-right: 15px;
	border: none;
	border-radius: 4px;
	&:hover {
		text-decoration: underline;
		background-color: ${({ theme }) => theme.color.primary[300]};
	}
`;

const GoToSignup = styled.button`
	cursor: pointer;
	background-color: ${({ theme }) => theme.color.gray[300]};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: white;
	padding: 10px 20px;
	margin-right: 15px;
	border: none;
	border-radius: 4px;

	&:hover {
		text-decoration: underline;
		background-color: ${({ theme }) => theme.color.primary[400]};
	}
`;

const Section1 = styled.section`
	display: flex;
	justify-content: center;
	text-align: center;
	padding-top: 50px;
	line-height: 1.7;
	color: ${({ theme }) => theme.color.white};
`;
const Title = styled.div`
	font-size: 24px;
`;

const Section2 = styled.section`
	width: 100%;
	height: 100%;
	padding-top: 800px;
	position: relative;
`;

const White = styled.div`
	width: 100%;
	// 야구배트
	& > div:nth-of-type(1) > img {
		position: absolute;
		width: 100%;
		max-width: 230px;
		bottom: 8%;
		left: 8%;
	}
	// 눈알
	& > div:nth-of-type(2) > img {
		position: absolute;
		width: 100%;
		max-width: 130px;
		top: 20%;
		left: 30%;
	}
	// 소파
	& > div:nth-of-type(3) > img {
		position: absolute;
		width: 100%;
		max-width: 550px;
		top: 10%;
		right: 15%;
	}
	// 유모차
	& > div:nth-of-type(4) > img {
		position: absolute;
		width: 100%;
		max-width: 275px;
		bottom: 5%;
		left: 27%;
	}
	// 하이힐
	& > div:nth-of-type(5) > img {
		position: absolute;
		width: 100%;
		max-width: 300px;
		bottom: 15%;
		right: 30%;
	}
	// 쪼밥이
	& > div:nth-of-type(6) > img {
		position: absolute;
		width: 100%;
		max-width: 180px;
		bottom: 7%;
		right: 8%;
	}
	// 반응형
	@media (max-width: 768px) {
		//야구배트
		& > div:nth-of-type(1) > img {
			width: 70%;
			max-width: 150px;
			top: 30%;
			left: 5%;
		}
		// 눈알
		& > div:nth-of-type(2) > img {
			width: 40%;
			max-width: 90px;
			top: 35%;
			left: 45%;
		}
		// 소파
		& > div:nth-of-type(3) > img {
			width: 90%;
			max-width: 350px;
			top: 5%;
			right: 5%;
		}
		// 유모차
		& > div:nth-of-type(4) > img {
			width: 50%;
			max-width: 180px;
			top: 50%;
			left: 55%;
		}
		// 하이힐
		& > div:nth-of-type(5) > img {
			width: 40%;
			max-width: 180px;
			bottom: 5%;
			left: 10%;
		}
		// 쪼밥이
		& > div:nth-of-type(6) > img {
			width: 100%;
			max-width: 120px;
			bottom: 5.5%;
			right: 10.5%;
		}
	}
`;

const OverlayImage = styled.img`
	position: relative;
	z-index: 1;
	opacity: 0;
	transition: opacity 0.3s ease;
	:hover {
		opacity: 1;
	}
`;

const HoverWhite = styled.div`
	//야구배트
	& > div:nth-of-type(1) > img {
		position: absolute;
		width: 100%;
		max-width: 165px;
		bottom: 11%;
		left: 10%;
	}
	// 눈알
	& > div:nth-of-type(2) > img {
		position: absolute;
		width: 100%;
		max-width: 310px;
		top: 12%;
		left: 24.3%;
	}
	// 소파
	& > div:nth-of-type(3) > img {
		position: absolute;
		width: 100%;
		max-width: 450px;
		top: 13%;
		right: 18%;
	}
	// 유모차
	& > div:nth-of-type(4) > img {
		position: absolute;
		width: 100%;
		max-width: 275px;
		bottom: 7.5%;
		left: 25.5%;
	}
	// 하이힐
	& > div:nth-of-type(5) > img {
		position: absolute;
		width: 100%;
		max-width: 180px;
		bottom: 17%;
		right: 34.5%;
	}
	// 쪼밥이
	& > div:nth-of-type(6) > img {
		position: absolute;
		width: 100%;
		max-width: 330px;
		bottom: 2.4%;
		right: 3.65%;
	}
	// 반응형
	@media (max-width: 768px) {
		//야구배트
		& > div:nth-of-type(1) > img {
			width: 70%;
			max-width: 100px;
			top: 33%;
			left: 10%;
		}
		// 눈알
		& > div:nth-of-type(2) > img {
			width: 100%;
			max-width: 210px;
			top: 29.7%;
			left: 31.6%;
		}
		// 소파
		& > div:nth-of-type(3) > img {
			width: 90%;
			max-width: 300px;
			top: 6%;
			right: 10%;
		}
		// 유모차
		& > div:nth-of-type(4) > img {
			width: 50%;
			max-width: 180px;
			top: 48.5%;
			left: 52%;
		}
		// 하이힐
		& > div:nth-of-type(5) > img {
			width: 40%;
			max-width: 110px;
			bottom: 6%;
			left: 15%;
		}
		// 쪼밥이
		& > div:nth-of-type(6) > img {
			width: 50%;
			width: 220px;
			bottom: 2%;
			right: 0%;
		}
	}
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
	White,
	HoverWhite,
};
