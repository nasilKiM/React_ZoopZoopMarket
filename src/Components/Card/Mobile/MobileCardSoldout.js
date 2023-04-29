import React from 'react';
import styled from 'styled-components';

const MobileSoldoutCard = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Button>거래완료</S.Button>
				<S.ItemImg src="Assets/Images/bicycle.jpg" />
				<S.ItemInfo>
					<S.ItemTitle>[제목] 제목이 들어갑니다.</S.ItemTitle>
					<S.ItemPrice>130,000 원</S.ItemPrice>
					<S.ItemTag>#태그 #태그2 #태그3</S.ItemTag>
				</S.ItemInfo>
			</S.Container>
		</S.Wrapper>
	);
};

export default MobileSoldoutCard;

const Wrapper = styled.div`
	display: flex;
`;

const Button = styled.span`
	position: absolute;
	padding: 10px;
	text-align: center;
	background-color: white;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	color: red;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10000;
`;

const Container = styled.div`
	position: relative;
	display: flex;
	min-width: 400px;
	max-height: 100px;
	border-radius: 5px;
	background-color: #808080;
	opacity: 0.5;
`;

const ItemImg = styled.img`
	min-width: 90px;
	max-height: 90px;
	padding: 10px;
	object-fit: cover;
`;

const ItemInfo = styled.div`
	padding-top: 10px;
	padding-left: 10px;
	max-height: 100px;
	display: flex;
	flex-direction: column;
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
	Button,
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	ItemTag,
};
