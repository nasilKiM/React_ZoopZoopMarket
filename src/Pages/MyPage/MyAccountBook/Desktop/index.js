import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AccountBookSelector from './Components/selector';
import AccountBookDetailInfo from './Components/detailInfo';

const AccountBookPage = () => {
	// const [date, setDate] = useState(new Date());
	// const [year, setYear] = useState(date.getFullYear());
	// const [month, setMonth] = useState(date.getMonth() + 1);
	const [year, setYear] = useState(new Date().getFullYear());
	const [month, setMonth] = useState(new Date().getMonth() + 1);
	const [date, setDate] = useState(new Date());
	
	useEffect(()=>{
		setDate(`${year}-${month}`)
	}, [year, month])
	
	console.log('//////', date, year, month);

	return(
	  <S.Wrapper>
		<AccountBookSelector
			date={date}
			setDate={setDate}
			year={year}
			setYear={setYear}
			month={month}
			setMonth={setMonth}
		/>
		<AccountBookDetailInfo
			year={year}
			month={month}
		/>
	  </S.Wrapper>
	) 
};

export default AccountBookPage;

const Wrapper = styled.div`
	margin: 0 auto;
	width: 70%;
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
