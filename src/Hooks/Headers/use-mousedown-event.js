import { useEffect } from 'react';

const useMouseDownEvent = ({
	showRef,
	MenuIsOpen,
	hamburgerRef,
	hamburgerShowRef,
	wrapperRef,
	setMenuIsOpen,
	setIsClickProfileIcon,
	isClickProfileIcon,
}) => {
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside1);
		document.addEventListener('mousedown', handleClickOutside2);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside1);
			document.removeEventListener('mousedown', handleClickOutside2);
		};
	}, []);

	const handleClickOutside1 = e => {
		if (wrapperRef.current?.contains(e.target)) return;
		if (!isClickProfileIcon && !showRef.current?.contains(e.target)) {
			setIsClickProfileIcon(false);
		}
	};
	const handleClickOutside2 = e => {
		if (hamburgerRef.current?.contains(e.target)) return;
		if (!MenuIsOpen && !hamburgerShowRef.current?.contains(e.target)) {
			setMenuIsOpen(false);
		}
	};
	return;
};

export default useMouseDownEvent;
