import styled from "styled-components";
import AccountBookSelector from "./Components/selector";
import AccountBookDetailInfo from "./Components/detailInfo";
import { useState } from "react";

const AccountBookPage = () => {
	const [date, setDate] = useState(new Date());
	const [category, setCategory] = useState();
	const [year, setYear] = useState(date.getFullYear());
	const [month, setMonth] = useState(date.getMonth()+1);

	const specificMonth = new Date(year,month,0);
	const lastDay = specificMonth.getDate();

	const monthFirstDate = `${year}-${month}-1`; // params_start
	const monthLastDate = `${year}-${month}-${lastDay}`; // params_end
	console.log(monthFirstDate, monthLastDate);


	return(
	  <S.Wrapper>
		<AccountBookSelector
			date={date}
			setDate={setDate}
			category={category}
			setCategory={setCategory}
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
	width: 60vw;
	height: 100%;
	font-family: 'Nanum_extraBold';
`;

const S = {
	Wrapper,
}