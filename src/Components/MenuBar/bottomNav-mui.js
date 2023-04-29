import styled from 'styled-components';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import { Box } from '@mui/material';

const MBottomNav = () => {
	return (
		<Box>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
					console.log(value);
				}}
			>
				<BottomNavigationAction
					label="홈"
					icon={faHouse}
					value="홈"
				></BottomNavigationAction>
			</BottomNavigation>
		</Box>
	);
};

export default MBottomNav;

const Wrapper = styled.div`
	width: 414px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid ${({ theme }) => theme.color.subBeigeGreen};
`;

const NavBtn = styled.div`
	width: 70px;
	height: 70px;
	padding: 12px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-size: ${({ theme }) => theme.fontSize.sm};
`;

const AddContainer = styled.div`
	width: 100px;
	height: 70px;
	position: relative;
	border: 1px solid blue;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const AddBtn = styled.div`
	width: 70px;
	height: 70px;
	border-radius: 35px;
	background-color: ${({ theme }) => theme.color.primary};
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: -35px;
`;

const S = {
	Wrapper,
	NavBtn,
	AddContainer,
	AddBtn,
};
