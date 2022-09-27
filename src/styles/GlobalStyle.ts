import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Inter', sans-serif;
	}

	:focus{
		outline:transparent ;
		box-shadow: 0 0 0 2px var(--green-500);
	}

	body,input,textarea,button{
		font-weight: 400;
		font-size: 1rem;
	}
`
