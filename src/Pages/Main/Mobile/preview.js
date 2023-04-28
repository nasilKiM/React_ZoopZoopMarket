import { itemListState } from 'Atoms/main.atom';
import MobileCard from 'Components/Card/Mobile/MobileCard';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const MobilePreview = (user, categoryData) => {
	const itemList = useRecoilValue(itemListState);

	let itemCategory = itemList.category;
	let userLocation = user.userLocation;
	let userName = user.userName;
	// console.log(categoryData);
	let category = categoryData === 1 ? '중고 물품' : '무료나눔';
	let categoryText =
		categoryData === 1
			? `${userLocation} 인기 줍줍템!`
			: `${userName}님 주변의 무료나눔 물품들 이에요!`;

	// const itemList = [1, 2, 3, 4, 5, 6, 7, 8];

	const [swiper, setSwiper] = useState(null);

	const handleNext = () => {
		swiper.slideNext();
	};

	const handlePrev = () => {
		swiper.slidePrev();
	};

	return (
		<S.Wrapper>
			<S.UpperSwiper>
				<S.CategoryBox>{category}</S.CategoryBox>
				{userLocation && <S.CategoryText>{categoryText}</S.CategoryText>}
				<S.More> 더보기 &gt; </S.More>
			</S.UpperSwiper>
			<S.SwiperWrapper>
				<S.Btn onClick={handlePrev}> &lt;</S.Btn>
				<Swiper onSwiper={setSwiper} spaceBetween={0} slidesPerView={1}>
					{itemList.map(item => (
						<SwiperSlide>
							<ItemContainer>
								<MobileCard key={item} />
							</ItemContainer>
						</SwiperSlide>
					))}
				</Swiper>

				<S.Btn onClick={handleNext}> &gt;</S.Btn>
			</S.SwiperWrapper>
		</S.Wrapper>
	);
};

export default MobilePreview;

const Wrapper = styled.div`
	margin: 0 auto;
	margin-top: 25px;
	margin-bottom: 30px;
`;
const UpperSwiper = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
`;
const CategoryBox = styled.div`
	width: 20%;
	text-align: center;
	padding-top: 15px;
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	background-color: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};
	border-radius: 10px;
`;
const CategoryText = styled.div`
	padding-top: 15px;
	font-size: ${({ theme }) => theme.fontSize.xs};
	margin: 0 5%;
`;
const More = styled.div`
	padding-top: 15px;
	width: 55%;
	font-size: ${({ theme }) => theme.fontSize.xs};

	text-align: end;
`;
const SwiperWrapper = styled.div`
	padding: 10px 30px;
	border: 1px solid ${({ theme }) => theme.color.subBeigeGreen};
	margin-top: 10px;
	display: flex;
	align-items: center;
`;

const ItemContainer = styled.div`
	border: 1px solid red;
	width: 10px;
	> ItemCard {
		width: 100%;
		margin-bottom: 15px;
		border: 2px solid black;
		border-color: ${({ theme }) => theme.color.subBeigeGreen};
		border-radius: 10px;
	}
`;
const Btn = styled.button`
	border: none;
	font-size: ${({ theme }) => theme.fontSize.big};
	background: none;
	width: 70px;
	:hover {
		color: ${({ theme }) => theme.color.primary};
	}
`;

const S = {
	Wrapper,
	UpperSwiper,
	CategoryBox,
	CategoryText,
	More,
	SwiperWrapper,
	Btn,
};
