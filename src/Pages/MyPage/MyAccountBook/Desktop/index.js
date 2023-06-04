import { useEffect, useState } from 'react';

import AccountBookSelector from './Components/selector';
import AccountBookDetailInfo from './Components/detailInfo';
import DetailCard from './Components/detailCard';

import useGetAccountBook from 'Hooks/Queries/get-mypage-accountBook';

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

	useEffect(() => {
		setDate(`${year}-${month}`)
	}, [year, month]);

	useEffect(()=>{
		// const arr = date.split('-');
		// console.log('kkkkkkk', arr[1]);
		// console.log(month)
		// setMonth(arr[1]);
		// console.log(typeof(date))
	},[date])
	return (
		<S.Wrapper>
			{getAccountBook && <AccountBookDetailInfo
				date={date}
				setDate={setDate}
				data={getAccountBook.data}
				setYear={setYear}
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
				year={year}
				month={month}
			/>}
		</S.Wrapper>
	);
};

export default AccountBookPage;

const Wrapper = styled.div`
	margin: 0 auto 300px;
	width: 100%;
`;

const DetailTitle = styled.div`
	margin: 50px 0;
`;

const S = {
	Wrapper,
	DetailTitle,
};
