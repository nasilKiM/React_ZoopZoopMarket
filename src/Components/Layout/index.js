import { Outlet } from 'react-router-dom';

import WebHeader from './Header';
import BasicFooter from './Footer';
import RegisterBtn from 'Components/Buttons/RegisterBtn/RegisterBtn';
import TopBtn from 'Components/Buttons/TopBtn/TopBtn';
import RecentProduct from 'Components/RecentCard';

import { useSocket } from 'Context/socket';
import styled from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from 'Error';
import MobileNavigation from './Footer/MobileFooter/bottomNavigate';

const LayOut = () => {
	const so = useSocket();

	return (
		<Div>
			<ErrorBoundary FallbackComponent={ErrorPage} onError={() => {}}>
				<S.Container>
					<WebHeader so={so} />
				</S.Container>
				<S.ContentWrapper>
					<Outlet />
				</S.ContentWrapper>

				<S.FooterWrap>
					<BasicFooter />
				</S.FooterWrap>

				<S.MobileWrap>
					<MobileNavigation />
				</S.MobileWrap>

				<S.FooterWrapper></S.FooterWrapper>
				<TopBtn />
				<S.RecentWrap>
					<RecentProduct />
				</S.RecentWrap>
				<S.BtnSection>
					<RegisterBtn />
				</S.BtnSection>
			</ErrorBoundary>
		</Div>
	);
};

export default LayOut;

const Div = styled.div`
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

const FooterWrap = styled.div`
	bottom: 0;
	@media ${({ theme }) => theme.device.mobile} {
		display: none;
	}
`;

const MobileWrap = styled.div`
	display: none;
	@media ${({ theme }) => theme.device.mobile} {
		display: block;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 9999999;
	}
`;

const ContentWrapper = styled.div`
	min-height: 100vh;
	position: relative;
`;

const FooterWrapper = styled.div`
	position: relative;
	transform: translateY(-100%);
`;

const RecentWrap = styled.div`
	position: fixed;
	z-index: 100;
	@media (max-width: 1100px) {
		display: none;
	}
`;

const BtnSection = styled.div`
	width: 50px;
	height: 50px;
	@media ${({ theme }) => theme.device.mobile} {
		display: none;
	}
`;

const S = {
	Container,
	ContentWrapper,
	FooterWrapper,
	RecentWrap,
	BtnSection,
	FooterWrap,
	MobileWrap,
};
