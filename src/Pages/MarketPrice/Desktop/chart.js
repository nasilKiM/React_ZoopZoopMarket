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

const Chart = ({ chartWidth, chartHeight, data }) => {
	return (
		<LineChart width={chartWidth} height={chartHeight} data={data}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="date" />
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
	);
};

export default Chart;
