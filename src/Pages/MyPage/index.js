import styled from 'styled-components';
import ToggleBar from 'Components/Toggle/Toggle';
import { Outlet } from 'react-router-dom';
import MyProfile from './Components/MyPofile/myProfile';

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
	width: 70%;
	margin: 0 auto;
`;

const S = {
	Container,
};
