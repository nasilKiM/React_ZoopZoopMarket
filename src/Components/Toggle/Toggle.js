import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const ToggleBar = () => {
	return (
		<S.Wrapper>
			<div>내 등록템</div>
			<div>유저 정보 수정</div>
			<div>내 관심템</div>
			<div>가계부</div>
			<div>내 후기</div>
		</S.Wrapper>
	);
};

export default ToggleBar;

const Wrapper = styled.div`
	border: 1px solid red;
	${flexAllCenter}
	& > div {
		margin: 0 20px;
	}
`;

const S = {
	Wrapper,
};
