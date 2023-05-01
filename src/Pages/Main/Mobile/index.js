import MobilePreview from './Components/preview';
import styled from 'styled-components';
import MobileSearch from './Components/search';

const MobileMain = () => {
	// const setItemList = useSetRecoilState(itemListState); //  itemListState 상태의 값을 업데이트하는 함수

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await fetch('Mock/mock.json'); //Mock/mock.json 경로에서 데이터를 가져옴
	// 		const data = await response.json();
	// 		setItemList(data.itemList); // data.itemList 값을 setItemList 함수를 사용하여 itemListState 상태에 저장
	// 	};
	// 	fetchData();
	// }, [setItemList]);

	const user = {
		userLocation: 'a',
		userName: '이재훈',
	};

	return (
		<S.MobileWrapper>
			<MobileSearch />
			<MobilePreview
				categoryData={1}
				userLocation={'도곡동'}
				userName={'이재훈'}
			></MobilePreview>
			<MobilePreview
				categoryData={0}
				userLocation={'도곡동'}
				userName={'이재훈'}
			></MobilePreview>
		</S.MobileWrapper>
	);
};

export default MobileMain;

const MobileWrapper = styled.div`
	width: 414px;
	height: 736px;
	margin: 0 auto;
`;

const S = {
	MobileWrapper,
};
