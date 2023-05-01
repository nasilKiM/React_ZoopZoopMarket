import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const Post = ({ setAddress, setPopup }) => {
	const complete = data => {
		/*
		data 객체 중 쓸만한 정보는
			address: full 도로명 주소
			autoJibunAddress: full 지번 주소
			bname: 동 (ex.역삼동)
			sido: 서울(시 생략) || 경기(도 생략)
			sigungu: 강남구 || 의정부시
			zonecode: 우편번호

		이며 현재 fullAddress로 설정해둔 값은 동까지의 정보입니다.
			ex. 서울 강남구 역삼동 || 경기 의정부시 가능동
		*/
		let fullAddress = data.address;

		if (data.addressType === 'R') {
			fullAddress = data.sido + ' ' + data.sigungu + ' ' + data.bname;
		}

		setAddress(fullAddress);
		setPopup(false);
	};

	const postCodeStyle = {
		width: '300px',
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
	width: 310px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.color.white};
	border-radius: 8px;
	padding-top: 40px;
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
