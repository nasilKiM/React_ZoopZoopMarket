import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const ToggleBar = ({ setToggleState }) => {
	const onClickToggle = e => {
		const { innerText } = e.target;
		setToggleState(innerText);
	};

	return (
		<S.Wrapper>
			<div onClick={onClickToggle}>내 등록템</div>
			<div onClick={onClickToggle}>유저 정보 수정</div>
			<div onClick={onClickToggle}>내 관심템</div>
			<div onClick={onClickToggle}>가계부</div>
			<div onClick={onClickToggle}>내 후기</div>
		</S.Wrapper>
	);
};

export default ToggleBar;

const Wrapper = styled.div`
	margin: 50px 0;
	${flexAllCenter}
	& > div {
		margin: 0 30px;
		font-size: ${({ theme }) => theme.fontSize.lg};
	}
`;

const S = {
	Wrapper,
};
