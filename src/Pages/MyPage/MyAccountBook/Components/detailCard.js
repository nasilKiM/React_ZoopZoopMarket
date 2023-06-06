import { useEffect, useState } from 'react';

import ItemCard from 'Components/Card/Card';

import styled from 'styled-components';
import { basicSetting } from 'Styles/common';

const DetailCard = ({ data, category, year, month }) => {
	let priceArr = [];
	let sum = 0;
	const [amount, setAmount] = useState('0');	
	
	useEffect(() => {
		setAmount(0);
		for(let i = 0; i < data.payList.length; i++) {
			priceArr.push(data.payList[i].Product.price)
		} 
		for(let i = 0; i < priceArr.length; i++) {
			sum += priceArr[i];
			setAmount(sum);
		}
	}, [year, month, category]);

    return (
      <>
		<S.Wrap>
			<S.infoTitle><S.Amount>{year}년 {month}월</S.Amount>의 거래 내역이에요 !</S.infoTitle>
			<S.PreviewWrap>
				<div>
					<S.Flex>
						<div>{category === "seller" ? "판매" : "구매"}</div>
						<S.Flex2>
							<div>{data.payList.length}건</div>
							<div>{(amount).toLocaleString('ko-KR')}원</div>
						</S.Flex2>
					</S.Flex>
				</div>
			</S.PreviewWrap>
		</S.Wrap>

		<S.Container>
			{data && data.payList.map(item => <ItemCard 
				index={item.idx} 
				products={item.Product} 
				isDone={true} 
				createdAt={item.createdAt}
				category={category}
			/>)}
		</S.Container>
      </>
    )
};

export default DetailCard;

const Wrap = styled.div`
	${basicSetting}
`;

const Container = styled.div`
	width: 60%;
	display: grid;
	justify-items: center;
	margin: 30px auto;

	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
	@media screen and (max-width: 400px) {
		grid-template-rows: repeat(2, minmax(180px, 1fr));
		column-gap: 10px;
	}
	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(2, minmax(180px, 1fr));
		column-gap: 10px;
		row-gap: 20px;
	}
	@media screen and (min-width: 768px) and (max-width: 1000px) {
		grid-template-columns: repeat(2, minmax(250px, 1fr));
		column-gap: 20px;
		row-gap: 30px;
	}
	@media screen and (min-width: 1001px) and (max-width: 1499px) {
		grid-template-columns: repeat(3, minmax(270px, 1fr));
		column-gap: 20px;
		row-gap: 35px;
	}
	@media screen and (min-width: 1500px) {
		grid-template-columns: repeat(4, minmax(280px, 1fr));
		column-gap: 20px;
		row-gap: 40px;
	}
`;

const infoTitle = styled.div`
	width: 80%;
	margin: 0 auto 10px;
`;

const PreviewWrap = styled.div`
	width: 80%;
	height: 15vh;
	margin: 0 auto 30px;
	padding: 30px 20px 20px;
	box-shadow: 0px 0px 20px #e0e0e0;

	> div:nth-child(1) {
		display: flex;
		justify-content: center;
		margin-bottom: 30px;
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}

	> div:nth-child(2) {
		margin: 0 auto;
	}
`;

const Flex = styled.div`
	display: flex;
	margin: 1.3rem auto;
	width: 50%;
	justify-content: space-between;
`;

const Flex2 = styled.div`
	display: flex;
	width: max-content;
	& div:nth-child(1) {
		margin-right: 20px;
	} 
`;

const Amount = styled.span`
	color: ${({ theme }) => theme.color.primary[300]};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

const S = {
  Wrap,
  Container,
  infoTitle,
  PreviewWrap,
  Flex,
  Flex2,
  Amount,
};