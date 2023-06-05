import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import UserApi from 'Apis/userApi';

import MannerMeter from 'Components/Icon/Icon';
import MyProfileSkeleton from 'Pages/Skeleton/page/myProfileSkeleton';
import { useUserInfo } from 'Hooks/Queries/get-user-query';
import { useMyUserInfo } from 'Hooks/Queries/get-mypage-query';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const MyProfile = () => {
	const [profileImg, setProfileImg] = useState();
	const photoInput = useRef();

	const { data, refetch, isLoading, isSuccess } = useUserInfo();
	const { data: myData } = useMyUserInfo();

	const { mutate } = useMutation(
		formData => UserApi.userProfileEdit(formData),
		{
			onSuccess: () => {
				refetch();
			},
		},
	);

	const profileImgEdit = e => {
		if (!e.target.files[0]) return;
		const formData = new FormData();
		const file = e.target.files[0];
		formData.append('profile_url', file);

		const imageUrl = URL.createObjectURL(file);
		setProfileImg(imageUrl);

		mutate(formData);
	};

	const handleClick = () => {
		photoInput.current.click();
	};

	return (
		<>
			{isSuccess && (
				<S.Wrapper>
					{myData && (
						<S.Info>
							<S.ImgWrap>
								<S.Img
									src={
										data.profile_url
											? profileImg
												? profileImg
												: data.profile_url
											: '/Assets/Images/기본 프로필.png'
									}
								/>
								<S.ProfileImg>
									<S.FontAwesomeIconImg icon={faCamera} onClick={handleClick} />
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
										{myData.User && (
											<S.InfoContent>{myData.User.nickName}</S.InfoContent>
										)}
									</S.List>
									<S.List>
										<S.InfoTitle>매너온도</S.InfoTitle>
										<S.InfoContent>
											<MannerMeter ondo={myData.ondo} />
										</S.InfoContent>
									</S.List>
									<S.List>
										<S.InfoTitle>활동지역</S.InfoTitle>
										<S.InfoContent>#{data.region}</S.InfoContent>
									</S.List>
								</S.Detail>
								<S.Detail>
									<S.List>
										<S.InfoTitle>내 등록템</S.InfoTitle>
										<S.InfoContent>
											<span>
												{myData.productsCount ? myData.productsCount : 0}
											</span>{' '}
											개
										</S.InfoContent>
									</S.List>
									<S.List>
										<S.InfoTitle>내 관심템</S.InfoTitle>
										<S.InfoContent>
											<span>{myData.likeCount}</span> 개
										</S.InfoContent>
									</S.List>
									<S.List>
										<S.InfoTitle>채팅</S.InfoTitle>
										<S.InfoContent>
											<span>{myData.chatCount}</span> 건
										</S.InfoContent>
									</S.List>
								</S.Detail>
							</S.DetailWrapper>
						</S.Info>
					)}
				</S.Wrapper>
			)}
			{isLoading && <MyProfileSkeleton />}
		</>
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
	color: #ffffff;
	font-size: 15px;
	@media ${({ theme }) => theme.device.tablet} {
		font-size: 12px;
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

	> span {
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
