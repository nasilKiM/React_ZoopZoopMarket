import { useEffect, useState } from 'react';

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

import { theme } from 'Styles/theme';

const Chart = ({ data, average }) => {
	const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		window.scrollTo(0, 0);
		const handleResize = () => {
			setViewportSize({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener('resize', handleResize);
		handleResize();
		window.scrollTo(0, 0);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	let chartWidth = viewportSize.width * 0.6;
	let chartHeight = viewportSize.width * 0.5 * 0.5 * 1.2;

	if (viewportSize.width >= 1500) {
		chartWidth = viewportSize.width * 0.65;
	} else if (viewportSize.width < 900) {
		chartWidth = viewportSize.width * 0.9;
		chartHeight = viewportSize.width * 0.8 * 0.7;
	}

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
		<S.Wrapper>
			<LineChart width={chartWidth} height={chartHeight} data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis
					tickFormatter={value => value.toLocaleString()}
					domain={[0, maxDomain]}
					width={60}
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
		</S.Wrapper>
	);
};

export default Chart;

const Wrapper = styled.div`
	margin: 0 auto;
	padding-right: 20px;
	font-size: ${({ theme }) => theme.fontSize.base};

	@media screen and (max-width: 767px) {
		font-size: ${({ theme }) => theme.fontSize.xs};
	}
	@media screen and (min-width: 768px) and (max-width: 1000px) {
		font-size: ${({ theme }) => theme.fontSize.sm};
	}
	@media screen and (min-width: 1001px) and (max-width: 1499px) {
		font-size: ${({ theme }) => theme.fontSize.base};
	}
`;

const S = {
	Wrapper,
};
