import { useState } from 'react';

// import { getAccountBook } from 'Hooks/Queries/get-mypage-accountBook';

import AccountBookSelector from './Components/selector';
import AccountBookDetailInfo from './Components/detailInfo';
import DetailCard from './Components/detailCard';

import dayjs from 'dayjs';

import styled from 'styled-components';
import useGetAccountBook from 'Hooks/Queries/get-mypage-accountBook';

const AccountBookPage = () => {
	const [category, setCategory] = useState('seller');
	const now = dayjs();
	const [date, setDate] = useState(now.format());
	const [year, setYear] = useState(now.year());
	const [month, setMonth] = useState(now.month()+1);

	const firstDay = dayjs(`${year}-${month}-01`);
	const lastDay = firstDay.daysInMonth().toString()

	const start = `${year}-${month}-01`
	const end = `${year}-${month}-${lastDay}`
	console.log(category, start, end); // 확인용

	const { data: getAccountBook} = useGetAccountBook({category, start, end, page: 1});
	getAccountBook && console.log(getAccountBook);

	// const res = getAccountBook({
	// 	page: 1,
	// 	category,
	// 	start,
	// 	end
	// });
	// res && console.log(res);

	return (
		<S.Wrapper>
			<AccountBookDetailInfo
				category={category}
				date={date}
				setDate={setDate}
				year={year}
				month={month}
				data={getAccountBook}
			/>
			<AccountBookSelector
				category={category}
				setCategory={setCategory}
				year={year}
				setYear={setYear}
				month={month}
				setMonth={setMonth}
			/>
			<DetailCard
				data={getAccountBook}
				year={year}
				month={month}
			/>
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
	DetailTitle
};
