import { Outlet } from 'react-router-dom';
import WebHeader from './Header/Desktop';
import BasicFooter from './Footer';
import BottomNav from 'Components/MenuBar/bottomNav';
import { isDesktop, isMobile } from 'react-device-detect';

const LayOut = () => {
	return (
		<>
			<WebHeader />
			<Outlet />
			{isMobile ? <BottomNav /> : null}
			{isDesktop ? <BasicFooter /> : null}
		</>
	);
};

export default LayOut;
