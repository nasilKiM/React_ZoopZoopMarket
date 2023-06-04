import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const RegisterBtn = () => {
	const navigate = useNavigate();

	const onClick = () => {
		navigate('/register');
	};

	return (
		<S.Wrap onClick={onClick}>
			<S.Button
				as={motion.button}
				whileHover={{ scale: 1.2, rotate: 90 }}
				whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
			/>
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
	z-index: 105;
`;

const Button = styled(motion.button)`
	height: 100%;
	width: 100%;
	cursor: pointer;
	border: none;
	display: inline-block;
	background-color: transparent;
	background-image: url('/Assets/Icon/add.png');
	background-repeat: no-repeat;
	background-size: contain;
	border: none;
`;

const S = {
	Wrap,
	Button,
};
