import ItemCard from 'Components/Card/Card';
import ChattingPage from 'Pages/Chat';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingPage = () => {
	return (
		<>
			<ChattingPage />
			<S.LandingHeader>로고들어가는곳</S.LandingHeader>
			<S.Section1>
				<div>상품 아이콘이미지 애니메이션</div>
				<p>
					이미 회원이시라면?&nbsp;&nbsp;
					<Link to="/login">
						<S.GoToLogin>회원가입</S.GoToLogin>
					</Link>
				</p>
				<p>
					서비스를 이용하고싶다면?&nbsp;&nbsp;
					<Link to="/signup">
						<S.GoToSignup>회원가입</S.GoToSignup>
					</Link>
				</p>
			</S.Section1>
			<S.Section2> 줍줍마켓 서비스설명1+이미지</S.Section2>
			<S.Section2> 줍줍마켓 서비스설명2+이미지</S.Section2>

			<div>
				LANDING PAGE
				<ItemCard />
			</div>
		</>
	);
};

export default LandingPage;

const LandingHeader = styled.div`
	width: 100%;
	height: 150px;
	padding-top: 50px;
`;
const Section1 = styled.div``;
const GoToLogin = styled.div``;
const GoToSignup = styled.div``;
const Section2 = styled.div``;
const Section3 = styled.div``;

const S = {
	LandingHeader,
	Section1,
	GoToLogin,
	GoToSignup,
	Section2,
	Section3,
};
