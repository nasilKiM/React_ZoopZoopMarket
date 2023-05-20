import MyPageApi from 'Apis/myPageApi';
import ItemCard from 'Components/Card/Desktop/Card';
import { flexAllCenter } from 'Styles/common';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MyItemPage = () => {
	// const item = new Array(8).fill(0);

	const [myItemList, setMyItemList] = useState([]); //!?
	const [page, setPage] = useState(1);
	const [category, setCategory] = useState(0); // 0:중고 1:무료
	
	const getMyItemList = async () => {
		try {
			const res = await MyPageApi.productList({page, category});
			console.log(res.data.products); // 확인용
			setMyItemList(res.data.products);
		} catch (err) {
			console.log(err);
		}
	}

	myItemList && console.log(myItemList[0]);

	useEffect(() => {
		getMyItemList()
	}, [page, category]);

	const onClickSaleCategory = () => {
		setCategory(0);
	};

	const onClickFreeCategory = () => {
		setCategory(1);
	};

	return (
		<S.Div>
			<S.CategoryZone>
				<S.Category category={category === 0} onClick={onClickSaleCategory}>중고 물품</S.Category>
				<S.Category category={category === 1} onClick={onClickFreeCategory}>무료 나눔</S.Category>
			</S.CategoryZone>
			<S.Wrapper>
				{myItemList && myItemList.map(item => (
					  <ItemCard index={item.idx} products={item}/>
				))}
				{/*onClick={() => navigate(`/detail/${item.id}`)} */}
				{/* {item.map(() => (
					<S.Container>
						<S.ItemImg src="Assets/Images/bicycle.jpg" />
						<S.ItemInfo>
							<S.ItemTitle>[제목] 제목이 들어갑니다.</S.ItemTitle>
							<S.ItemPrice>130,000 원</S.ItemPrice>
							<S.ItemTag>#태그 #태그2 #태그3</S.ItemTag>
							<S.WrapEditBtns>
								<EditBtns />
							</S.WrapEditBtns>
						</S.ItemInfo>
					</S.Container>
				))} */}
			</S.Wrapper>
		</S.Div>
	);
};

export default MyItemPage;
const Div = styled.div`
	width: 100%;
	height: 500px;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	/* padding: 20px; */
	border: 1px solid ${({ theme }) => theme.color.gray[100]};
`;

// const Container = styled.div`
// 	min-width: 200px;
// 	max-height: 400px;
// 	cursor: pointer;
// 	margin: 10px;
// 	padding-bottom: 10px;
// `;

// const ItemImg = styled.img`
// 	width: 100%;
// 	padding: 15px;
// 	max-height: 250px;
// 	object-fit: cover;
// 	margin: auto;
// `;

// const ItemInfo = styled.div`
// 	padding-top: 15px;
// 	max-height: 150px;
// 	display: flex;
// 	flex-direction: column;
// 	padding: 0 15px;
// `;

// const ItemTitle = styled.div`
// 	font-size: ${({ theme }) => theme.fontSize.base};
// 	margin-bottom: 10px;
// `;

// const ItemPrice = styled.span`
// 	font-size: ${({ theme }) => theme.fontSize.base};
// 	font-weight: ${({ theme }) => theme.fontWeight.bold};
// 	margin-bottom: 15px;
// `;

// const ItemTag = styled.span`
// 	font-size: ${({ theme }) => theme.fontSize.sm};
// 	overflow: hidden;
// 	margin-bottom: 10px;
// `;

// const WrapEditBtns = styled.div`
// 	display: flex;
// 	width: 100%;
// 	justify-content: space-between;
// `;

const CategoryZone = styled.div`
	display: flex;
	margin-bottom: 30px;
	& > div:first-child {
		border-right: solid 3px ${({theme}) => theme.color.primary[100]};
	}
`;

const Category = styled.div`
	width: 130px;
	height: 30px;
	${flexAllCenter}
	:hover {
		font-size: ${({theme}) => theme.fontSize.md};
	}
	color: ${({category}) => category ? '#FF3647' : 'black'}
`;

const S = {
	Div,
	Wrapper,
	/* Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	ItemTag,
	WrapEditBtns, */
	CategoryZone,
	Category
};
