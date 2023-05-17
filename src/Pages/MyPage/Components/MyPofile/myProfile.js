import MyPageApi from 'Apis/myPageApi';
import UserApi from 'Apis/userApi';
import MannerMeter from 'Components/Icon/Icon';
import Profile from 'Components/Profile/Desktop/profile';
import { flexAlignCenter, flexAllCenter } from 'Styles/common';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MyProfile = () => {
	const [userInfo, setUserInfo] = useState('');
	const [userProfile, setUserProfile] = useState('');
	
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
	
	useEffect(() => {
		getUserInfo();
		getUserProfile();
	}, []);
	
	const {region} = userInfo && userInfo.data;
	const {User, ondo} = userProfile && userProfile.data;

	return (
		<S.Wrapper>
			<S.Info>
				<S.Img src="/Assets/Images/기본 프로필.png"></S.Img>
				<S.Detail>
					<div>반가워요<S.Nickname>고라니</S.Nickname>님!</div>
					<S.Icon>현재 매너온도는<S.Temp>36도</S.Temp>입니다 :)</S.Icon>
					<div>활동지역<S.Address>#경기도 화성시 반송동</S.Address></div>
				</S.Detail>
			</S.Info>
		</S.Wrapper>
		// <S.Wrapper>
		// 	{userInfo && userProfile &&
		// 		<div>
		// 			<div>
		// 			<Profile userProfileUrl={User.profileUrl}/>
		// 			</div>
		// 			<div>반가워요, <S.nickName>{User.nickName}</S.nickName>님 :)</div>
		// 			<S.Icon>
		// 					<MannerMeter ondo={ondo} />
		// 			</S.Icon>
		// 			<div>{region}</div>
		// 		</div>}
		// </S.Wrapper>
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
	${flexAlignCenter}
`

const Img = styled.img`
	width: 15%;
	object-fit: cover;
	object-position: center;
`;

const Detail = styled.div`
	margin-left: 60px;
	line-height: 2rem;
	& :nth-child(3) {
		margin-top: 15px;
	}
`;

const Nickname = styled.span`	
	color: ${({theme}) => theme.color.primary};
	font-size: ${({theme}) => theme.fontSize.md};
	font-weight: ${({theme}) => theme.fontWeight.bold};
	margin: 0 10px;
`;

const Address = styled.span`
	font-size: ${({theme}) => theme.fontSize.md};
	font-weight: ${({theme}) => theme.fontWeight.bold};
	color: #999;
	margin: 0 10px;
`;

const Icon = styled.div`
	${flexAllCenter}
	justify-content: start;
`;

const Temp = styled.span`
	font-size: ${({theme}) => theme.fontSize.md};
	font-weight: ${({theme}) => theme.fontWeight.bold};
	margin: 0 10px;
`;

const S = {
	Wrapper,
	Img,
	Info,
	Icon,
	Detail,
	Address,
	Nickname,
	Temp
};
