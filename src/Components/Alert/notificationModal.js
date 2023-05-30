import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const NotificationModal = ({ content }) => {
	return (
		<S.Container>
			<S.Content>{content}</S.Content>
		</S.Container>
	);
};

export default NotificationModal;

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

const BtnContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const OK = styled.button`
	width: 200px;
	height: 30px;
	border: none;
	border-radius: 10px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.white};
	background-color: ${({ theme }) => theme.color.primary[300]};
	cursor: pointer;
	:hover {
		background-color: ${({ theme }) => theme.color.primary[400]};
	}
`;

const S = {
	Container,
	Content,
	BtnContainer,
	OK,
};
