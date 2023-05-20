import { Outlet } from 'react-router-dom';
import WebHeader from './Header/Desktop';
import BasicFooter from './Footer';
import styled from 'styled-components';
// import BottomNav from 'Components/MenuBar/bottomNav';
// import MobileHeader from './Header/Mobile';

const LayOut = () => {
	return (
		<>
			<Wrapper>
				<WebHeader />
			</Wrapper>
			<Outlet />
			<BasicFooter />
		</>
	);
};

export default LayOut;

const Wrapper = styled.div`
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 1;
	/* border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]}; */
`;
