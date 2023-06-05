import { Outlet } from 'react-router-dom';

import ToggleBar from 'Components/Toggle/Toggle';
import MyProfile from './Components/myProfile';

import styled from 'styled-components';

const MyPage = () => {
	return (
		<S.Container>
			<ToggleBar />
			<MyProfile />
			<Outlet />
		</S.Container>
	);
};

export default MyPage;

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	padding-bottom: 50px;
`;

const S = {
	Container,
};
