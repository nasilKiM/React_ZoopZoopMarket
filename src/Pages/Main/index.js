import { isDesktop, isMobile } from 'react-device-detect';
import DesktopMainPage from './Desktop';
import MobileMain from './Mobile';

const MainPage = () => {
	return (
		<div>
			{isMobile ? <MobileMain></MobileMain> : null}
			{isDesktop ? <DesktopMainPage></DesktopMainPage> : null}
		</div>
	);
};

export default MainPage;
