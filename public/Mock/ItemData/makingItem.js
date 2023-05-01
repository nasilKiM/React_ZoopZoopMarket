const fs = require('fs');

const randomLocation = () => {
	const locations = ['a', 'b', 'c', 'd'];
	const randomIndex = Math.floor(Math.random() * locations.length);
	return locations[randomIndex];
};
const randomName = () => {
	const names = [
		'alpha',
		'bravo',
		'charlie',
		'delta',
		'echo',
		'foxtrot',
		'golf',
		'hotel',
		'india',
		'juliet',
		'kilo',
		'lima',
		'mike',
		'november',
		'oscar',
		'papa',
		'quebec',
		'romeo',
		'sierra',
		'tango',
		'uniform',
		'victor',
		'whiskey',
		'xray',
		'yankee',
		'zulu',
	];
	const randomIndex = Math.floor(Math.random() * names.length);
	return names[randomIndex];
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

/*
터미널에서 cd로 경로를 맞춘 후

node 파일명.js로 파일을 실행.

이 파일은 
cd로 경로를 public/Mock/ItemData 까지 맞춘 후
node makingItem.js 를 하면 items.json 파일이 생김.

*/
