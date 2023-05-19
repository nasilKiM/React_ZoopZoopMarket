import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import MyPageApi from 'Apis/myPageApi';
import UserApi from 'Apis/userApi';
import { flexAllCenter } from 'Styles/common';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Profile from 'Components/Profile/Desktop/profile';
import MannerMeter from 'Components/Icon/Icon';

const MyProfile = () => {
	const [userInfo, setUserInfo] = useState('');
	const [userProfile, setUserProfile] = useState('');
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

	const profileImgEdit = async () => {
		const formData = new FormData();
		formData.append('profile_url');

		try {
			const res = await UserApi.userProfileEdit(formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleClick = () => {
		photoInput.current.click();
	};

	useEffect(() => {
		profileImgEdit();
	}, []);

	useEffect(() => {
		getUserInfo();
		getUserProfile();
	}, []);

	const { region } = userInfo && userInfo.data;
	const { User, ondo } = userProfile && userProfile.data;

	return (
		<S.Wrapper>
			{userInfo && userProfile &&
			<S.Info>
				<S.ImgWrap>
					<Profile userProfileUrl={User.profileUrl}/>	
					<S.ProfileImg>
						<FontAwesomeIcon
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
						<S.InfoContent><MannerMeter ondo={ondo}/></S.InfoContent>
					</S.List>
					<S.List>
						<S.InfoTitle>활동지역</S.InfoTitle>
						<S.InfoContent>#{region}</S.InfoContent>
					</S.List>
				</S.Detail>
			</S.Info>}
		</S.Wrapper>

	);
};

export default MyProfile;

const Wrapper = styled.div`
	width: 100%;
	height: 170px;
	border-top: solid 1px #e9e9e9;
	border-bottom: solid 1px #e9e9e9;
	${flexAllCenter}
`;

const Info = styled.div`
	display: flex;
`;

const ImgWrap = styled.div`
	position: relative;
	margin-right: 50px;
`;

const ProfileImg = styled.div`
	background-color: ${({ theme }) => theme.color.primary[400]};
	padding: 13px;
	border-radius: 50%;
	position: absolute;
	bottom: 0;
	right: 0;
	cursor: pointer;
`;

const Detail = styled.div`
	margin-left: 60px;
	line-height: 2rem;
	/* & :nth-child(3) {
		margin-top: 15px;
	} */
`;

const List = styled.div`
	height: max-content;
	display: flex;
	margin: 5px;
`

const InfoTitle = styled.div`
	width: 80px;
	height: max-content;
	font-size: ${({theme}) => theme.fontSize.sm};
	color: ${({theme}) => theme.color.gray[300]}
`;

const InfoContent = styled.div`
	margin-left: 30px;
	font-size: ${({theme}) => theme.fontSize.base};
`
const S = {
	Wrapper,
	Info,
	Detail,
	ProfileImg,
	ImgWrap,
	List,
	InfoTitle,
	InfoContent
};
