import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import MyPageApi from 'Apis/myPageApi';
import UserApi from 'Apis/userApi';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MannerMeter from 'Components/Icon/Icon';
import { flexAllCenter } from 'Styles/common';

const MyProfile = () => {
	const [userInfo, setUserInfo] = useState('');
	const [userProfile, setUserProfile] = useState('');
	const [profileImg, setProfileImg] = useState();
	const photoInput = useRef();

	const getUserInfo = async () => {
		try {
			const res = await UserApi.userInfo(); // userInfo => email, nick_name, phone, profile_url, region, x, y
			setUserInfo(res);
		} catch (err) {
			console.log(err);
		}
	};

	const getUserProfile = async () => {
		try {
			const res = await MyPageApi.myMainPage(); // userProfile => User(nickName, profileUrl), chatCount, likeCount, ondo, productsCount
			setUserProfile(res);
		} catch (err) {
			console.log(err);
		}
	};

	// 프로필 사진 수정 틀
	const profileImgEdit = async e => {
		const formData = new FormData();
		const file = e.target.files[0];
		formData.append('profile_url', file);

		const imageUrl = URL.createObjectURL(file);
		setProfileImg(imageUrl);

		try {
			const res = await UserApi.userProfileEdit(formData);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	// 클릭시 사진 수정
	const handleClick = () => {
		photoInput.current.click();
	};

	useEffect(() => {
		getUserInfo();
		getUserProfile();
	}, []);

	const { region } = userInfo && userInfo.data;
	const { User, ondo } = userProfile && userProfile.data;

	return (
		<S.Wrapper>
			{userInfo && userProfile && (
				<S.Info>
					<S.ImgWrap>
						{userInfo && (
							<S.Img
								src={
									userInfo.data.profile_url
										? profileImg
											? profileImg
											: userInfo.data.profile_url
										: '/Assets/Images/기본 프로필.png'
								}
							/>
						)}
						<S.ProfileImg>
							<FontAwesomeIcon
								icon={faCamera}
								style={{ color: '#ffffff', fontSize: '20px' }}
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
					<S.Detail>
						<S.List>
							<S.InfoTitle>닉네임</S.InfoTitle>
							<S.InfoContent>{User.nickName}</S.InfoContent>
						</S.List>
						<S.List>
							<S.InfoTitle>매너온도</S.InfoTitle>
							<S.InfoContent>
								<MannerMeter ondo={ondo} />
							</S.InfoContent>
						</S.List>
						<S.List>
							<S.InfoTitle>활동지역</S.InfoTitle>
							<S.InfoContent>#{region}</S.InfoContent>
						</S.List>
					</S.Detail>
				</S.Info>
			)}
		</S.Wrapper>
	);
};

export default MyProfile;

const Wrapper = styled.div`
	width: 100%;
	height: 170px;
	border-top: solid 1px #e9e9e9;
	${flexAllCenter}
`;

const Info = styled.div`
	display: flex;
	align-items: center;
`;

const Img = styled.img`
	width: 100px;
	object-fit: cover;
	object-position: center;
	border-radius: 50%;
	@media ${({ theme }) => theme.device.tablet} {
		width: 130px;
	}
	@media ${({ theme }) => theme.device.mobile} {
		width: 90px;
	}
`;

const ImgWrap = styled.div`
	position: relative;
	margin-right: 50px;
`;

const ProfileImg = styled.div`
	background-color: ${({ theme }) => theme.color.primary[400]};
	padding: 12px;
	border-radius: 50%;
	position: absolute;
	bottom: 0;
	right: 0;
	cursor: pointer;
	@media ${({ theme }) => theme.device.tablet} {
		padding: 10px;
	}
	@media ${({ theme }) => theme.device.mobile} {
		padding: 7px;
		bottom: 80px;
	}
`;

const Detail = styled.div`
	margin-left: 60px;
	line-height: 2rem;
`;

const List = styled.div`
	height: max-content;
	display: flex;
	margin: 5px;
`;

const InfoTitle = styled.div`
	width: 80px;
	min-width: max-content;
	height: max-content;
	font-size: ${({ theme }) => theme.fontSize.sm};
	color: ${({ theme }) => theme.color.gray[300]};
`;

const InfoContent = styled.div`
	margin-left: 30px;
	min-width: max-content;
	font-size: ${({ theme }) => theme.fontSize.base};
`;

const S = {
	Wrapper,
	Info,
	Detail,
	ProfileImg,
	ImgWrap,
	List,
	InfoTitle,
	InfoContent,
	Img,
};
