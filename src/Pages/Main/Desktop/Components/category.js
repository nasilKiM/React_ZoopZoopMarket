import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const categories = [
	{
		id: 1,
		name: '디지털기기',
		icon: '/Assets/Icon/Category/1.디지털기기.png',
		keyword: '휴대폰,노트북,모니터,핸드폰,컴퓨터',
	},
	{
		id: 2,
		name: '생활/주방가전',
		icon: '/Assets/Icon/Category/2.생활주방가전.png',
		keyword: '전자렌지,오븐,밥솥,청소기',
	},
	{
		id: 3,
		name: '가구/인테리어',
		icon: '/Assets/Icon/Category/3.가구.png',
		keyword: '침대,매트리스,소파,테이블,화장대,거울,선반,서랍,식탁,의자,책상',
	},
	{
		id: 4,
		name: '유아동',
		icon: '/Assets/Icon/Category/4.유아동.png',
		keyword: '장난감,아기,동화책,젖병,딸랑이,유모차',
	},
	{
		id: 5,
		name: '가공식품',
		icon: '/Assets/Icon/Category/5.가공식품.png',
		keyword: '아이스크림,빵,과자',
	},
	{
		id: 6,
		name: '스포츠/레저',
		icon: '/Assets/Icon/Category/6.스포츠.png',
		keyword: '테니스,축구,야구,농구,공,수영',
	},
	{
		id: 7,
		name: '여성잡화',
		icon: '/Assets/Icon/Category/7.여성잡화.png',
		keyword: '여성지갑,구두,힐,샌들,가방,귀걸이,목걸이,반지',
	},
	{
		id: 8,
		name: '여성의류',
		icon: '/Assets/Icon/Category/8.여성의류.png',
		keyword: '원피스,스커트,블라우스',
	},
	{
		id: 9,
		name: '남성패션/잡화',
		icon: '/Assets/Icon/Category/9.남성패션.png',
		keyword: '남성구두,남성지갑,와이셔츠,정장,양복,남성지갑',
	},
	{
		id: 10,
		name: '게임/취미',
		icon: '/Assets/Icon/Category/10.게임.png',
		keyword: '닌텐도,플레이스테이션,게임기,취미',
	},
	{
		id: 11,
		name: '뷰티/미용',
		icon: '/Assets/Icon/Category/11.뷰티미용.png',
		keyword: '뷰티,미용,립스틱,화장품,파우더,고데기,드라이기',
	},
	{
		id: 12,
		name: '반려동물용품',
		icon: '/Assets/Icon/Category/12.반려동물.png',
		keyword: '고양이,강아지,햄스터,새,산책',
	},
	{
		id: 13,
		name: '도서/티켓/음반',
		icon: '/Assets/Icon/Category/13.도서티켓음반.png',
		keyword: '도서,티켓,음반,CD,콘서트',
	},
	{
		id: 14,
		name: '식물',
		icon: '/Assets/Icon/Category/14.식물.png',
		keyword: '식물,화분,씨앗,꽃,나무,화초,난',
	},
	{
		id: 15,
		name: '기타 중고아이템',
		icon: '/Assets/Icon/Category/15.기타중고아이템.png',
		keyword: '기타,인형,스티커,나눔,문구',
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
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
		],
	};

	const CategorySlider = () => {
		const navigate = useNavigate();

		return (
			<>
				<CategoryWrapper>
					<Slider {...settings}>
						{categories.map(category => (
							<CategoryContainer
								onClick={() => {
									navigate(`/search_list/${category.keyword}/0`);
								}}
							>
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
