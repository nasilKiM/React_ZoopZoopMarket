import { useEffect, useState } from 'react';

import AccountBookSelector from './Components/selector';
import AccountBookDetailInfo from './Components/detailInfo';
import DetailCard from './Components/detailCard';

import { useGetAccountBook } from 'Hooks/Queries/get-mypage-query';

import dayjs from 'dayjs';
import styled from 'styled-components';

const AccountBookPage = () => {
	const [category, setCategory] = useState('seller');
	const now = dayjs();
	const [date, setDate] = useState(now.format('YYYY-MM'));
	const [year, setYear] = useState(now.year());
	const [month, setMonth] = useState(now.format('MM'));
  
	const firstDay = dayjs(`${year}-${month}-01`);
	const lastDay = firstDay.daysInMonth().toString();

	const start = `${year}-${month}-01`
	const end = `${year}-${month}-${lastDay}`

	const { data: getAccountBook} = useGetAccountBook({category, start, end, page: 1});
	getAccountBook && console.log(getAccountBook.data);
	useEffect(() => {
		setDate(`${year}-${month}`)
	}, [year, month]);

	return (
		<S.Wrapper>
			{getAccountBook && <AccountBookDetailInfo
				date={date}
				setDate={setDate}
				data={getAccountBook.data}
				category={category}
				year={year}
				setYear={setYear}
				month={month}
				setMonth={setMonth}
			/>}
			<AccountBookSelector
				category={category}
				setCategory={setCategory}
				year={year}
				setYear={setYear}
				month={month}
				setMonth={setMonth}
			/>
			{getAccountBook && <DetailCard
				data={getAccountBook.data}
				category={category}
				year={year}
				month={month}
			/>}
		</S.Wrapper>
	);
};

export default AccountBookPage;

const Wrapper = styled.div`
	margin: 0 auto;
	width: 100%;
`;

const S = {
	Wrapper,
};
