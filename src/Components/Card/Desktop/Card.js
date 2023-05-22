import ProductApi from 'Apis/productApi';
import HeartBtn from 'Components/Buttons/HeartBtn/HeartBtn';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ItemCard = ({ index, products }) => {
	const navigate = useNavigate();

	const onClickCard = async () => {
		navigate(`/item_detail/${index}`);
		await ProductApi.addRecent(index);
	};
	// console.log(products);

	return (
		products && (
			<S.Wrapper>
				<S.Container>
					<S.Heart>
						<HeartBtn like={products.liked} idx={products.idx} />
					</S.Heart>
					<div onClick={onClickCard}>
						<S.ItemImg src={products.img_url} />
						<S.ItemInfo>
							<S.ItemTitle>{products.title}</S.ItemTitle>
							<S.ItemPrice>
								{products.price.toLocaleString('ko-KR')}원
							</S.ItemPrice>
							{products && products.ProductsTags.map(tagObj => (
								<S.ItemTag key={tagObj.idx}>
									<a className="tag-link">#{tagObj.Tag.tag}</a>
								</S.ItemTag>
							))}
						</S.ItemInfo>
					</div>
				</S.Container>
			</S.Wrapper>
		)
	);
};

export default ItemCard;
const Wrapper = styled.div`
	padding: 15px 0;
	display: flex;
`;

const Container = styled.div`
	width: 100%;
	max-width: 280px;
	overflow: hidden;
	cursor: pointer;
	margin-right: 10px;
	border-radius: 10px;
	box-shadow: rgba(100, 111, 124, 0.2) 0px 2px 5px;
	:hover {
		box-shadow: rgba(100, 111, 124, 0.2) 0px 5px 10px;
		transition: all 0.3s ease 0s;
	}
	@media (min-width: 414px) {
		width: 200px;
	}
	@media (min-width: 600px) {
		width: 220px;
	}
	@media (min-width: 900px) {
		width: 240px;
	}
	@media (min-width: 1100px) {
		width: 280px;
	}
`;

const Heart = styled.div`
	position: relative;
	width: 32px;
	height: 32px;
	top: 40px;
	left: 80%;
	z-index: 1000000;
`;

const ItemImg = styled.img`
	width: 100%;
	height: 250px;
	max-height: 250px;
	object-fit: cover;
	padding-bottom: 15px;
	margin: auto;
`;

const ItemInfo = styled.div`
	width: 100%;
	padding-top: 15px;
	max-height: 87px;
	display: flex;
	flex-wrap: wrap;
	padding: 0 15px;
	overflow: hidden;
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
	background-color: ${({ theme }) => theme.color.gray[100]};
	border-radius: 5px;
	margin-right: 5px;
	margin-bottom: 10px;
	/* flex-shrink: 0; */
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	a {
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 5px 10px;
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
