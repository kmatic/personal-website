import { createGlobalStyle, css } from "styled-components";

export const variables = css`
    :root {
        --navy: #020c1b;
        --white: #e6f1ff;
    }
`;

const GlobalStyle = createGlobalStyle`
    ${variables};

    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--navy);
        color: var(--white);
        font-family: var(--font-sans);
        font-size: var(--fz-xl);
        line-height: 1.3;
    }

    main {
        margin: 0 auto;
        width: 100%;
        max-width: 1600px;
        min-height: 100vh;
        padding: 200px 150px;
    }
`;

export default GlobalStyle