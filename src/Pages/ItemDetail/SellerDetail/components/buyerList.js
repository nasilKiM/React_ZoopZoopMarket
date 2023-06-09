import styled from 'styled-components';

const BuyerListModal = ({ room, setModal, setBuyerInfo }) => {
	const selectBuyer = (idx, token, nick_name) => {
		setModal(true);
		setBuyerInfo({
			idx: idx,
			token: token,
			nick_name: nick_name,
		});
	};

	return room.map(room => (
		<S.BuyerList key={room.User.nick_name}>
			<S.NickName>{room.User.nick_name}</S.NickName>

			<S.CheckBuyer
				onClick={() => {
					selectBuyer(room.Product.idx, room.User.token, room.User.nick_name);
				}}
			>
				V
			</S.CheckBuyer>
		</S.BuyerList>
	));
};

export default BuyerListModal;
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

const S = {
	BuyerList,
	NickName,
	CheckBuyer,
};
