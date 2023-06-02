import { useEffect, useState } from 'react';

import ProductApi from 'Apis/productApi';

import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const NewMessage = ({ popupMsg, setPopupMsg }) => {
	const [itemInfo, setItemInfo] = useState();

	useEffect(() => {}, [popupMsg]);

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
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, [popupMsg]);

	return (
		<S.Wrapper>
			<img src={itemInfo?.searchProduct.img_url} />
			<div>
				<div>{itemInfo?.searchProduct.title}</div>
				<div>{popupMsg?.message}</div>
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
	z-index: 999;
	width: 500px;
	height: 200px;
	& > div:last-child {
		& > div {
			margin: 20px;
			margin-right: 50px;
		}
	}
`;

const S = {
	Wrapper,
};
