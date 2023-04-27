import styled from 'styled-components';

const MChatProfile = () => {
	return (
		<>
			<S.Circle>
				<S.Img src="Assets/Images/1.jpg"></S.Img>
			</S.Circle>
		</>
	);
};

export default MChatProfile;

const Circle = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 15px;
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
