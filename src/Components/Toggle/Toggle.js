import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const ToggleBar = ({ setToggleState }) => {
	const onClickToggle = e => {
		const { innerText } = e.target;
		setToggleState(innerText);
	};

	const ToggleMenu = [
		'내 등록템',
		'내 관심템',
		'가계부',
		'내 후기',
		'유저 정보 수정',
		'비밀번호 변경',
	];

	return (
		<S.Wrapper>
			{ToggleMenu.map(menu => (
				<div onClick={onClickToggle}>{menu}</div>
			))}
		</S.Wrapper>
	);
};

export default ToggleBar;

const Wrapper = styled.div`
	margin: 50px 0;
	${flexAllCenter}
	& > div {
		margin: 0 30px;
		font-size: ${({ theme }) => theme.fontSize.md};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const S = {
	Wrapper,
};
