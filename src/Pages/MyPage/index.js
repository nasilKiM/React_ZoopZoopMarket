import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MyProfile from './Components/MyPofile/myProfile';
import ToggleBar from 'Components/Toggle/Toggle';
import UserApi from 'Apis/userApi';
import { Outlet } from 'react-router-dom';
import MyUserEdit2 from './MyUserEdit2/myUserEdit2';

const MyPage = () => {
	const [ToggleState, setToggleState] = useState();

	const [userInfo, setUserInfo] = useState();
	const [userProfile, setUserProfile] = useState();

	useEffect(() => {
		const getUserInfo = async () => {
			try {
				const res = await UserApi.userInfo();
				setUserInfo(res.data);
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		};

		const getUserProfile = async () => {
			try {
				const res = await UserApi.myPage();
				setUserProfile(res.data);
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		};

		getUserProfile();
		getUserInfo();
	}, []);

	return (
		<S.Wrapper>
			<MyProfile userInfo={userInfo} userProfile={userProfile} />
			<ToggleBar setToggleState={setToggleState} />
			{ToggleState === '유저 정보 수정' && <MyUserEdit2 userInfo={userInfo} />}
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
