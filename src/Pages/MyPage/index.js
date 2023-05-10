import ToggleBar from 'Components/Toggle/Toggle';
import MyProfile from './Components/MyPofile/myProfile';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MyUserEdit2 from './MyUserEdit2/myUserEdit2';
import MyPasswordEdit from './MyPasswordEdit/myPasswordEdit';
import UserApi from 'Apis/userApi';
import AccountBookPage from './MyAccountBook/Desktop';

const MyPage = () => {
	const [ToggleState, setToggleState] = useState();

	const [userInfo, setUserInfo] = useState();

	useEffect(() => {
		const getUserInfo = async () => {
			const res = await UserApi.userInfo();
			setUserInfo(res.data);
		};

		getUserInfo();
	}, []);

	return (
		<S.Wrapper>
			<MyProfile userInfo={userInfo} />
			<ToggleBar setToggleState={setToggleState} />
			{ToggleState === '유저 정보 수정' && <MyUserEdit2 userInfo={userInfo} />}
			{ToggleState === '비밀번호 변경' && <MyPasswordEdit />}
			{ToggleState === '가계부' && <AccountBookPage />}
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
