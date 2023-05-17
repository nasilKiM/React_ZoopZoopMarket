import HeartBtn from 'Components/Buttons/HeartBtn/HeartBtn';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ItemCardMock = ({ products }) => {
	const navigate = useNavigate();

	// const onClickCard = async () => {
	// 	navigate(`/item_detail/${index}`);
	// 	await ProductApi.addRecent(index);
	// };
	// // console.log(products);

	// const { data } = useQuery(['product'], () => {
	// 	return MockAxios.get('/product').then(res => {
	// 		return res.data;
	// 	});
	// });

	return (
		products && (
			<S.Wrapper>
				<S.Container>
					<S.Heart>
						<HeartBtn like={products.Liked} idx={products.idx} />
					</S.Heart>
					<div>
						<S.ItemImg src={products.img_url} />
						<S.ItemInfo>
							<S.ItemTitle>{products.title}</S.ItemTitle>
							<S.ItemPrice>
								{products.price.toLocaleString('ko-KR')}원
							</S.ItemPrice>
							{products.ProductsTags.map(tagObj => (
								<S.ItemTag key={tagObj.idx}>
									<a className="tag-link">#{tagObj.Tag.tag}</a>
								</S.ItemTag>
							))}
						</S.ItemInfo>
					</div>
				</S.Container>
			</S.Wrapper>
		)
	);
};

export default ItemCardMock;

const Wrapper = styled.div`
	padding: 15px 0;
`;

const Container = styled.div`
	width: 200px;
	max-width: 250px;
	max-height: 400px;
	cursor: pointer;
	margin-right: 10px;
	border: 1px solid lightgray;
	border-radius: 10px;
	box-shadow: rgba(100, 111, 124, 0.2) 0px 2px 5px;
	:hover {
		box-shadow: rgba(100, 111, 124, 0.2) 0px 5px 10px;
		transition: all 0.3s ease 0s;
	}
`;

const Heart = styled.div`
	position: relative;
	width: 32px;
	height: 32px;
	top: 40px;
	left: 80%;
	z-index: 1000000;
`;

const ItemImg = styled.img`
	position: relative;
	width: 200px;
	max-width: 250px;
	width: 100%;
	height: 250px;
	object-fit: cover;
	padding-bottom: 15px;
	/* padding: 10px; */
`;

const ItemInfo = styled.div`
	padding-top: 15px;
	max-height: 150px;
	display: flex;
	flex-wrap: wrap;
	padding: 0 15px;
`;

const ItemTitle = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.sm};
	margin-bottom: 10px;
`;

const ItemPrice = styled.span`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-bottom: 15px;
`;

const ItemTag = styled.span`
	display: inline-block;
	font-size: ${({ theme }) => theme.fontSize.xs};
	margin-right: 5px;
	margin-bottom: 10px;

	a {
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

const S = {
	Wrapper,
	Heart,
	Container,
	ItemImg,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	ItemTag,
};
