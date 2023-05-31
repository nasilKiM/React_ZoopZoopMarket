import { theme } from 'Styles/theme';
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const Chart = ({ chartWidth, chartHeight, data, average }) => {
	let maxDomain = 0;
	let unitOfMoney = '원';
	if (average > 100000000) {
		maxDomain = parseInt(average / 100000000) * 1.2;
		unitOfMoney = '억원';
	} else if (average > 10000) {
		maxDomain = parseInt(average / 10000) * 1.2;
		unitOfMoney = '만원';
	}

	return (
		<LineChart width={chartWidth} height={chartHeight} data={data}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="date" />
			<YAxis
				tickFormatter={value => value.toLocaleString()}
				domain={[0, maxDomain]}
			/>
			<Tooltip formatter={value => `${value}${unitOfMoney}`} />
			<Legend />
			<Line
				type="monotone"
				dataKey="avgPrice"
				stroke={theme.color.primary[300]}
				activeDot={{ r: 7 }}
			/>
		</LineChart>
	);
};

export default Chart;
