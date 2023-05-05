import HeartBtn from 'Components/Buttons/HeartBtn/HeartBtn';
import React from 'react';
import styled from 'styled-components';

const ItemCard = () => {
	// const navigate = useNavigate();

	return (
		<S.Wrapper>
			{/*onClick={() => navigate(`/detail/${item.id}`)} */}
			<S.Container>
				<S.Heart>
					<HeartBtn />
				</S.Heart>
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
