import ConfirmModal from 'Components/Alert/confirmModal';
import { flexAllCenter } from 'Styles/common';

import styled from 'styled-components';

const BuyerConfirmModal = ({ buyerInfo, onCancel, onConfirm }) => {
	return (
		<ConfirmModal>
			<S.Content>{buyerInfo.nick_name}에게 판매하시겠습니까? </S.Content>
			<S.BuyerList>
				<S.NickName>{buyerInfo.nick_name}</S.NickName>
				<S.CheckedBuyer>V</S.CheckedBuyer>
			</S.BuyerList>

			<S.BtnContainer>
				<S.NO onClick={onCancel}>취소</S.NO>
				<S.OK onClick={() => onConfirm(buyerInfo.idx, buyerInfo.token)}>
					판매
				</S.OK>
			</S.BtnContainer>
		</ConfirmModal>
	);
};
export default BuyerConfirmModal;

const Content = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	${flexAllCenter}
	margin-bottom: 30px;
`;
const BuyerList = styled.div`
	border-radius: 10px;
	display: flex;
	margin-bottom: 15px;
	margin-left: 15px;
	justify-content: space-between;
`;

const NickName = styled.div`
	padding: 3px 5px;
`;
const CheckedBuyer = styled.div`
	margin: 0 25px;
	border: none;
	background-color: ${({ theme }) => theme.color.primary[400]};
	color: ${({ theme }) => theme.color.white};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	padding: 4px 5px;
	border-radius: 5px;
`;

const BtnContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const NO = styled.button`
	width: 100px;
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
	Content,
	BuyerList,
	NickName,
	CheckedBuyer,
	BtnContainer,
	NO,
	OK,
};
