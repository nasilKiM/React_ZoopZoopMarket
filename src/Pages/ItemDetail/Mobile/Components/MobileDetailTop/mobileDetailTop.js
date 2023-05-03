import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';
import HeaderMenu from './HeaderMenu/headerMenu';

const MobileDetailTop = ({ state }) => {
	return (
		<S.Wrapper>
			<FontAwesomeIcon icon={faAngleLeft} />
			<div>상세페이지</div>
			{state ? <div></div> : <HeaderMenu />}
		</S.Wrapper>
	);
};

export default MobileDetailTop;

const Wrapper = styled.div`
	margin: 20px;
	height: 25px;
	${flexAllCenter}
	justify-content: space-between;
`;

const S = {
	Wrapper,
};
