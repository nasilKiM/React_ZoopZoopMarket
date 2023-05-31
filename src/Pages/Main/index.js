import { useEffect, useState } from 'react';
import DesktopMainPage from './Desktop';
import MainPageSkeleton from './Desktop/Components/mainSkeleton';

const MainPage = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, []);

	return <div>{isLoading ? <MainPageSkeleton /> : <DesktopMainPage />}</div>;
};

export default MainPage;
