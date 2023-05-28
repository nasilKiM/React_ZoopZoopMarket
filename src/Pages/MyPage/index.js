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
	@media ${({ theme }) => theme.device.laptop} {
		width: 90%;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 95%;
	}
`;

const S = {
	Container,
};
