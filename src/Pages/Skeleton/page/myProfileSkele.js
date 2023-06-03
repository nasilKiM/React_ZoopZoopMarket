import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import BarSkeleton from '../component/barSkeleton';
import ProfileSkelton from '../component/profileSkeleton';

const MyProfileSkeleton = () => {
	return (
		<S.Wrapper>
			<S.Info>
				<S.ImgWrap>
					<ProfileSkelton />
					<S.ProfileImg>
						<S.FontAwesomeIconImg
							icon={faCamera}
							style={{ color: '#ffffff', fontSize: '15px' }}
						/>
					</S.ProfileImg>
				</S.ImgWrap>
				<S.DetailWrapper>
					<S.Detail>
						<S.List>
							<S.InfoTitle>닉네임</S.InfoTitle>
							<S.InfoContent>
								<BarSkeleton />
							</S.InfoContent>
						</S.List>
						<S.List>
							<S.InfoTitle>매너온도</S.InfoTitle>
							<S.InfoContent>
								<BarSkeleton />
							</S.InfoContent>
						</S.List>
						<S.List>
							<S.InfoTitle>활동지역</S.InfoTitle>
							<S.InfoContent>
								<BarSkeleton />
							</S.InfoContent>
						</S.List>
					</S.Detail>
					<S.Detail>
						<S.List>
							<S.InfoTitle>내 등록템</S.InfoTitle>
							<S.InfoContent>
								<BarSkeleton />
							</S.InfoContent>
						</S.List>
						<S.List>
							<S.InfoTitle>내 관심템</S.InfoTitle>
							<S.InfoContent>
								<BarSkeleton />
							</S.InfoContent>
						</S.List>
						<S.List>
							<S.InfoTitle>채팅</S.InfoTitle>
							<S.InfoContent>
								<BarSkeleton />
							</S.InfoContent>
						</S.List>
					</S.Detail>
				</S.DetailWrapper>
			</S.Info>
		</S.Wrapper>
	);
};

export default MyProfileSkeleton;

const Wrapper = styled.div`
	width: 100%;
	padding-bottom: 30px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
`;

const Info = styled.div`
	min-width: 350px;
	max-width: 1200px;
	margin: 70px 0px 0px 0px;
	align-items: center;
	display: flex;
	@media screen and (max-width: 600px) {
		width: 100%;
		flex-direction: column;
	}
`;

const ImgWrap = styled.div`
	position: relative;
	@media screen and (max-width: 600px) {
		margin-bottom: 20px;
	}
	margin-right: 20px;
`;

const ProfileImg = styled.div`
	background-color: ${({ theme }) => theme.color.primary[400]};
	padding: 12px;
	border-radius: 50%;
	position: absolute;
	bottom: 0;
	right: 0;
	cursor: pointer;
`;

const FontAwesomeIconImg = styled(FontAwesomeIcon)`
	font-size: 30px;
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 20px;
	}
	@media ${({ theme }) => theme.device.mobile} {
		font-size: 8px;
	}
`;

const DetailWrapper = styled.div`
	display: flex;
	@media screen and (max-width: 600px) {
		justify-content: center;
	}
`;

const Detail = styled.div`
	line-height: 2rem;
	@media ${({ theme }) => theme.device.tablet} {
		width: 100%;
		margin-left: 10px;
	}
`;

const List = styled.div`
	display: flex;
`;

const InfoTitle = styled.div`
	width: 60px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	color: ${({ theme }) => theme.color.gray[300]};
	@media ${({ theme }) => theme.device.tablet} {
		width: 60px;
	}
`;

const InfoContent = styled.div`
	margin-left: 10px;
	width: 200px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	& > span {
		color: ${({ theme }) => theme.color.primary[400]};
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}
	@media ${({ theme }) => theme.device.tablet} {
		width: 120px;
	}
`;

const S = {
	Wrapper,
	Info,
	ImgWrap,
	ProfileImg,
	FontAwesomeIconImg,
	DetailWrapper,
	Detail,
	List,
	InfoTitle,
	InfoContent,
};
