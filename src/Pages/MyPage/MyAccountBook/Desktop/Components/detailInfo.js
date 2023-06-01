import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.css';
import moment from 'moment';
import PayListCard from 'Components/Card/Desktop/payListCard';

const AccountBookDetailInfo = ({
	thisMonth,
	date,
	setDate,
	data,
}) => {
	let saleDateArr = [];
	data &&
		data.payList.map(item => {
			const saleDate = item.createdAt;
			saleDateArr.push(saleDate.split('T')[0]);
		});

	let purchaseDateArr = [];
	data &&
		data.payList.map(item => {
			const saleDate = item.createdAt;
			purchaseDateArr.push(saleDate.split('T')[0]);
		});
	return (
		<>
			<S.Wrap>
				<S.PreviewWrap>
					<S.PreviewContent1>
						<S.Date>
							2023년 {thisMonth}월
						</S.Date>
						<div>
							<S.Div1>
								<div>수입</div>
								{data && (
									<div>
										<span>
											{data.amount.thisMonthSaleAmount === null
												? 0
												: parseInt(data.amount.thisMonthSaleAmount).toLocaleString(
														'ko-KR',
												  )}
										</span>
										원
									</div>
								)}
								{data && (
									<div>
										<span>{data.payList.length}</span> 건
									</div>
								)}
							</S.Div1>
							<S.Div1>
								<div>지출</div>
								{data && (
									<div>
										<span>
											{data.amount.thisMonthPurchaseAmount === null
												? 0
												: parseInt(data.amount.thisMonthPurchaseAmount).toLocaleString(
														'ko-KR',
												  )}
										</span>
										원
									</div>
								)}
								{data && (
									<div>
										<span>{data.payList.length}</span> 건
									</div>
								)}
							</S.Div1>
						</div>
					</S.PreviewContent1>
					<S.PreviewContent></S.PreviewContent>
				</S.PreviewWrap>
				<Calendar
					value={date}
					onChange={setDate}
					className="react-calendar"
					formatDay={(locale, date) => moment(date).format('D')}
					tileContent={({ date }) => {
						if (
							saleDateArr.find(day => day === moment(date).format('YYYY-MM-DD'))
						) {
							return <div className="sale"></div>;
						}
						if (
							purchaseDateArr.find(
								day => day === moment(date).format('YYYY-MM-DD'),
							)
						) {
							return <div className="purchase"></div>;
						}
					}}
				/>
			</S.Wrap>
			<S.DetailTitle>세부내역</S.DetailTitle>
			<div>{data && data.payList.map(item => <PayListCard item={item} />)}</div>
		</>
	);
};

export default AccountBookDetailInfo;

const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
	height: 100%;
	margin: 0 auto;
`;

const PreviewWrap = styled.div`
	width: 48%;
	height: 100px;
	box-shadow: 0px 0px 20px #e0e0e0;
	border-radius: 15px;
	padding-top: 30px;
	& > div:nth-child(1) {
		padding-bottom: 30px;
		border-bottom: solid 3px ${({ theme }) => theme.color.gray[100]};
		@media ${({ theme }) => theme.device.laptop} {
		}
		@media ${({ theme }) => theme.device.tablet} {
			padding-bottom: 20px;
		}
		@media ${({ theme }) => theme.device.mobile} {
			padding-bottom: 10px;
		}
	}
	& > div:nth-child(2) {
		margin-top: 30px;
		height: 250px;
	}
	
`;

const PreviewContent1 = styled.div`
	height: 80px;
	display: flex;
	align-items: center;
	min-width: min-content;
	& > div:nth-child(2) {
		margin-left: 100px;
	}
`;

const Date = styled.div`
	padding-left: 50px;
	color: ${({ theme }) => theme.color.primary[400]};
	font-size: ${({ theme }) => theme.fontSize.md};
	min-width: min-content;
`;

const Div1 = styled.div`
	display: flex;
	line-height: 2rem;
	min-width: min-content;
	& > div:nth-child(1) {
		margin-right: 30px;
		color: ${({ theme }) => theme.color.gray[300]};
	}
	& > div:nth-child(2) {
		margin-right: 20px;
		width: 130px;
	}

	& > div:nth-child(3) {
		& > span {
			color: ${({ theme }) => theme.color.primary[200]};
			font-size: ${({ theme }) => theme.fontSize.md};
		}
	}
`;

const Div2 = styled.div`
	display: flex;
	min-width: min-content;
`;



const PreviewContent = styled.div`
	/* width: 90%;
	height: 80px;
	margin: 0 auto;
	display: flex;
	justify-content: center; */
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
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const SummaryContent1 = styled.div`
	margin-top: 20px;
	font-size: ${({ theme }) => theme.fontSize.base};
	line-height: 3rem;
	margin-right: 20px;
`;

const SummaryContent2 = styled.div`
	margin-top: 20px;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	line-height: 3rem;
	text-align: right;
	margin-right: 10px;
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

const DetailTitle = styled.div`
	margin: 100px 0 50px;
`;

const S = {
	Wrap,
	Date,
	PreviewContent1,
	PreviewWrap,
	PreviewContent,
	Div1,
	Div2,
	Month,
	Text,
	SummaryContent1,
	SummaryContent2,
	GraphWrap,
	MonthButtonsZone,
	MonthButton,
	Graph,
	DetailTitle,
};
