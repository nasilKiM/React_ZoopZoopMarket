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
						원하는 상품은 ? 줍줍마켓 <br />{' '}
					</Title>
				</S.Section1>
				<S.Section2></S.Section2>
				<S.Section3></S.Section3>
				<S.Section2></S.Section2>
			</S.ContentWrapper>
		</S.Wrapper>
	);
};

export default LandingPage;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
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
`;

const Logo = styled.div`
	width: 250px;
	margin-left: 20px;
`;

const LogoImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const Title = styled.div`
	font-size: 70px;
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
	line-height: 1.5;
	color: ${({ theme }) => theme.color.white};
`;

const GoToLogin = styled.button`
	color: #0077c2;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

const GoToSignup = styled.button`
	color: #0077c2;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

const Section2 = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 1.5;
`;

const Section3 = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
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
