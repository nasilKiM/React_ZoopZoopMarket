import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const Post = ({ address, setAddress, setPopup }) => {
	const complete = data => {
		let fullAddress = data.address;
		let extraAddress = '';

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname;
			}
			if (data.buildingName !== '') {
				extraAddress +=
					extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
			}
			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
		}
		console.log(data);
		console.log(fullAddress);
		console.log(data.zonecode);

		setAddress({
			...address,
			address: fullAddress,
		});
	};

	const postCodeStyle = {
		display: 'block',
		position: 'relative',
		top: '0%',
		width: '400px',
		height: '400px',
		padding: '7px',
	};

	return (
		<S.Wrapper onSubmit={() => setPopup(false)}>
			<S.Modal>
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

const Modal = styled.form`
	width: 480px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.color.white};
	border-radius: 8px;
	padding: 32px;
`;

const S = {
	Wrapper,
	Modal,
};
