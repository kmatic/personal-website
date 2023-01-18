import { createGlobalStyle, css } from 'styled-components';

export const variables = css`
    :root {
        --white: #e6f1ff;
        --blue: #1e3a8a;
        --blue-tint: rgba(30, 58, 138, 0.1);

        --xs: 12px;
        --sm: 14px;
        --md: 16px;
        --lg: 18px;
        --xl: 20px;
        --xxl: 24px;
        --xxxl: 30px;

        --mono: 'Roboto Mono';

        --border-radius: 5px;

        --transition: all 0.25s cubic-bezier(0.57, 0.15, 0.69, 1.25);
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
        scrollbar-color: black var(--white);
    }
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background: var(--white);
    }
    ::-webkit-scrollbar-thumb {
        background-color: black;
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
        font-size: var(--xl);
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
        padding: 200px 0px;
    }

    section {
        margin: 0 auto;
        padding: 100px 0;
    }

    a {
        text-decoration: none;
        cursor: pointer;

        // &:visited {
        //     color: inherit
        // }
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
    
    .big-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 80px);
    }

    .medium-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 60px);
    }

    .blue {
        color: var(--blue);
    }
`;

export default GlobalStyle;
