import styled from 'styled-components';

const AccountBookSelector = props => {
	const { category, setCategory, year, setYear, month, setMonth } = props;
	return (
		<S.SelectorsZone>
			<form>
				<S.LargeSelect
					name="action_type"
					id="action_type_select"
					value={category}
					onChange={({ target: { value } }) => setCategory(String(value))}
				>
					{/* <option value="total">전체</option> */}
					<option value="sell">판매</option>
					<option value="purchase">구매</option>
				</S.LargeSelect>
			</form>
			<S.RightSideSelectors>
				<form>
					<S.LargeSelect
						name="year"
						id="year_select"
						value={year}
						onChange={({ target: { value } }) => setYear(String(value))}
					>
						<option value="2023">2023 년</option>
						<option value="2022">2022 년</option>
						<option value="2021">2021 년</option>
					</S.LargeSelect>
				</form>
				<form>
					<S.LargeSelect
						name="month"
						id="month_select"
						value={month}
						onChange={({ target: { value } }) => setMonth(String(value))}
					>
						<option value="01">1 월</option>
						<option value="02">2 월</option>
						<option value="03">3 월</option>
						<option value="04">4 월</option>
						<option value="05">5 월</option>
						<option value="06">6 월</option>
						<option value="07">7 월</option>
						<option value="08">8 월</option>
						<option value="09">9 월</option>
						<option value="10">10 월</option>
						<option value="11">11 월</option>
						<option value="12">12 월</option>
					</S.LargeSelect>
					{/* <CustomButton variant={"primary"} shape={"moreBtn"} size={"small"}>조회하기</CustomButton> */}
				</form>
			</S.RightSideSelectors>
		</S.SelectorsZone>
	);
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
	`;

const RightSideSelectors = styled.div`
	display: flex;
	`;

const LargeSelect = styled.select`
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	width: 140px;
	height: 40px;
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	text-align: center;
	text-align-last: center;
	border: 2.5px solid #d9d9d9;
	border-radius: 0.5em;
	box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
	cursor: pointer;
	@media ${({ theme }) => theme.device.laptop} {
		width: 15vw;
		font-size: ${({ theme }) => theme.fontSize.sm};
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 15vw;
		font-size: ${({ theme }) => theme.fontSize.sm};
	}
`;

const S = {
	// Wrapper,
	SelectorsZone,
	RightSideSelectors,
	LargeSelect,
};
