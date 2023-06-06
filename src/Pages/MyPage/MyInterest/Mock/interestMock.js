const MockLikeList = [
	{
		Product: {
			idx: Math.floor(Math.random() * 10000),
			title: '동그리1',
			price: 50000,
			img_url:
				'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjhfMjUg%2FMDAxNjY2OTE5NzgyNjY5.oHBZFQ8uu2OBDHBnNe85KCZTmI9X4hSyj-ZvkrlqNHUg.e_F6FM6zklDJ8EptMLBwt3OSBZROg6fqDDRutMygwsUg.JPEG.rkdls7710%2FIMG_0657.jpg&type=sc960_832',
			createdAt: '2023-05-15',
			region: '서울시 강남구 역삼동',
			status: '판매중',
			category: false,
			liked: 1,
		},
	},
	{
		Product: {
			idx: Math.floor(Math.random() * 10000),
			title: '동그리3',
			price: 2000,
			img_url:
				'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MDNfMjkx%2FMDAxNjMwNjM0MTAxNDI0.hy27U5BfUOjhg7_KRJwmwBkPPSFQPkbEzDyWvGitMHog.f_U_POWjwDLkn9mniEIULWf0wVnFEPaHfOkAUUS4R6gg.JPEG.rammme%2Foutput_3600092550.jpg&type=sc960_832',
			createdAt: '2023-05-15',
			region: '서울시 강남구 역삼동',
			status: '판매중',
			category: false,
			liked: 1,
		},
	},
	{
		Product: {
			idx: Math.floor(Math.random() * 10000),
			title: '동그리8',
			price: 40000,
			img_url:
				'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMjFfNTgg%2FMDAxNTg0Nzg4NTI0ODgy.BplX4tfJV18bvFMxQYsgolM7HJnJBFxqeiMVkHjR4bEg.RytOuLe7-n3s-pyZwwXB2SWsq3-U_HTxxY0F_DHrE_Yg.JPEG.myflare%2FIMG_0456.JPG&type=sc960_832',
			createdAt: '2023-05-15',
			region: '서울시 강남구 역삼동',
			status: '판매중',
			category: false,
			liked: 1,
		},
	},
];

const likeListArr = [];
for (let i = 0; i < 21; i++) {
	likeListArr.push(...MockLikeList);
}

export default likeListArr;
