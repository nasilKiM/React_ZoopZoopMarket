import React from 'react';
import styled from 'styled-components';

const SoldoutCard = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<div>
					<S.Button>거래완료</S.Button>
					<S.ItemImg src="Assets/Images/bicycle.jpg" />
					<S.ItemInfo>
						<S.ItemTitle>[제목] 제목이 들어갑니다.</S.ItemTitle>
						<S.ItemPrice>130,000 원</S.ItemPrice>
						<S.ItemTag>#태그 #태그2 #태그3</S.ItemTag>
					</S.ItemInfo>
				</div>
			</S.Container>
		</S.Wrapper>
	);
};

export default SoldoutCard;

const Wrapper = styled.div`
	display: flex;
`;

const Button = styled.span`
	text-align: center;
	background-color: white;
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	position: absolute;
	color: red;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Container = styled.div`
	position: relative;
	min-width: 200px;
	max-height: 400px;
	margin: 10px;
	& div {
		background-color: #808080;
		opacity: 0.5;
	}
`;

const ItemImg = styled.img`
	width: 100%;
	padding: 15px;
	max-height: 250px;
	object-fit: cover;
	margin: auto;
`;

const ItemInfo = styled.div`
	padding-top: 15px;
	max-height: 150px;
	display: flex;
	flex-direction: column;
	padding: 0 15px;
`;

const ItemTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	margin-bottom: 10px;
`;

const ItemPrice = styled.span`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-bottom: 15px;
`;

const ItemTag = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sm};
	overflow: hidden;
	margin-bottom: 10px;
`;

const S = {
	Wrapper,
	Button,
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	ItemTag,
};
