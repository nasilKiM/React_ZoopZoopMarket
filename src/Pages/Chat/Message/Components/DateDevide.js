import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const DateDivide = ({ isDate, created, idx }) => {
	return (
		<S.Wrapper>
			{idx === 0 && <div>{created.toLocaleDateString()}</div>}
			{isDate && <div>{created.toLocaleDateString()}</div>}
		</S.Wrapper>
	);
};

export default DateDivide;

const Wrapper = styled.div`
	padding: 0.5rem;
	/* background-color: grey; */
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
