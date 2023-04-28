import styled from "styled-components";
import MobileAccountBookDetailInfo from "./Components/detailInfo";
import MobileAccountBookSelector from "./Components/selector";

const MobileAccountBookPage = () => {
	
	return(
			<S.Wrapper>
				<MobileAccountBookSelector/>
				<MobileAccountBookDetailInfo/>
			</S.Wrapper>
      )
};

export default MobileAccountBookPage;

const Wrapper = styled.div`
	margin: 0 auto;
	/* width: 60vw;
	height: 100%; */
	width: 414px;
	height: 736px;
`;

const S = {
	Wrapper,
}