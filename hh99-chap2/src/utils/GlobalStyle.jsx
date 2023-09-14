import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        display: flex;
        justify-content: center;
        background: rgb(37, 205, 148);
    /* background: linear-gradient(43deg, rgba(37, 205, 148, 1) 0%, rgba(70, 252, 224, 1) 100%); */
    }

    #root {
        height: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: inherit;
    }
`;

export default GlobalStyle;
