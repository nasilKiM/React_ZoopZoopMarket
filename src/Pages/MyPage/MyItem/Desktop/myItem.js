import MyPageApi from 'Apis/myPageApi';
import MyItemCard from 'Components/Card/Desktop/Card_MyItem';
import { flexAllCenter } from 'Styles/common';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MyItemPage = () => {
	const [myItemList, setMyItemList] = useState([]);
	const [page, setPage] = useState(2);
	const [category, setCategory] = useState(0); // 0:중고 1:무료
	
	const getMyItemList = async () => {
		try {
			const res = await MyPageApi.productList({page, category});
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
					  <MyItemCard index={item.idx} products={item}/>
				))}
			</S.Wrapper>
		</S.Div>
	);
};

export default MyItemPage;

const Div = styled.div`
	width: 100%;
	height: 150%;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	border: 1px solid ${({ theme }) => theme.color.gray[100]};
`;

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
	CategoryZone,
	Category
};
