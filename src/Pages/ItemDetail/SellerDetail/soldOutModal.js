import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ConfirmModal from 'Components/Alert/confirmModal';
import NotificationModal from 'Components/Alert/notificationModal';
import { useSoldOutMutation } from 'Hooks/Queries/get-product-mutation';

import styled from 'styled-components';

import { ModalBackground, flexAllCenter } from 'Styles/common';

const SoldOutModal = ({ onClose, room, setStatus }) => {
	const navigate = useNavigate();

	const [modal, setModal] = useState(false);
	const [buyerInfo, setBuyerInfo] = useState({
		token: '',
		nick_name: '',
	});
	const [notify, setNotify] = useState(false);

	const selectBuyer = (idx, token, nick_name) => {
		setModal(true);
		setBuyerInfo({
			idx: idx,
			token: token,
			nick_name: nick_name,
		});
	};

	const mutation = useSoldOutMutation();

	const soldOut = async (prod_idx, token) => {
		try {
			await mutation.mutateAsync({ prod_idx, token });
			setNotify(true);

			setTimeout(() => {
				setNotify(false);
				setModal(false);
				onClose();
				setStatus(true);
				navigate(`/item_detail/${prod_idx}`);
			}, 500);
		} catch (error) {
			console.log('에러', error);
		}
	};

	const onCancel = () => {
		setModal(false);
	};

	const onConfirm = (idx, token) => {
		soldOut(idx, token);
	};

	return (
		<S.Wrapper>
			<S.Container>
				{room.length > 0 ? (
					<S.Text>
						<S.Intro>구매자를 선택해주세요.</S.Intro>

						<S.CloseBtn onClick={onClose}>x</S.CloseBtn>
					</S.Text>
				) : (
					<S.Text>
						<S.Intro>구매자가 아직 없습니다.</S.Intro>
						<S.CloseBtn onClick={onClose}>x</S.CloseBtn>
					</S.Text>
				)}

				{room &&
					room.map(room => (
						<S.BuyerList key={room.User.nick_name}>
							<S.NickName>{room.User.nick_name}</S.NickName>

							<S.CheckBuyer
								onClick={() => {
									selectBuyer(
										room.Product.idx,
										room.User.token,
										room.User.nick_name,
									);
								}}
							>
								V
							</S.CheckBuyer>
						</S.BuyerList>
					))}
			</S.Container>

			{modal && (
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
			)}
			{notify && (
				<NotificationModal
					content={`${buyerInfo.nick_name}에게 판매되었습니다!`}
				></NotificationModal>
			)}
		</S.Wrapper>
	);
};
export default SoldOutModal;

const Wrapper = styled.div`
	${flexAllCenter}
	flex-direction: column;
	z-index: 10001;
	${ModalBackground}
`;

const Container = styled.div`
	border-radius: 10px;
	position: relative;
	background-color: white;
`;

const Text = styled.div`
	display: flex;
	font-size: ${({ theme }) => theme.fontSize.md};
	margin-left: 15px;
	padding-left: 3px;
`;

const Intro = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
`;

const CloseBtn = styled.button`
	background-color: ${({ theme }) => theme.color.gray[200]};
	color: ${({ theme }) => theme.color.white};
	border: none;
	width: 20px;
	height: 20px;
	margin-top: 5px;
	margin-right: 5px;
	margin-left: 30px;
	border-radius: 50%;
	padding-bottom: 2px;
	:hover {
		background-color: ${({ theme }) => theme.color.black};
		color: ${({ theme }) => theme.color.white};
	}
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

const CheckBuyer = styled.div`
	margin: 0 25px;
	border: none;
	cursor: pointer;
	background-color: ${({ theme }) => theme.color.gray[100]};
	color: ${({ theme }) => theme.color.white};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	padding: 4px 5px;
	border-radius: 5px;
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

const Content = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	${flexAllCenter}
	margin-bottom: 30px;
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
	Wrapper,
	Container,
	CloseBtn,
	BuyerList,
	CheckBuyer,
	CheckedBuyer,
	Text,
	Intro,
	NickName,
	Content,
	BtnContainer,
	NO,
	OK,
};
