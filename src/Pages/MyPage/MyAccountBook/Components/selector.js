import styled from "styled-components";

const AccountBookSelector = () => {

	return(
		<S.SelectorsZone>
			<form>
				<S.LargeSelect name="action_type" id="action_type_select">
					<option value="total">전체</option>
					<option value="sell">판매</option>
					<option value="purchase">구매</option>
					<option value="free">무료나눔</option>
				</S.LargeSelect>
			</form>
			<S.RightSideSelectors>
				<form>
					<S.LargeSelect name="year" id="year_select">
						<option value="2023">2023 년</option>
						<option value="2022">2022 년</option>
						<option value="2021">2021 년</option>
					</S.LargeSelect>
				</form>
				<form>
					<S.LargeSelect name="month" id="month_select">
						<option value="1">1 월</option>
						<option value="2">2 월</option>
						<option value="3">3 월</option>
						<option value="4">4 월</option>
						<option value="5">5 월</option>
						<option value="6">6 월</option>
						<option value="7">7 월</option>
						<option value="8">8 월</option>
						<option value="9">9 월</option>
						<option value="10">10 월</option>
						<option value="11">11 월</option>
						<option value="12">12 월</option>
					</S.LargeSelect>
				</form>
			</S.RightSideSelectors>
		</S.SelectorsZone>
	) 
};

export default AccountBookSelector;

const SelectorsZone = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 50px 0 30px;
	form {
		&:nth-child(1) {
			margin-right: 15px;
		}
	}
`

const RightSideSelectors = styled.div`
	display: flex;
`

const LargeSelect = styled.select`
 	-moz-appearance: none;
  	-webkit-appearance: none;
  	appearance: none;
	width: 340px;
	height: 54px;
	font-size: ${({ theme }) => theme.fontSize.lg};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	text-align: center;
	text-align-last: center;
	border: 2.5px solid #d9d9d9;
  	border-radius: 0.5em;
  	box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
	cursor: pointer;
`

const S = {
	// Wrapper,
	SelectorsZone,
	RightSideSelectors,
	LargeSelect,
}