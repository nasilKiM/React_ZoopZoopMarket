import React, { useState } from 'react';
import styled from 'styled-components';

const categories = [
	{
		id: 1,
		name: '디지털기기',
	},
	{
		id: 2,
		name: '생활·주방가전',
	},
	{
		id: 3,
		name: '가구·인테리어',
	},
	{
		id: 4,
		name: '유아동',
	},
	{
		id: 5,
		name: '가공식품',
	},
	{
		id: 6,
		name: '스포츠·레저',
	},
	{
		id: 7,
		name: '여성잡화',
	},
	{
		id: 8,
		name: '여성의류',
	},
	{
		id: 9,
		name: '남성패션·잡화',
	},
	{
		id: 10,
		name: '게임·취미',
	},
	{
		id: 11,
		name: '뷰티·미용',
	},
	{
		id: 12,
		name: '반려동물용품',
	},
	{
		id: 13,
		name: '도서·티켓·음반',
	},
	{
		id: 14,
		name: '식물',
	},
	{
		id: 15,
		name: '기타 중고아이템',
	},
];

const CategorySelector = ({ setTags, tags }) => {
	const [fixedTags, setFixedTags] = useState('');

	const handleCategoryChange = event => {
		const selectedCategory = event.target.value;
		const isCategorySelected = tags.some(tag => tag[0] === selectedCategory);

		if (!isCategorySelected) {
			setFixedTags(selectedCategory);

			if (selectedCategory !== '') {
				const tag = [selectedCategory];
				setTags([...tags, tag]);
			}
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
