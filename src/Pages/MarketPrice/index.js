import { isDesktop, isMobile } from 'react-device-detect';
import DesktopMarketPrice from './Desktop';
import MobileMarketPrice from './Mobile';

const MarketPricePage = () => {
	return (
		<div>
			{isMobile ? <MobileMarketPrice /> : null}
			{isDesktop ? <DesktopMarketPrice /> : null}
		</div>
	);
};

export default MarketPricePage;
