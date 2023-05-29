import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const ConfirmModal = ({ content, sub }) => {
	return (
		<S.Container>
			<S.Content>{content}</S.Content>
			<S.Detail>{sub}</S.Detail>
			<S.BtnContainer>
				<S.NO>아니오</S.NO>
				<S.OK>예</S.OK>
			</S.BtnContainer>
		</S.Container>
	);
};

export default ConfirmModal;

const Container = styled.div`
	width: 350px;
	height: 180px;
	background-color: ${({ theme }) => theme.color.white};
	border: 3px double ${({ theme }) => theme.color.primary[400]};
	border-radius: 10px;
	padding: 40px 30px;
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;
`;

const Content = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	${flexAllCenter}
	margin-bottom: 20px;
`;

const Detail = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.xs};
	${flexAllCenter}
	margin-bottom: 30px;
`;

const BtnContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const NO = styled.button`
	width: 80px;
	height: 30px;
	border: none;
	border-radius: 10px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.white};
	background-color: ${({ theme }) => theme.color.gray[100]};
	cursor: pointer;
	margin-right: 20px;
	:hover {
		background-color: ${({ theme }) => theme.color.gray[200]};
		color: ${({ theme }) => theme.color.gray[300]};
	}
`;

const OK = styled.button`
	width: 100px;
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
	Detail,
	BtnContainer,
	NO,
	OK,
};
