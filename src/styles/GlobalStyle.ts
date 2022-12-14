import { createGlobalStyle, css } from "styled-components";
const Inter = css`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap');
`
export const GlobalStyle = createGlobalStyle`
	${Inter}
	:root {
		--white:#ffffff;
		/* grays palletes */
		--gray-300: #808080;
		--gray-400: #333333;
		--gray-500: #262626;
		--gray-600: #1A1A1A;
		--gray-700: #0D0D0D;

		/* primary colors */
		--purple:#8284FA;
		--purple-dark:#5E60CE;
		--blue:#4EA8DE;
		--blue-dark:#1E6F9F;
		--danger:#E25858;
	}

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
	body {
		overflow-x:hidden;
	}

	body,input,textarea,button{
		font-weight: 400;
		font-size: 1rem;
	}
`
