import { isDesktop, isMobile } from 'react-device-detect';
import LandingPage from './Desktop';
import MobileLandingPage from './Mobile';

const MainPage = () => {
	return (
		<div>
			{isMobile ? <MobileLandingPage></MobileLandingPage> : null}
			{isDesktop ? <LandingPage></LandingPage> : null}
		</div>
	);
};

export default MainPage;
