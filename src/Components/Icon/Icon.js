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
		return setState(true);
	};

	return (
		<S.Wrapper>
			<div>{ondo}도</div>
			{ondo >= 36.5 && (
				<>
					<FontAwesomeIcon
						icon={faFaceSmileWink}
						size="xl"
						color="blue"
						onClick={onClickMark}
						onMouseOut={() => setState(false)}
					/>
					{state && (
						<S.Icon>
							<S.MannerMeterExplain>
								매너 온도는 36도부터 시작되며 거래하면서 받은 리뷰에 의해 변동이
								생깁니다. 활발한 거래와 좋은 리뷰로 온도를 높여보세요!
							</S.MannerMeterExplain>
						</S.Icon>
					)}
				</>
			)}
			{ondo < 36.5 && ondo >= 30 && (
				<>
					<FontAwesomeIcon
						icon={faFaceMeh}
						size="xl"
						color="green"
						onClick={onClickMark}
						onMouseOut={() => setState(false)}
					/>
					{state && (
						<S.MannerMeterExplain>
							매너 온도의 시작은 36도! 거래하면서 받은 리뷰에 의해 변동됩니다.
							<br />
							활발한 거래와 좋은 리뷰로 온도를 높여보세요!
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
							매너 온도는 36도부터 시작되며 거래하면서 받은 리뷰에 의해 변동이
							생깁니다. 활발한 거래와 좋은 리뷰로 온도를 높여보세요!
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
`;

const Icon = styled.div`
	width: 10px;
	border-radius: 5px;
	border-color: 1px solid orange;
`;

const MannerMeterExplain = styled.div`
	background-color: ${({ theme }) => theme.color.primary[100]};
	width: 400px;
	position: absolute;
	font-size: ${({ theme }) => theme.fontSize.xs};
	padding: 15px;
	top: 30px;
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
