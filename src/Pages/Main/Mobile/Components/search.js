import styled from 'styled-components';

const MobileSearch = () => {
	const temp = new Array(3).fill(0);

	return (
		<S.Wrapper>
			<S.Input></S.Input>
			<S.Magnifier src="/Assets/Icon/Magnifier.png"></S.Magnifier>
			{/* <S.History>
				{temp.map(() => (
					<S.HistoryItem>
						TEST<S.DelBtn>X</S.DelBtn>
					</S.HistoryItem>
				))}
			</S.History> */}
		</S.Wrapper>
	);
};

export default MobileSearch;

const Wrapper = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.color.subLightGreen};
	padding: 20px;
	position: relative;
`;

const Input = styled.input`
	width: 100%;
	padding: 10px 20px;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	:focus {
		outline: none;
	}
`;

const Magnifier = styled.img`
	width: 20px;
	height: 20px;
	cursor: pointer;
	position: absolute;
	right: 35px;
	top: 28px;
	:hover {
		width: 21px;
		height: 21px;
	}
`;

const History = styled.div`
	width: 330px;
	padding: 20px;
	background-color: ${({ theme }) => theme.color.white};
	position: absolute;
	padding-left: 30px;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
`;

const HistoryItem = styled.div`
	cursor: pointer;
	width: 250px;
	display: flex;
	position: relative;
	margin-bottom: 15px;
	:hover {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const DelBtn = styled.div`
	cursor: pointer;
	width: 20px;
	height: 20px;
	position: absolute;
	right: -20px;
	:hover {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const S = {
	Wrapper,
	Input,
	Magnifier,
	History,
	HistoryItem,
	DelBtn,
};
