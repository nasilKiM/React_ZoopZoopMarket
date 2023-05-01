import ItemCard from 'Components/Card/Desktop/Card';
import Profile from 'Components/Profile/Desktop/profile';
import ReviewMessage from 'Components/Review/Review';
import styled from 'styled-components';

const YourProfile = () => {
	const MOCK = new Array(4).fill(0);

	return (
		<S.Wrapper>
			<S.ProfileSection>
				<Profile />
				<S.InfoContainer>
					<S.Info>
						<S.Name>이름 자리</S.Name>
						<S.Temperature>37°C</S.Temperature>
						{/* <Icon style={{ width: '50px', height: '50px', color: 'black' }} /> */}
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
			</S.Section>
		</S.Wrapper>
	);
};

export default YourProfile;

const Wrapper = styled.div`
	width: 60%;
	min-width: 700px;
	max-width: 1000px;
	margin: 0 auto;
	padding: 100px 0;
`;

const ProfileSection = styled.div`
	width: 700px;
	/* border: 1px solid red; */
	margin: 0 auto;
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
	width: 700px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
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
};
