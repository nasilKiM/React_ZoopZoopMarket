import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ProductApi from 'Apis/productApi';

import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const NewMessage = ({ popupMsg, setPopupMsg }) => {
	const navigate = useNavigate();
	const [itemInfo, setItemInfo] = useState();

	useEffect(() => {
		const ProductInfo = async () => {
			try {
				const res = await ProductApi.detail(popupMsg?.prod_idx);
				setItemInfo(res.data);
			} catch (err) {
				console.log(err);
			}
		};

		ProductInfo();
		const timer = setTimeout(() => {
			setPopupMsg(false);
		}, 5000);

		return () => {
			clearTimeout(timer);
		};
	}, [popupMsg]);

	const handleClickPopupMsg = () => {
		navigate('/chat');
	};

	return (
		<S.Wrapper onClick={handleClickPopupMsg}>
			<div>
				<img src={itemInfo?.searchProduct.img_url} />
			</div>
			<div>
				<div>상품명 : {itemInfo?.searchProduct.title}</div>
				<div>{popupMsg.nickName} 님의 새로운 메세지</div>
			</div>
		</S.Wrapper>
	);
};

export default NewMessage;

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.color.bg};
	${flexAllCenter}
	justify-content: space-around;
	position: absolute;
	top: 200px;
	z-index: 99;
	width: 500px;
	height: 150px;
	border-radius: 20px;
	& > div:last-child {
		& > div {
			margin: 20px;
			margin-right: 50px;
		}
	}
	& > div:first-child {
		& > img {
			width: 100px;
			height: 100px;
		}
	}
	cursor: pointer;
`;

const S = {
	Wrapper,
};
