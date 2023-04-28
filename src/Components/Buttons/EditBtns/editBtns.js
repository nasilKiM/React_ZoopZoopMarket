import styled from 'styled-components';

const EditBtns = () => {
	return (
		<S.Wrap>
			<button>수정</button>
			<button>삭제</button>
		</S.Wrap>
	);
};
export default EditBtns;

const Wrap = styled.div`
	& > * {
		background-color: ${({ theme }) => theme.color.white};
		margin-right: 5px;
		border-radius: 5px;
	}
	& > button:first-child {
		border: 2px solid ${({ theme }) => theme.color.subLightGreen};
	}
	& > button:last-child {
		border: 2px solid ${({ theme }) => theme.color.subBeigeGreen};
	}
`;

const S = {
	Wrap,
};
