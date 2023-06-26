import { useQuery } from '@tanstack/react-query';
import ReviewApi from 'Apis/reviewApi';
import ItemCard from 'Components/Card/Card';
// import ReviewItemCard from 'Components/Card/ReviewCard';
import Profile from 'Components/Profile/profile';
import ReviewMessage from 'Components/Review/Review';

import styled from 'styled-components';

const YourProfile = () => {
	const MOCK = new Array(4).fill(0);
	const { data } = useQuery(['reviews'], () => ReviewApi.reviewList());

	const list = data?.data.reviewList;
	const total = data?.data.reviewList.length;

	return (
		<S.Wrapper>
			<S.ProfileSection>
				<Profile />
				<S.InfoContainer>
					<S.Info>
						<S.Name>이름 자리</S.Name>
						<S.Temperature>37°C</S.Temperature>
					</S.Info>
					<S.Info>
						내 지역
						<S.Dong>#역삼동</S.Dong>
					</S.Info>
				</S.InfoContainer>
				<S.Btn>채팅하기</S.Btn>
			</S.ProfileSection>
			<S.Section>
				<span>게시글</span>
				<div>
					{MOCK.map(() => (
						<ItemCard />
					))}
				</div>
			</S.Section>
			<S.Section>
				<span>거래 후기</span>
				<ReviewMessage />
				<ReviewMessage />
				<ReviewMessage />

				{/* <S.Title>구매 총 {total}건</S.Title>
				{list &&
					list.map(item => (
						<ReviewItemCard
							payIdx={item.idx}
							item={item.Product}
							original={item}
						/>
					))} */}
			</S.Section>
		</S.Wrapper>
	);
};

export default YourProfile;

const Wrapper = styled.div`
	width: 70%;
	min-width: 360px;
	max-width: 1200px;
	padding-top: 10px;
	border: 1px solid blue;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 900px) {
		width: 90%;
	}
	margin: 0 auto;
`;

const ProfileSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const InfoContainer = styled.div`
	width: 300px;
	height: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-size: ${({ theme }) => theme.fontSize.md};
`;

const Info = styled.div`
	width: 300px;
	display: flex;
`;

const Name = styled.div`
	width: 100px;
`;

const Temperature = styled.span`
	width: 100px;
`;

const Dong = styled.span`
	width: 150px;
	margin-left: 20px;
`;

const Btn = styled.button`
	width: 100px;
	height: 30px;
	background: none;
	border: 2px solid ${({ theme }) => theme.color.subBeigeGreen};
	border-radius: 5px;
	cursor: pointer;
	:hover {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const Section = styled.div`
	border: 1px solid red;
	max-width: 700px;
	display: flex;
	flex-direction: column;
	padding-top: 50px;
	> span {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		font-size: ${({ theme }) => theme.fontSize.md};
	}
	> div {
		border: 1px solid red;
		display: flex;
		align-items: center;
		justify-content: start;
	}
`;

const Title = styled.div`
	width: 100%;
	padding: 15px;
	margin-top: 20px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	background-color: ${({ theme }) => theme.color.gray[200]};
	@media ${({ theme }) => theme.device.mobile} {
		padding: 10px;
		font-size: ${({ theme }) => theme.fontSize.xs};
	}
`;

const S = {
	Wrapper,
	ProfileSection,
	InfoContainer,
	Info,
	Name,
	Temperature,
	Dong,
	Btn,
	Section,
	Title,
};
