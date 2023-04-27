import React from 'react';
import styled from 'styled-components';

const MobileCard = () => {
	// const navigate = useNavigate();

	return (
		<S.Wrapper>
			{/*onClick={() => navigate(`/detail/${item.id}`)} */}
			<S.Container>
				<S.ItemImg src="Assets/Images/bicycle.jpg" />
				<S.ItemInfo>
					<S.ItemTitle>[제목] 제목이 들어갑니다.</S.ItemTitle>
					<S.ItemPrice>130,000 원</S.ItemPrice>
					<S.ItemTag>#태그 #태그2 #태그3</S.ItemTag>
					<div></div>
				</S.ItemInfo>
			</S.Container>
		</S.Wrapper>
	);
};

export default MobileCard;

const Wrapper = styled.div`
	display: flex;
`;

const Container = styled.div`
	display: flex;
	min-width: 400px;
	max-height: 100px;
	background-color: lightgray;
	border-radius: 5px;
	cursor: pointer;
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
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	ItemTag,
};
