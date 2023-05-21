import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const MyItemCard = ({ index, products }) => {
    const navigate = useNavigate();

	const onClickCard = async () => {
		navigate(`/item_detail/${index}`);
	};

	return (
		products && (
				<S.Container>
					<div onClick={onClickCard}>
						<S.ItemImg src={products.img_url} />
						<S.ItemInfo>
							<S.ItemTitle>{products.title}</S.ItemTitle>
							{products.price === 0 ? (
								<S.ItemPrice>무료나눔 상품</S.ItemPrice>
							) : (
								<S.ItemPrice>
									{products.price.toLocaleString('ko-KR')}원
								</S.ItemPrice>
							)}
						</S.ItemInfo>
					</div>
				</S.Container>
		)
	);
}

export default MyItemCard;

const Container = styled.div`
	/* width: 100%;
	max-width: 250px;
	max-height: 400px;
	cursor: pointer;
	margin-right: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
	border: 1px solid lightgray; */
	width: 100%;
	cursor: pointer;
	border: 1px solid lightgray;
	position: relative;
`;

const ItemImg = styled.img`
	/* position: relative;
	width: 200px;
	max-width: 250px;
	width: 100%;
	height: 250px;
	object-fit: cover;
	padding-bottom: 15px; */
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
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
};
