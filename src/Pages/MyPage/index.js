import styled from 'styled-components';
import MyProfile from './Components/MyPofile/myProfile';
import ToggleBar from 'Components/Toggle/Toggle';
import { Outlet } from 'react-router-dom';

const MyPage = () => {
	return (
		<>
				<S.Wrapper>
					<MyProfile />
					<ToggleBar />
					<Outlet />
				</S.Wrapper>
		</>
	);
};

export default MyPage;

const Wrapper = styled.div`
	width: 70%;
	margin: 0 auto;
	background-color: beige;
	@media ${({ theme }) => theme.device.tablet} {
		width: 85%;
	}
	@media ${({ theme }) => theme.device.mobile} {
		width: 95%;
	}
`;

const MWrapper = styled.div`
	width: 414px;
	margin: 0 auto;
`;

const S = {
	Wrapper,
};
