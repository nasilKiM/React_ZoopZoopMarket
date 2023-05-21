import styled from 'styled-components';
import CustomButton from '../button';
// import UserApi from 'Apis/userApi';
// import { useEffect } from 'react';

const EditBtns = () => {
	// const item = async (page, category) => {
	// 	try {
	// 		const response = await UserApi.myItem(page, category);
	// 		if (response.status === 200) {
	// 			console.log('내등록템보기', response);
	// 		}
	// 	} catch (error) {
	// 		console.log('에러', error);
	// 	}
	// };

	// useEffect(() => {
	// 	item();
	// }, []);

	// onClick={() => navigate(`/register/${item.idx}`)}}

	return (
		<S.Wrap>
			<CustomButton variant={'primary'} shape={'shape2'}>
				수정
			</CustomButton>
			<CustomButton variant={'primary'} shape={'shape2'}>
				삭제
			</CustomButton>
		</S.Wrap>
	);
};
export default EditBtns;

const Wrap = styled.div`
	display: flex;
	padding: 5px 0;
	& > * {
		background-color: ${({ theme }) => theme.color.white};
		margin-right: 5px;
		border-radius: 5px;
		padding: 5.5px 15px;
		cursor: pointer;
		:hover {
			background-color: ${({ theme }) => theme.color.primary[300]};
		}
	}
`;

const S = {
	Wrap,
};
