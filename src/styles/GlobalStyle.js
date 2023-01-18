import { createGlobalStyle, css } from 'styled-components';

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

    /* Scrollbar */

    html {
        scrollbar-width: thin;
        scrollbar-color: var(--navy) var(--white);
    }
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background: var(--white);
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--navy);
        border: 3px solid var(--white);
        border-radius: 10px;
      }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--white);
        color: black;
        font-family: 'Open Sans', -apple-system, system-ui, sans-serif;
        font-size: var(--fz-xl);
        line-height: 1.3;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        max-width: 1024px;
        margin: 0 auto;
    }

    main {
        margin: 0 auto;
        width: 100%;
        max-width: 1600px;
        min-height: 100vh;
        padding: 200px 150px;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    button {
        cursor: pointer;
        border: 0;
        border-radius: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0 0 10px 0;
        font-weight: 600;
        color: black;
        line-height: 1.1;
  } 
`;

export default GlobalStyle;
