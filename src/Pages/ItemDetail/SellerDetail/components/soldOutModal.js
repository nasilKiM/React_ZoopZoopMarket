import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NotificationModal from 'Components/Alert/notificationModal';
import { useSoldOutMutation } from 'Hooks/Queries/get-product-mutation';

import styled from 'styled-components';

import { ModalBackground, flexAllCenter } from 'Styles/common';
import BuyerListModal from './buyerList';
import BuyerConfirmModal from './buyerConfirmModal';

const SoldOutModal = ({ onClose, room, setStatus }) => {
	const navigate = useNavigate();

	const [modal, setModal] = useState(false);
	const [buyerInfo, setBuyerInfo] = useState({
		token: '',
		nick_name: '',
	});
	const [notify, setNotify] = useState(false);

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
			}, 700);
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

				{room && (
					<BuyerListModal
						room={room}
						setModal={setModal}
						setBuyerInfo={setBuyerInfo}
					></BuyerListModal>
				)}
			</S.Container>
			{modal && (
				<BuyerConfirmModal
					buyerInfo={buyerInfo}
					onCancel={onCancel}
					onConfirm={onConfirm}
				/>
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

const S = {
	Wrapper,
	Container,
	CloseBtn,
	Text,
	Intro,
};
