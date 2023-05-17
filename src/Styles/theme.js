const color = {
	primary: {
		100: '#FFD1D1',
		200: '#FF9494',
		300: '#F87474', // focus 색깔
		400: '#FF3647', // 대표 색깔
	},
	subColor: '#FFECEC',
	hover: '#db2e3d',
	fontColor: {
		100: '#FFFFFF',
		200: '#646F7C',
		300: '#181D1F', // basic Text
	},
	error: '#FF0000',
	success: '#028202',
	white: '#FFFFFF',
	black: '#000000',
	gray: {
		100: '#E9E9E9',
		200: '#D9D9D9', // basic gray
		300: '#656565',
		400: '#333',
	},
};

// 폰트 크기
const fontSize = {
	micro: '6px',
	es: '10px',
	xs: '12px',
	sm: '14px',
	base: '16px',
	md: '20px',
	big: '24px',
	lg: '28px',
	xl: '32px',
};

// 폰트 굵기
const fontWeight = {
	light: '300',
	regular: '400',
	bold: '700',
	bolder: '900',
};

export const theme = {
	color,
	fontSize,
	fontWeight,
};
