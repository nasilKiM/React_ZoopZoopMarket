import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeartBtn from 'Components/Buttons/HeartBtn/HeartBtn';
import ConfirmModal from 'Components/Alert/confirmModal';
import SoldoutCard from './CardSoldout';

import ProductApi from 'Apis/productApi';

import styled from 'styled-components';

import { flexAllCenter, flexSpaceBetween } from 'Styles/common';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const ItemCard = ({ index, products, isMine, isRelated, isDone, createdAt }) => {
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);
	const queryClient = useQueryClient();

	const onClickCard = () => {
		if (products.idx === undefined) {
			return;
		}
		if (isRelated && products.idx !== undefined)
			navigate(`/item_detail/${products.idx}`);
		return navigate(`/item_detail/${index}`);
	};

	const onClickEdit = e => {
		e.preventDefault();
		navigate(`/register/${products.idx}`);
	};

	const mutationDeletePost = useMutation(() => {
		return ProductApi.deletePost(products.idx);
	});

	const onClickDelete = async () => {
		try {
			await mutationDeletePost.mutateAsync(products.idx, {
				onSuccess: () => {
					queryClient.invalidateQueries(['MY_ITEMS']);
					setModal(false);
					navigate('/mypage/item');
				},
			});
		} catch {
			console.log('삭제 실패');
		}
	};

	const onClickModal = () => {
		setModal(true);
	};

	return (
		products && (
			<S.Wrapper>
				<S.Container>
					<S.Heart>
						{!isMine && !isDone && (
							<HeartBtn like={products.liked} idx={products.idx} />
						)}
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
										<span className="tag-link">#{tagObj.Tag.tag}</span>
									</S.ItemTag>
								))}
							{!isMine && !isRelated && isDone && (
								<S.Flex>
									<div>거래일자</div>
									<div>{createdAt.split('T')[0]}</div>
								</S.Flex>
							)}
						</S.ItemInfo>
					</div>
					{isMine && !isRelated && !isDone && (
						<S.BtnSection>
							<S.Btn onClick={onClickEdit}>수정</S.Btn>
							<S.Btn onClick={onClickModal}>삭제</S.Btn>
						</S.BtnSection>
					)}
				</S.Container>
				{products.status === '판매완료' ? (
					<SoldoutCard index={products.idx} />
				) : (
					''
				)}
				{modal && (
					<ConfirmModal>
						<S.Content>물품을 삭제하시겠습니까?</S.Content>
						<S.BtnContainer>
							<S.NO onClick={() => setModal(false)}>취소</S.NO>
							<S.OK onClick={onClickDelete}>삭제</S.OK>
						</S.BtnContainer>
					</ConfirmModal>
				)}
			</S.Wrapper>
		)
	);
};

export default ItemCard;

const Wrapper = styled.div`
	position: relative;
`;

const Container = styled.div`
	width: 100%;
	min-width: 160px;
	max-width: 280px;
	height: 370px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.color.white};
	cursor: pointer;
	border-radius: 10px;
	box-shadow: rgba(100, 111, 124, 0.2) 0px 2px 5px;
	:hover {
		box-shadow: rgba(100, 111, 124, 0.2) 0px 5px 10px;
		transition: all 0.3s ease 0s;
	}
	@media (min-width: 350px) {
		width: 160px;
		height: 315px;
	}
	@media (min-width: 600px) {
		width: 200px;
		height: 320px;
	}
	@media (min-width: 900px) {
		width: 220px;
		height: 330px;
	}
	@media (min-width: 1100px) {
		width: 230px;
		height: 340px;
	}
	@media (min-width: 1200px) {
		width: 240px;
		height: 350px;
	}
	@media (min-width: 1350px) {
		width: 280px;
		height: 370px;
	}
`;

const Heart = styled.div`
	position: relative;
	width: 32px;
	height: 32px;
	top: 10px;
	left: 80%;
	z-index: 90;
	@media (max-width: 600px) {
		position: relative;
		width: 30px;
		height: 30px;
		left: 75%;
	}
`;

const ItemImg = styled.img`
	width: 100%;
	height: 250px;
	object-fit: cover;
	position: relative;
	top: -35px;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[100]};
	@media (min-width: 350px) {
		height: 200px;
		height: 200px;
	}
	@media (min-width: 600px) {
		height: 205px;
	}
	@media (min-width: 900px) {
		height: 210px;
	}
	@media (min-width: 1200px) {
		height: 240px;
	}
	@media (min-width: 1350px) {
		height: 240px;
	}
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
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const ItemPrice = styled.span`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-bottom: 15px;
`;

const ItemTag = styled.span`
	font-size: ${({ theme }) => theme.fontSize.xs};
	background-color: ${({ theme }) => theme.color.gray[100]};
	border-radius: 5px;
	margin-right: 5px;
	margin-bottom: 10px;
	span {
		max-width: 100px;
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

const Content = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	${flexAllCenter}
	margin-bottom: 50px;
`;

const BtnContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const NO = styled.button`
	width: 100px;
	height: 30px;
	border: none;
	border-radius: 10px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.white};
	background-color: ${({ theme }) => theme.color.gray[100]};
	cursor: pointer;
	margin-right: 20px;
	:hover {
		background-color: ${({ theme }) => theme.color.gray[200]};
		color: ${({ theme }) => theme.color.gray[300]};
	}
`;

const OK = styled.button`
	width: 100px;
	height: 30px;
	border: none;
	border-radius: 10px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.white};
	background-color: ${({ theme }) => theme.color.primary[300]};
	cursor: pointer;
	:hover {
		background-color: ${({ theme }) => theme.color.primary[400]};
	}
`;

const Flex = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-size: ${({ theme }) => theme.fontSize.sm};
`;

const S = {
	Wrapper,
	Container,
	Heart,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	ItemTag,
	BtnSection,
	Btn,
	Content,
	BtnContainer,
	NO,
	OK,
	Flex
};
