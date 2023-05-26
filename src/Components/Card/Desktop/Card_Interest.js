import HeartBtn from 'Components/Buttons/HeartBtn/HeartBtn';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const InterestCard = ({ index, products }) => {
	const navigate = useNavigate();
	const onClickCard = () => {
		navigate(`/item_detail/${index}`);
	};

	return (
		products && (
			<S.Container>
				<S.Heart>
					<HeartBtn like={products.liked} idx={products.idx} />
				</S.Heart>
				<div onClick={onClickCard}>
					<S.ItemImg img={products.img_url}></S.ItemImg>
					<S.ItemInfo>
						<S.ItemTitle>{products.title}</S.ItemTitle>
						<S.ItemPrice>
							{products.price.toLocaleString('ko-KR')}원
						</S.ItemPrice>
						<span>{products.status}</span>
					</S.ItemInfo>
				</div>
			</S.Container>
		)
	);
};

export default InterestCard;

const Container = styled.div`
	width: 100%;
	cursor: pointer;
	position: relative;
	border-radius: 10px;
	box-shadow: rgba(100, 111, 124, 0.2) 0px 2px 5px;
	:hover {
		box-shadow: rgba(100, 111, 124, 0.2) 0px 5px 10px;
		transition: all 0.3s ease 0s;
	}
`;

const Heart = styled.div`
	position: absolute;
	width: 32px;
	height: 32px;
	top: 15px;
	right: 7px;
	z-index: 1000000;
`;

const ItemImg = styled.div`
	position: relative;
	background: ${({ img }) => `url(${img})`} no-repeat center;
	width: 100%;
	height: 250px;
	object-fit: cover;
	padding-bottom: 15px;
	background-size: cover;
`;

const ItemInfo = styled.div`
	padding-top: 15px;
	max-height: 150px;
	display: flex;
	flex-wrap: wrap;
	padding: 0 15px;
`;

const ItemTitle = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.sm};
	margin-bottom: 10px;
`;

const ItemPrice = styled.span`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-bottom: 15px;
`;

const S = {
	Heart,
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
};
