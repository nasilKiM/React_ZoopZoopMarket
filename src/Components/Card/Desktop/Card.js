import HeartBtn from 'Components/Buttons/HeartBtn/HeartBtn';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import SoldoutCard from './CardSoldout';
import { flexSpaceBetween } from 'Styles/common';

const ItemCard = ({ index, products, isMine }) => {
	const navigate = useNavigate();
	const { prod_idx } = useParams();

	console.log(prod_idx);

	const onClickCard = () => {
		navigate(`/item_detail/${index}`);
	};

	// products && console.log('이건 카드로 전달된 product', products);

	const onClickEdit = e => {
		e.preventDefault();
		navigate(`/register/${products.idx}`);
	};

	const onClickDelete = async () => {
		try {
			if (confirm('물품을 삭제하시겠습니까?') == false) return console.log(1);
			await ProductApi.deletePost(products.idx);
			alert('물품이 삭제되었습니다.');
		} catch {
			console.log('삭제 실패');
		}
	};

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
								{products.price !== 0
									? products.price.toLocaleString('ko-KR') + '원'
									: '무료나눔'}
							</S.ItemPrice>
							{products.ProductsTags &&
								products.ProductsTags.map(tagObj => (
									<S.ItemTag key={tagObj.idx}>
										<a className="tag-link">#{tagObj.Tag.tag}</a>
									</S.ItemTag>
								))}
						</S.ItemInfo>
					</div>
					{isMine && (
						<S.BtnSection>
							<S.Btn onClick={onClickEdit}>수정</S.Btn>
							<S.Btn onClick={onClickDelete}>삭제</S.Btn>
						</S.BtnSection>
					)}
				</S.Container>
				{products.status === '판매완료' ? <SoldoutCard /> : ''}
			</S.Wrapper>
		)
	);
};

export default ItemCard;

const Wrapper = styled.div`
	display: flex;
	position: relative;
`;

const Container = styled.div`
	width: 100%;
	min-width: 200px;
	max-width: 280px;
	height: 370px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.color.white};
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
		width: 210px;
	}
	@media (min-width: 900px) {
		width: 220px;
	}
	@media (min-width: 1100px) {
		width: 230px;
	}
	@media (min-width: 1200px) {
		width: 240px;
	}
	@media (min-width: 1350px) {
		width: 280px;
	}
`;

const Heart = styled.div`
	position: relative;
	width: 32px;
	height: 32px;
	top: 10px;
	left: 80%;
	z-index: 99;
`;

const ItemImg = styled.img`
	width: 100%;
	height: 250px;
	max-height: 250px;
	object-fit: cover;
	position: relative;
	top: -35px;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[100]};
`;

const ItemInfo = styled.div`
	width: 100%;
	max-height: 87px;
	display: flex;
	flex-wrap: wrap;
	padding: 0 15px;
	overflow: hidden;
	position: relative;
	top: -10px;
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

const BtnSection = styled.div`
	width: 100%;
	${flexSpaceBetween}
	padding: 0 15px 15px 15px;
	margin-top: -10px;
`;

const Btn = styled.button`
	width: 48%;
	border: none;
	padding: 5px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.color.gray[100]};
	:hover {
		background-color: ${({ theme }) => theme.color.primary[200]};
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
	BtnSection,
	Btn,
};
