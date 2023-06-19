import { useEffect } from 'react';

const usePreventGoingBack = goBackCallback => {
	const preventGoBack = () => {
		history.pushState(null, '', location.href);
		goBackCallback?.();
	};

	useEffect(() => {
		history.pushState(null, '', location.href);
		window.addEventListener('popstate', preventGoBack);

		return () => {
			window.removeEventListener('popstate', preventGoBack);
		};
	}, []);
};

export default usePreventGoingBack;
