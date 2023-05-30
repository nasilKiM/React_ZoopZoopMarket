import { useEffect } from 'react';

const useDebounce = (value, delay) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			value();
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value]);
};

export default useDebounce;
