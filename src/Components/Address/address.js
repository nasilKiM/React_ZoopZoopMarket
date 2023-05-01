import { useState } from 'react';
import Post from './post';
import styled from 'styled-components';

const FindAddress = ({ setter }) => {
	/*
	현재 주소찾기 컴포넌트는 
	'주소찾기'버튼이 눌리면 검색 결과가 S.Box라는 태그에 적히도록 되어 있습니다. (현재는 주석처리)
	따로 적혀야하는 위치가 있다면 해당 S.Box를 완전 지우고 랜더링이 필요한 파일에서 state 생성 후
	'setter'라는 이름으로 set함수를 props로 전달 후 'address'에 담겨있는 값을 할당하면 됩니다.

	주소의 결과는 아무 설정을 변경하지 않았다면 동까지 나오도록 설정해두었습니다.
	ex. 서울 강남구 역삼동 || 경기 의정부시 가능동
	*/
	const [address, setAddress] = useState('');

	const [popup, setPopup] = useState(false);

	const handleComplete = () => {
		setPopup(!popup);
	};

	console.log('주소 찾기 결과 ----->', address);
	setter(address);
	return (
		<div className="address_search">
			{/* <S.Box>{address}</S.Box> */}
			<S.SearchBtn onClick={handleComplete}>주소 찾기</S.SearchBtn>
			{popup && (
				<Post
					address={address}
					setAddress={setAddress}
					setPopup={setPopup}
				></Post>
			)}
		</div>
	);
};

export default FindAddress;

const Box = styled.div`
	width: 300px;
	height: 20px;
`;

const SearchBtn = styled.button`
	width: 120px;
	height: 40px;
	border: 1px solid ${({ theme }) => theme.color.primary};
	border-radius: 10px;
	background: none;
	cursor: pointer;
`;

const S = {
	Box,
	SearchBtn,
};
