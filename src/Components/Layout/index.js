import BasicFooter from './Footer';
import { Outlet } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

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
