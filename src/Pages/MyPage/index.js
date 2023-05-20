import styled from 'styled-components';
import ToggleBar from 'Components/Toggle/Toggle';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MyProfile from './Components/MyPofile/myProfile';

const MyPage = () => {
	const isDesktopOrMobile = useMediaQuery({ query: '(max-width: 768px' });
	return (
		<>
			{isDesktopOrMobile !== true ? (
				<>
					<Container>
						<ToggleBar />
					</Container>
					<S.Wrapper>
						<MyProfile />
						<Outlet />
					</S.Wrapper>
				</>
			) : (
				<S.MWrapper>
					<MyProfile />
					<ToggleBar />
					<Outlet />
				</S.MWrapper>
			)}
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
	margin: 0 auto;
`;

const MWrapper = styled.div`
	width: 414px;
	margin: 0 auto;
`;

const S = {
	Wrapper,
	MWrapper,
};
