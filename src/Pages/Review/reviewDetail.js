import { useMutation, useQuery } from '@tanstack/react-query';

import ReviewApi from 'Apis/reviewApi';
import PropTypes from 'prop-types';

import { styled as mui } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { useNavigate, useParams } from 'react-router-dom';

import { flexAlignCenter, flexAllCenter } from 'Styles/common';
import styled from 'styled-components';

const ReviewDetail = () => {
	const navigate = useNavigate();
	const { idx } = useParams();
	const { data } = useQuery(['reviewDetail'], () =>
		ReviewApi.reviewDetail(idx),
	);

	const purchased = data?.data.PayList.Product;
	const myReview = data?.data;
	const hasOriginalImg = myReview.img_url !== 'null';
	const hasNewImg = myReview.ReviewImages.length > 0;
	console.log(myReview);

	const StyledRating = mui(Rating)(({ theme }) => ({
		'& .MuiRating-iconEmpty .MuiSvgIcon-root': {
			color: theme.palette.action.disabled,
		},
	}));
	const onClickEdit = () => {
		return navigate(`/review/edit/${idx}`);
	};

	const mutationDeleteReview = useMutation(() => {
		return ReviewApi.deleteReview(idx);
	});

	const onClickDelete = async () => {
		try {
			await mutationDeleteReview.mutateAsync();
			alert('리뷰가 삭제되었습니다.');
			navigate('/mypage/review');
		} catch (err) {
			console.log(err);
		}
	};

	const customIcons = {
		1: {
			icon: (
				<SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: 60 }} />
			),
			label: 'Very Dissatisfied',
		},
		2: {
			icon: <SentimentDissatisfiedIcon color="error" sx={{ fontSize: 60 }} />,
			label: 'Dissatisfied',
		},
		3: {
			icon: <SentimentSatisfiedIcon color="warning" sx={{ fontSize: 60 }} />,
			label: 'Neutral',
		},
		4: {
			icon: <SentimentSatisfiedAltIcon color="success" sx={{ fontSize: 60 }} />,
			label: 'Satisfied',
		},
		5: {
			icon: (
				<SentimentVerySatisfiedIcon color="success" sx={{ fontSize: 60 }} />
			),
			label: 'Very Satisfied',
		},
	};

	function IconContainer(props) {
		const { value, ...other } = props;
		return <span {...other}>{customIcons[value].icon}</span>;
	}

	IconContainer.propTypes = {
		value: PropTypes.number.isRequired,
	};

	return (
		data && (
			<S.Wrapper>
				<S.EditBar>
					<button onClick={() => onClickEdit()}>수정</button>
					<button onClick={() => onClickDelete()}>삭제</button>
				</S.EditBar>
				<S.ReviewTitle>구매한 아이템</S.ReviewTitle>
				<S.Target>
					<S.TargetImg src={purchased.img_url} />
					<S.TargetBox>
						<S.TargetTitle>{purchased.title}</S.TargetTitle>
						<S.TargetPrice>
							{purchased.price == 0
								? '무료나눔'
								: purchased.price.toLocaleString()}
							원
						</S.TargetPrice>
					</S.TargetBox>
				</S.Target>
				<S.ReviewTitle>판매자 정보</S.ReviewTitle>
				<S.Target>
					<S.UserImg src={purchased.User.profile_url} />
					<S.UserBox>
						<div>
							<S.UserTitle>닉네임 : </S.UserTitle>
							{purchased.User.nick_name}
						</div>
						<div>
							<S.UserTitle>매너온도 : </S.UserTitle>
							{purchased.User.Ondo.ondo}
						</div>
					</S.UserBox>
				</S.Target>
				<S.ReviewTitle>만족도</S.ReviewTitle>
				<span>
					왼쪽부터 '매우불만족 - 불만족 - 보통 - 만족 - 매우만족' 순입니다.
				</span>
				<S.RatingWrapper>
					<div>
						<StyledRating
							name="highlight-selected-only"
							value={myReview.ondo - 33}
							IconContainerComponent={IconContainer}
							getLabelText={value => customIcons[value].label}
							highlightSelectedOnly
						/>
					</div>
				</S.RatingWrapper>
				<S.ReviewTitle>
					{purchased.User.nick_name}님이 판매한 물건에 대한 후기입니다!
				</S.ReviewTitle>
				<S.TxtArea style={{ whiteSpace: 'pre-wrap' }}>
					{myReview.content.replaceAll('\r,\n', '<br />')}
				</S.TxtArea>
				{hasOriginalImg && (
					<S.ReviewImg
						src={myReview.img_url}
						onClick={() => window.open(`${myReview.img_url}`, '_blank')}
					/>
				)}
				{hasNewImg && (
					<S.ReviewImg
						src={myReview.ReviewImages[0].imgUrl}
						onClick={() => window.open(`${myReview.img_url}`, '_blank')}
					/>
				)}
				<S.ReviewTitle>유의사항</S.ReviewTitle>
				<li>
					구매한 아이템과 무관한 리뷰, 상대방에 대한 욕설, 비방, 명예훼손 등의
					내용을 담고 있는 경우 통보없이 삭제될 수 있습니다.
				</li>
				<li>
					회원님의 이메일, 휴대폰과 같은 개인정보 입력은 금지되어 있습니다.
				</li>
			</S.Wrapper>
		)
	);
};

export default ReviewDetail;

const Wrapper = styled.div`
	width: 70%;
	min-width: 350px;
	max-width: 1200px;
	margin: 0 auto;
	padding-top: 20px;
	display: flex;
	flex-direction: column;
	span {
		font-size: ${({ theme }) => theme.fontSize.sm};
		color: ${({ theme }) => theme.color.gray[300]};
	}
	li {
		font-size: ${({ theme }) => theme.fontSize.sm};
		color: ${({ theme }) => theme.color.gray[400]};
		margin-bottom: 10px;
		line-height: 20px;
	}
`;

const EditBar = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	${flexAlignCenter}
	justify-content: end;
	padding-top: 20px;
	> button {
		border: none;
		${flexAllCenter}
		padding: 10px 30px;
		background-color: #d9d9d9;
		border-radius: 10px;
		margin-left: 10px;
		:hover {
			background-color: ${({ theme }) => theme.color.primary[300]};
			color: ${({ theme }) => theme.color.white};
		}
	}
`;

const ReviewTitle = styled.h2`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	margin-bottom: 15px;
	margin-top: 50px;
	text-align: left;
	padding: 10px;
	background-color: ${({ theme }) => theme.color.gray[100]};
`;

const Target = styled.div`
	width: 100%;
	display: flex;
`;

const TargetImg = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
`;

const TargetBox = styled.div`
	width: 60%;
	padding: 10px 30px 30px 30px;
	display: flex;
	flex-direction: column;
`;

const TargetTitle = styled.div`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-bottom: 10px;
`;

const TargetPrice = styled.div`
	font-size: ${({ theme }) => theme.fontSize.sm};
`;

const UserImg = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 50%;
`;

const UserBox = styled.div`
	width: 60%;
	padding: 10px 30px 30px 30px;
	display: flex;
	flex-direction: column;
	> div {
		margin-top: 10px;
	}
`;

const UserTitle = styled.span`
	width: 50px;
`;

const RatingWrapper = styled.div`
	display: flex;
	margin: 0 auto;
	position: relative;
	margin-bottom: 20px;

	div {
		margin-top: 40px;
		width: 100%;
	}
`;

const ReviewImg = styled.img`
	width: 200px;
	height: 100px;
	object-fit: contain;
	margin-top: 10px;
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	cursor: pointer;
`;

const TxtArea = styled.div`
	width: 100%;
	height: 250px;
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	font-size: ${({ theme }) => theme.fontSize.sm};
	padding: 20px;
	:focus {
		outline: none;
	}
`;

const S = {
	Wrapper,
	EditBar,
	ReviewTitle,
	Target,
	TargetImg,
	TargetBox,
	TargetTitle,
	TargetPrice,
	UserImg,
	UserBox,
	UserTitle,
	RatingWrapper,
	TxtArea,
	ReviewImg,
};
