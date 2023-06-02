import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ProductApi from 'Apis/productApi';

import ConfirmModal from 'Components/Alert/confirmModal';

import styled from 'styled-components';
import { flexAllCenter } from 'Styles/common';
import ChatApis from 'Apis/chatApis';
import { useQuery } from '@tanstack/react-query';

const SoldOutModal = ({ onClose, idx }) => {
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);
	const [buyerInfo, setBuyerInfo] = useState({
		token: '',
		nick_name: '',
	});
	const [listForSoldOut, setListForSoldOut] = useState([]);

	const { data, isLoading } = useQuery(['SPECIFIC_CHAT_ROOM', idx], () =>
		ChatApis.loadSpecificChatRoom(idx),
	);

	const getChatList = () => {
		const updatedChatroomList = [...listForSoldOut, data.data];
		setListForSoldOut(updatedChatroomList);
		//console.log(isSuccess);
	};

	useEffect(() => {
		data && getChatList(idx);
	}, []);

	const selectBuyer = (token, nick_name) => {
		setModal(true);
		setBuyerInfo({
			token: token,
			nick_name: nick_name,
		});
	};

	const soldOut = async (prod_idx, token) => {
		try {
			const response = await ProductApi.soldOut(prod_idx, token);
			if (response.status === 200) {
			}
			navigate('/mypage');
		} catch (error) {
			console.log('에러', error);
		}
	};

	return (
		<S.Wrapper>
			<S.Container>
				{listForSoldOut.length > 0 ? (
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

				{listForSoldOut &&
					listForSoldOut.map(arr =>
						arr.map(room => (
							<S.BuyerList key={room.User.nick_name}>
								<S.NickName>{room.User.nick_name}</S.NickName>

								<S.CheckBuyer
									onClick={() => {
										selectBuyer(room.User.token, room.User.nick_name);
									}}
								>
									V
								</S.CheckBuyer>
							</S.BuyerList>
						)),
					)}
			</S.Container>

			{modal && (
				<ConfirmModal>
					<S.Content>{buyerInfo.nick_name}에게 판매하시겠습니까? </S.Content>
					<S.BtnContainer>
						<S.NO onClick={() => setModal(false)}>취소</S.NO>
						<S.OK onClick={() => soldOut(idx, buyerInfo.token)}>판매</S.OK>
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
