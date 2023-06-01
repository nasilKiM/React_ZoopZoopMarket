import { Outlet } from 'react-router-dom';
import WebHeader from './Header/Desktop';
import BasicFooter from './Footer';
import styled from 'styled-components';
import RegisterBtn from 'Components/Buttons/RegisterBtn/RegisterBtn';
import TopBtn from 'Components/Buttons/TopBtn/TopBtn';
import RecentProduct from 'Components/RecentCard';
import { useSocket } from 'Context/socket';

const LayOut = () => {
	const so = useSocket();

	return (
		<>
			<Container>
				<WebHeader so={so} />
			</Container>
			<ContentWrapper>
				<Outlet />
			</ContentWrapper>
			<BasicFooter />
			<FooterWrapper></FooterWrapper>
			<TopBtn />
			<RecentWrap>
				<RecentProduct />
			</RecentWrap>
			<BtnSection>
				<RegisterBtn />
			</BtnSection>
		</>
	);
};

export default LayOut;

const ContentWrapper = styled.div`
	min-height: 100vh;
	position: relative;
`;

const Container = styled.div`
	height: 12vh;
	position: sticky;
	top: 0;
	padding-bottom: 20px;
	background-color: white;
	z-index: 10000;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
`;

const FooterWrapper = styled.div`
	position: relative;
	transform: translateY(-100%);
`;

const BtnSection = styled.div`
	width: 50px;
	height: 50px;
`;

const RecentWrap = styled.div`
	position: fixed;
	z-index: 100;
	@media (max-width: 1100px) {
		display: none;
	}
`;
