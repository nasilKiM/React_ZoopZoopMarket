import {
	faFaceDizzy,
	faFaceMeh,
	faFaceSmileWink,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flexAllCenter } from 'Styles/common';
import { useState } from 'react';
import styled from 'styled-components';

const MannerMeter = ({ ondo }) => {
	const [state, setState] = useState(false);

	const onClickMark = () => {
		console.log(2);
		setState(true);
	};

	return (
		<S.Wrapper>
			<div>{ondo}도</div>
			{ondo >= 36.5 && (
				<S.Icon>
					<FontAwesomeIcon
						icon={faFaceSmileWink}
						size="xl"
						color="orange"
						onClick={onClickMark}
						onMouseOut={() => setState(false)}
					/>
					{state && (
						<S.MannerMeterExplain>
							Manner Meter is calculated using a mix of reviews, praises and
							disapprovals. Everyone starts at 80
						</S.MannerMeterExplain>
					)}
				</S.Icon>
			)}
			{ondo < 36.5 && ondo >= 30 && (
				<>
					<FontAwesomeIcon
						icon={faFaceMeh}
						size="xl"
						color="orange"
						onClick={onClickMark}
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
			{ondo < 30 && (
				<>
					<FontAwesomeIcon
						icon={faFaceDizzy}
						size="xl"
						color="orange"
						onClick={onClickMark}
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
	position: relative;
	${flexAllCenter};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize.sm};
	& > div {
		margin-right: 10px;
	}
	/* position: relative; */
`;

const Icon = styled.div`
	width: 10px;
	border-radius: 5px;
	border-color: 1px solid orange;
`;

const MannerMeterExplain = styled.div`
	background-color: #d9d9d9;
	width: 700px;
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
	Icon,
	MannerMeterExplain,
};
