import styled from 'styled-components';

import { flexAllCenter } from 'Styles/common';

const DateDivide = ({ isDate, created, idx }) => {
	return (
		<S.Wrapper>
			{idx === 0 && <div>{created.format('YYYY.MM.DD')}</div>}
			{isDate && <div>{created.format('YYYY.MM.DD')}</div>}
		</S.Wrapper>
	);
};

export default DateDivide;

const Wrapper = styled.div`
	padding: 0.5rem;
	border-radius: 1rem;
	color: white;
	font-size: ${({ theme }) => theme.fontSize.xs};
	${flexAllCenter}
	&>div {
		color: black;
	}
`;

const S = {
	Wrapper,
};
