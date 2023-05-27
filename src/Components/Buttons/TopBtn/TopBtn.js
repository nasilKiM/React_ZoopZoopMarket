import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const TopBtn = () => {
	const [scroll, setScroll] = useState(0);
	const [showBtn, setShowBtn] = useState(false);

	const onScroll = () => {
		setScroll(window.scrollY);
		if (scroll > 100) setShowBtn(true);
		if (scroll < 100) setShowBtn(false);
	};

	const scrollTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
		setScroll(0);
		setShowBtn(false);
	};

	useEffect(() => {
		onScroll();
	}, [scroll]);

	useEffect(() => {
		const watch = () => {
			window.addEventListener('scroll', onScroll);
		};
		watch();
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		showBtn && (
			<Wrap onClick={scrollTop}>
				<div>
					<FontAwesomeIcon icon={faAngleUp} />
				</div>
				<div>Top</div>
			</Wrap>
		)
	);
};
export default TopBtn;

const Wrap = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 40px;
	height: 40px;
	justify-content: center;
	color: #000;
	border-radius: 50%;
	cursor: pointer;
	position: fixed;
	right: 35px;
	bottom: 90px;
`;
