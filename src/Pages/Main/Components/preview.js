import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import ProductApi from 'Apis/productApi';

import ItemCard from 'Components/Card/Card';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

import { basicSetting, flexSpaceBetween } from 'Styles/common';

const Preview = ({ category }) => {
	const { data } = useQuery(['mainList'], () => ProductApi.mainList());

	const products =
		data && (category === 0 ? data.data.usedProduct : data.data.freeProduct);
	let categoryDeclare = category === 0 ? '중고 아이템' : '무료 아이템';
	let categoryText =
		category === 0
			? `${data && data.data.region}에 있는 줍줍템을 확인하세요!`
			: `회원님 주변의 무료나눔 물품을 놓치지 마세요!`;

	const [slidesToShow, setSlidesToShow] = useState(2);

	const sliderSettings = {
		infinite: true,
		dots: false,
		speed: 500,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		swipe: false,

		nextArrow: (
			<Div>
				<img src="/Assets/Icon/right-arrow.png" />
			</Div>
		),
		prevArrow: (
			<DivPre>
				<img src="/Assets/Icon/left-arrow.png" />
			</DivPre>
		),
	};

	const handleResize = () => {
		if (window.innerWidth >= 1300) {
			setSlidesToShow(4);
		} else if (window.innerWidth >= 1100) {
			setSlidesToShow(3);
		} else if (window.innerWidth >= 800) {
			setSlidesToShow(3);
		} else if (window.innerWidth >= 580) {
			setSlidesToShow(2);
		} else if (window.innerWidth >= 414) {
			setSlidesToShow(2);
		} else {
			setSlidesToShow(2);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<S.Wrapper>
			<S.UpperSwiper>
				<S.CategoryBox>{categoryDeclare}</S.CategoryBox>
				<S.SpaceBetween>
					<S.CategoryText>{categoryText}</S.CategoryText>
				</S.SpaceBetween>
			</S.UpperSwiper>
			{products?.length <= 3 ? (
				<S.TempSlider>
					{products?.map(item => (
						<ItemCard key={item.idx} products={item} index={item.idx} />
					))}
				</S.TempSlider>
			) : (
				<S.SliderWrapper>
					<Slider {...sliderSettings}>
						{products?.map(item => (
							<ItemCard key={item.idx} products={item} index={item.idx} />
						))}
					</Slider>
				</S.SliderWrapper>
			)}
		</S.Wrapper>
	);
};

export default Preview;

const Wrapper = styled.div`
	${basicSetting}
	width: 100%;
	padding-top: 50px;
`;

const UpperSwiper = styled.div`
	width: 100%;
	flex-direction: column;
	display: flex;
	margin-bottom: 20px;
`;

const CategoryBox = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	color: ${({ theme }) => theme.color.primary};
`;

const SpaceBetween = styled.div`
	${flexSpaceBetween}
	padding-right: 10px;
`;

const CategoryText = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
	margin-top: 10px;
`;

const TempSlider = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
`;

const SliderWrapper = styled.div`
	width: 100%;
	position: relative;
	.slick-prev::before,
	.slick-next::before {
		opacity: 0;
		display: none;
	}
	.slick-slide div {
		cursor: pointer;
	}
`;

const Div = styled.div`
	width: 40px;
	height: 40px;
	position: absolute;
	right: -40px;
	z-index: 99;
	text-align: right;
	line-height: 30px;
	border-radius: 50%;
	background-color: rgba(217, 217, 217, 0.4);
	img {
		width: 23px;
		position: relative;
		left: -6px;
		top: 7px;
	}
	@media (max-width: 600px) {
		right: 0px;
		background-color: rgba(217, 217, 217, 0.8);
	}
`;

const DivPre = styled.div`
	width: 40px;
	height: 40px;
	position: absolute;
	left: -50px;
	z-index: 99;
	text-align: left;
	line-height: 30px;
	border-radius: 50%;
	background-color: rgba(217, 217, 217, 0.4);
	img {
		width: 23px;
		position: relative;
		right: -6px;
		top: 7px;
	}
	@media (max-width: 600px) {
		left: 0px;
		background-color: rgba(217, 217, 217, 0.8);
	}
`;

const S = {
	Wrapper,
	UpperSwiper,
	CategoryBox,
	SpaceBetween,
	CategoryText,
	TempSlider,
	SliderWrapper,
};
