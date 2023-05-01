import MobileCard from 'Components/Card/Mobile/MobileCard';
import MobileProfile from 'Components/Profile/Mobile/profile';
import ReviewMessage from 'Components/Review/Review';
import styled from 'styled-components';

const MobileYourProfile = () => {
	const MOCK = new Array(4).fill(0);

	return (
		<S.Wrapper>
			<S.Top>
				<button>&lt;</button>
				<S.Name>이름 자리</S.Name>
			</S.Top>
			<S.ProfileSection>
				<MobileProfile />
				<S.InfoContainer>
					<S.Info>
						<S.Temperature>37°C</S.Temperature>
						{/* <Icon style={{ width: '50px', height: '50px', color: 'black' }} /> */}
					</S.Info>
					<S.Info>
						내 지역
						<S.Dong>#역삼동</S.Dong>
					</S.Info>
				</S.InfoContainer>
			</S.ProfileSection>
			<S.Section>
				<span>게시글</span>
				<div>
					{MOCK.map(() => (
						<MobileCard />
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

export default MobileYourProfile;

const Wrapper = styled.div`
	width: 414px;
	border: 1px solid red;
	margin: 0 auto;
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Top = styled.div`
	width: 300px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	/* border: 1px solid purple; */
	> button {
		font-size: ${({ theme }) => theme.fontSize.md};
		border: none;
		background: none;
		position: absolute;
		left: -10px;
		:hover {
			font-weight: ${({ theme }) => theme.fontWeight.bold};
		}
	}
`;

const ProfileSection = styled.div`
	width: 320px;
	/* border: 1px solid red; */
	padding-top: 40px;
	/* padding-left: 30px; */
	margin: 0 auto;
	display: flex;
	align-items: center;
`;

const InfoContainer = styled.div`
	height: 40px;
	margin-left: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Info = styled.div`
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

const Section = styled.div`
	width: 320px;
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	> span {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		font-size: ${({ theme }) => theme.fontSize.base};
		margin-bottom: 5px;
	}
`;

const S = {
	Wrapper,
	Top,
	ProfileSection,
	InfoContainer,
	Info,
	Name,
	Temperature,
	Dong,
	Section,
};
