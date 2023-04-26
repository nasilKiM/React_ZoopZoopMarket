import styled from 'styled-components';

const RegisterBtn = () => {
	return <S.Button />;
};

export default RegisterBtn;

const Button = styled.button`
	height: 60px;
	width: 60px;
	border: none;
	cursor: pointer;
	display: inline-block;
	background-color: transparent;
	background-image: url('Assets/Icon/add.png');
	background-repeat: no-repeat;
	background-size: contain;
`;

const S = {
	Button,
};
