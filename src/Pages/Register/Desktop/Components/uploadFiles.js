import { useState } from 'react';
import styled from 'styled-components';

const UploadFiles = ({ register, images, setImages, setValue }) => {
	const [imgSrc, setImgSrc] = useState([]);

	const onUpload = async e => {
		setImages([]);
		if (e.target.files) {
			const fileArr = e.target.files;
			const fileURLs = [];

			for (let i = 0; i < fileArr.length && i < 5; i++) {
				const file = fileArr[i];
				const fileURL = await readFileAsync(file);
				fileURLs.push(fileURL);
			}
			setImgSrc(fileURLs);
		} else setImgSrc(imgSrc);
	};

	const readFileAsync = file => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsDataURL(file);
		});
	};

	const onClickDeleteNew = idx => {
		const newFileURLs = imgSrc.filter(url => url !== imgSrc[idx]);
		setImgSrc(newFileURLs);
	};

	const onClickDeleteOld = idx => {
		const newFileURLs = images.filter(url => url !== images[idx]);
		setImages(newFileURLs);
	};

	return (
		<S.Wrapper>
			<input
				id="mainImg"
				type="file"
				accept="image/*"
				multiple
				key={Math.random()}
				style={{ display: 'none' }}
				{...register('mainImg')}
				onChange={e => {
					register('mainImg').onChange(e);
					onUpload(e);
				}}
			/>
			<S.ImgContainer>
				<S.MainImgContainer>
					<label htmlFor="mainImg">
						<S.MainImgSection
							src={images[0] || imgSrc[0] || '/Assets/Images/defaultImage.png'}
						/>
					</label>
					{(images[0] || imgSrc[0]) && (
						<S.DelBtn
							onClick={() =>
								images.length !== 0 ? onClickDeleteOld(0) : onClickDeleteNew(0)
							}
						>
							-
						</S.DelBtn>
					)}
				</S.MainImgContainer>
				<S.SmallImgBox>
					<S.SmallImgContainer>
						<label htmlFor="mainImg">
							<S.SmallImgSection
								src={
									images[1] || imgSrc[1] || '/Assets/Images/defaultImage.png'
								}
							/>
						</label>
						{(images[1] || imgSrc[1]) && (
							<S.DelBtn
								onClick={() =>
									images.length !== 0
										? onClickDeleteOld(1)
										: onClickDeleteNew(1)
								}
							>
								-
							</S.DelBtn>
						)}
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<label htmlFor="mainImg">
							<S.SmallImgSection
								src={
									images[2] || imgSrc[2] || '/Assets/Images/defaultImage.png'
								}
							/>
						</label>
						{(images[2] || imgSrc[2]) && (
							<S.DelBtn
								onClick={() =>
									images.length !== 0
										? onClickDeleteOld(2)
										: onClickDeleteNew(2)
								}
							>
								-
							</S.DelBtn>
						)}
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<label htmlFor="mainImg">
							<S.SmallImgSection
								src={
									images[3] || imgSrc[3] || '/Assets/Images/defaultImage.png'
								}
							/>
						</label>
						{(images[3] || imgSrc[3]) && (
							<S.DelBtn
								onClick={() =>
									images.length !== 0
										? onClickDeleteOld(3)
										: onClickDeleteNew(3)
								}
							>
								-
							</S.DelBtn>
						)}
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<label htmlFor="mainImg">
							<S.SmallImgSection
								src={
									images[4] || imgSrc[4] || '/Assets/Images/defaultImage.png'
								}
							/>
						</label>
						{(images[4] || imgSrc[4]) && (
							<S.DelBtn
								onClick={() =>
									images.length !== 0
										? onClickDeleteOld(4)
										: onClickDeleteNew(4)
								}
							>
								-
							</S.DelBtn>
						)}
					</S.SmallImgContainer>
				</S.SmallImgBox>
			</S.ImgContainer>
			<S.Count>{imgSrc.length || images.length} / 5</S.Count>
		</S.Wrapper>
	);
};

export default UploadFiles;

const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
`;

const ImgContainer = styled.div`
	/* width: 100%; */
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MainImgContainer = styled.div`
	width: 360px;
	height: 360px;
	position: relative;
	@media screen and (max-width: 1000px) {
		width: 310px;
		height: 310px;
	}
	@media screen and (max-width: 768px) {
		width: 240px;
		height: 240px;
	}
	@media screen and (max-width: 414px) {
		width: 200px;
		height: 200px;
	}
`;

const MainImgSection = styled.img`
	width: 360px;
	height: 360px;
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.color.subColor};
	object-fit: cover;
	@media screen and (max-width: 1000px) {
		width: 310px;
		height: 310px;
	}
	@media screen and (max-width: 768px) {
		width: 240px;
		height: 240px;
	}
	@media screen and (max-width: 414px) {
		width: 200px;
		height: 200px;
	}
`;

const SmallImgBox = styled.div`
	width: 380px;
	height: 380px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	overflow: hidden;
	@media screen and (max-width: 1000px) {
		width: 320px;
		height: 320px;
	}
	@media screen and (max-width: 768px) {
		width: 300px;
		height: 300px;
	}
	@media screen and (max-width: 414px) {
		width: 230px;
		height: 230px;
	}
`;

const SmallImgContainer = styled.div`
	width: 171px;
	height: 171px;
	position: relative;
	margin: 0 4px;
	@media screen and (max-width: 1000px) {
		width: 140px;
		height: 140px;
	}
	@media screen and (max-width: 768px) {
		width: 110px;
		height: 110px;
	}
	@media screen and (max-width: 414px) {
		width: 80px;
		height: 80px;
	}
`;

const SmallImgSection = styled.img`
	width: 171px;
	height: 171px;
	cursor: pointer;
	object-fit: cover;
	border: 1px solid ${({ theme }) => theme.color.subColor};
	@media screen and (max-width: 1000px) {
		width: 140px;
		height: 140px;
	}
	@media screen and (max-width: 768px) {
		width: 110px;
		height: 110px;
	}
	@media screen and (max-width: 414px) {
		width: 80px;
		height: 80px;
	}
`;

const DelBtn = styled.div`
	width: 30px;
	height: 30px;
	top: 6px;
	right: 6px;
	border-radius: 15px;
	border: none;
	background-color: ${({ theme }) => theme.color.primary[400]};
	position: absolute;
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.lg};
	display: flex;
	align-items: center;
	justify-content: center;
	:hover {
		width: 32px;
		height: 32px;
		cursor: pointer;
	}
	@media screen and (max-width: 768px) {
		width: 20px;
		height: 20px;
		:hover {
			width: 22px;
			height: 22px;
			cursor: pointer;
		}
	}
`;

const Count = styled.span`
	margin: 20px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
const S = {
	Wrapper,
	ImgContainer,
	MainImgContainer,
	MainImgSection,
	SmallImgBox,
	SmallImgContainer,
	SmallImgSection,
	DelBtn,
	Count,
};
