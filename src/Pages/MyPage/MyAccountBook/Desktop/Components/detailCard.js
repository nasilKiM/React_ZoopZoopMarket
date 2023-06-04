import { useEffect, useState } from 'react';

import ItemCard from 'Components/Card/Card';

import styled from 'styled-components';

const DetailCard = ({ data, category, year, month }) => {
	let priceArr = [];
	let sum = 0;
	const [amount, setAmount] = useState(sum);

	useEffect(() => {
		for (let i = 0; i < data.payList.length; i++) {
			priceArr.push(data.payList[i].Product.price);
		}
		for (let i = 0; i < priceArr.length; i++) {
			sum += priceArr[i];
			setAmount(sum);
		}
	}, [year, month, category]);

	return (
		<>
			<S.Wrap>
				<S.PreviewWrap>
					<div>
						<S.Amount>
							{year}년 {month}월
						</S.Amount>
						의 거래 내역이에요 !
					</div>
					<div>
						<S.Flex>
							<div>{category === 'seller' ? '판매' : '구매'}</div>
							<div>{amount.toLocaleString('ko-KR')}원</div>
						</S.Flex>
					</div>
				</S.PreviewWrap>
			</S.Wrap>

			<S.Container>
				{data &&
					data.payList.map(item => (
						<ItemCard index={item.idx} products={item.Product} isDone={true} />
					))}
			</S.Container>
		</>
	);
};

export default DetailCard;

const Wrap = styled.div`
	margin: 0 auto;
	width: 60%;
	@media ${({ theme }) => theme.device.tablet} {
		width: 90%;
	}
	@media ${({ theme }) => theme.device.mobile} {
		width: 95%;
	}
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

const PreviewWrap = styled.div`
	width: 80%;
	height: 15vh;
	margin: 0 auto 30px;
	padding: 30px 20px 20px;
	box-shadow: 0px 0px 20px #e0e0e0;
	& > div:nth-child(1) {
		display: flex;
		justify-content: center;
		margin-bottom: 30px;
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
	& > div:nth-child(2) {
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
	margin: 1.3rem auto 1.3rem;
	width: 50%;
	justify-content: space-between;
	border-top: solid 2px ${({ theme }) => theme.color.gray[200]};
	padding-top: 1rem;
`;

const Amount = styled.span`
	color: ${({ theme }) => theme.color.primary[300]};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
`;

const SpecificDate = styled.span``;

const S = {
	Wrap,
	Container,
	PreviewWrap,
	Flex,
	Flex2,
	Amount,
	SpecificDate,
};
