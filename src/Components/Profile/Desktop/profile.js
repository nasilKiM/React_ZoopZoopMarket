import styled from 'styled-components';

const Profile = () => {
	return (
		<>
			<S.Circle>
				<S.Img src="/Assets/Images/defaultProfile.png"></S.Img>
			</S.Circle>
		</>
	);
};

export default Profile;

const Circle = styled.div`
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
