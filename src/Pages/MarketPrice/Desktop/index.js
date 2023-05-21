import ProductApi from 'Apis/productApi';
import ItemCard from 'Components/Card/Desktop/Card';
import SearchBar from 'Components/SearchBar/Desktop/SearchBar';
import { theme } from 'Styles/theme';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

import styled from 'styled-components';

const DesktopMarketPrice = () => {
	const props = 'market_price';
	const { word } = useParams();
	//console.log(word);
	// const [priceList, setItemList] = useRecoilState(itemPriceState);
	const start = '2023-05-15';
	const end = '2023-05-22';

	//let data = [];
	const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const handleResize = () => {
			setViewportSize({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // 컴포넌트 마운트 시 초기 크기 설정

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// console.log(viewportSize);
	// const search = async (keyword, start, end) => {
	// 	const data = await ProductApi.searchMarket(keyword, start, end);
	// 	return data;
	// };
	const { data, isLoading, isError, error } = useQuery(['SEARCH_PRICE'], () =>
		ProductApi.searchMarket('테스트', start, end),
	);
	// data && console.log(data);
	// data && console.log(data.data.prod_idx.cumulativeAvgPrice);

	//console.log('시세 검색 단어: ', word);

	// console.log(priceList);

	// const data = [
	// 	{ date: '2023-04-30', price: 3000 },
	// 	{ date: '2023-05-01', price: 3500 },
	// 	{ date: '2023-05-02', price: 2500 },
	// 	{ date: '2023-05-03', price: 3800 },
	// 	{ date: '2023-05-04', price: 9000 },
	// 	{ date: '2023-05-05', price: 3900 },
	// 	{ date: '2023-05-06', price: 4200 },
	// 	{ date: '2023-05-07', price: 4200 },
	// 	{ date: '2023-05-08', price: 3800 },
	// 	{ date: '2023-05-09', price: 4200 },
	// 	{ date: '2023-05-11', price: 3800 },
	// 	{ date: '2023-05-11', price: 4200 },
	// ]; 실제 데이터도 이 형태로 담겨져서 옴

	const formatData = data => {
		return data.map(({ date, price }) => {
			const [month, day] = date.split('-').slice(1);
			const formattedMonth = month.replace(/^0+/, ''); // 0으로 시작하는 부분 제거
			return {
				date: `${formattedMonth}-${day}`,
				price: price !== undefined ? price : 0,
			};
		});
	}; //데이터에서 날짜의 월일만 빼서 다시 저장하는 함수.
	const arr =
		data?.data.prod_idx?.cumulativeAvgPrice &&
		formatData(data.data.prod_idx.cumulativeAvgPrice);
	console.log(arr);
	const groupingData = (data, groupSize) => {
		const result = [];
		let group = [];

		for (let i = 0; i < data.length; i++) {
			group.push(data[i]);

			if (group.length === groupSize || i === data.length - 1) {
				const firstDate = group[0].date;
				const lastDate = group[group.length - 1].date;
				const avgPrice = (
					group.reduce((sum, item) => sum + item.price, 0) / group.length
				).toFixed(2);
				result.push({
					group: `${firstDate}~${lastDate}`,
					avgPrice: parseFloat(avgPrice),
				});
				group = [];
			}
		}

		return result;
	}; //배열을 전달 받아서 안에 객체들을 원하는SIZE만큼 그룹화 하고 평균 값을 저장.

	const groupedData = arr?.length && groupingData(arr, 2);

	console.log(groupedData);

	let average = 0;
	if (data && data.data.prod_idx.cumulativeAvgPrice) {
		for (let i = 0; i < data.data.prod_idx.cumulativeAvgPrice.length; i++) {
			average += data.data.prod_idx.cumulativeAvgPrice[i].avgPrice;
		}
		average = (average / data.length).toFixed(0);
	}

	const itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	// //반응형

	return (
		<S.Wrapper>
			<S.UpperPart>
				<S.LeftPart>
					<S.Title>
						시세 조회
						<S.SubTitle>
							원하시는 상품이 얼마에 거래되고 있는지 알아보세요.
						</S.SubTitle>
					</S.Title>
				</S.LeftPart>
				<S.SearchBarContainer>
					<SearchBar props={props} />
				</S.SearchBarContainer>
			</S.UpperPart>
			<S.ChartContainer>
				<LineChart
					width={viewportSize.width * 0.6}
					height={viewportSize.width * 0.6 * 0.6}
					data={groupedData}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="group" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="avgPrice"
						stroke={theme.color.primary[300]}
						activeDot={{ r: 7 }}
					/>
				</LineChart>
			</S.ChartContainer>
			<S.Average>
				평균 시세는
				<S.ResultWord>{average}원</S.ResultWord> 입니다.
			</S.Average>
			<S.RecentlyClosed>
				최근 거래 종료 품목
				<S.ItemList>
					{itemList.map(item => (
						<ItemCard key={item} />
					))}
				</S.ItemList>
			</S.RecentlyClosed>
		</S.Wrapper>
	);
};

export default DesktopMarketPrice;

const Wrapper = styled.div`
	width: 70%;
	/* min-width: 700px; */
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const UpperPart = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 720px) {
		align-items: center;
		flex-direction: column;
	}
`;

const LeftPart = styled.div`
	width: 60%;
	margin-left: 20px;
`;
const Title = styled.div`
	text-align: start;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize.md};
	@media screen and (max-width: 720px) {
		text-align: center;
		font-size: ${({ theme }) => theme.fontSize.base};
	}
	margin-top: 40px;
`;
const SubTitle = styled.div`
	margin-top: 10px;
	font-size: ${({ theme }) => theme.fontSize.base};
	@media screen and (max-width: 920px) {
		font-size: ${({ theme }) => theme.fontSize.xs};
	}
`;
const ChartContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;
const Average = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.base};
	margin-top: 10px;
	display: flex;
	justify-content: center;
`;

const RecentlyClosed = styled.div`
	margin-top: 80px;
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
const ItemList = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 80px;
	justify-content: space-evenly;
`;

const ResultWord = styled.div`
	color: ${({ theme }) => theme.color.primary[300]};
`;

const SearchBarContainer = styled.div`
	width: 240px;
	margin-top: 45px;
	margin-right: 10px;
	@media screen and (max-width: 720px) {
		width: 200px;
		margin: 0 auto;
		margin-top: 25px;
	}
`;
const S = {
	Wrapper,
	UpperPart,
	LeftPart,
	Title,
	SubTitle,
	ChartContainer,
	Average,
	RecentlyClosed,
	ItemList,
	ResultWord,
	SearchBarContainer,
};

/* 라이브러리 사용법 npm i recharts
<LineChart> : Recharts에서 제공하는 선 그래프를 그리기 위한 컨테이너입니다. width와 height props를 통해 그래프의 크기를 설정할 수 있습니다.
<CartesianGrid> : 그래프 내에 격자무늬를 생성하기 위한 컴포넌트입니다. strokeDasharray props를 통해 점선으로 설정되어 있습니다.
<XAxis> : x축을 설정하는 컴포넌트입니다. dataKey props를 통해 x축에 대한 데이터를 설정합니다.
 dataKey에 "day"를 전달하게 되는데, 이를 문자열 리터럴로 감싸는 이유는 dataKey prop이 문자열 타입이기 때문입니다.
 
<YAxis> : y축을 설정하는 컴포넌트입니다.
<Tooltip> : 마우스를 이용해 그래프의 데이터를 보여주는 툴팁 컴포넌트입니다.

<Legend> : 그래프에 대한 범례를 표시하기 위한 컴포넌트입니다.

<Line> : 선 그래프를 그리기 위한 컴포넌트입니다. type props를 통해 그래프의 모양을 설정할 수 있으며, 
dataKey props를 통해 그래프의 데이터를 설정합니다. stroke props를 통해 선의 색상을 설정할 수 있습니다. 
activeDot props를 통해 마우스로 해당 데이터를 클릭했을 때 원형으로 표시됩니다.
*/

// useEffect(() => {
// 	const fetchItems = async () => {
// 		try {
// 			const response = await axios.get('Mock/ItemData/items.json');
// 			const items = response.data.itemList.filter(
// 				item => item.category === 1 && item.isSold === true,
// 			);
// 			const sortedItems = items.sort((a, b) => {
// 				return new Date(a.createdAt) - new Date(b.createdAt);
// 			});
// 			setItemList(sortedItems);
// 			//
// 			const itemsByMonth = {};
// 			sortedItems.forEach(item => {
// 				const month = new Date(item.createdAt).getMonth();
// 				if (!itemsByMonth[month]) {
// 					itemsByMonth[month] = [];
// 				}
// 				itemsByMonth[month].push(item);
// 			});
// 			for (let month in itemsByMonth) {
// 				const monthItems = itemsByMonth[month];
// 				const total = monthItems.reduce((sum, item) => sum + item.price, 0);
// 				const average = total / monthItems.length;
// 				//console.log(`${Number(month) + 1}월 평균 가격: ${average}`);
// 			}
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};
// 	fetchItems();
// }, []);
