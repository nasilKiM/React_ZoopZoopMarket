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
	min-width: 700px;
	max-width: 1000px;
	height: 200px;
	font-family: 'Nanum_extraBold';
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;
`;

const Logo = styled.img`
	padding-top: 50px;
	margin-bottom: 50px;
	width: 300px;
`;

const S = {
	Wrapper,
	Logo,
};
