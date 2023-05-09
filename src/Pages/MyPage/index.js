import ToggleBar from 'Components/Toggle/Toggle';
import MyProfile from './Components/MyPofile/myProfile';
import styled from 'styled-components';
import { useState } from 'react';
import MyUserEdit from './MyUserEdit/Desktop/myUserEdit';

const MyPage = () => {
	const [ToggleState, setToggleState] = useState();

	return (
		<S.Wrapper>
			<MyProfile />
			<ToggleBar setToggleState={setToggleState} />
			{ToggleState === '유저 정보 수정' && <MyUserEdit />}
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
