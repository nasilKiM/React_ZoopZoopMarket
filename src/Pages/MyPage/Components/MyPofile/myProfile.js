import MannerMeter from 'Components/Icon/Icon';
import Profile from 'Components/Profile/Desktop/profile';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const MyProfile = () => {
	return (
		<>
			<div>
				<Profile />
			</div>
			<div>
				<div>
					<div>닉네임</div>
					<S.Icon>
						<MannerMeter />
					</S.Icon>
				</div>
				<div>내 지역</div>
			</div>
			<div>로그아웃</div>
		</>
	);
};

export default MyProfile;

const Wrapper = {};

const Icon = styled.div`
	${flexAllCenter}
	justify-content: start;
`;

const S = {
	Wrapper,
	Icon,
};
