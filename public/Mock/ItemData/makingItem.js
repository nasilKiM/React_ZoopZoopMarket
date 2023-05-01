const fs = require('fs');

const randomLocation = () => {
	const locations = ['a', 'b', 'c', 'd'];
	const randomIndex = Math.floor(Math.random() * locations.length);
	return locations[randomIndex];
};

const generateRandomItems = count => {
	const items = [];

	const randomCategory = () => {
		return Math.floor(Math.random() * 2);
	};
	const randomPrice = () => {
		return Math.floor(Math.random() * 100000);
	};

	const randomDate = (start, end) => {
		return new Date(
			start.getTime() + Math.random() * (end.getTime() - start.getTime()),
		).toISOString();
	};
	const randomBoolean = () => {
		return Math.random() < 0.5;
	};
	for (let i = 1; i <= count; i++) {
		const item = {
			id: i,
			category: randomCategory(),
			location: randomLocation(),
			createdAt: randomDate(new Date(2022, 0, 1), new Date()),
			isSold: randomBoolean(),
		};

		if (item.category === 1) {
			item.price = randomPrice();
		}

		items.push(item);
	}

	return { itemList: items }; // itemList라는 키값으로 객체를 저장
};

const randomItems = generateRandomItems(600);

fs.writeFile('items.json', JSON.stringify(randomItems), err => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('Random items saved to items.json');
});
