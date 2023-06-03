import { useEffect, useState } from 'react';

import Post from './post';

import styled from 'styled-components';

const FindAddress = ({ setter }) => {
	const [address, setAddress] = useState('');

	const [popup, setPopup] = useState(false);

	const handleComplete = e => {
		e.preventDefault();
		setPopup(!popup);
	};

	useEffect(() => {
		setter(address);
	}, [address]);

	return (
		<>
			<div className="address_search">
				<S.SearchBtn onClick={handleComplete}>주소 찾기</S.SearchBtn>
				{popup && (
					<Post
						address={address}
						setAddress={setAddress}
						setPopup={setPopup}
					></Post>
				)}
			</div>
		</>
	);
};

export default FindAddress;

const Box = styled.div`
	width: 300px;
	height: 20px;
`;

const SearchBtn = styled.button`
	width: 80px;
	height: 35px;
	border: none;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	border-radius: 10px;
	cursor: pointer;
	:hover {
		background: ${({ theme }) => theme.color.gray[200]};
	}
`;

const S = {
	Box,
	SearchBtn,
};
