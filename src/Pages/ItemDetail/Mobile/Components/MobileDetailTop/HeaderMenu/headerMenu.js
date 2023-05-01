import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const HeaderMenu = () => {
	return (
		<ul>
			<li>
				<FontAwesomeIcon icon={faEllipsisVertical} />
			</li>
			<li>수정</li>
			<li>숨기기</li>
			<li>삭제</li>
		</ul>
	);
};

export default HeaderMenu;

const Wrapper = styled.div``;

const S = {
	Wrapper,
};
