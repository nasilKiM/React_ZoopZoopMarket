import styled from 'styled-components';

const Preview = ({ categoryData, userLocation, userName }) => {
	let category = categoryData === 1 ? '중고 물품' : '무료나눔';
	let categoryText =
		categoryData === 1
			? `${userLocation} 인기 줍줍템!`
			: `${userName}님 주변의 무료나눔 물품들 이에요!`;
	return (
		<S.Wrapper>
			<S.UpperSwiper>
				<S.CategoryBox>{category}</S.CategoryBox>
				<S.CategoryText>{categoryText}</S.CategoryText>
				<S.More> 더보기 &gt; </S.More>
			</S.UpperSwiper>
			<S.SwiperWrapper>
				{/* <Swiper
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
				</Swiper> */}
			</S.SwiperWrapper>
		</S.Wrapper>
	);
};

export default Preview;

const Wrapper = styled.div`
	width: 60%;
	max-width: 1000px;
	min-width: 1000px;
	margin: 0 auto;
`;
const UpperSwiper = styled.div`
	display: flex;
	border: 1px solid navajowhite;
`;
const CategoryBox = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;
const CategoryText = styled.div``;
const More = styled.div``;
const SwiperWrapper = styled.div``;
const S = {
	Wrapper,
	UpperSwiper,
	CategoryBox,
	CategoryText,
	More,
	SwiperWrapper,
};
