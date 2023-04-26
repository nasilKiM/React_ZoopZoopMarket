import React, { useState } from 'react';
import styled from 'styled-components';

const HeartBtn = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return <S.Button className={active ? 'active' : ''} onClick={handleClick} />;
};

export default HeartBtn;

const Button = styled.button`
	height: 20px;
	width: 20px;
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: inline-block;
	background-image: url('Assets/Icon/heart.png');
	background-repeat: no-repeat;
	background-size: contain;

	&.active {
		background-image: url('Assets/Icon/heart-filled.png');
	}
`;

const S = {
	Button,
};
