import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AccountBookSelector from './Components/selector';
import AccountBookDetailInfo from './Components/detailInfo';
import { getAccountBook } from 'Hooks/Queries/get-mypage-accountBook';

const AccountBookPage = () => {
	const [category, setCategory] = useState('seller');
	const [date, setDate] = useState(new Date());
	const [year, setYear] = useState(new Date().getFullYear());
	const [month, setMonth] = useState(new Date().getMonth() + 1);
	const thisMonth = new Date().getMonth() + 1

	useEffect(() => {
		setDate(`${year}-0${month}-01`);
	}, [year, month]);

	const specificMonth = new Date(year, month, 0);
	const lastDay = specificMonth.getDate();

	const start = `${year}-0${month}-01`;
	const end = `${year}-0${month}-${lastDay}`;

	const res = getAccountBook({
		page: 1,
		category,
		start,
		end,
	});

	return (
		<S.Wrapper>
			<AccountBookSelector
				category={category}
				setCategory={setCategory}
				year={year}
				setYear={setYear}
				month={month}
				setMonth={setMonth}
			/>
			<AccountBookDetailInfo
				category={category}
				date={date}
				setDate={setDate}
				year={year}
				month={month}
				data={res.data}
				thisMonth={thisMonth}
			/>
		</S.Wrapper>
	);
};

export default AccountBookPage;

const Wrapper = styled.div`
	margin: 0 auto 300px;
	width: 60vw;
	height: 100%;
	font-family: 'Nanum_extraBold';
	@media ${({ theme }) => theme.device.laptop} {
		width: 90%;
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 90%;
		display: inline;
	}
`;

const S = {
	Wrapper,
};
