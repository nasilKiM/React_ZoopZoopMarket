import styled from 'styled-components';
import MyProfile from './Components/MyPofile/myProfile';
import ToggleBar from 'Components/Toggle/Toggle';
import { Outlet } from 'react-router-dom';

const MyPage = () => {

	return (
		<S.Wrapper>
			<MyProfile/>
			<ToggleBar/>
			<Outlet />
		</S.Wrapper>
	);
};

export default MyPage;

const Wrapper = styled.div`
	width: 60%;
	margin: 0 auto;
`;

const S = {
	Wrapper,
};
