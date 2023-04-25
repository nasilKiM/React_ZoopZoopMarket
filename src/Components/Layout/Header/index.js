import styled from 'styled-components';

const BasicHeader = () => {
	return (
		<S.Wrapper>
			<S.Logo src="Assets/임시로고.png"></S.Logo>
		</S.Wrapper>
	);
};

export default BasicHeader;

const Wrapper = styled.div`
	border: 1px solid blue;
	width: 100%;
	height: 100px;
	font-family: 'Nanum_extraBold';
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Logo = styled.img`
	width: 150px;
`;

const S = {
	Wrapper,
	Logo,
};
