import styled from 'styled-components';

const RegisterBtn = () => {
	return (
		<S.Wrap>
			<S.Button />
		</S.Wrap>
	);
};

export default RegisterBtn;

const Wrap = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #000;
	border-radius: 50%;
	cursor: pointer;
	position: fixed;
	right: 35px;
	bottom: 40px;
`;

const Button = styled.button`
	height: 100%;
	width: 100%;
	max-width: 60px;
	border: none;
	cursor: pointer;
	display: inline-block;
	background-color: transparent;
	background-image: url('/Assets/Icon/add.png');
	background-repeat: no-repeat;
	background-size: contain;
`;

const S = {
	Wrap,
	Button,
};
