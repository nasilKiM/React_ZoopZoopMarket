import { Outlet } from 'react-router-dom';
import WebHeader from './Header/Desktop';
import BasicFooter from './Footer';
import BottomNav from 'Components/MenuBar/bottomNav';
import { isMobile } from 'react-device-detect';
import MobileHeader from './Header/Mobile';

const LayOut = () => {
	return (
		<>
			{isMobile ? <MobileHeader /> : <WebHeader />}
			<Outlet />
			{isMobile ? <BottomNav /> : <BasicFooter />}
		</>
	);
};

export default LayOut;
