import ToggleBar from 'Components/Toggle/Toggle';
import MyProfile from './Components/MyPofile/myProfile';
import styled from 'styled-components';

const MyPage = () => {
	return (
		<S.Wrapper>
			<MyProfile />
			<ToggleBar />
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
