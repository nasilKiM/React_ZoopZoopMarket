import { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductApi from 'Apis/productApi';
import { useEffect } from 'react';
//import ItemCardMock from 'Components/Card/Desktop/Card copy';
import ItemCard from 'Components/Card/Desktop/Card';
import { useQuery } from 'react-query';

const Preview = ({ category }) => {
	//const [data, setData] = useState();
	const { data } = useQuery('mainList', ProductApi.mainList);

	const products =
		data && (category === 0 ? data.data.usedProduct : data.data.freeProduct);
	let categoryDeclare = category === 0 ? '중고 아이템' : '무료 아이템';
	let categoryText =
		category === 0
			? `${data && data.region}에 있는 줍줍템을 확인하세요!`
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
		} else if (window.innerWidth >= 480) {
			setSlidesToShow(2);
		} else {
			setSlidesToShow(2);
		}
	};

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const res = await ProductApi.mainList();
	// 		setData(res.data);
	// 	};
	// 	fetchData();
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
				<S.SpaceBetween>
					<S.CategoryBox>{categoryDeclare}</S.CategoryBox>
					<S.More> 더보기 &gt; </S.More>
				</S.SpaceBetween>
				<S.CategoryText>{categoryText}</S.CategoryText>
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
	min-width: 700px;
	max-width: 1200px;
	margin: 0 auto;
	padding-top: 50px;
`;
const UpperSwiper = styled.div`
	width: 100%;
	flex-direction: column;
	display: flex;
`;

const SpaceBetween = styled.div`
	display: flex;
	justify-content: space-between;
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
	right: 0%;
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
	}
`;
const Div = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	right: -30px;
	z-index: 99;
	text-align: right;
	line-height: 30px;
	border-radius: 50%;
	img {
		width: 30px;
	}
	:hover {
		background-color: ${({ theme }) => theme.color.gray};
	}
`;
const DivPre = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	left: -40px;
	z-index: 99;
	text-align: left;
	line-height: 30px;
	border-radius: 50%;
	img {
		width: 30px;
	}
	:hover {
		background-color: ${({ theme }) => theme.color.gray};
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

// import { useState } from 'react';
// import styled from 'styled-components';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import ProductApi from 'Apis/productApi';
// import { useEffect } from 'react';
// import ItemCardMock from 'Components/Card/Desktop/Card copy';

// const Preview = ({ category, products }) => {
// 	const [data, setData] = useState();
// 	// const products =
// 	// 	data && (category === 0 ? data.usedProduct : data.freeProduct);
// 	let categoryDeclare = category === 0 ? '중고 아이템' : '무료 아이템';
// 	let categoryText =
// 		category === 0
// 			? `${data && data.region}에 있는 줍줍템을 확인하세요!`
// 			: `회원님 주변의 무료나눔 물품을 놓치지 마세요!`;

// 	const [swiper, setSwiper] = useState(null);
// 	const [slidesPerView, setSlidesPerView] = useState(4);

// 	const handleNext = () => {
// 		swiper.slideNext();
// 	};

// 	const handlePrev = () => {
// 		swiper.slidePrev();
// 	};

// 	useEffect(() => {
// 		const List = async () => {
// 			const res = await ProductApi.mainList();
// 			setData(res.data);
// 		};
// 		List();
// 	}, []);

// 	return (
// 		<S.Wrapper>
// 			<S.UpperSwiper>
// 				<S.SpaceBetween>
// 					<S.CategoryBox>{categoryDeclare}</S.CategoryBox>
// 					<S.More> 더보기 &gt; </S.More>
// 				</S.SpaceBetween>
// 				<S.CategoryText>{categoryText}</S.CategoryText>
// 			</S.UpperSwiper>
// 			<S.SwiperWrapper>
// 				<S.Btn onClick={handlePrev}> &lt;</S.Btn>
// 				<Swiper
// 					onSwiper={setSwiper}
// 					spaceBetween={0}
// 					slidesPerView={slidesPerView}
// 				>
// 					{products?.map(item => (
// 						<SwiperSlide>
// 							{/* <ItemCard key={item} products={item} index={item.idx} /> */}
// 							<ItemCardMock key={item} products={item} index={item.idx} />
// 						</SwiperSlide>
// 					))}
// 				</Swiper>
// 				<S.Btn onClick={handleNext}> &gt;</S.Btn>
// 			</S.SwiperWrapper>
// 		</S.Wrapper>
// 	);
// };

// export default Preview;

// const Wrapper = styled.div`
// 	width: 100%;
// 	min-width: 700px;
// 	max-width: 1200px;
// 	margin: 0 auto;
// 	padding-top: 20px;
// `;
// const UpperSwiper = styled.div`
// 	width: 100%;
// 	flex-direction: column;
// 	display: flex;
// `;

// const SpaceBetween = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// `;

// const CategoryBox = styled.div`
// 	font-size: ${({ theme }) => theme.fontSize.base};
// 	font-weight: ${({ theme }) => theme.fontWeight.bolder};
// 	color: ${({ theme }) => theme.color.primary};
// `;
// const CategoryText = styled.div`
// 	font-size: ${({ theme }) => theme.fontSize.sm};
// 	margin-top: 10px;
// `;

// const More = styled.div`
// 	font-size: ${({ theme }) => theme.fontSize.sm};
// 	/* position: absolute; */
// 	justify-content: flex-end;
// 	right: 0%;
// 	cursor: pointer;
// 	:hover {
// 		font-weight: ${({ theme }) => theme.fontWeight.bolder};
// 	}
// `;
// const SwiperWrapper = styled.div`
// 	width: 100%;
// 	margin: 10px;
// 	margin-top: 30px;
// 	display: flex;
// 	align-items: center;
// `;
// const Btn = styled.button`
// 	border: none;
// 	font-size: ${({ theme }) => theme.fontSize.md};
// 	border-radius: 50%;
// 	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
// 	margin-left: 10px;
// 	margin-right: 10px;
// 	background: none;
// 	:hover {
// 		color: ${({ theme }) => theme.color.primary};
// 	}
// `;

// const S = {
// 	Wrapper,
// 	UpperSwiper,
// 	SpaceBetween,
// 	CategoryBox,
// 	CategoryText,
// 	More,
// 	SwiperWrapper,
// 	Btn,
// };
