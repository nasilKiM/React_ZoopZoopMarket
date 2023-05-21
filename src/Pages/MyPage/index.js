import styled from 'styled-components';
import ToggleBar from 'Components/Toggle/Toggle';
import { Outlet } from 'react-router-dom';
import MyProfile from './Components/MyPofile/myProfile';

const MyPage = () => {
	return (
		<>
			<Container>
				<ToggleBar />
			</Container>
			<S.Wrapper>
				<MyProfile />
				<Outlet />
			</S.Wrapper>
		</>
	);
};

export default MyPage;

const Container = styled.div`
	width: 100%;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin: 0 auto;
	background-color: ${({ theme }) => theme.color.gray[100]};
`;

const Wrapper = styled.div`
	width: 70%;
	height: 100%;
	margin: 0 auto;
	/* background-color: beige; */
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
