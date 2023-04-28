import styled from "styled-components";
import AccountBookSelector from "./Components/selector";
import AccountBookDetailInfo from "./Components/detailInfo";

const AccountBookPage = () => {
	
	return(
	  <S.Wrapper>
		<AccountBookSelector/>
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