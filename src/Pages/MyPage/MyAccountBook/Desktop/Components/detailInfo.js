import Calendar from 'react-calendar';
import dayjs from 'dayjs';

// import 'react-calendar/dist/Calendar.css';
import './styles.css';
import styled from 'styled-components';

const AccountBookDetailInfo = ({ date, setDate, data }) => {
	// let saleDateArr = [];
	// data &&
	// 	data.payList.map(item => {
	// 		const saleDate = item.createdAt;
	// 		saleDateArr.push(saleDate.split('T')[0]);
	// 	});

	// let purchaseDateArr = [];
	// data &&
	// 	data.payList.map(item => {
	// 		const saleDate = item.createdAt;
	// 		purchaseDateArr.push(saleDate.split('T')[0]);
	// 	});
	return (
		<>
			<S.Wrap>
				<S.PreviewWrap>
					<div>지금까지 줍줍마켓과 함께한 내역이에요 !</div>
					{/* <div>
						<S.Flex>
							<div>총 수입총액</div>
							<div>
								{data && (
									<S.Amount>
										{data.amount.totalSaleAmount === null
											? 0
											: parseInt(data.amount.totalSaleAmount).toLocaleString(
													'ko-KR',
											  )}
									</S.Amount>
								)}
								원
							</div>
						</S.Flex>
						<S.Flex>
							<div>총 지출총액</div>
							<div>
								{data && (
									<S.Amount>
										{data.amount.totalPurchaseAmount === null
											? 0
											: parseInt(
													data.amount.totalPurchaseAmount,
											  ).toLocaleString('ko-KR')}
									</S.Amount>
								)}
								원
							</div>
						</S.Flex>
						<S.Flex2>
							<div>총 수익</div>
							{data && (
								<div>
									<S.Amount>
										{data.amount.totalSaleAmount -
											data.amount.totalPurchaseAmount}
									</S.Amount>
									원
								</div>
							)}
						</S.Flex2>
					</div> */}
				</S.PreviewWrap>
				<Calendar
					value={date}
					onChange={setDate}
					className="react-calendar"
					formatDay={(locale, date) => dayjs(date).format('D')}
					// tileContent={({ date }) => {
					// 	if (
					// 		saleDateArr.find(day => day === dayjs(date).format('YYYY-MM-DD'))
					// 	) {
					// 		return <div className="sale"></div>;
					// 	}
					// 	if (
					// 		purchaseDateArr.find(
					// 			day => day === dayjs(date).format('YYYY-MM-DD'),
					// 		)
					// 	) {
					// 		return <div className="purchase"></div>;
					// 	}
					// }}
				/>
			</S.Wrap>
		</>
	);
};

export default AccountBookDetailInfo;

const Wrap = styled.div`
	width: 60%;
	margin: 0 auto;
	@media screen and (max-width: 1000px) {
		width: 80%;
	}
	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

const PreviewWrap = styled.div`
	width: 80%;
	height: 28vh;
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

const S = {
	Wrap,
	PreviewWrap,
	Flex,
	Flex2,
	Amount,
};
