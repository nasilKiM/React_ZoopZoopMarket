import { useEffect, useState } from 'react';

import { useLikedBtn } from 'Hooks/Queries/get-product-mutation';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useQueryClient } from '@tanstack/react-query';

const HeartBtn = ({ like, idx }) => {
	const [liked, setLiked] = useState(like);
	const queryClient = useQueryClient();
	const mutation = useLikedBtn();

	const toggleLiked = index => {
		mutation.mutateAsync(index);
	};

	useEffect(() => {
		if (mutation.isSuccess) {
			setLiked(prev => !prev);
			queryClient.invalidateQueries(['mainList']);
		}
	}, [mutation.isSuccess]);

	return (
		<S.Button
			as={motion.button}
			className={liked ? 'active' : ''}
			onClick={() => toggleLiked(idx)}
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: 'spring', stiffness: 400, damping: 17 }}
		/>
	);
};

export default HeartBtn;

const Button = styled(motion.button)`
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
