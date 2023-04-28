import { useSetRecoilState } from 'recoil';
import { itemListState } from 'Atoms/main.atom';
import { useEffect } from 'react';
import MobilePreview from './preview';
import styled from 'styled-components';

const MobileMain = () => {
	const setItemList = useSetRecoilState(itemListState); //  itemListState 상태의 값을 업데이트하는 함수

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('Mock/mock.json'); //Mock/mock.json 경로에서 데이터를 가져옴
			const data = await response.json();
			setItemList(data.itemList); // data.itemList 값을 setItemList 함수를 사용하여 itemListState 상태에 저장
		};
		fetchData();
	}, [setItemList]);

	const user = {
		userLocation: 'a',
		userName: '이재훈',
	};

	return (
		<S.MobileWrapper>
			<MobilePreview user={user} category={0}></MobilePreview>
			<MobilePreview user={user} category={0}></MobilePreview>
		</S.MobileWrapper>
	);
};

export default MobileMain;

const MobileWrapper = styled.div`
	border: 2px solid magenta;
	width: 414px;
	height: 736px;
	margin: 0 auto;
`;

const S = {
	MobileWrapper,
};
