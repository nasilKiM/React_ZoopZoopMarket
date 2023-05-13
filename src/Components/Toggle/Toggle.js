import { flexAllCenter } from 'Styles/common';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const ToggleBar = () => {
	const navigate = useNavigate();

	const toggleMenu = [
		{
			title: '내 등록템',
			address: 'item',
		},
		{
			title: '개인 정보 수정',
			address: 'user_edit',
		},
		{
			title: '내 관심템',
			address: 'interest',
		},
		{
			title: '가계부',
			address: 'account_book',
		},
		{
			title: '내 후기',
			address: '',
		},
	];

	const onClickToggle = page => {
		navigate(`/mypage/${page}`);
	};

	return (
		<S.Wrapper>
			{toggleMenu.map(toggle => (
				<>
					<div onClick={() => onClickToggle(toggle.address)}>
						{toggle.title}
					</div>
				</>
			))}
		</S.Wrapper>
	);
};

export default ToggleBar;

const Wrapper = styled.div`
	margin: 50px 0;
	${flexAllCenter}
	& > div {
		margin: 0 30px;
		font-size: ${({ theme }) => theme.fontSize.lg};
	}
`;

const S = {
	Wrapper,
};
