import { Link, Outlet } from 'react-router-dom';
import WebHeader from './Header/Desktop';
import BasicFooter from './Footer';
import styled from 'styled-components';
import RegisterBtn from 'Components/Buttons/RegisterBtn/RegisterBtn';
import TopBtn from 'Components/Buttons/TopBtn/TopBtn';
import RecentProduct from 'Components/RecentCard';

const LayOut = () => {
	return (
		<>
			<Wrapper>
				<WebHeader />
			</Wrapper>
			<RecentWrap>
				<RecentProduct />
			</RecentWrap>
			<Outlet />
			<BasicFooter />
			<TopBtn />
			<Link to={'/register'}>
				<BtnSection>
					<RegisterBtn />
				</BtnSection>
			</Link>
		</>
	);
};

export default LayOut;

const Wrapper = styled.div`
	height: 12vh;
	position: sticky;
	top: 0;
	padding-bottom: 20px;
	background-color: white;
	z-index: 10000;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
`;

const BtnSection = styled.div`
	width: 50px;
	height: 50px;
`;

const RecentWrap = styled.div`
	position: fixed;
	top: 500px;
	right: 130px;
	z-index: 100;
`;
