import HeartBtn from 'Components/Buttons/HeartBtn/HeartBtn';
import ItemCard from 'Components/Card/Desktop/Card';
import styled from 'styled-components';

const MyInterestPage = () => {
	const res = [1, 2, 3, 4, 5, 6, 7, 8]; // 임시 데이터로 response 실데이터로 변경해야 함

	// npm start하면 heartbtn 안보이는 이슈 발생

	return (
		<S.Container>
			{res.map(res => {
				return (
					<S.Card>
						<ItemCard />
						<S.HeartZone>
							<HeartBtn />
						</S.HeartZone>
					</S.Card>
				);
			})}
		</S.Container>
	);
};

export default MyInterestPage;

const Container = styled.div`
	max-width: 60vw;
	height: 100%;
	margin: 30px auto;
	display: flex;
	justify-content: flex-start;
	flex-flow: wrap;
`;
const Card = styled.div`
	margin: 10px;
`;

const HeartZone = styled.div`
	width: 250px;
	height: 80px;
	background-color: lightgray;
`;

const S = {
	Container,
	Card,
	HeartZone,
};
