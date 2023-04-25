import styled from 'styled-components';

const Profile = () => {
	return (
		<S.Circle>
			<S.Img src="Assets/임시 프로필사진.jpg"></S.Img>
		</S.Circle>
	);
};

export default Profile;

const Circle = styled.div`
	width: 100px;
	height: 100px;
	/* border-radius: 50px; */
	border: 1px solid red;
	overflow: hidden;
	/* display: flex;
	align-items: center;
	justify-content: center; */
`;

const Img = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: center;
`;

const S = {
	Circle,
	Img,
};
