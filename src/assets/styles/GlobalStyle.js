import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box
}

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

body, a, button {
    font-family: 'Montserrat', sans-serif;
}
`;
