import {
	faFaceDizzy,
	faFaceMeh,
	faFaceSmileWink,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flexAllCenter } from 'Styles/common';
import { useState } from 'react';
import styled from 'styled-components';

const MannerMeter = () => {
	const score = (Math.random() * 50).toFixed(1);
	const [state, setState] = useState(false);
	return (
		<S.Wrapper>
			<div>{score}점</div>
			{score >= 36.5 && (
				<>
					<FontAwesomeIcon
						icon={faFaceSmileWink}
						size="xl"
						color="orange"
						onMouseOver={() => setState(true)}
						onMouseOut={() => setState(false)}
					/>
					{state && (
						<S.MannerMeterExplain>
							Manner Meter is calculated using a mix of reviews, praises and
							disapprovals. Everyone starts at 80
						</S.MannerMeterExplain>
					)}
				</>
			)}
			{score < 36.5 && score >= 30 && (
				<>
					<FontAwesomeIcon
						icon={faFaceMeh}
						size="xl"
						color="orange"
						onMouseOver={() => setState(true)}
						onMouseOut={() => setState(false)}
					/>
					{state && (
						<S.MannerMeterExplain>
							Manner Meter is calculated using a mix of reviews, praises and
							disapprovals. Everyone starts at 80
						</S.MannerMeterExplain>
					)}
				</>
			)}
			{score < 30 && (
				<>
					<FontAwesomeIcon
						icon={faFaceDizzy}
						size="xl"
						color="orange"
						onMouseOver={() => setState(true)}
						onMouseOut={() => setState(false)}
					/>
					{state && (
						<S.MannerMeterExplain>
							Manner Meter is calculated using a mix of reviews, praises and
							disapprovals. Everyone starts at 80
						</S.MannerMeterExplain>
					)}
				</>
			)}
		</S.Wrapper>
	);
};

export default MannerMeter;

const Wrapper = styled.div`
	${flexAllCenter};
	justify-content: end;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize.md};
	& > div {
		margin-right: 10px;
	}
	position: relative;
`;

const MannerMeterExplain = styled.div`
	background-color: #d9d9d9;
	width: 320px;
	position: absolute;
	font-size: ${({ theme }) => theme.fontSize.xs};
	top: 40px;
	left: 50px;
	text-align: center;
	line-height: 20px;
	border-radius: 10px;
`;

const S = {
	Wrapper,
	MannerMeterExplain,
};
