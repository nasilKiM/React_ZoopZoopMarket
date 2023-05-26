const CategoryConverter = word => {
	let selectedCategory = '';

	if (word[0] === '휴대폰') {
		selectedCategory = '디지털기기';
	} else if (word[0] === '전자렌지') {
		selectedCategory = '주방가전';
	} else if (word[0] === '침대') {
		selectedCategory = '인테리어';
	} else if (word[0] === '장난감') {
		selectedCategory = '유아동';
	} else if (word[0] === '아이스크림') {
		selectedCategory = '가공식품';
	} else if (word[0] === '테니스') {
		selectedCategory = '스포츠';
	} else if (word[0] === '여성지갑') {
		selectedCategory = '여성잡화';
	} else if (word[0] === '원피스') {
		selectedCategory = '여성의류';
	} else if (word[0] === '남성구두') {
		selectedCategory = '남성패션';
	} else if (word[0] === '닌텐도') {
		selectedCategory = '취미';
	} else if (word[0] === '뷰티') {
		selectedCategory = '미용';
	} else if (word[0] === '고양이') {
		selectedCategory = '반려동물 용품';
	} else if (word[0] === '도서') {
		selectedCategory = '도서/티켓/음반';
	} else if (word[0] === '식물') {
		selectedCategory = '식물';
	} else if (word[0] === '기타') {
		selectedCategory = '기타';
	}
	return selectedCategory;
};

export default CategoryConverter;
