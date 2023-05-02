import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';

const HeaderMenu = () => {
	const [btnState, setBtnState] = useState(false);

	const onClickBtn = () => {
		setBtnState(prev => !prev);
		console.log(btnState);
	};
	return (
		<S.Wrapper>
			<li onClick={onClickBtn}>
				<FontAwesomeIcon icon={faEllipsisVertical} />
			</li>
			<ul onClick={onClickBtn} btnState={btnState}>
				<li>수정</li>
				<li>숨기기</li>
				<li>삭제</li>
			</ul>
		</S.Wrapper>
	);
};

export default HeaderMenu;

const Wrapper = styled.ul`
	position: relative;
	& > ul {
		width: 50px;
		position: absolute;
		z-index: 10;
		text-align: right;
	}
	& > ul:hover {
		color: red;
	}
`;

const S = {
	Wrapper,
};
