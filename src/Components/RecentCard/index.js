import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { flexAllCenter } from 'Styles/common';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import RecentCard from './recentCard';
import useRecentProduct from 'Hooks/Queries/get-recent-product';

const RecentProduct = () => {
	const res = useRecentProduct();

	const sliderSetting = {
		infinite: true,
		dots: false,
		speed: 500,
		slidesToScroll: 1,
		slidesToShow: 2,
		vertical: true,
		nextArrow: (
			<S.Next>
				<FontAwesomeIcon icon={faAngleUp} />
			</S.Next>
		),
		prevArrow: (
			<S.Pre>
				<FontAwesomeIcon icon={faAngleDown} />
			</S.Pre>
		),
	};

	return (
		<S.Wrap>
			<S.RecentWord>최근 본 상품</S.RecentWord>
			<StyledSlider {...sliderSetting}>
				{res.data?.productList.map(item => (
					<RecentCard item={item} />
				))}
			</StyledSlider>
		</S.Wrap>
	);
};
export default RecentProduct;

const Wrap = styled.div`
	height: 350px;
	width: 120px;
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	border-radius: 10px;
	${flexAllCenter}
	flex-direction: column;
	position: relative;
	background-color: white;
`;
const RecentWord = styled.span`
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	margin-bottom: 10px;
	padding-bottom: 30px;
`;

const Pre = styled.div`
	position: absolute;
	margin-top: 278px;
	text-align: center;
	width: 100%;
`;
const Next = styled.div`
	position: absolute;
	margin: 10px 0;
	padding-bottom: 15px;
	text-align: center;
	width: 100%;
`;

const StyledSlider = styled(Slider)`
	width: 100%;
	text-align: center; // 보류
	position: relative;
	.slick-arrow {
		font-size: 20px;
		top: 0;
		color: ${({ theme }) => theme.color.gray[300]};
		z-index: 100;
	}

	.slick-prev::before,
	.slick-next::before {
		display: none;
	}

	.slick-prev {
		top: -30px;
		left: 0;
	}

	.slick-next {
		top: -20px;
		bottom: 0;
		right: 0;
	}
`;

const S = {
	Wrap,
	RecentWord,
	Next,
	Pre,
};
