import { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductApi from 'Apis/productApi';
import { useEffect } from 'react';
import ItemCardMock from 'Components/Card/Desktop/Card copy';

const Preview = ({ category, products }) => {
	const [data, setData] = useState();
	// const products =
	// 	data && (category === 0 ? data.usedProduct : data.freeProduct);
	let categoryDeclare = category === 0 ? '중고 아이템' : '무료 아이템';
	let categoryText =
		category === 0
			? `${data && data.region}에 있는 줍줍템을 확인하세요!`
			: `회원님 주변의 무료나눔 물품을 놓치지 마세요!`;

	const [swiper, setSwiper] = useState(null);

	const handleNext = () => {
		swiper.slideNext();
	};

	const handlePrev = () => {
		swiper.slidePrev();
	};

	useEffect(() => {
		const List = async () => {
			const res = await ProductApi.mainList();
			setData(res.data);
		};
		List();
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
			<S.SwiperWrapper>
				<S.Btn onClick={handlePrev}> &lt;</S.Btn>
				<Swiper onSwiper={setSwiper} spaceBetween={0} slidesPerView={4}>
					{products?.map(item => (
						<SwiperSlide>
							{/* <ItemCard key={item} products={item} index={item.idx} /> */}
							<ItemCardMock key={item} products={item} index={item.idx} />
						</SwiperSlide>
					))}
				</Swiper>
				<S.Btn onClick={handleNext}> &gt;</S.Btn>
			</S.SwiperWrapper>
		</S.Wrapper>
	);
};

export default Preview;

const Wrapper = styled.div`
	width: 100%;
	min-width: 700px;
	max-width: 1200px;
	margin: 0 auto;
	padding-top: 20px;
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
	/* position: absolute; */
	justify-content: flex-end;
	right: 0%;
	cursor: pointer;
	:hover {
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}
`;
const SwiperWrapper = styled.div`
	width: 100%;
	margin: 10px;
	margin-top: 30px;
	display: flex;
	align-items: center;
`;
const Btn = styled.button`
	border: none;
	font-size: ${({ theme }) => theme.fontSize.md};
	border-radius: 50%;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
	margin-left: 10px;
	margin-right: 10px;
	background: none;
	:hover {
		color: ${({ theme }) => theme.color.primary};
	}
`;

const S = {
	Wrapper,
	UpperSwiper,
	SpaceBetween,
	CategoryBox,
	CategoryText,
	More,
	SwiperWrapper,
	Btn,
};
