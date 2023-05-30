import ProductApi from 'Apis/productApi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SoldOutModal = ({ roomData, onClose, idx }) => {
	const navigate = useNavigate();
	const selectBuyer = async (prod_idx, token, nick_name) => {
		const confirmed = window.confirm(`${nick_name}에게 판매를 하시겠습니까?`);
		if (confirmed) {
			await soldOut(prod_idx, token);
		}
	};

	const soldOut = async (prod_idx, token) => {
		try {
			const response = await ProductApi.soldOut(prod_idx, token);
			if (response.status === 200) {
				console.log('물품판매됨', response);
			}
			navigate('/mypage');
		} catch (error) {
			console.log('에러', error);
		}
	};
	// try {
	// 	const response = await ProductApi.soldOut(prod_idx, token);
	// 	if (response.status === 200) {
	// 		console.log('물품판매됨', response);
	// 	}
	// 	navigate('/mypage');
	// } catch (error) {
	// 	console.log('에러', error);
	// }

	return (
		<S.Wrapper>
			<S.Container>
				판매 대상자를 선택해주세요.
				{roomData &&
					roomData.map(arr =>
						arr.map(room => (
							<S.BuyerList key={room.User.nick_name}>
								유저명: {room.User.nick_name}
								<S.CheckBuyer
									onClick={() => {
										selectBuyer(idx, room.User.token, room.User.nick_name);
									}}
								>
									V
								</S.CheckBuyer>
							</S.BuyerList>
						)),
					)}
			</S.Container>
			<S.CloseBtn onClick={onClose}>x</S.CloseBtn>
		</S.Wrapper>
	);
};
export default SoldOutModal;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid;
	z-index: 1001;
	position: fixed;
	width: 70%;
	height: 90vh;
	background-color: rgba(0, 0, 0, 0.7);
	margin: 0 auto;
`;
const Container = styled.div`
	margin-top: 50px;
	border: 1px solid green;
	position: relative;
	background-color: white;
`;
const BuyerList = styled.div`
	display: flex;
	border: 3px solid pink;
`;
const CheckBuyer = styled.div`
	margin-left: 30px;
	border: 5px solid blue;
	cursor: pointer;
`;
const CloseBtn = styled.button`
	width: 500px;
	border: 1px solid black;
`;

const S = {
	Wrapper,
	Container,
	CloseBtn,
	BuyerList,
	CheckBuyer,
};
