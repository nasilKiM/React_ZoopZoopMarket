import styled from 'styled-components';

const Search = () => {
	const temp = new Array(3).fill(0);

	return (
		<S.Wrapper>
			<S.Input></S.Input>
			<S.Magnifier src="/Assets/Icon/Magnifier.png"></S.Magnifier>
			<S.History>
				{temp.map(() => (
					<S.HistoryItem>
						TEST<S.DelBtn>X</S.DelBtn>
					</S.HistoryItem>
				))}
			</S.History>
		</S.Wrapper>
	);
};

export default Search;

const Wrapper = styled.div`
	width: 60%;
	min-width: 700px;
	max-width: 1000px;
	background-color: ${({ theme }) => theme.color.subLightGreen};
	padding: 20px 50px;
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
	width: 25px;
	height: 25px;
	cursor: pointer;
	position: absolute;
	right: 70px;
	top: 25px;
	:hover {
		width: 26px;
		height: 26px;
	}
`;

const History = styled.div`
	width: 600px;
	padding: 20px;
	background-color: ${({ theme }) => theme.color.white};
	position: absolute;
	padding-left: 40px;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
`;

const HistoryItem = styled.div`
	cursor: pointer;
	width: 500px;
	display: flex;
	position: relative;
	margin-bottom: 10px;
	:hover {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const DelBtn = styled.div`
	cursor: pointer;
	width: 20px;
	height: 20px;
	position: absolute;
	right: -10px;
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
