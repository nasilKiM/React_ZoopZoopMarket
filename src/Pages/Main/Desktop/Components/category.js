import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
	{ id: 1, name: '디지털기기', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 2, name: '생활가전', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 3, name: '가구/인테리어', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 4, name: '유아동', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 5, name: '생활/가공식품', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 6, name: '스포츠/레저', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 7, name: '여성잡화', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 8, name: '여성의류', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 9, name: '남성패션/잡화', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 10, name: '게임/취미', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 11, name: '뷰티/미용', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 12, name: '반려동물용품', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 13, name: '도서/티켓/음반', icon: '/Assets/Images/defaultProfile.png' },
	{ id: 14, name: '식물', icon: '/Assets/Images/defaultProfile.png' },
	{
		id: 15,
		name: '기타 중고아이템',
		icon: '/Assets/Images/defaultProfile.png',
	},
];
const Category = () => {
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 0,
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
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
		],
	};

	const CategorySlider = () => {
		return (
			<>
				<CategoryWrapper>
					<Slider {...settings}>
						{categories.map(category => (
							<CategoryContainer>
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
	margin-bottom: 8px;
	:hover {
		border-radius: 50%;
		border: 2px solid #ffecec;
	}
`;

const ItemName = styled.div`
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	text-align: center;
`;
