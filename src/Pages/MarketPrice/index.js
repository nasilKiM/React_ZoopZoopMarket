import ItemCard from 'Components/Card/Desktop/Card';
import SearchBar from 'Components/SearchBar/SearchBar';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import styled from 'styled-components';

const MarketPricePage = () => {
	const data = [
		{ day: 'Mon', price: 3000 },
		{ day: 'Tue', price: 3500 },
		{ day: 'Wed', price: 2500 },
		{ day: 'Thu', price: 3800 },
		{ day: 'Fri', price: 9000 },
		{ day: 'Sat', price: 3900 },
		{ day: 'Sun', price: 4200 },
	];

	let average = 0;
	for (let i = 0; i < data.length; i++) {
		average += data[i].price;
	}

	average = (average / data.length).toFixed(0);

	const itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<S.Wrapper>
			<S.Title>
				시세 조회
				<S.SubTitle>
					원하시는 상품이 얼마에 거래되고 있는지 알아보세요.
				</S.SubTitle>
			</S.Title>
			<SearchBar></SearchBar>
			<S.ChartContainer>
				<S.Average>평균 시세는 {average}원 입니다. </S.Average>
				<LineChart width={900} height={600} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="price"
						stroke="#8884d8"
						activeDot={{ r: 10 }}
					/>
				</LineChart>
			</S.ChartContainer>
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

export default MarketPricePage;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Title = styled.div`
	font-size: 28px;
	font-weight: 900;
	margin-top: 80px;
	margin-bottom: 80px;
`;
const SubTitle = styled.div`
	font-size: 16px;
`;
const ChartContainer = styled.div`
	margin-top: 80px;
	display: flex;
`;
const Average = styled.div`
	font-size: 16px;
	margin-top: 80px;
	margin-right: 18px;
`;

const RecentlyClosed = styled.div`
	margin-top: 80px;
	font-size: 28px;
	padding-left: 5%;
`;
const ItemList = styled.div`
	margin-left: 10%;
	display: flex;
	flex-wrap: wrap;
	margin-top: 80px;
	> * {
		margin-left: 18px;
		margin-top: 18px;
		padding-left: 5%;
	}
`;
const S = {
	Wrapper,
	Title,
	SubTitle,
	ChartContainer,
	Average,
	RecentlyClosed,
	ItemList,
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
