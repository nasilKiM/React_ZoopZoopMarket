import MenuBar from 'Components/MenuBar/MenuBar';
import styled from 'styled-components';

const WebHeader = () => {
	return (
		<S.Wrapper>
			<S.Logo src="Assets/임시로고.png"></S.Logo>
			<MenuBar />
		</S.Wrapper>
	);
};

export default WebHeader;

const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	font-family: 'Nanum_extraBold';
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Logo = styled.img`
	width: 150px;
`;

const S = {
	Wrapper,
	Logo,
};
