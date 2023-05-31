import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const BannerAd = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};

	return (
		<S.Wrapper>
			<Slider {...settings}>
				<div>
					<S.Image
						src="/Assets/Images/Main/mainBanner1.png"
						alt="카테고리검색"
					/>
				</div>
				<div>
					<S.Image src="/Assets/Images/Main/mainBanner2.png" alt="환경보호" />
				</div>
				<div>
					<S.Image src="/Assets/Images/Main/mainBanner3.png" alt="6월이미지" />
				</div>
			</Slider>
		</S.Wrapper>
	);
};

export default BannerAd;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	min-width: 414px;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 900px) {
		width: 90%;
	}
	margin: 0 auto;
`;

const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;
const S = {
	Wrapper,
	Image,
};
