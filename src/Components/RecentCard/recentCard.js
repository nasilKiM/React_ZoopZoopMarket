import { flexAllCenter } from 'Styles/common';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RecentCard = item => {
	const navigate = useNavigate();

	const onClickDetail = () => {
		navigate(`/item_detail/${item.item.Product.idx}`);
	};

	return (
		<S.Img>
			<S.ItemImg
				src={item.item.Product.img_url}
				onClick={() => onClickDetail()}
			/>
		</S.Img>
	);
};
export default RecentCard;

const Img = styled.div`
	width: 100%;
	display: inline-block;
	${flexAllCenter}
	flex-direction: column;
	margin-top: 10px;
`;

const ItemImg = styled.img`
	width: 80%;
	height: 100px;
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	cursor: pointer;
	:hover {
		border: 2px solid ${({ theme }) => theme.color.primary[300]};
	}
`;

const S = {
	Img,
	ItemImg,
};
