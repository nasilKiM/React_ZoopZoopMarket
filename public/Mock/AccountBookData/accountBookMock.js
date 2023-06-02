/*
[파라미터]
page: number
category: enum("seller", "buyer")
start: string(YYYY-MM-DD)
end: string(YYYY-MM-DD)

[response]
{
	ammount: {
		totalSaleAmount: string (총 판매금액)
		totalPurchaseAmount: stirng (총 구매 금액)
		thisMonthSaleAmount: string (이번달 판매금액) 
		thisMonthPurchaseAmount: string (이벌단 구매 금액)
	},
	PayList: Pay[]
	count: 판매 및 구매 건수 총량
}

---

Pay: {
	idx: number (payList_idx)
	createdAt: string (판매 날짜)
	Product: {
		idx: number,
		createdAt: string
		price: number,
		img_url:string
	}
}

---

400 {message: failure}
*/

export const SaleMockData = {
	amount: {
		totalSaleAmount: '2200',
		totalPurchaseAmount: null,
		thisMonthSaleAmount: '2200',
		thisMonthPurchaseAmount: null,
	},
	payList: [
		{
			idx: 1,
			createAt: '2023-05-03T15:13:22.000Z',
			Product: {
				idx: 1,
				title: 'test',
				price: 500,
				img_url: '',
			},
		},
		{
			idx: 2,
			createAt: '2023-05-07T15:13:22.000Z',
			Product: {
				idx: 3,
				title: 'test',
				price: 700,
				img_url: '',
			},
		},
		{
			idx: 3,
			createAt: '2023-05-17T15:13:22.000Z',
			Product: {
				idx: 5,
				title: 'test',
				price: 1000,
				img_url: '',
			},
		},
	],
	count: 3,
};

export const PurchaseMockData = {
	amount: {
		totalSaleAmount: null,
		totalPurchaseAmount: '3300',
		thisMonthSaleAmount: null,
		thisMonthPurchaseAmount: '3300',
	},
	payList: [
		{
			idx: 1,
			createAt: '2023-05-05T15:13:22.000Z',
			Product: {
				idx: 2,
				title: 'test2',
				price: 1000,
				img_url: '',
			},
		},
		{
			idx: 2,
			createAt: '2023-05-10T15:13:22.000Z',
			Product: {
				idx: 4,
				title: 'test2',
				price: 800,
				img_url: '',
			},
		},
		{
			idx: 3,
			createAt: '2023-05-17T15:13:22.000Z',
			Product: {
				idx: 6,
				title: 'test2',
				price: 1500,
				img_url: '',
			},
		},
	],
	count: 3,
};

const SaleMockDataJSON = JSON.stringify(SaleMockData);
console.log(SaleMockDataJSON);

const PurchaseMockDataJSON = JSON.stringify(PurchaseMockData);
console.log(PurchaseMockData);
