import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import UserApi from 'Apis/userApi';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MannerMeter from 'Components/Icon/Icon';
import MyPageApi from 'Apis/myPageApi';
import { useQuery } from '@tanstack/react-query';
import { flexSpaceBetween } from 'Styles/common';

const MyProfile = () => {
	const [userInfo, setUserInfo] = useState('');
	const [userProfile, setUserProfile] = useState('');
	const [profileImg, setProfileImg] = useState();
	const photoInput = useRef();

	const { data } = useQuery(['userInfo'], () => UserApi.userInfo());

	const getUserProfile = async () => {
		try {
			const res = await MyPageApi.myMainPage();
			setUserProfile(res);
		} catch (err) {
			console.log(err);
		}
	};

	const profileImgEdit = async e => {
		const formData = new FormData();
		const file = e.target.files[0];
		formData.append('profile_url', file);

		const imageUrl = URL.createObjectURL(file);
		setProfileImg(imageUrl);

		try {
			await UserApi.userProfileEdit(formData);
		} catch (error) {
			console.log(error);
		}
	};

	const handleClick = () => {
		photoInput.current.click();
	};

	useEffect(() => {
		getUserProfile();
		setUserInfo(data);
	}, [profileImg, data]);

	const { User, ondo } = userProfile && userProfile.data;

	return (
		<S.Wrapper>
			{userInfo && userProfile && (
				<S.Info>
					<S.ImgWrap>
						<S.Img
							src={
								userInfo.data.profile_url
									? profileImg
										? profileImg
										: userInfo.data.profile_url
									: '/Assets/Images/기본 프로필.png'
							}
						/>
						<S.ProfileImg>
							<S.FontAwesomeIconImg
								icon={faCamera}
								style={{ color: '#ffffff', fontSize: '15px' }}
								onClick={handleClick}
							/>
							<input
								type="file"
								accept="image/jpg, image/jpeg, image/png"
								multiple
								ref={photoInput}
								style={{ display: 'none' }}
								onChange={e => profileImgEdit(e)}
							/>
						</S.ProfileImg>
					</S.ImgWrap>
					<S.DetailWrapper>
						<S.Detail>
							<S.List>
								<S.InfoTitle>닉네임</S.InfoTitle>
								{User && <S.InfoContent>{User.nickName}</S.InfoContent>}
							</S.List>
							<S.List>
								<S.InfoTitle>매너온도</S.InfoTitle>
								<S.InfoContent>
									<MannerMeter ondo={ondo} />
								</S.InfoContent>
							</S.List>
							<S.List>
								<S.InfoTitle>활동지역</S.InfoTitle>
								<S.InfoContent>#{data.data.region}</S.InfoContent>
							</S.List>
						</S.Detail>
						<S.Detail>
							<S.List>
								<S.InfoTitle>내 등록템</S.InfoTitle>
								<S.InfoContent>
									<span>
										{userProfile.data.productsCount
											? userProfile.data.productsCount
											: 0}
									</span>{' '}
									개
								</S.InfoContent>
							</S.List>
							<S.List>
								<S.InfoTitle>내 관심템</S.InfoTitle>
								<S.InfoContent>
									<span>{userProfile.data.likeCount}</span> 개
								</S.InfoContent>
							</S.List>
							<S.List>
								<S.InfoTitle>채팅</S.InfoTitle>
								<S.InfoContent>
									<span>{userProfile.data.chatCount}</span> 건
								</S.InfoContent>
							</S.List>
						</S.Detail>
					</S.DetailWrapper>
				</S.Info>
			)}
		</S.Wrapper>
	);
};

export default MyProfile;

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
	margin-right: 10px;
`;

const Img = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 50%;
`;

const ImgWrap = styled.div`
	position: relative;
	@media screen and (max-width: 600px) {
		margin-bottom: 20px;
	}
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
	margin-left: 60px;
	line-height: 2rem;
	@media ${({ theme }) => theme.device.tablet} {
		width: 100%;
		margin-left: 20px;
	}
`;

const List = styled.div`
	display: flex;
`;

const InfoTitle = styled.div`
	width: 80px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	color: ${({ theme }) => theme.color.gray[300]};
	@media ${({ theme }) => theme.device.tablet} {
		width: 60px;
	}
`;

const InfoContent = styled.div`
	margin-left: 10px;
	min-width: max-content;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};

	& > span {
		color: ${({ theme }) => theme.color.primary[400]};
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.bolder};
	}
`;

const S = {
	Wrapper,
	Info,
	Detail,
	DetailWrapper,
	ProfileImg,
	ImgWrap,
	List,
	InfoTitle,
	InfoContent,
	Img,
	FontAwesomeIconImg,
};
