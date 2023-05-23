import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';
import moment from 'moment';
import { useState } from 'react';
import { PurchaseMockData, SaleMockData } from './mock';

const AccountBookDetailInfo = ({ date, setDate, year, month }) => {
	let saleDateArr = [];
	SaleMockData['payList'].map(item => {
		const saleDate = item.createAt;
		saleDateArr.push(saleDate.split('T')[0]);
	});

	let purchaseDateArr = [];
	PurchaseMockData['payList'].map(item => {
		const saleDate = item.createAt;
		purchaseDateArr.push(saleDate.split('T')[0]);
	});

	const [sale, setSale] = useState(saleDateArr);
	const [purchase, setPurchase] = useState(purchaseDateArr);

	const [saleCount, setSaleCount] = useState(SaleMockData.count);
	const [purchaseCount, setPurchaseCount] = useState(PurchaseMockData.count);

	const [saleAmount, setSaleAmount] = useState(
		SaleMockData['amount'].thisMonthSaleAmount,
	);
	const [purchaseAmount, setPurchaseAmount] = useState(
		PurchaseMockData['amount'].thisMonthPurchaseAmount,
	);

	return (
		<>
			<S.PreviewWrap>
				<S.PreviewContent>
					<S.Text>
						{year}년 {month}월에는 이렇게 거래했어요 :)
					</S.Text>
				</S.PreviewContent>
				<S.PreviewContent>
					<S.SummaryContent1>
						판매건수
						<br />
						구매건수
						<br />
						{/* 무료나눔<br/> */}
					</S.SummaryContent1>
					<S.SummaryContent2>
						{saleCount}건<br />
						{purchaseCount}건<br />
					</S.SummaryContent2>
					<S.SummaryContent2>
						{saleAmount}원<br />
						{purchaseAmount}원<br />
					</S.SummaryContent2>
				</S.PreviewContent>
			</S.PreviewWrap>
			<Calendar
				value={date}
				onChange={setDate}
				className="react-calendar"
				formatDay={(locale, date) => moment(date).format('D')}
				tileContent={({ date }) => {
					if (sale.find(day => day === moment(date).format('YYYY-MM-DD'))) {
						return (
							<>
								<div className="sale"></div>
							</>
						);
					}
					if (purchase.find(day => day === moment(date).format('YYYY-MM-DD'))) {
						return (
							<>
								<div className="purchase"></div>
							</>
						);
					}
				}}
			/>
			{/* <span>선택한 날짜</span>
          {date.getDate()} */}
			<div>카드 컴포넌트</div>
		</>
	);
};

export default AccountBookDetailInfo;

// 거래내역 박스
const PreviewWrap = styled.div`
	width: 100%;
	height: 300px;
	box-shadow: 0px 0px 20px #e0e0e0;
	border-radius: 15px;
	background-color: ${({ theme }) => theme.color.primary[100]};
	margin-bottom: 30px;
	padding-top: 30px;
	& > div:nth-child(1) {
		border-bottom: solid 3px ${({ theme }) => theme.color.gray[100]};
		align-items: center;
	}
	& > div:nth-child(2) {
		margin-top: 30px;
		width: 40%;
		height: 250px;
		justify-content: space-between;
	}
`;

const PreviewContent = styled.div`
	width: 45%;
	height: 80px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
`;

const Month = styled.div`
	width: 90px;
	height: 90px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.color.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSize.big};
	color: ${({ theme }) => theme.color.white};
`;

const Text = styled.div`
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const SummaryContent1 = styled.div`
	margin-top: 20px;
	font-size: ${({ theme }) => theme.fontSize.base};
	line-height: 3rem;
`;

const SummaryContent2 = styled.div`
	margin-top: 20px;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	line-height: 3rem;
	text-align: right;
	& > div {
		margin-top: 40px;
		font-size: ${({ theme }) => theme.fontSize.md};
		color: ${({ theme }) => theme.color.primary};
	}
`;

// 가계부 그래프
const GraphWrap = styled.div`
	margin-top: 80px;
	width: 100%;
	height: 700px;
`;

const MonthButtonsZone = styled.div`
	display: flex;
	align-items: right;
	float: right;
	margin: 50px 0 10px;
`;

const MonthButton = styled.button`
	width: 140px;
	height: 40px;
	margin-left: 10px;
	border: 2.5px solid #d9d9d9;
	border-radius: 0.5em;
	background-color: white;
	box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
	cursor: pointer;
	:hover {
		color: red;
	}
	font-size: ${({ theme }) => theme.fontSize.base};
`;

const Graph = styled.div`
	margin-top: 110px;
	width: 100%;
	height: 500px;
	background-color: ${({ theme }) => theme.color.subBeige};
`;

const S = {
	PreviewWrap,
	PreviewContent,
	Month,
	Text,
	SummaryContent1,
	SummaryContent2,
	GraphWrap,
	MonthButtonsZone,
	MonthButton,
	Graph,
};
