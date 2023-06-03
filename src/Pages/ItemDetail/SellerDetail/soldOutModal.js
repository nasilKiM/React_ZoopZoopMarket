import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ConfirmModal from 'Components/Alert/confirmModal';
import { useSoldOutMutation } from 'Hooks/Queries/get-soldOut';

import styled from 'styled-components';

import { flexAllCenter } from 'Styles/common';

const SoldOutModal = ({ onClose, room }) => {
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);
	const [buyerInfo, setBuyerInfo] = useState({
		token: '',
		nick_name: '',
	});

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
					<S.BtnContainer>
						<S.NO onClick={onCancel}>취소</S.NO>
						<S.OK onClick={() => onConfirm(buyerInfo.idx, buyerInfo.token)}>
							판매
						</S.OK>
					</S.BtnContainer>
				</ConfirmModal>
			)}
		</S.Wrapper>
	);
};
export default SoldOutModal;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 10001;
	top: 0;
	left: 0;
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.7);
	margin: 0 auto;
	${flexAllCenter}
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
	margin-bottom: 50px;
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
	Text,
	Intro,
	NickName,
	Content,
	BtnContainer,
	NO,
	OK,
};
