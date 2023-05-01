import ReviewMessage from 'Components/Review/Review';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { styled as mui } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const ReviewPage = () => {
	const StyledRating = mui(Rating)(({ theme }) => ({
		'& .MuiRating-iconEmpty .MuiSvgIcon-root': {
			color: theme.palette.action.disabled,
		},
	}));

	const customIcons = {
		1: {
			icon: (
				<SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: 40 }} />
			),
			label: 'Very Dissatisfied',
		},
		2: {
			icon: <SentimentDissatisfiedIcon color="error" sx={{ fontSize: 40 }} />,
			label: 'Dissatisfied',
		},
		3: {
			icon: <SentimentSatisfiedIcon color="warning" sx={{ fontSize: 40 }} />,
			label: 'Neutral',
		},
		4: {
			icon: <SentimentSatisfiedAltIcon color="success" sx={{ fontSize: 40 }} />,
			label: 'Satisfied',
		},
		5: {
			icon: (
				<SentimentVerySatisfiedIcon color="success" sx={{ fontSize: 40 }} />
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
		<StyledReviewPage>
			<ReviewTitle>거래한 아이템 후기남기기</ReviewTitle>
			<ReviewMessage />

			<ReviewTitle>판매자 님과의 거래 후기</ReviewTitle>
			<RatingWrapper>
				<StyledRating
					name="highlight-selected-only"
					defaultValue={3}
					IconContainerComponent={IconContainer}
					getLabelText={value => customIcons[value].label}
					highlightSelectedOnly
				/>
			</RatingWrapper>

			<ReviewTitle>판매자 님과의 거래 후기를 남겨주세요.</ReviewTitle>
			<S.TxtArea placeholder="본문 내용을 입력해주세요."></S.TxtArea>
			<S.Container>
				<S.RegisterBtn>등록하기</S.RegisterBtn>
			</S.Container>
		</StyledReviewPage>
	);
};

export default ReviewPage;

const StyledReviewPage = styled.div`
	width: 700px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

const ReviewTitle = styled.h2`
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-bottom: 16px;
	margin-top: 30px;
	text-align: left;
`;

const RatingWrapper = styled.div`
	display: flex;
	margin: 0 auto;
	position: relative;
	margin-bottom: 20px;

	div {
		position: absolute;
		width: 100%;
	}
`;

const Container = styled.div`
	width: 700px;
	margin: 0 auto;
	padding: 10px;
	display: flex;
`;

const TxtArea = styled.textarea`
	width: 700px;
	height: 200px;
	font-size: ${({ theme }) => theme.fontSize.base};
	padding: 20px;

	:focus {
		outline: none;
	}
`;

const RegisterBtn = styled.button`
	width: 250px;
	height: 50px;
	border: none;
	border-radius: 5px;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	background-color: ${({ theme }) => theme.color.subBeige};
	margin-left: auto;
	cursor: pointer;
	:hover {
		background-color: ${({ theme }) => theme.color.primary};
		color: ${({ theme }) => theme.color.white};
	}
`;

const S = {
	Container,
	TxtArea,
	RegisterBtn,
};
