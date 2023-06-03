import { useEffect, useState } from 'react';

import DesktopMainPage from './Desktop';
import MainPageSkeleton from '../Skeleton/page/mainSkeleton';

const MainPage = () => {
	const [isLoading, setIsLoading] = useState(true);

	const preventGoBack = () => {
		history.pushState(null, '', location.href);
	};

	useEffect(() => {
		history.pushState(null, '', location.href);
		window.addEventListener('popstate', preventGoBack);

		return () => {
			window.removeEventListener('popstate', preventGoBack);
		};
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, []);

	return <div>{isLoading ? <MainPageSkeleton /> : <DesktopMainPage />}</div>;
};

export default MainPage;
