import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        @font-face {
		font-family: 'Nanum_light';
		src: url('/Assets/Font/NanumSquareNeo-aLt.ttf');
	    }
        @font-face {
		font-family: 'Nanum_regular';
		src: url('/Assets/Font/NanumSquareNeo-bRg.ttf');
	    }
        @font-face {
		font-family: 'Nanum_bold';
		src: url('/Assets/Font/NanumSquareNeo-cBd.ttf');
	    }
        @font-face {
		font-family: 'Nanum_extraBold';
		src: url('/Assets/Font/NanumSquareNeo-dEb.ttf');
	    }
        @font-face {
		font-family: 'Nanum_heavy';
		src: url('/Assets/Font/NanumSquareNeo-eHv.ttf');
	    }
    }
	body{
		font-family: 'Nanum_regular';
		min-height: 100vh;
	}
	button: {
		border: none;
	}
	input {
		outline: none;
	}

`;
export default GlobalStyles;
