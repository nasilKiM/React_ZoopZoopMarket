import { isDesktop, isMobile } from 'react-device-detect';
import MobileSearchList from './Mobile';
import DesktopSearchList from './Desktop';

const SearchListPage = () => {
	return (
		<div>
			{isMobile ? <MobileSearchList /> : null}
			{isDesktop ? <DesktopSearchList /> : null}
		</div>
	);
};

export default SearchListPage;
