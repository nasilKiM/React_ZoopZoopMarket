import MenuBar from 'Components/MenuBar/MenuBar';
import styled from 'styled-components';

const WebHeader = () => {
	return (
		<S.Wrapper>
			<S.Logo src="Assets/web_logo.png"></S.Logo>
			<MenuBar />
		</S.Wrapper>
	);
};

export default WebHeader;

const Wrapper = styled.div`
	width: 100%;
	height: 130px;
	font-family: 'Nanum_extraBold';
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-top: 30px;
`;

const Logo = styled.img`
	margin-bottom: 50px;
	width: 300px;
`;

const S = {
	Wrapper,
	Logo,
};
