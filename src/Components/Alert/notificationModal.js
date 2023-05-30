import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const NotificationModal = ({ content }) => {
	return (
		<S.Wrap>
			<S.Container>
				<S.Content>{content}</S.Content>
			</S.Container>
		</S.Wrap>
	);
};

export default NotificationModal;

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
	background-color: ${({ theme }) => theme.color.white};
	border: 1px solid ${({ theme }) => theme.color.gray[100]};
	box-shadow: rgba(100, 111, 124, 0.2) 0px 5px 10px;
	border-radius: 10px;
	padding: 30px;
	${flexAllCenter}
	flex-direction: column;
	margin-bottom: 50px;
`;

const Content = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	${flexAllCenter}
`;

const S = {
	Wrap,
	Container,
	Content,
};
