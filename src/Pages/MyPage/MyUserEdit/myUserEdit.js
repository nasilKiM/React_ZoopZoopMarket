import {
	flexAlignCenter,
	flexAllCenter,
	flexSpaceBetween,
} from 'Styles/common';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FindAddress from 'Components/Address/Desktop/address';
import UserApi from 'Apis/userApi';
import { FORM_TYPE } from 'Consts/FormType';
import CustomButton from 'Components/Buttons/button';
import AlertModal from 'Components/Alert/alertModal';
import { useQuery } from '@tanstack/react-query';

const MyUserEdit = ({ userInfo }) => {
	const navigate = useNavigate();
	const { data } = useQuery(['userInfo'], () => UserApi.userInfo());

	const [address, setAddress] = useState();
	const [nickMsg, setNickMsg] = useState('');
	const [modal, setModal] = useState(false);
	data && console.log(data);

	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	const onSubmit = async data => {
		const infoEdit = {
			email: data.email,
			nickName: data.nick,
			phone: data.phone,
			region: address,
		};

		try {
			await UserApi.userInfoEdit(infoEdit);

			setModal(true);
		} catch (err) {
			alert(
				err.response.data.message,
				'비밀번호 변경을 실패하셨습니다, 다시 시도해주세요',
			);
		}
	};

	const onCheckNick = async e => {
		e.preventDefault();
		const value = getValues('nick');
		try {
			const res = await UserApi.checkNickname(value);
			setNickMsg(res.data.message);
		} catch (err) {
			console.log(err);
			setNickMsg(err.response.data.message);
		}
	};

	useEffect(() => {
		setNickMsg();
	}, [getValues('nick')]);

	useEffect(() => {
		setValue('email', data.data.email);
		setValue('nick', data.data.nick_name);
		setValue('phone', data.data.phone);
		setAddress(data.data.region);
	}, []);

	const onClickPasswordChange = () => {
		navigate('/mypage/user_password_edit');
	};

	const full = !errors.nick && address;

	return (
		data && (
			<>
				<S.Wrap>
					<S.Form onSubmit={handleSubmit(onSubmit)}>
						<S.Container>
							<S.Title>* 아이디</S.Title>
							<S.idDiv>{data.data.email}</S.idDiv>
						</S.Container>
						<S.Container>
							<S.Title>* 닉네임</S.Title>
							<S.Input
								{...register('nick', FORM_TYPE.NICKNAME)}
								placeholder="Nick_Name"
							/>
							<S.CheckBtn
								disabled={errors.nick || !'nick'}
								onClick={onCheckNick}
								shape={'checkBtn'}
								size={'checkBtn'}
							>
								중복확인
							</S.CheckBtn>
						</S.Container>
						{errors.nick && <S.Error>{nickMsg}</S.Error>}
						<S.Container>
							<S.Title>* 전화번호</S.Title>
							<S.PhoneInput
								maxLength="13"
								minLength={13}
								{...register('phone', {
									onChange: e => {
										setValue(
											'phone',
											e.target.value
												.replace(/[^0-9]/g, '')
												.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`),
										);
									},
								})}
								placeholder="010-0000-0000"
							/>
						</S.Container>
						<S.Container>
							<S.Title>* 주소</S.Title>
							<S.addressDiv>{address}</S.addressDiv>
							<FindAddress setter={setAddress} region={userInfo?.region} />
						</S.Container>
						<S.Button
							type="submit"
							disabled={!full}
							size={'submitBtn'}
							shape={'submitBtn'}
						>
							저장하기
						</S.Button>
						{modal && (
							<AlertModal
								content={'회원정보가 변경되었습니다'}
								props={'/mypage/item'}
							/>
						)}
					</S.Form>
				</S.Wrap>
				<S.Wrap2>
					<S.Text onClick={onClickPasswordChange}>비밀번호 변경하기</S.Text>
				</S.Wrap2>
			</>
		)
	);
};

export default MyUserEdit;

const Wrap = styled.div`
	width: 100%;
	margin: 0 auto;
	flex-direction: column;
	${flexAllCenter}
`;

const Wrap2 = styled.div`
	width: 100%;
	${flexAllCenter}
	margin: 0 auto;
`;

const Form = styled.form`
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	border-radius: 10px;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 40px;
`;

const Input = styled.input`
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	border-radius: 10px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	padding-left: 10px;
	width: 60%;
	height: 30px;
`;

const PhoneInput = styled.input`
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	border-radius: 10px;
	padding-left: 10px;
	font-size: ${({ theme }) => theme.fontSize.sm};
	width: 80%;
	height: 40px;
`;

const idDiv = styled.div`
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	background-color: ${({ theme }) => theme.color.gray[200]};
	font-size: ${({ theme }) => theme.fontSize.sm};
	border-radius: 10px;
	padding-left: 10px;
	width: 80%;
	height: 40px;
	${flexAlignCenter}
`;

const addressDiv = styled.div`
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	font-size: ${({ theme }) => theme.fontSize.sm};
	border-radius: 10px;
	padding-left: 10px;
	margin-right: 10px;
	width: 60%;
	height: 40px;
	${flexAlignCenter}
`;

const CheckBtn = styled(CustomButton)`
	width: 100px;
	height: 40px;
	background: ${({ theme }) => theme.color.primary[200]};
	color: ${({ theme }) => theme.color.white};
	margin-left: 10px;
	border: none;
	:hover {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		background-color: ${({ theme }) => theme.color.primary[300]};
	}
`;

const Button = styled(CustomButton)`
	margin-top: 20px;
	width: 100%;
	background: linear-gradient(
		${({ theme }) => theme.color.primary[200]},
		${({ theme }) => theme.color.primary[300]}
	);
	border: none;
	color: ${({ theme }) => theme.color.fontColor[100]};
	@media ${({ theme }) => theme.device.mobile} {
		width: 100%;
	}
`;

const Error = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.primary};
	/* position: absolute;
	top: 10px; */
	width: 60%;
	border: 2px solid aqua;
`;

const Text = styled.div`
	margin-top: 30px;
	font-size: ${({ theme }) => theme.fontSize.base};
	color: ${({ theme }) => theme.color.primary[300]};
	:hover {
		color: ${({ theme }) => theme.color.primary[500]};
		cursor: pointer;
	}
`;

const Container = styled.div`
	${flexSpaceBetween}
	width: 100%;
	margin-bottom: 10px;
	position: relative;
`;

const Title = styled.div`
	min-width: 90px;
	margin-right: 10px;
	${flexAlignCenter}
	padding-left: 10px
`;

const S = {
	Wrap,
	Wrap2,
	Form,
	Input,
	PhoneInput,
	idDiv,
	addressDiv,
	CheckBtn,
	Button,
	Error,
	Text,
	Container,
	Title,
};
