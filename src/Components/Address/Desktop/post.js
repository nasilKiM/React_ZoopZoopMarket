import React from 'react';
import DaumPostcode from 'react-daum-postcode';

import styled from 'styled-components';

const Post = ({ setAddress, setPopup }) => {
	const complete = data => {
		let fullAddress = data.address;

		if (data.addressType === 'R') {
			fullAddress = data.sido + ' ' + data.sigungu + ' ' + data.bname;
		}

		setAddress(fullAddress);
		setPopup(false);
	};

	const postCodeStyle = {
		width: '100%',
		padding: '7px',
	};

	return (
		<S.Wrapper>
			<S.Modal>
				<S.CloseBtn onClick={() => setPopup(false)}>X</S.CloseBtn>
				<DaumPostcode style={postCodeStyle} autoClose onComplete={complete} />
			</S.Modal>
		</S.Wrapper>
	);
};

export default Post;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 999;
`;

const Modal = styled.div`
	width: 550px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.color.white};
	border-radius: 8px;
	padding-top: 40px;
	@media (max-width: 1100px) {
		width: 350px;
	}
`;

const CloseBtn = styled.button`
	background: none;
	cursor: pointer;
	border: none;
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: ${({ theme }) => theme.fontSize.md};
	:hover {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const S = {
	Wrapper,
	CloseBtn,
	Modal,
};
