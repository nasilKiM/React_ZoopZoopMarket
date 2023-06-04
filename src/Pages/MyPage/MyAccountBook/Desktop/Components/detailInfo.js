import Calendar from 'react-calendar';
import dayjs from 'dayjs';

import './styles.css';
import styled from 'styled-components';
import { flexAllCenter } from 'Styles/common';
import { useEffect, useState } from 'react';

const AccountBookDetailInfo = ({
	date,
	setDate,
	data,
	category,
	year,
	setYear,
	month,
	setMonth,
}) => {

	let saleDateArr = [];
	const [saleDate, setSaleDateArr] = useState([]);
	const temp = [];
	const [count, setCount] = useState(0);

	useEffect(() => {
		data &&
			data.payList.map(item => {
				const saleDate = item.createdAt; // 판매일자
				saleDateArr.push(saleDate.split('T')[0]);
			});
		
		setSaleDateArr(saleDateArr);
	}, [year, month]);
	
	// data && console.log('///saleDate', saleDate); // ['2023-06-03', '2023-06-03', '2023-06-03', '2023-06-04']

	let uniqueChars = [...new Set(saleDate)];
	console.log('///중복요소 제거', uniqueChars); // ['2023-06-03', '2023-06-04'] // ['2023-06-03'] ['2023-06-04']

	// const getElCount = (arr) => arr.reduce((ac, v) => ([{ ...ac, [v]: (ac[v] || 0) + 1 }]), {});
	// const activeDateCount = getElCount(saleDate);

	const getElCount = (arr) => {
		let result = {};
		for(const el of arr) {
			result[el] = (result[el] || 0) + 1;
		}
		return result;
	}
	const activeDateCount = getElCount(saleDate);
	console.log('일자별 거래건수', activeDateCount); // {2023-06-03: 3, 2023-06-04: 1}
	console.log('인덱스별 값', activeDateCount["2023-06-03"]) // 3
	const third = ["2023-06-03"];
	const fourth = ["2023-06-04"];

	let arr1 = [];
	
	for(let i = 0; i < data.payList.length; i ++) {
		
	}
	data && data.payList.map((item) => {
		for(let i = 0; i<uniqueChars.length; i++) {
			if(item.createdAt.split('T')[0] === uniqueChars[i]) {
				// setCount((prev) => prev + 1);
				arr1.push(1);
				console.log(item.createdAt.split('T')[0]);
				console.log(uniqueChars[0]);
				console.log('과연', count);
			} else {
				// setCount(0);
				console.log('안될때')
				return;
			}
		}
	})
	console.log(arr1);

	console.log(count);

	return (
		<>
			<S.Wrap>
				<S.PreviewWrap>
					<div>지금까지 줍줍마켓과 함께한 내역이에요 !</div>
					<div>
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
										{parseInt(data.amount.totalSaleAmount -
											data.amount.totalPurchaseAmount).toLocaleString('ko-KR')}
									</S.Amount>
									원
								</div>
							)}
						</S.Flex2>
					</div>
				</S.PreviewWrap>

				<S.PreviewWrap>
					<div>이번달 줍줍마켓과 함께한 내역이에요 !</div>
					<div>
						<S.Flex>
							<div>당월 수입</div>
							<div>
								{data && <S.Amount>
									{data.amount.thisMonthSaleAmount === null
									? 0
									: parseInt(data.amount.thisMonthSaleAmount).toLocaleString(
										'ko-KR',
									)}
								</S.Amount>}
								원
							</div>
							</S.Flex>
							<S.Flex>
								<div>당월 지출</div>
								<div>
									{data && <S.Amount>
										{data.amount.thisMonthPurchaseAmount === null
										? 0
										: parseInt(data.amount.thisMonthPurchaseAmount).toLocaleString(
										'ko-KR',
										)}
									</S.Amount>}
									원
								</div>
							</S.Flex>
							<S.Flex2>
								<div>당월 수익</div>
								<div>
									{data && <S.Amount>
										{parseInt(data.amount.thisMonthSaleAmount - 
											data.amount.thisMonthPurchaseAmount).toLocaleString('ko-KR')}
									</S.Amount>}
									원
								</div>
							</S.Flex2>
						</div>
				</S.PreviewWrap>

				<Calendar
					value={date}
					onChange={setDate}
					className="react-calendar"
					formatDay={(locale, date) => dayjs(date).format('D')}
					tileContent={({ date }) => {
						const theDate = dayjs(date).format('YYYY-MM-DD');
						temp.push(theDate);
						// console.log('으아아아', temp); //["2023-05-29", ... , "2023-07-02"]

						// data.payList.map((item) => 
						// 	console.log(item)
						// )
						// console.log(data.payList); // [{idx:2, ...}, {idx:5, ...}, ...]

						// data.payList.map((item) => {
						// 	let temp = item.createdAt.split('T')[0];
						// 	console.log(temp);
						// 	if (
						// 		[temp].find(day => day === dayjs(date).format('YYYY-MM-DD'))
						// 	) {
						// 		// setCount((prev) => prev + 1);
						// 		return (
						// 			<div>{count}</div>
						// 		)
						// 	}
						// 	// console.log(item.createdAt);
						// 	// if(item.createdAt.includes)
						// })
						
						// if (
						// 	// saleDate.find(day => day === dayjs(date).format('YYYY-MM-DD'))
						// 	// third.find(day => day === dayjs(date).format('YYYY-MM-DD'))
						// 	data.payList.map((item) => {
						// 		let date = item.createdAt.split('T')[0];
						// 		// [date].find(day => day === dayjs(date).format('YYYY-MM-DD'))
						// 		temp.find(day => day === date);
						// 	})
						// ) {
						// 	count + 1;
						// 	return (
						// 		<S.ActionCount>
						// 			<S.Dot whichCategory={category === "seller"}></S.Dot>
						// 			{/* {data.payList.length}건 */}
						// 			{/* {activeDateCount["2023-06-03"]}건 */}
						// 			{count}
						// 		</S.ActionCount>
						// 	)
						// }
						if (
							fourth.find(day => day === dayjs(date).format('YYYY-MM-DD'))
						) {
							return (
								<S.ActionCount>
									<S.Dot whichCategory={category === "seller"}></S.Dot>
									?건
								</S.ActionCount>
							)
						}
						else {
							return <S.WhiteBox>{'0'}</S.WhiteBox>
						}
					}}
					onDrillDown={(e)=>{
						console.log(e);
						setMonth(`0${e.activeStartDate.getMonth()+1}`)
						setYear(e.activeStartDate.getFullYear())
					}}
					// 전역 빼놓기
					onActiveStartDateChange={(e)=>{
						if(e.action==='next' || e.action==='prev'){
							setMonth(`0${e.activeStartDate.getMonth()+1}`)
						} 
						else if(e.action==='next2' || e.action==='prev2') {
							console.log(e);
							setYear(e.activeStartDate.getFullYear())
						}
					}}
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

const ActionCount = styled.div`
	${flexAllCenter}
	font-size: 18px;
`;

const Dot = styled.div`
	margin-right: 2px;
	background-color: ${({whichCategory}) => whichCategory ? '#f87171' : 'skyblue'};
	width: 8px;
	height: 8px;
	display: flex;
	justify-content: center;
	border-radius: 50%;
	display: flex;
`;

const WhiteBox = styled.div`
	color: white;
`;

const S = {
	Wrap,
	PreviewWrap,
	Flex,
	Flex2,
	Amount,
	ActionCount,
	Dot,
	WhiteBox
};
