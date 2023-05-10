import { useState } from "react";
import styled from "styled-components";
import AccountBookSelector from "./Components/selector";
import AccountBookDetailInfo from "./Components/detailInfo";

const AccountBookPage = () => {

	// /api/user/my-page/account-book?category=seller&start=2023-04-01&end=2023-05-02&page=1
	const [category, setCategory] = useState('');	// 카테고리(total / seller / buyer)
	const [start, setStart] = useState('');			// 시작 날짜
	const [end, setEnd] = useState('');				// 끝 날짜
	
	// category: enum("seller", "buyer") 스웨거 참고
	// category: {
	// 	0: "seller",
	// 	1: "buyer",
	// },

	const accountInfo = {
		page: 1,
		category: "seller",
		start: '2023-04-01',
		end: '2023-05-02',
	}
	
	const onGetAccountInfoBtn = async (e) => {
		e.preventDefault();
		try{
			const res = await MyInfoApi.getAccountInfo(accountInfo);
			console.log(res);
		} catch(err) {
			console.log(err);
		}
	}

	return(
	  <S.Wrapper>
		<AccountBookSelector getInfo={onGetAccountInfoBtn}/>
		<AccountBookDetailInfo/>
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