import { useRef, useState } from 'react';
import styled from 'styled-components';

const UploadFiles = () => {
	const [imgSrc, setImgSrc] = useState([]);
	const imgRef = useRef();

	const onUpload = e => {
		const fileArr = e.target.files;
		let fileURLs = [];
		let filesLength = fileArr.length > 10 ? 10 : fileArr.length;

		for (let i = 0; i < filesLength; i++) {
			const reader = new FileReader();
			reader.readAsDataURL(fileArr[i]);
			reader.onload = () => {
				fileURLs[i] = reader.result;
				setImgSrc(fileURLs);
			};
		}
	};

	const onClickUpload = e => {
		imgRef.current.click();
	};

	return (
		<S.Wrapper>
			<input
				type="file"
				accept="image/*"
				multiple
				onChange={e => onUpload(e)}
				ref={imgRef}
				style={{ display: 'none' }}
			/>
			<S.ImgContainer>
				<S.MainImgContainer>
					<S.MainImgSection
						src={imgSrc[0] || '/Assets/임시로고.png'}
						onClick={onClickUpload}
					/>
					<S.DelBtn>-</S.DelBtn>
				</S.MainImgContainer>
				<S.SmallImgBox>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[1] || '/Assets/임시로고.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[2] || '/Assets/임시로고.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[3] || '/Assets/임시로고.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[4] || '/Assets/임시로고.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[5] || '/Assets/임시로고.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[6] || '/Assets/임시로고.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[7] || '/Assets/임시로고.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[8] || '/Assets/임시로고.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[9] || '/Assets/임시로고.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
				</S.SmallImgBox>
			</S.ImgContainer>
			<S.Count>{imgSrc.length} / 10</S.Count>
		</S.Wrapper>
	);
};

export default UploadFiles;

const Wrapper = styled.div`
	width: 414px;
	margin: 0 auto;
	border: 1px solid seagreen;
`;

const ImgContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MainImgContainer = styled.div`
	width: 190px;
	height: 190px;
	position: relative;
`;

const MainImgSection = styled.img`
	width: 190px;
	height: 190px;
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	object-fit: cover;
`;

const SmallImgBox = styled.div`
	width: 200px;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	position: relative;
	border: 1px solid red;
`;

const SmallImgContainer = styled.div`
	width: 60px;
	height: 60px;
	position: relative;
	margin: 0 2px;
`;

const SmallImgSection = styled.img`
	width: 60px;
	height: 60px;
	cursor: pointer;
	object-fit: cover;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
`;

const DelBtn = styled.div`
	width: 20px;
	height: 20px;
	top: 5px;
	right: 5px;
	border-radius: 15px;
	border: none;
	background-color: ${({ theme }) => theme.color.primary};
	position: absolute;
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.sm};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Count = styled.span`
	margin: 20px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSize.sm};
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
