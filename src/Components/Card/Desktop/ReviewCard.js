import ProductApi from 'Apis/productApi';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ReviewItemCard = () => {
	const navigate = useNavigate();

	const onClickCard = async () => {
		navigate(`/item_detail/${index}`);
		await ProductApi.addRecent(index);
	};
	// console.log(products);

	return (
		<S.Wrapper>
			{/*onClick={() => navigate(`/detail/${item.id}`)} */}
			<S.Container onClick={onClickCard}>
				<S.ItemImg src="Assets/Images/bicycle.jpg" />
				<S.ItemInfo>
					<S.ItemTitle>[제목] 제목이 들어갑니다.</S.ItemTitle>
					<S.ItemPrice>130,000 원</S.ItemPrice>
					<S.ItemTag>#태그 #태그2 #태그3</S.ItemTag>
					<div></div>
				</S.ItemInfo>
			</S.Container>
		</S.Wrapper>

		// )
	);
};

export default ReviewItemCard;

const Wrapper = styled.div`
	display: flex;
`;

const Container = styled.div`
	display: flex;
	width: 100%;
	min-width: 400px;
	max-height: 200px;
	border-radius: 5px;
	cursor: pointer;
	box-shadow: rgba(100, 111, 124, 0.2) 0px 2px 5px;
`;

const ItemImg = styled.img`
	min-width: 120px;
	max-height: 120px;
	margin: 15px 15px 15px 25px;
	object-fit: cover;
`;

const ItemInfo = styled.div`
	padding-left: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ItemTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	padding-bottom: 15px;
`;

const ItemPrice = styled.span`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	padding-bottom: 15px;
`;

const ItemTag = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sm};
	overflow: hidden;
	padding-bottom: 10px;
`;

const S = {
	Wrapper,
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	ItemTag,
};
