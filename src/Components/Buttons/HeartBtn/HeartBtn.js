import ProductApi from 'Apis/productApi';
import React, { useState } from 'react';
import styled from 'styled-components';

const HeartBtn = ({ like, idx }) => {
	const [liked, setLiked] = useState(like);

	const toggleLiked = async index => {
		try {
			const response = await ProductApi.likedBtn(index);
			if (response.status === 200) {
				setLiked(prev => !prev);
				console.log('관심상품등록됨', liked);
			}
		} catch (error) {
			console.log('에러', error);
		}
	};

	return (
		<S.Button
			className={liked ? 'active' : ''}
			onClick={() => toggleLiked(idx)}
		/>
	);
};

export default HeartBtn;

const Button = styled.button`
	height: 100%;
	width: 100%;
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: inline-block;
	background-image: url('/Assets/Icon/heart.png');
	background-repeat: no-repeat;
	background-size: contain;

	&.active {
		background-image: url('/Assets/Icon/heart-filled.png');
	}
`;

const S = {
	Button,
};
