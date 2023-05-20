import ProductApi from 'Apis/productApi';
import { itemPriceState } from 'Atoms/marketPrice.atom';
import ItemCard from 'Components/Card/Desktop/Card';
import SearchBar from 'Components/SearchBar/Desktop/SearchBar';

import { theme } from 'Styles/theme';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const DesktopMarketPrice = () => {
	const props = 'market_price';
	const { word } = useParams();
	//console.log(word);
	const [priceList, setItemList] = useRecoilState(itemPriceState);
	const start = '2023-04-30';
	const end = '2023-05-21';
	//let data = [];

	const search = async (keyword, start, end) => {
		try {
			const response = await ProductApi.searchMarket(keyword, start, end);
			console.log(response);
			const data = response.data.prod_idx.cumulativeAvgPrice.map(
				({ date, avgPrice }) => ({
					day: date,
					price: avgPrice,
				}),
			);
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	// search(word, start, end).then(result => {
	// 	data = result;
	// 	console.log(data);
	// });

	//console.log('시세 검색 단어: ', word);

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

	//console.log(priceList);

	const data = [
		{ date: '2023-04-30', price: 3000 },
		{ date: '2023-05-01', price: 3500 },
		{ date: '2023-05-02', price: 2500 },
		{ date: '2023-05-03', price: 3800 },
		{ date: '2023-05-04', price: 9000 },
		{ date: '2023-05-05', price: 3900 },
		{ date: '2023-05-06', price: 4200 },
		{ date: '2023-05-07', price: 4200 },
		{ date: '2023-05-08', price: 3800 },
		{ date: '2023-05-09', price: 4200 },
		{ date: '2023-05-11', price: 3800 },
		{ date: '2023-05-11', price: 4200 },
	];
	const formatData = data => {
		return data.map(({ date, price }) => {
			const [month, day] = date.split('-').slice(1);
			const formattedMonth = month.replace(/^0+/, ''); // 0으로 시작하는 부분 제거
			return {
				date: `${formattedMonth}-${day}`,
				price,
			};
		});
	}; //데이터에서 날짜의 월일만 빼서 다시 저장하는 함수.
	const arr = formatData(data);

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

	const groupedData = groupingData(arr, 2);
	console.log(groupedData);

	let average = 0;
	for (let i = 0; i < data.length; i++) {
		average += data[i].price;
	}

	average = (average / data.length).toFixed(0);

	const itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	//반응형
	const isExtraSmall = useMediaQuery({ maxWidth: 572 });
	const isSmall = useMediaQuery({ minWidth: 573, maxWidth: 782 });
	const isMedium = useMediaQuery({ minWidth: 783, maxWidth: 1069 });
	const isLarge = useMediaQuery({ minWidth: 1070, maxWidth: 1329 });
	const isExtraLarge = useMediaQuery({ minWidth: 1330 });

	let variable;
	if (isExtraSmall) {
		variable = 300;
	} else if (isSmall) {
		variable = 400;
	} else if (isMedium) {
		variable = 600;
	} else if (isLarge) {
		variable = 800;
	} else if (isExtraLarge) {
		variable = 1000;
	}
	const isMonitor24 = useMediaQuery({ minWidth: 1153 });
	const Desktop = ({ children }) => {
		const isDesktop = useMediaQuery({ minWidth: 860 });
		return isDesktop ? children : null;
	};
	const NoteBook = ({ children }) => {
		const isDesktop = useMediaQuery({ maxWidth: 859 });
		return isDesktop ? children : null;
	};

	return (
		<S.Wrapper>
			<Desktop>
				<S.UpperPart>
					<S.LeftPart>
						<S.Title isMonitor24={isMonitor24}>
							시세 조회
							<S.SubTitle isMonitor24={isMonitor24}>
								원하시는 상품이 얼마에 거래되고 있는지 알아보세요.
							</S.SubTitle>
						</S.Title>
					</S.LeftPart>
					<S.SearchBarContainer>
						<SearchBar props={props} />
					</S.SearchBarContainer>
				</S.UpperPart>
			</Desktop>
			<NoteBook>
				<S.NoteBookUpper>
					<S.NoteBookTitle isMonitor24={isMonitor24}>시세 조회</S.NoteBookTitle>

					<S.SearchBarContainer>
						<SearchBar props={props} />
					</S.SearchBarContainer>
				</S.NoteBookUpper>
			</NoteBook>

			<S.ChartContainer>
				<LineChart width={variable} height={500} data={groupedData}>
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
	/* min-width: 700px; */
	max-width: 1200px;
	width: 80%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid black;
`;
const UpperPart = styled.div`
	width: 100%;
	display: flex;
`;

const NoteBookUpper = styled.div`
	margin: 0 auto;
`;
const NoteBookTitle = styled.div`
	margin-top: 20px;
	text-align: center;
`;
const LeftPart = styled.div`
	width: 40%;
	margin-left: 10%;
`;
const Title = styled.div`
	text-align: start;
	font-size: ${({ isMonitor24 }) =>
		isMonitor24
			? ({ theme }) => theme.fontSize.md
			: ({ theme }) => theme.fontSize.sm};

	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-top: ${({ isMonitor24 }) => (isMonitor24 ? '40px' : '20px')};
`;
const SubTitle = styled.div`
	margin-top: 10px;
	font-size: ${({ isMonitor24 }) =>
		isMonitor24
			? ({ theme }) => theme.fontSize.base
			: ({ theme }) => theme.fontSize.xs};
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
	width: 50%;
	margin-top: ${({ isMonitor24 }) => (isMonitor24 ? '40px' : '20px')};
`;
const S = {
	Wrapper,
	UpperPart,
	NoteBookUpper,
	NoteBookTitle,
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
