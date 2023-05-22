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

const ItemImg = styled.img`
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
