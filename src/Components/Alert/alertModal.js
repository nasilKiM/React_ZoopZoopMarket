import { useNavigate } from 'react-router-dom';

import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const AlertModal = ({ content, props, setModal }) => {
	const navigate = useNavigate();

	const onClickAlert = () => {
		if (!props) return setModal(() => false);
		if (!setModal) return navigate(`${props}`);
		setModal(() => false);
	};

	return (
		<S.Wrap>
			<S.Container>
				<S.Content>{content}</S.Content>
				<S.BtnContainer>
					<S.OK onClick={() => onClickAlert()}>확인</S.OK>
				</S.BtnContainer>
			</S.Container>
		</S.Wrap>
	);
};

export default AlertModal;

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

const Container = styled.form`
	width: 350px;
	height: 150px;
	background-color: ${({ theme }) => theme.color.white};
	border: 1px solid ${({ theme }) => theme.color.gray[100]};
	box-shadow: rgba(100, 111, 124, 0.2) 0px 5px 10px;
	border-radius: 10px;
	padding: 50px 30px;
	margin-bottom: 100px;
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
	margin-top: 10px;
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
	Wrap,
	Container,
	Content,
	BtnContainer,
	OK,
};
