import { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductApi from 'Apis/productApi';
import { useEffect } from 'react';
//import ItemCardMock from 'Components/Card/Desktop/Card copy';
import ItemCard from 'Components/Card/Desktop/Card';
import { useQuery } from '@tanstack/react-query';
import { flexAlignCenter } from 'Styles/common';

const Preview = ({ category }) => {
	const { data } = useQuery(['mainList'], () => ProductApi.mainList());

	const products =
		data && (category === 0 ? data.data.usedProduct : data.data.freeProduct);
	let categoryDeclare = category === 0 ? '중고 아이템' : '무료 아이템';
	let categoryText =
		category === 0
			? `${data && data.data.region}에 있는 줍줍템을 확인하세요!`
			: `회원님 주변의 무료나눔 물품을 놓치지 마세요!`;

	const [slidesToShow, setSlidesToShow] = useState(3);

	const sliderSettings = {
		infinite: true,
		dots: false,
		speed: 500,
		slidesToShow: slidesToShow,
		slidesToScroll: 3,

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
		} else if (window.innerWidth >= 868) {
			setSlidesToShow(3);
		} else if (window.innerWidth >= 580) {
			setSlidesToShow(3);
		} else if (window.innerWidth >= 414) {
			setSlidesToShow(2);
		} else {
			setSlidesToShow(2);
		}
	};

	// useEffect(() => {
	//    const fetchData = async () => {
	//       const res = await ProductApi.mainList();
	//       setData(res.data);
	//    };
	//    fetchData();
	// }, []);
	// console.log(data);

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
					<S.More> 더보기 &gt; </S.More>
				</S.SpaceBetween>
			</S.UpperSwiper>
			<SwiperWrapper>
				<Slider {...sliderSettings}>
					{products?.map(item => (
						<ItemCard key={item} products={item} index={item.idx} />
					))}
					{/* <ItemCard key={item} products={item} index={item.idx} /> */}
					{/* <ItemCardMock key={item} products={item} index={index} /> */}
				</Slider>
			</SwiperWrapper>
		</S.Wrapper>
	);
};

export default Preview;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	min-width: 414px;
	@media (max-width: 700px) {
		width: 95%;
	}
	margin: 0 auto;
	padding-top: 50px;
`;
const UpperSwiper = styled.div`
	width: 100%;
	flex-direction: column;
	display: flex;
	margin-bottom: 20px;
`;

const SpaceBetween = styled.div`
	${flexAlignCenter}
	justify-content: space-between;
	padding-right: 10px;
`;

const CategoryBox = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	color: ${({ theme }) => theme.color.primary};
`;
const CategoryText = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
	margin-top: 10px;
`;

const More = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
	justify-content: flex-end;
	cursor: pointer;
	:hover {
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}
`;

const SwiperWrapper = styled.div`
	width: 100%;
	position: relative;
	.slick-prev::before,
	.slick-next::before {
		opacity: 0;
		display: none;
	}
	.slick-slide div {
		//슬라이더  컨텐츠
		cursor: pointer;
		/* background-color: ${({ theme }) => theme.color.gray[100]}; */
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
`;

const S = {
	Wrapper,
	UpperSwiper,
	SpaceBetween,
	CategoryBox,
	CategoryText,
	More,
};
