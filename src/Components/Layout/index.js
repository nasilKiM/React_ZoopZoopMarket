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

const LayOut = () => {
	const so = useSocket();

	return (
		<>
			<ErrorBoundary FallbackComponent={ErrorPage} onError={() => {}}>
				<S.Container>
					<WebHeader so={so} />
				</S.Container>
				<S.ContentWrapper>
					<Outlet />
				</S.ContentWrapper>
				<BasicFooter />
				<S.FooterWrapper></S.FooterWrapper>
				<TopBtn />
				<S.RecentWrap>
					<RecentProduct />
				</S.RecentWrap>
				<S.BtnSection>
					<RegisterBtn />
				</S.BtnSection>
			</ErrorBoundary>
		</>
	);
};

export default LayOut;

const Container = styled.div`
	height: 12vh;
	position: sticky;
	top: 0;
	padding-bottom: 20px;
	background-color: white;
	z-index: 10000;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
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
`;

const S = {
	Container,
	ContentWrapper,
	FooterWrapper,
	RecentWrap,
	BtnSection,
};
