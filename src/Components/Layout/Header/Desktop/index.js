import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from 'Components/SearchBar/Desktop/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faUser } from '@fortawesome/free-regular-svg-icons';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from '../Mobile';
import MenuBar from 'Components/MenuBar/MenuBar';

const WebHeader = () => {
	const props = 'search_list';
	const isMobile = useMediaQuery({ maxWidth: 412 });

	return (
		<>
			{isMobile ? (
				<MobileHeader />
			) : (
				<>
					<S.Wrapper>
						<S.Container isMobile={isMobile}>
							<Link to={'/main'}>
								<S.Logo src="/Assets/web_logo.png"></S.Logo>
							</Link>
							{isMobile ? null : <SearchBar props={props} />}
							<S.Icon>
								<Link to={'/chat'}>
									<FontAwesomeIcon
										icon={faCommentDots}
										color="grey"
										cursor="pointer"
										fontSize={isMobile ? '32px' : '30px'}
									/>
								</Link>
								<Link to={'/mypage'}>
									<FontAwesomeIcon
										icon={faUser}
										color="grey"
										cursor="pointer"
										fontSize={isMobile ? '30px' : '28px'}
									/>
								</Link>
							</S.Icon>
						</S.Container>
						{isMobile && <SearchBar props={props} />}
					</S.Wrapper>
					<MenuBar />
				</>
			)}
		</>
	);
};

export default WebHeader;

const Wrapper = styled.div`
	width: 70%;
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
	justify-content: ${props =>
		props.isMobile ? 'space-around' : 'space-between'};
	padding-top: 30px;
	padding-bottom: 10px;
`;

const Icon = styled.div`
	flex: ${props => (props.isMobile ? 1 : 3)};
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
