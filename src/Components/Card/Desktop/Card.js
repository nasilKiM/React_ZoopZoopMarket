import HeartBtn from 'Components/Buttons/HeartBtn/HeartBtn';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ItemCard = ({ index }) => {
	const navigate = useNavigate();

	const onClickCard = async () => {
		console.log('dddddd');
		console.log(index);
		navigate(`/item_detail/${index}`);
	};

	return (
		<S.Wrapper>
			<S.Container>
				<S.Heart>
					<HeartBtn />
				</S.Heart>
				<div onClick={onClickCard}>
					<S.ItemImg />
					<S.ItemInfo>
						<S.ItemTitle></S.ItemTitle>
						<S.ItemPrice>원</S.ItemPrice>
						<S.ItemTag>#</S.ItemTag>
					</S.ItemInfo>
				</div>
			</S.Container>
		</S.Wrapper>
	);
};

export default ItemCard;

const Wrapper = styled.div`
	display: flex;
`;

const Container = styled.div`
	min-width: 200px;
	max-height: 400px;
	cursor: pointer;
	margin-right: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
	border: 1px solid lightgray;
`;

const Heart = styled.div`
	position: absolute;
	width: 25px;
	height: 25px;
	top: 30px;
	left: 152px;
	z-index: 1000000;
`;

const ItemImg = styled.img`
	position: relative;
	max-width: 200px;
	width: 100%;
	height: 250px;
	object-fit: cover;
	padding: 10px;
`;

const ItemInfo = styled.div`
	padding-top: 15px;
	max-height: 150px;
	display: flex;
	flex-direction: column;
	padding: 0 15px;
`;

const ItemTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
	margin-bottom: 10px;
`;

const ItemPrice = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-bottom: 15px;
`;

const ItemTag = styled.span`
	font-size: ${({ theme }) => theme.fontSize.xs};
	overflow: hidden;
	margin-bottom: 10px;
`;

const S = {
	Wrapper,
	Heart,
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	ItemTag,
};
