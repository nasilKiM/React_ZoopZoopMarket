import { useEffect, useState } from 'react';

import { useLikedBtn } from 'Hooks/Queries/get-likedBtn';

import styled from 'styled-components';

const HeartBtn = ({ like, idx }) => {
	const [liked, setLiked] = useState(like);

	const mutation = useLikedBtn();

	const toggleLiked = index => {
		mutation.mutateAsync(index);
	};

	useEffect(() => {
		if (mutation.isSuccess) {
			setLiked(prev => !prev);
		}
	}, [mutation.isSuccess]);

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
