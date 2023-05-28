import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
// import MobileSideBar from './Components/sidebar';

const MobileHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [xPosition, setXposition] = useState(300);

	const onShowSidebar = () => {
		if (xPosition < 0) {
			setXposition(0);
			setIsOpen(true);
		} else {
			setXposition(300);
			setIsOpen(false);
		}
	};

	return (
		<S.Wrapper>
			<S.Button onClick={onShowSidebar}>
				{isOpen ? (
					'<'
				) : (
					<FontAwesomeIcon
						icon={faBars}
						color="gray"
						cursor="pointer"
						fontSize="30px"
					/>
				)}
			</S.Button>
			<S.Logo src="/Assets/web_logo.png"></S.Logo>
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				color="gray"
				cursor="pointer"
				fontSize="30px"
			/>
			{/* <MobileSideBar
				xPosition={xPosition}
				setXposition={setXposition}
				setIsOpen={setIsOpen}
			/> */}
		</S.Wrapper>
	);
};

export default MobileHeader;

const Wrapper = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.color.white};
	border-top: 5px solid ${({ theme }) => theme.color.primary[300]};
	border-bottom: 5px solid ${({ theme }) => theme.color.primary[300]};
	padding: 0 20px;
	margin-bottom: 15px;
	position: sticky;
	z-index: 999;
	top: 0;
	left: 0;
`;

const Logo = styled.img`
	width: 180px;
`;

const Button = styled.button`
	all: unset;
	font-size: ${({ theme }) => theme.fontSize.big};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	color: ${({ theme }) => theme.color.gray[300]};
	width: 30px;
`;

const S = {
	Wrapper,
	Logo,
	Button,
};
