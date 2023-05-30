import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const ConfirmModal = ({ children }) => {
	return (
		<S.Wrap>
			<S.Container>{children}</S.Container>
		</S.Wrap>
	);
};

export default ConfirmModal;

const Wrap = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.7);
	${flexAllCenter}
`;
const Container = styled.div`
	width: 350px;
	height: 180px;
	background-color: ${({ theme }) => theme.color.white};
	border: 3px double ${({ theme }) => theme.color.primary[400]};
	border-radius: 10px;
	padding: 40px 30px;
	flex-direction: column;
	margin-bottom: 50px;
`;

const S = {
	Wrap,
	Container,
};
