import { useState } from 'react';
import styled from 'styled-components';

const UploadFiles = ({ register }) => {
	const [imgSrc, setImgSrc] = useState([]);

	const onUpload = e => {
		const fileArr = e.target.files;
		let fileURLs = [];
		let filesLength = fileArr.length > 5 ? 5 : fileArr.length;

		for (let i = 0; i < filesLength; i++) {
			const reader = new FileReader();
			reader.readAsDataURL(fileArr[i]);
			reader.onload = () => {
				fileURLs[i] = reader.result;
				setImgSrc(fileURLs);
			};
		}
	};

	// ref 와 register 같이 쓰면 안됨

	const onClickDelete = idx => {
		if (imgSrc.length === 0) return;
		const newFileURLs = imgSrc.filter(url => url !== imgSrc[idx]);
		console.log(newFileURLs);
	};

	return (
		<S.Wrapper>
			<input
				id="mainImg"
				type="file"
				accept="image/*"
				multiple
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
							src={imgSrc[0] || '/Assets/Images/defaultImage.png'}
						/>
					</label>
					<S.DelBtn onClick={onClickDelete(0)}>-</S.DelBtn>
				</S.MainImgContainer>
				<S.SmallImgBox>
					<S.SmallImgContainer>
						<label htmlFor="mainImg">
							<S.SmallImgSection
								src={imgSrc[1] || '/Assets/Images/defaultImage.png'}
							/>
						</label>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<label htmlFor="mainImg">
							<S.SmallImgSection
								src={imgSrc[2] || '/Assets/Images/defaultImage.png'}
							/>
						</label>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<label htmlFor="mainImg">
							<S.SmallImgSection
								src={imgSrc[3] || '/Assets/Images/defaultImage.png'}
							/>
						</label>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<label htmlFor="mainImg">
							<S.SmallImgSection
								src={imgSrc[4] || '/Assets/Images/defaultImage.png'}
							/>
						</label>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
				</S.SmallImgBox>
			</S.ImgContainer>
			<S.Count>{imgSrc.length} / 5</S.Count>
		</S.Wrapper>
	);
};

export default UploadFiles;

const Wrapper = styled.div`
	width: 800px;
	margin: 0 auto;
`;

const ImgContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MainImgContainer = styled.div`
	width: 360px;
	height: 360px;
	position: relative;
`;

const MainImgSection = styled.img`
	width: 360px;
	height: 360px;
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	object-fit: cover;
`;

const SmallImgBox = styled.div`
	width: 376px;
	height: 376px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

const SmallImgContainer = styled.div`
	width: 171px;
	height: 171px;
	position: relative;
	margin: 0 4px;
`;

const SmallImgSection = styled.img`
	width: 171px;
	height: 171px;
	cursor: pointer;
	object-fit: cover;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
`;

const DelBtn = styled.div`
	width: 30px;
	height: 30px;
	top: 5px;
	right: 5px;
	border-radius: 15px;
	border: none;
	background-color: ${({ theme }) => theme.color.primary};
	position: absolute;
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.lg};
	display: flex;
	align-items: center;
	justify-content: center;
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
