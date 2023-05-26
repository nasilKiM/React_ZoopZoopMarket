import { flexAllCenter } from 'Styles/common';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FindAddress from 'Components/Address/Desktop/address';
import UserApi from 'Apis/userApi';
import { FORM_TYPE } from 'Consts/FormType';
import CustomButton from 'Components/Buttons/button';

const MyUserEdit = ({ userInfo }) => {
	const navigate = useNavigate();
	const [address, setAddress] = useState();
	const [idMsg, setIdMsg] = useState('');
	const [nickMsg, setNickMsg] = useState('');

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
			alert('회원정보가 변경되었습니다');
			navigate('/mypage');
		} catch (err) {
			alert(
				err.response.data.message,
				'비밀번호 변경을 실패하셨습니다, 다시 시도해주세요',
			);
		}
	};

	// zoopzoop의 아이디는 이메일로, 아이디를 변경할수 없도록 해야할지 전체 논의 필요 (우선은 스웨거 상 아이디 변경 가능하도록 되어 있어 추가해놓음)
	const onCheckId = async e => {
		e.preventDefault();
		const value = getValues('email');
		try {
			const res = await UserApi.checkEmail(value);
			setIdMsg(res.data.message);
		} catch (err) {
			setIdMsg(err.response.data.message);
		}
	};

	useEffect(() => {
		setIdMsg('');
	}, [getValues('email')]);

	const onCheckNick = async e => {
		e.preventDefault();
		const value = getValues('nick');
		try {
			const res = await UserApi.checkNickname(value);
			setNickMsg(res.data.message);
		} catch (err) {
			setNickMsg(err.response.data.message);
		}
	};

	useEffect(() => {
		setNickMsg();
	}, [getValues('nick')]);

	useEffect(() => {
		setValue('email', userInfo?.email);
		setValue('nick', userInfo?.nick_name);
		setValue('phone', userInfo?.phone);
	}, []);

	const onClickPasswordChange = () => {
		navigate('/mypage/user_password_edit');
	};

	const full = !errors.email && !errors.phone && address;

	return (
		<>
			<S.Wrap>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
						{/* <S.Grid1>
							<S.Title>* 아이디</S.Title>
							<S.Input
								{...register('email', FORM_TYPE.EMAIL)}
								placeholder="E-mail"
							/>
							<S.CheckBtn
									disabled={errors.email || !'email'}
									onClick={onCheckId}
									shape={'checkBtn'}
									size={'checkBtn'}
							>
								중복확인
							</S.CheckBtn>
						</S.Grid1> */}
					{errors.email && <S.Error>{errors.email.message}</S.Error>}
					{<S.Error>{idMsg}</S.Error>}
					<S.Grid1>
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
					</S.Grid1>
					{<S.Error>{nickMsg}</S.Error>}
					<S.Grid2>
						<S.Title2>* 전화번호</S.Title2>
						<S.Input
							maxLength="13"
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
					</S.Grid2>
					{errors.phone && <S.Error>{errors.phone.message}</S.Error>}
					<S.Grid3>
						<S.Title>* 주소</S.Title>
						<div>{address}</div>
						<FindAddress setter={setAddress} region={userInfo?.region} />
					</S.Grid3>
					<S.Button
						type="submit"
						disabled={!full}
						size={'submitBtn'}
						shape={'submitBtn'}
					>
						저장하기
					</S.Button>
				</S.Form>
			</S.Wrap>
			<S.Wrap2>
				<S.Text onClick={onClickPasswordChange}>비밀번호 변경하기</S.Text>
			</S.Wrap2>
		</>
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
	padding: 40px 15vw;
`;

const Input = styled.input`
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	border-radius: 10px;
`;

const CheckBtn = styled(CustomButton)`
	min-width: max-content;
	background: none;
	margin-left: 10px;
	border: 2px solid ${({ theme }) => theme.color.primary[400]};
	&:hover {
		color: ${({ theme }) => theme.color.fontColor[100]};
		background-color: ${({ theme }) => theme.color.primary[400]};
	}
`;

const Button = styled(CustomButton)`
	margin-top: 20px;
	width: 100%;
	background: linear-gradient(
		${({ theme }) => theme.color.primary[400]},
		${({ theme }) => theme.color.primary[200]}
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
	margin-bottom: 15px;
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

const Grid1 = styled.div`
	display: grid;
	grid-template-columns: 1fr 4.1fr 1fr;
	grid-auto-rows: 5.5vh;
	grid-gap: 20px;
	margin-bottom: 10px;
`;

const Grid2 = styled.div`
	display: grid;
	grid-template-columns: 1fr 7.6fr;
	grid-auto-rows: 5.5vh;
	grid-gap: 40px;
	margin-bottom: 25px;
`;

const Grid3 = styled.div`
	display: grid;
	grid-template-columns: 1fr 6fr 1.1fr;
	grid-auto-rows: 5.5vh;
	grid-gap: 18px;
	justify-content: center;
`;

const Title = styled.div`
	width: 10vw;
	min-width: max-content;
	${flexAllCenter}
	margin-right: 22px;
`;

const Title2 = styled.div`
	width: 10vw;
	min-width: max-content;
	${flexAllCenter}
`;

const S = {
	Wrap,
	Wrap2,
	Form,
	Input,
	CheckBtn,
	Button,
	Error,
	Text,
	Grid1,
	Grid2,
	Grid3,
	Title,
	Title2,
};
