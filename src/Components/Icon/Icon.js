import {
	faFaceDizzy,
	faFaceSmileWink,
	faFaceSurprise,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const MannerMeter = () => {
	const score = Math.floor(Math.random() * 100);
	return (
		<S.Wrapper>
			<div>{score}점</div>
			{score >= 80 && (
				<FontAwesomeIcon icon={faFaceSmileWink} size="xl" color="orange" />
			)}
			{score < 80 && score >= 40 && (
				<FontAwesomeIcon icon={faFaceSurprise} size="xl" color="orange" />
			)}
			{score < 40 && (
				<FontAwesomeIcon icon={faFaceDizzy} size="xl" color="orange" />
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
`;

const S = {
	Wrapper,
};
