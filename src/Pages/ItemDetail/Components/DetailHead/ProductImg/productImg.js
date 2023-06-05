import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import styled from 'styled-components';

const ProductImg = ({ main, sub }) => {
	return (
		main && (
			<>
				<Swiper
					navigation={true}
					modules={[Navigation]}
					className="mySwiper"
					loop={true}
				>
					<SwiperSlide>
						<S.ImgSection
							src={main}
							onClick={() => window.open(`${main}`, '_blank')}
						/>
					</SwiperSlide>
					{sub.map(img => (
						<SwiperSlide>
							<S.ImgSection
								src={img.img_url}
								onClick={() => window.open(`${img.img_url}`, '_blank')}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</>
		)
	);
};

export default ProductImg;

const ImgSection = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	background: gray;
	margin: 0 auto;
`;

const S = {
	ImgSection,
};
