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

const SaleMockData = {
    amount : {
        totalSaleAmount: "10000",
        totalPurchaseAmount: null,
        thisMonthSaleAmount: "10000",
        thisMonthPurchaseAmount: null
    },
    payList: [
        {
            idx: 1,
            createAt: "2023-05-01T15:13:22.000Z",
            Product: {
                idx: 1,
                title: "test",
                price: 10000,
                img_url: ""
            }
        }
    ],
    "count": 2
};


const PurchaseMockData = {
    amount : {
        totalSaleAmount: null,
        totalPurchaseAmount: "8000",
        thisMonthSaleAmount: null,
        thisMonthPurchaseAmount: "8000"
    },
    payList: [
        {
            idx: 2,
            createAt: "2023-05-15T15:13:22.000Z",
            Product: {
                idx: 2,
                title: "test2",
                price: 8000,
                img_url: ""
            }
        }
    ],
    "count": 2
}

const SaleMockDataJSON = JSON.stringify(SaleMockData)
console.log(SaleMockDataJSON);

const PurchaseMockDataJSON = JSON.stringify(PurchaseMockData)
console.log(PurchaseMockData);

