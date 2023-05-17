const fs = require('fs');

const createRandomList = data => {
    const data = [];

    const randomIdx = () => {
        return Math.floor(Math.random() * 100000);
    };

    const randomDate = (start, end) => {
		return new Date(
			start.getTime() + Math.random() * (end.getTime() - start.getTime()),
		).toISOString();
    };

    const randomTitle = () => {
        const products = [
            'apple',
            'banana',
            'chocolate',
            'dragon',
            'egg',
            'flower',
            'grape',
            'hat',
            'image',
            'jungle',
            'kong',
            'long boots',
            'mice',
            'napkin',
            'orange',
            'pineapple',
            'quite',
            'rice',
            'snack',
            'trumpet',
            'uniform',
            'vase',
            'whisky',
            'xray',
            'yangkee candle',
            'zoopzoop'
        ];
        const randomIndex = Math.floor(Math.random() * products.length);
	    return products[randomIndex];
    };

    const randomPrice = () => {
        return Math.floor(Math.random() * 100000);
    }
}

export const MockSaleData = (count) =>
    Array(count)
       .fill()
       Map(() =>({
        saleList : [
            {
                
            }
        ]
       }))