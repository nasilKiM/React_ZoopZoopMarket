import { useRef, useState } from 'react';
import styled from 'styled-components';

const UploadFiles = () => {
	const [imgSrc, setImgSrc] = useState([]);
	const imgRef = useRef();

	// const onUpload = e => {
	// 	const file = e.target.files[0];
	// 	const reader = new FileReader();
	// 	reader.readAsDataURL(file);

	// 	reader.onloadend = () => {
	// 		setImgSrc(reader.result);
	// 	};
	// };

	const onUpload = e => {
		const fileArr = e.target.files;
		let fileURLs = [];
		let filesLength = fileArr.length > 10 ? 10 : fileArr.length;

		for (let i = 0; i < filesLength; i++) {
			const reader = new FileReader();
			reader.readAsDataURL(fileArr[i]);
			reader.onload = () => {
				fileURLs[i] = reader.result;
			};
		}
		setImgSrc(fileURLs);
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
				<S.MainImgSection
					src={imgSrc[0] || '/Assets/임시로고.png'}
					onClick={onClickUpload}
				/>
				<S.SmallImgContainer>
					<S.ImgSection
						src={imgSrc[1] || '/Assets/임시로고.png'}
						onClick={onClickUpload}
					/>
					<S.ImgSection
						src={imgSrc[2] || '/Assets/임시로고.png'}
						onClick={onClickUpload}
					/>
					<S.ImgSection
						src={imgSrc[3] || '/Assets/임시로고.png'}
						onClick={onClickUpload}
					/>
					<S.ImgSection
						src={imgSrc[4] || '/Assets/임시로고.png'}
						onClick={onClickUpload}
					/>
					<S.ImgSection
						src={imgSrc[5] || '/Assets/임시로고.png'}
						onClick={onClickUpload}
					/>
					<S.ImgSection
						src={imgSrc[6] || '/Assets/임시로고.png'}
						onClick={onClickUpload}
					/>
					<S.ImgSection
						src={imgSrc[7] || '/Assets/임시로고.png'}
						onClick={onClickUpload}
					/>
					<S.ImgSection
						src={imgSrc[8] || '/Assets/임시로고.png'}
						onClick={onClickUpload}
					/>
					<S.ImgSection
						src={imgSrc[9] || '/Assets/임시로고.png'}
						onClick={onClickUpload}
					/>
				</S.SmallImgContainer>
			</S.ImgContainer>
			<S.Count>{imgSrc.length} / 10</S.Count>
		</S.Wrapper>
	);
};

export default UploadFiles;

const Wrapper = styled.div`
	width: 50%;
	max-width: 1000px;
	min-width: 700px;
	/* border: 1px solid red; */
	margin: 0 auto;
`;

const ImgContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 50px;
`;

const MainImgSection = styled.img`
	width: 290px;
	height: 290px;
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	object-fit: cover;
`;

const SmallImgContainer = styled.div`
	width: 300px;
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

const ImgSection = styled.img`
	width: 90px;
	height: 90px;
	margin: 4px;
	cursor: pointer;
	object-fit: cover;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
`;

const delBtn = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 5px;
	border: none;
	background-color: ${({ theme }) => theme.color.primary};
`;

const Count = styled.span`
	margin: 20px 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const S = {
	Wrapper,
	ImgContainer,
	MainImgSection,
	SmallImgContainer,
	ImgSection,
	delBtn,
	Count,
};
