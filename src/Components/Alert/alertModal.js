import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const AlertModal = ({ content }) => {
	return (
		<S.Container>
			<S.Content>{content}</S.Content>
			<S.BtnContainer>
				<S.OK>확인</S.OK>
			</S.BtnContainer>
		</S.Container>
	);
};

export default AlertModal;

const Container = styled.div`
	width: 350px;
	height: 150px;
	background-color: ${({ theme }) => theme.color.white};
	/* border: 3px solid ${({ theme }) => theme.color.primary[400]}; */
	border: 1px solid ${({ theme }) => theme.color.gray[100]};
	box-shadow: rgba(100, 111, 124, 0.2) 0px 5px 10px;
	border-radius: 10px;
	padding: 50px 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 50px;
`;

const Content = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	${flexAllCenter}
	margin-bottom: 20px;
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
