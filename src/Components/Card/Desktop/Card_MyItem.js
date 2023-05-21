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
			<S.Wrapper>
				<S.Container>
					<S.Heart>
					</S.Heart>
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
			</S.Wrapper>
		)
	);
}

export default MyItemCard;

const Wrapper = styled.div`
	width: 200px;
	padding: 15px 0;
`;

const Container = styled.div`
	width: 200px;
	max-width: 250px;
	max-height: 400px;
	cursor: pointer;
	margin-right: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
	border: 1px solid lightgray;
`;

const Heart = styled.div`
	position: absolute;
	width: 32px;
	height: 32px;
	top: 40px;
	left: 202px;
	z-index: 1000000;
`;

const ItemImg = styled.img`
	position: relative;
	width: 200px;
	max-width: 250px;
	width: 100%;
	height: 250px;
	object-fit: cover;
	padding-bottom: 15px;
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

const ItemTag = styled.span`
	display: inline-block;
	font-size: ${({ theme }) => theme.fontSize.xs};
	margin-right: 5px;
	margin-bottom: 10px;

	a {
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
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
