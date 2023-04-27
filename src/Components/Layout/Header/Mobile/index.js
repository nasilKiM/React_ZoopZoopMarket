import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

const MobileHeader = () => {
	return (
		<S.Wrapper>
			<FontAwesomeIcon
				icon={faBars}
				color="white"
				cursor="pointer"
				fontSize="30px"
			/>
			<S.Logo src="Assets/임시로고.png"></S.Logo>
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				color="white"
				cursor="pointer"
				fontSize="30px"
			/>
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

const S = {
	Wrapper,
	Logo,
};
