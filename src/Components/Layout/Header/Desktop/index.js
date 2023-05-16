import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from 'Components/SearchBar/Desktop/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faUser } from '@fortawesome/free-regular-svg-icons';
import MenuBar from 'Components/MenuBar/MenuBar';

const WebHeader = () => {
	const props = 'search_list';

	return (
		<>
			<S.Wrapper>
				<S.Container>
					<Link to={'/main'}>
						<S.Logo src="/Assets/web_logo.png"></S.Logo>
					</Link>
					<SearchBar props={props} />
					<S.Icon>
						<FontAwesomeIcon
							icon={faCommentDots}
							color="grey"
							cursor="pointer"
							fontSize="30px"
						/>
						<FontAwesomeIcon
							icon={faUser}
							color="grey"
							cursor="pointer"
							fontSize="28px"
						/>
					</S.Icon>
				</S.Container>
			</S.Wrapper>
			<MenuBar />
		</>
	);
};

export default WebHeader;

const Wrapper = styled.div`
	width: 80%;
	min-width: 700px;
	max-width: 1200px;
	height: 100px;
	font-family: 'Nanum_extraBold';
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;
	padding-bottom: 10px;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 30px;
`;

const Icon = styled.div`
	flex: 3;
	display: flex;
	justify-content: flex-end;
	gap: 20px;
`;

const Logo = styled.img`
	max-width: 200px;
	margin-right: 20px;
`;

const S = {
	Wrapper,
	Container,
	Icon,
	Logo,
};
