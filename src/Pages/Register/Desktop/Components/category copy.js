import React, { useState } from 'react';
import styled from 'styled-components';

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

const CategorySelector = ({ setTags, tags }) => {
	const [fixedTags, setFixedTags] = useState('');

	const handleCategoryChange = event => {
		const selectedCategory = event.target.value;
		setFixedTags(selectedCategory);

		if (selectedCategory !== '') {
			const tag = [selectedCategory];
			setTags([...tags, tag]);
		}
	};

	return (
		<S.CategoryWrapper>
			<S.Selector value={fixedTags} onChange={handleCategoryChange}>
				<option value="">카테고리 태그를 선택해주세요</option>
				{categories.map(category => (
					<option key={category.id} value={category.name}>
						{category.name}
					</option>
				))}
			</S.Selector>
		</S.CategoryWrapper>
	);
};

export default CategorySelector;

const CategoryWrapper = styled.div`
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const Selector = styled.select`
	width: 100%;
	padding: 8px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	color: #555;
`;

const S = {
	CategoryWrapper,
	Selector,
};
