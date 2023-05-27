import styled from 'styled-components';
import UploadFiles from './Components/uploadFiles';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import FindAddress from 'Components/Address/Desktop/address';
import { Axios } from 'Apis/@core';
import { useNavigate, useParams } from 'react-router-dom';
import ProductApi from 'Apis/productApi';
import { flexAlignCenter } from 'Styles/common';
import KaMap from 'Components/Map/Map';

const RegisterPage = () => {
	const [searchResult, setSearchResult] = useState('');
	const [images, setImages] = useState([]);
	const navigate = useNavigate();

	const [price, setPrice] = useState('');
	const [tags, setTags] = useState([]);
	const { idx } = useParams();

	const {
		register,
		handleSubmit,
		setError,
		clearErrors,
		setValue,
		getValues,
		formState: { errors },
	} = useForm();

	const productIdx = async () => {
		try {
			const res = await ProductApi.detail(idx);
			console.log('res', res);
			setValue('price', res.data.searchProduct.price);
			setPrice(res.data.searchProduct.price);
			setTags(
				res.data.searchProduct.ProductsTags.map(tagObj => tagObj.Tag.tag),
			);
			setValue('title', res.data.searchProduct.title);
			setValue('content', res.data.searchProduct.description);
			setSearchResult(res.data.searchProduct.region);
			setImages([
				res.data.searchProduct.img_url,
				...res.data.searchProduct.ProductImages.map(subImg => subImg.img_url),
			]);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		if (!idx) return;
		productIdx();
	}, [idx]);

	const handleKeyDown = e => {
		if (e.keyCode === 13) {
			clearErrors('tag'); // 에러초기화
			e.preventDefault();
			const newTag = e.target.value.trim(); //공백있으면 trim으로 제거.
			console.log('확인용', tags);
			if (newTag) {
				setTags([...tags, newTag]);
				e.target.value = '';
			}
		}
	};
	const handleDelete = deleteTag => e => {
		e.preventDefault();
		setTags(prevTags => prevTags.filter(tag => tag !== deleteTag));
	};

	const handlePriceChange = e => {
		const value = e.target.value;
		const num = parseInt(value.replace(/[^0-9]/g, ''), 10);
		const priceValue = isNaN(num) ? 0 : num;
		const formattedPrice = priceValue.toLocaleString();
		setPrice(formattedPrice);
	};

	const onSubmit = data => {
		if (tags.length === 0) {
			return setError(
				'tag',
				{ message: '1개이상 꼭 입력해주세요.' },
				{ shouldFocus: true },
			);
		}

		try {
			const formData = new FormData();
			formData.append('title', data.title);
			formData.append('category', Number(data.price) === 0 ? 1 : 0);
			formData.append('description', data.content);
			formData.append('region', searchResult);
			formData.append('tag', tags);
			console.log('이미지 formdata', data.mainImg);
			console.log('본문내용', data.content);
			[...data.mainImg].forEach(element => {
				formData.append('images', element);
			});

			if (!idx) {
				formData.append('price', Number(data.price.replace(/,/g, '')));
				const res = Axios.post('/api/product', formData, {
					headers: { 'Content-Type': 'multipart/form-data' },
				});
				alert('물품등록이 완료되었습니다.');
				navigate('/main');
			} else {
				formData.append('price', Number(data.price));
				formData.append('idx', idx);
				const imgUrls = [];
				images.forEach((element, index) => {
					if (index === 0) {
						formData.append('main_url', element);
					} else {
						imgUrls.push(element);
					}
				});
				formData.append('img_url', imgUrls.join());
				Axios.patch('/api/product', formData, {
					headers: { 'Content-Type': 'multipart/form-data' },
				});
				alert('물품수정이 완료되었습니다.');
				navigate('/main');
			}
		} catch (err) {
			return console.log(err);
		}
	};

	return (
		<S.Wrapper onSubmit={handleSubmit(onSubmit)}>
			<UploadFiles
				images={images}
				setImages={setImages}
				register={register}
				setValue={setValue}
				getValues={getValues}
				errors={errors}
			/>
			<S.Blank></S.Blank>
			<S.Line>
				<S.Mark>*</S.Mark>
				<S.Title>제목</S.Title>
				<S.InputContainer>
					<S.InputBox
						placeholder="최대 20자까지 입력 가능합니다."
						maxLength={19}
						{...register('title', {
							required: '제목은 필수 사항입니다.',
						})}
					></S.InputBox>
					{errors.title && <Error role="alert">{errors.title.message}</Error>}
				</S.InputContainer>
			</S.Line>
			<S.Line>
				<S.Mark>*</S.Mark>
				<S.Title>가격</S.Title>
				<S.InputContainer>
					<S.InputBox
						placeholder="0원 기입시 무료 나눔템으로 분류됩니다."
						{...register('price', {
							required: '가격은 필수 사항입니다.',
							pattern: {
								value: /^[0-9,]+$/,
								message: '숫자만 입력해주세요',
							},
						})}
						value={price.toLocaleString('ko-KR')}
						type="text"
						onChange={handlePriceChange}
					></S.InputBox>
					{errors.price && <Error role="alert">{errors.price.message}</Error>}
				</S.InputContainer>
			</S.Line>
			<S.Line>
				<S.Mark>*</S.Mark>
				<S.Title>태그</S.Title>
				<S.InputContainer>
					<S.InputBox
						placeholder="이곳에 입력 후 엔터를 치면 태그가 등록됩니다."
						onKeyDown={handleKeyDown}
					></S.InputBox>
					{errors.tag && <Error role="alert">{errors.tag.message}</Error>}
				</S.InputContainer>
			</S.Line>
			<S.TagWrapper>
				{tags &&
					tags.map((tag, index) => (
						<S.TagBox key={index}>
							<S.TagContent>{tag}</S.TagContent>
							<S.DelTag onClick={e => handleDelete(tag)(e)}>x</S.DelTag>
						</S.TagBox>
					))}
			</S.TagWrapper>
			<S.AddressWrapper>
				<S.AddressTitleContainer>
					<S.Mark>*</S.Mark>
					<S.Title>거래장소</S.Title>
					<S.Address>{searchResult}</S.Address>
					<FindAddress setter={setSearchResult} />
				</S.AddressTitleContainer>
				<KaMap address={searchResult} />
			</S.AddressWrapper>
			<S.Line>
				<S.Mark>*</S.Mark>
				<S.Title style={{ width: '100px' }}>본문 내용</S.Title>
				<S.InputContainer>
					{errors.content && (
						<S.Error role="alert" style={{ left: '20px', top: '-10px' }}>
							{errors.content.message}
						</S.Error>
					)}
				</S.InputContainer>
			</S.Line>
			<S.ContentBox>
				<S.TxtArea
					placeholder="본문 내용을 입력해주세요."
					{...register('content', {
						required: '본문 내용은 필수 사항입니다.',
					})}
				></S.TxtArea>
			</S.ContentBox>
			<S.Container>
				<S.RegisterBtn>등록하기</S.RegisterBtn>
			</S.Container>
		</S.Wrapper>
	);
};

export default RegisterPage;

const Wrapper = styled.form`
	width: 70%;
	min-width: 414px;
	max-width: 1200px;
	@media (max-width: 700px) {
		width: 95%;
	}
	margin: 0 auto;
	margin-top: 50px;
`;

const Blank = styled.div`
	width: 100%;
	height: 20px;
`;

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 10px;
	display: flex;
`;

const Line = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 10px 30px 10px;
	position: relative;
	margin: 0 auto;
`;

const Mark = styled.span`
	position: absolute;
	color: ${({ theme }) => theme.color.primary[400]};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	top: 0;
	left: 0;
`;

const Title = styled.span`
	width: 105px;
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	@media (max-width: 1100px) {
		font-size: ${({ theme }) => theme.fontSize.base};
	}
	@media screen and (max-width: 768px) {
		min-width: 40px;
	}
`;

const InputContainer = styled.div`
	width: 100%;
	position: relative;
`;

const InputBox = styled.input`
	width: 100%;
	min-width: 400px;
	max-width: 1200px;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSize.md};
	:focus {
		outline: none;
	}
	@media (max-width: 1100px) {
		font-size: ${({ theme }) => theme.fontSize.base};
	}
`;

const Error = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.error};
	margin-left: 30px;
	margin-top: 5px;
	position: absolute;
	left: 400px;
	top: 10px;
`;

const AddressWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 10px 30px 10px;
	position: relative;
	margin: 0 auto;
`;

const AddressTitleContainer = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 10px;
	align-items: center;
	justify-content: space-between;
`;

const AddressMap = styled.div`
	/* width: 680px; */
	width: 100%;
	position: relative;
	margin: 0 auto;
`;

const Address = styled.div`
	/* width: 450px; */
	width: 100%;
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSize.md};
`;

const ContentBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 10px 30px 10px;
	position: relative;
	margin: 0 auto;
`;

const TxtArea = styled.textarea`
	width: 100%;
	margin-top: -15px;
	height: 400px;
	font-size: ${({ theme }) => theme.fontSize.base};
	padding: 20px;

	:focus {
		outline: none;
	}
`;

const RegisterBtn = styled.button`
	width: 150px;
	height: 50px;
	border: none;
	background: ${({ theme }) => theme.color.primary[200]};
	border-radius: 5px;
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-left: auto;
	cursor: pointer;
	:hover {
		background-color: ${({ theme }) => theme.color.primary[400]};
		/* color: ${({ theme }) => theme.color.white}; */
	}
`;

const TagWrapper = styled.div`
	width: 90%;
	/* height: 30px; */
	${flexAlignCenter}
	flex-wrap: wrap;
	padding: 0 10px;
	margin-left: 100px;
	margin-bottom: 50px;
`;

const TagBox = styled.span`
	display: flex;
	max-width: 150px;
	padding: 5px;
	margin-right: 10px;
	margin-bottom: 10px;
	background-color: ${({ theme }) => theme.color.gray[100]};
`;

const TagContent = styled.span`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	float: right;
`;

const DelTag = styled.button`
	width: 20px;
	/* margin-left: 10px; */
	border: none;
	background: none;
	display: flex;
	align-items: flex-end;
	line-height: 14px;
	:hover {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const S = {
	Wrapper,
	Blank,
	Container,
	RegisterBtn,
	Line,
	Mark,
	Title,
	InputContainer,
	InputBox,
	Error,
	AddressWrapper,
	AddressTitleContainer,
	Address,
	AddressMap,
	ContentBox,
	TxtArea,
	TagWrapper,
	TagBox,
	TagContent,
	DelTag,
};
