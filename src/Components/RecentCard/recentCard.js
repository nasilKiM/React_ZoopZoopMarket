// import { useQuery } from '@tanstack/react-query';
// import ProductApi from 'Apis/productApi';
import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

// const { data} = useQuery(['recent'], () => ProductApi.getRecent());
// console.log({ data });

const RecentCard = () => {
	return (
		<S.Img>
			<S.FirstImg>이미지 1</S.FirstImg>
			<S.SecondImg>이미지 2</S.SecondImg>
		</S.Img>
	);
};
export default RecentCard;

const Img = styled.div`
	width: 100%;
	height: 280px;
	${flexAllCenter}
	flex-direction: column;
`;

const FirstImg = styled.div`
	width: 80%;
	height: 110px;
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
`;

const SecondImg = styled.div`
	width: 80%;
	height: 110px;
	margin-top: 10px;
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
`;

const S = {
	Img,
	FirstImg,
	SecondImg,
};
