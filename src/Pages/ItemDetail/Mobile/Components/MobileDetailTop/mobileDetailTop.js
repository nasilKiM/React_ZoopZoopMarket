import {
	faAngleLeft,
	faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const MobileDetailTop = ({ state }) => {
	return (
		<S.Wrapper>
			<FontAwesomeIcon icon={faAngleLeft} />
			<div>상세페이지</div>
			{state ? <div></div> : <FontAwesomeIcon icon={faEllipsisVertical} />}
		</S.Wrapper>
	);
};

export default MobileDetailTop;

const Wrapper = styled.div`
	margin-top: 20px;
	${flexAllCenter}
	justify-content: space-between;
`;

const S = {
	Wrapper,
};
