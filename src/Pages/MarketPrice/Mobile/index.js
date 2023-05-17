import MobileCard from 'Components/Card/Mobile/MobileCard';
import { theme } from 'Styles/theme';

import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import styled from 'styled-components';

const MobileMarketPrice = () => {
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

	const itemList = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<S.MobileWrapper>
			<S.Wrapper>
				<S.Title>
					시세 조회
					<S.SubTitle>
						원하시는 상품이 얼마에 거래되고 있는지 알아보세요.
					</S.SubTitle>
				</S.Title>
				{/* <MobileSearchBar></MobileSearchBar> */}
				<S.ChartContainer>
					{data.length > 0 ? (
						<S.Average>평균 시세는 {average}원 입니다. </S.Average>
					) : (
						<S.Average>
							실시간 시세 데이터가 없습니다.<br></br> 이전의 판매내역을
							참고해주세요 :)
						</S.Average>
					)}

					{data.length > 0 && (
						<LineChart width={300} height={200} data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="day" />
							<Tooltip
								wrapperStyle={{ width: '80px' }}
								contentStyle={{
									border: `1px solid ${theme.color.primary}`, // border 스타일 지정
									borderRadius: '5px', // border radius 지정
								}}
								itemStyle={{
									color: 'red',
									fontSize: parseInt(theme.fontSize.es),
									fontWeight: 'normal',
									textTransform: 'uppercase',
								}}
							/>
							<Line
								type="monotone"
								dataKey="price"
								stroke={theme.color.primary}
								activeDot={{ r: 5 }}
							/>
						</LineChart>
					)}
				</S.ChartContainer>

				{data.length < 1 && (
					<S.RecentlyClosed>
						최근 거래 종료 품목
						<S.ItemList>
							{itemList.map(item => (
								<MobileCard key={item} />
							))}
						</S.ItemList>
					</S.RecentlyClosed>
				)}
			</S.Wrapper>
		</S.MobileWrapper>
	);
};

export default MobileMarketPrice;

const MobileWrapper = styled.div`
	width: 414px;

	margin: 0 auto;
	margin-bottom: 80px;
`;
const Wrapper = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Title = styled.div`
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-top: 30px;
	margin-bottom: 20px;
`;
const SubTitle = styled.div`
	margin-top: 10px;
	font-size: ${({ theme }) => theme.fontSize.base};
`;
const ChartContainer = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
`;
const Average = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	margin-top: 30px;
	margin-right: 18px;
	margin-bottom: 30px;
	text-align: center;
`;

const RecentlyClosed = styled.div`
	margin: 0 auto;
	margin-top: 30px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
const ItemList = styled.div`
	width: 390px;
	display: flex;
	flex-wrap: wrap;
	margin-top: 10px;
	justify-content: space-evenly;
	border: 1px solid ${({ theme }) => theme.color.subBeigeGreen};
	height: 180px;
	overflow: scroll;
`;
const S = {
	Wrapper,
	Title,
	SubTitle,
	ChartContainer,
	Average,
	RecentlyClosed,
	ItemList,
	MobileWrapper,
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
