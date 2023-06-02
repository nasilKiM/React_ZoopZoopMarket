import React from 'react';

import styled from 'styled-components';

const PayListCard = ({ item }) => {
	item && console.log('item', item);

	const { title, price, img_url } = item.Product;

	return (
		<S.Wrapper>
			{item && (
				<>
					<S.Container>
						<S.ItemImg src={img_url} />
						<S.ItemInfo>
							<S.ItemTitle>{title}</S.ItemTitle>
							<S.ItemPrice>{price} 원</S.ItemPrice>
						</S.ItemInfo>
					</S.Container>
				</>
			)}
		</S.Wrapper>
	);
};

export default PayListCard;

const Wrapper = styled.div`
	width: 1000px;
	height: 100%;
`;

const Container = styled.div`
	width: 1000px;
	height: 500px;
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

const S = {
	Wrapper,
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
};
