import { useQuery } from '@tanstack/react-query';
import ProductApi from 'Apis/productApi';
import ReviewApi from 'Apis/reviewApi';
import { reviewAtom } from 'Atoms/review.atom';
import {
	flexAlignCenter,
	flexAllCenter,
	flexSpaceBetween,
} from 'Styles/common';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const ReviewItemCard = ({ payIdx, item, isSeller }) => {
	const navigate = useNavigate();
	const setReviewTarget = useSetRecoilState(reviewAtom);

	const onClickDetail = async () => {
		navigate(`/item_detail/${item.idx}`);
		await ProductApi.addRecent(item.idx);
	};

	const onClickReviewDetail = idx => {
		navigate(`/review/detail/${payIdx}`);
		const forReviewDetail = data.data.reviewList.filter(
			item => item.Product.idx === idx,
		);
		setReviewTarget(forReviewDetail);
	};

	useEffect(() => {
		setReviewTarget(item);
	}, [isSeller]);

	console.log('check', item);

	const onClickReview = () => {
		return navigate(`/review/${payIdx}`);
	};

	const { data } = useQuery(['reviewList'], () => ReviewApi.reviewList());
	data && console.log('이거', data);

	const hasReview = data?.data.reviewList.filter(item => {
		return item.idx == 10;
	});

	const noReview = data?.data.reviewList.filter(item => {
		return item.Review == 'null';
	});

	data && console.log('여기', hasReview, noReview);

	return (
		item && (
			<S.Wrapper>
				<S.Container>
					<S.ItemImg src={item.img_url} />
					<S.ItemInfo>
						<S.ItemTitle>{item.title}</S.ItemTitle>
						<S.ItemPrice>{item.price}</S.ItemPrice>
					</S.ItemInfo>
					<S.BtnContainer>
						<S.Btn onClick={onClickDetail}>아이템 보기</S.Btn>
						{isSeller == 'buyer' && (
							<S.Btn onClick={onClickReview}>리뷰 작성하기</S.Btn>
						)}
						{isSeller == 'buyer' && (
							<S.Btn onClick={onClickReviewDetail(item.idx)}>작성한 리뷰</S.Btn>
						)}
					</S.BtnContainer>
				</S.Container>
			</S.Wrapper>
		)

		// )
	);
};

export default ReviewItemCard;

const Wrapper = styled.div`
	${flexSpaceBetween}
	margin-top: 20px;
`;

const Container = styled.div`
	${flexAlignCenter}
	width: 100%;
	border-radius: 10px;
	box-shadow: rgba(100, 111, 124, 0.2) 0px 2px 5px;
	padding: 10px 20px;
	position: relative;
	:hover {
		box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px;
	}
`;

const ItemImg = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
`;

const ItemInfo = styled.div`
	padding-left: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ItemTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	padding-bottom: 10px;
	width: 200px;
	display: inline-block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const ItemPrice = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sm};
	color: ${({ theme }) => theme.color.gray[300]};
`;

const BtnContainer = styled.div`
	${flexAllCenter}
	position: absolute;
	right: 10px;
`;

const Btn = styled.button`
	border: none;
	border-radius: 10px;
	font-size: ${({ theme }) => theme.fontSize.xs};
	height: 30px;
	margin-left: 10px;
	padding: 20px 15px;
	cursor: pointer;
	${flexAllCenter}
	:hover {
		background-color: ${({ theme }) => theme.color.primary[100]};
	}
`;

const S = {
	Wrapper,
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	BtnContainer,
	Btn,
};
