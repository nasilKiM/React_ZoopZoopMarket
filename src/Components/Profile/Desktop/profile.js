import styled from 'styled-components';

const Profile = ({userProfileUrl}) => {

	const profileUrl = userProfileUrl;
	return (
		<>
			<S.Circle>
				{userProfileUrl === null ? <S.Img src="Assets/Images/기본 프로필.png"></S.Img> : <S.Img src={profileUrl}></S.Img>}
			</S.Circle>
		</>
	);
};

export default Profile;

const Circle = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	overflow: hidden;
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

const S = {
	Circle,
	Img,
};
