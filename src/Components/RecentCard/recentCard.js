import { flexAllCenter } from 'Styles/common';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ProductApi from 'Apis/productApi';

const RecentCard = item => {
	const navigate = useNavigate();
	const client = useQueryClient();

	const onClickDetail = () => {
		navigate(`/item_detail/${item.item.Product.idx}`);
	};

	const { mutate } = useMutation(
		() => ProductApi.deleteRecentList(item.item.Product.idx),
		{
			onSuccess: () => {
				client.invalidateQueries(['recent']);
			},
		},
	);

	const deleteBtn = () => {
		mutate();
	};

	return (
		<S.Img>
			<S.ItemImg
				src={item.item.Product.img_url}
				onClick={() => onClickDetail()}
			/>
			<S.CrossBtn onClick={deleteBtn}>
				<FontAwesomeIcon icon={faCircleXmark} style={{ color: '#aaaaaa' }} />
			</S.CrossBtn>
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
	position: relative;

	& > div {
		display: none;
	}
	:hover {
		& > div {
			display: block;
		}
	}
`;

const ItemImg = styled.img`
	width: 80%;
	height: 100px;
	object-fit: cover;
	border: 1px solid ${({ theme }) => theme.color.gray[200]};
	cursor: pointer;
	:hover {
		border: 2px solid ${({ theme }) => theme.color.primary[300]};
		opacity: 0.7;
	}
`;

const CrossBtn = styled.div`
	position: absolute;
	right: 18px;
	top: 10px;
	cursor: pointer;
	:hover {
		border: 1px solid ${({ theme }) => theme.color.primary[300]};
	}
`;

const S = {
	Img,
	ItemImg,
	CrossBtn,
};
