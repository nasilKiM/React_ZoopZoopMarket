import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const LandingPage = () => {
	const [showContent, setShowContent] = useState(false);
	const [hoveredIndex, setHoveredIndex] = useState(-1);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowContent(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const handleMouseOver = index => {
		setHoveredIndex(index);
	};

	const handleMouseOut = () => {
		setHoveredIndex(-1);
	};

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
					<S.Title>
						원하는 상품은 ? <span>줍줍마켓 ! </span>
						<br /> 물건을 팔때도 ? <span>줍줍마켓 ! </span>
					</S.Title>
				</S.Section1>
				<S.Section2>
					<S.White>
						<div
							onMouseOver={() => handleMouseOver(0)}
							onMouseOut={handleMouseOut}
						>
							{hoveredIndex !== 0 ? (
								<img src="/Assets/Images/Landing/0_baseball_edit.png" />
							) : (
								<img src="/Assets/Images/Landing/hover_image_0.png" />
							)}
						</div>
						<div
							onMouseOver={() => handleMouseOver(1)}
							onMouseOut={handleMouseOut}
						>
							{hoveredIndex !== 1 ? (
								<img src="/Assets/Images/Landing/1_eyeball_edit.png" />
							) : (
								<img src="/Assets/Images/Landing/hover_image_1.png" />
							)}
						</div>
						<div
							onMouseOver={() => handleMouseOver(2)}
							onMouseOut={handleMouseOut}
						>
							{hoveredIndex !== 2 ? (
								<img src="/Assets/Images/Landing/2_couch_edit.png" />
							) : (
								<img src="/Assets/Images/Landing/hover_image_2.png" />
							)}
						</div>
						<div
							onMouseOver={() => handleMouseOver(3)}
							onMouseOut={handleMouseOut}
						>
							{hoveredIndex !== 3 ? (
								<img src="/Assets/Images/Landing/3_stroller_edit.png" />
							) : (
								<img src="/Assets/Images/Landing/hover_image_3.png" />
							)}
						</div>
						<div
							onMouseOver={() => handleMouseOver(4)}
							onMouseOut={handleMouseOut}
						>
							{hoveredIndex !== 4 ? (
								<img src="/Assets/Images/Landing/4_heel_edit.png" />
							) : (
								<img src="/Assets/Images/Landing/hover_image_4.png" />
							)}
						</div>
						<div
							onMouseOver={() => handleMouseOver(5)}
							onMouseOut={handleMouseOut}
						>
							{hoveredIndex !== 5 ? (
								<img src="/Assets/Images/Landing/5_cat_edit.png" />
							) : (
								<img src="/Assets/Images/Landing/hover_image_5.png" />
							)}
						</div>
					</S.White>
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

	:hover {
		text-decoration: underline;
		background-color: ${({ theme }) => theme.color.primary[300]};
	}
`;

const GoToSignup = styled.button`
	cursor: pointer;
	background-color: ${({ theme }) => theme.color.gray[300]};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.white};
	padding: 10px 20px;
	margin-right: 15px;
	border: none;
	border-radius: 4px;

	:hover {
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
	span {
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
		:hover {
			color: ${({ theme }) => theme.color.primary[300]};
		}
	}

	@media (max-width: 768px) {
		font-size: ${({ theme }) => theme.fontSize.md};
	}
`;

const Section2 = styled.section`
	width: 100%;
	height: 100%;
	padding-top: 800px;
	position: relative;
`;

const White = styled.div`
	> div:nth-of-type(1) > img {
		position: absolute;
		width: 100%;
		max-width: 200px;
		bottom: 8%;
		left: 8%;
	}

	> div:nth-of-type(2) > img {
		position: absolute;
		width: 100%;
		max-width: 230px;
		top: 20%;
		left: 20%;
	}

	> div:nth-of-type(3) > img {
		position: absolute;
		width: 100%;
		max-width: 550px;
		top: 10%;
		right: 15%;
	}

	> div:nth-of-type(4) > img {
		position: absolute;
		width: 100%;
		max-width: 310px;
		bottom: 10%;
		left: 27%;
	}

	> div:nth-of-type(5) > img {
		position: absolute;
		width: 100%;
		max-width: 200px;
		bottom: 15%;
		right: 32%;
	}

	> div:nth-of-type(6) > img {
		position: absolute;
		width: 100%;
		max-width: 180px;
		bottom: 7%;
		right: 8%;
	}

	@media (max-width: 1100px) {
		> div:nth-of-type(1) > img {
			position: absolute;
			width: 100%;
			max-width: 180px;
			bottom: 8%;
			left: 8%;
		}

		> div:nth-of-type(2) > img {
			position: absolute;
			width: 100%;
			max-width: 230px;
			top: 20%;
			left: 15%;
		}

		> div:nth-of-type(3) > img {
			position: absolute;
			width: 100%;
			max-width: 400px;
			top: 10%;
			right: 5%;
		}

		> div:nth-of-type(4) > img {
			position: absolute;
			width: 100%;
			max-width: 310px;
			bottom: 10%;
			left: 27%;
		}

		> div:nth-of-type(5) > img {
			position: absolute;
			width: 100%;
			max-width: 180px;
			top: 35%;
			right: 32%;
		}

		> div:nth-of-type(6) > img {
			position: absolute;
			width: 100%;
			max-width: 180px;
			bottom: 7%;
			right: 8%;
		}
	}

	@media (max-width: 768px) {
		> div:nth-of-type(1) > img {
			position: absolute;
			width: 100%;
			max-width: 180px;
			top: 8%;
			left: 8%;
		}

		> div:nth-of-type(2) > img {
			position: absolute;
			width: 100%;
			max-width: 230px;
			top: 42%;
			left: 50%;
		}

		> div:nth-of-type(3) > img {
			position: absolute;
			width: 100%;
			max-width: 420px;
			top: 10%;
			right: 5%;
		}

		> div:nth-of-type(4) > img {
			position: absolute;
			width: 100%;
			max-width: 250px;
			bottom: 5%;
			left: 5%;
		}

		> div:nth-of-type(5) > img {
			position: absolute;
			width: 100%;
			max-width: 150px;
			top: 70%;
			right: 32%;
		}

		> div:nth-of-type(6) > img {
			position: absolute;
			width: 100%;
			max-width: 150px;
			bottom: 7%;
			right: 5%;
		}
	}
	@media (max-width: 550px) {
		> div:nth-of-type(1) > img {
			position: absolute;
			width: 100%;
			max-width: 120px;
			top: 8%;
			left: 8%;
		}

		> div:nth-of-type(2) > img {
			position: absolute;
			width: 100%;
			max-width: 180px;
			top: 32%;
			left: 50%;
		}

		> div:nth-of-type(3) > img {
			position: absolute;
			width: 100%;
			max-width: 250px;
			top: 10%;
			right: 5%;
		}

		> div:nth-of-type(4) > img {
			position: absolute;
			width: 100%;
			max-width: 200px;
			bottom: 5%;
			left: 5%;
		}

		> div:nth-of-type(5) > img {
			position: absolute;
			width: 100%;
			max-width: 120px;
			top: 48%;
			right: 52%;
		}

		> div:nth-of-type(6) > img {
			position: absolute;
			width: 100%;
			max-width: 130px;
			bottom: 17%;
			right: 5%;
		}
	}

	@media (max-width: 370px) {
		> div:nth-of-type(1) > img {
			position: absolute;
			width: 100%;
			max-width: 100px;
			top: 20%;
			left: 8%;
		}

		> div:nth-of-type(2) > img {
			position: absolute;
			width: 100%;
			max-width: 150px;
			top: 32%;
			left: 50%;
		}

		> div:nth-of-type(3) > img {
			position: absolute;
			width: 100%;
			max-width: 250px;
			top: 10%;
			right: 5%;
		}

		> div:nth-of-type(4) > img {
			position: absolute;
			width: 100%;
			max-width: 200px;
			bottom: 5%;
			left: 5%;
		}

		> div:nth-of-type(5) > img {
			position: absolute;
			width: 100%;
			max-width: 120px;
			top: 48%;
			right: 52%;
		}

		> div:nth-of-type(6) > img {
			position: absolute;
			width: 100%;
			max-width: 120px;
			bottom: 20%;
			right: 5%;
		}
	}
`;

const S = {
	Wrapper,
	ContentWrapper,
	LandingHeader,
	LogoImage,
	Section1,
	Title,
	GoToLogin,
	GoToSignup,
	Section2,
	White,
};
