import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import MobileSideBar from './Components/sidebar';

const MobileHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [xPosition, setXposition] = useState(-200);

	const onShowSidebar = () => {
		if(xPosition < 0) {
			setXposition(0);
			setIsOpen(true);
		} else {
			setXposition(-200);
			setIsOpen(false);
		}
	}

	return (
		<S.Wrapper>
			<S.Button onClick={onShowSidebar}>{isOpen? '<' :<FontAwesomeIcon
				icon={faBars}
				color="white"
				cursor="pointer"
				fontSize="30px"
			/>}</S.Button>
			<S.Logo src="Assets/임시로고.png"></S.Logo>
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				color="white"
				cursor="pointer"
				fontSize="30px"
			/>
			<MobileSideBar xPosition={xPosition} setXposition={setXposition} setIsOpen={setIsOpen}/>
		</S.Wrapper>
	);
};

export default MobileHeader;

const Wrapper = styled.div`
	width: 414px;
	height: 80px;
	font-family: 'Nanum_extraBold';
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid sandybrown;
	background-color: ${({ theme }) => theme.color.primary};
	padding: 0 40px;
`;

const Logo = styled.img`
	width: 100px;
`;

const Button = styled.button`
	all: unset;
	font-size: ${({ theme }) => theme.fontSize.big};
	color: ${({ theme }) => theme.color.white};
`

const S = {
	Wrapper,
	Logo,
	Button
};
