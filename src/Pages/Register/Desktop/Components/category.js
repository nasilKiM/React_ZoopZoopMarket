import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
	{
		id: 1,
		name: '디지털기기',
		icon: '/Assets/Icon/Category/1.디지털기기.png',
	},
	{
		id: 2,
		name: '생활·주방가전',
		icon: '/Assets/Icon/Category/2.생활주방가전.png',
	},
	{
		id: 3,
		name: '가구·인테리어',
		icon: '/Assets/Icon/Category/3.가구.png',
	},
	{
		id: 4,
		name: '유아동',
		icon: '/Assets/Icon/Category/4.유아동.png',
	},
	{
		id: 5,
		name: '가공식품',
		icon: '/Assets/Icon/Category/5.가공식품.png',
	},
	{
		id: 6,
		name: '스포츠·레저',
		icon: '/Assets/Icon/Category/6.스포츠.png',
	},
	{
		id: 7,
		name: '여성잡화',
		icon: '/Assets/Icon/Category/7.여성잡화.png',
	},
	{
		id: 8,
		name: '여성의류',
		icon: '/Assets/Icon/Category/8.여성의류.png',
	},
	{
		id: 9,
		name: '남성패션·잡화',
		icon: '/Assets/Icon/Category/9.남성패션.png',
	},
	{
		id: 10,
		name: '게임·취미',
		icon: '/Assets/Icon/Category/10.게임.png',
	},
	{
		id: 11,
		name: '뷰티·미용',
		icon: '/Assets/Icon/Category/11.뷰티미용.png',
	},
	{
		id: 12,
		name: '반려동물용품',
		icon: '/Assets/Icon/Category/12.반려동물.png',
	},
	{
		id: 13,
		name: '도서·티켓·음반',
		icon: '/Assets/Icon/Category/13.도서티켓음반.png',
	},
	{
		id: 14,
		name: '식물',
		icon: '/Assets/Icon/Category/14.식물.png',
	},
	{
		id: 15,
		name: '기타 중고아이템',
		icon: '/Assets/Icon/Category/15.기타중고아이템.png',
	},
];
const NextArrow = ({ onClick }) => (
	<div className="custom-arrow custom-arrow-next" onClick={onClick}>
		&lt; 이동 &gt;
	</div>
);
const Category = ({ setTags, tags }) => {
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 8,
		slidesToScroll: 8,
		responsive: [
			{
				breakpoint: 968,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				},
			},
			{
				breakpoint: 368,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
		],
		nextArrow: <NextArrow />,
	};
	const [fixedTags, setFixedTags] = useState([]);
	useEffect(() => {
		if (fixedTags.length > 0) {
			const tag = [fixedTags];
			setTags([...tags, tag]);
		}
	}, [fixedTags]);

	const CategorySlider = () => {
		return (
			<>
				<CategoryWrapper>
					<Slider {...settings}>
						{categories.map(category => (
							<CategoryContainer onClick={() => setFixedTags(category.name)}>
								<CategoryItem key={category.id}>
									<CategoryIcon src={category.icon} alt={category.name} />
									<ItemName>{category.name}</ItemName>
								</CategoryItem>
							</CategoryContainer>
						))}
					</Slider>
				</CategoryWrapper>
			</>
		);
	};

	return <CategorySlider />;
};
export default Category;

const CategoryWrapper = styled.div`
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const CategoryContainer = styled.div`
	display: flex;
	cursor: pointer;
`;

const CategoryItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.xs};
	color: #555;
`;

const CategoryIcon = styled.img`
	width: 50px;
	height: 50px;
	margin-bottom: 8px;
	border-radius: 50%;
	background-color: #ffecec;
	object-fit: fill;
	padding: 10px;
	:hover {
		border-radius: 50%;
		border: 2px solid #ffecec;
	}
`;

const ItemName = styled.div`
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	text-align: center;
`;
