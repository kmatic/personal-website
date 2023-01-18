import { createGlobalStyle, css } from 'styled-components';

const variables = css`
    :root {
        --white: white;
        --blue: #38bdf8;
        --blue-tint: rgba(36, 99, 234, 0.1);
        --slate: #1e293b;
        --light-slate: #94a3b8;
        --gray: #374151;

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
        scrollbar-color: var(--light-slate) var(--slate);
    }
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background: var(--slate);
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--light-slate);
        border: 3px solid var(--slate);
        border-radius: 10px;
      }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--slate);
        color: var(--light-slate);
        font-family: 'Open Sans', -apple-system, system-ui, sans-serif;
        font-size: var(--lg);
        line-height: 1.3;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 1024px;
    }

    main {
        margin: 0 auto;
        width: 100%;
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
        color: inherit;

        &.stylized-link {
            display: inline-block;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                width: 100%;
                transform: scaleX(0);
                height: 1px;
                bottom: 0;
                left: 0;
                background-color: var(--blue);
                transform-origin: bottom right;
                transition: transform 0.25s ease-out;
            }

            &:hover:after {
                transform: scaleX(1);
                transform-origin: bottom left;
            }
        }
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
        color: var(--white);
        line-height: 1.1;
    }
    
    p {
        margin: 0 0 15px 0;
    }

    .big-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 80px);
    }

    .medium-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 60px);
    }

    .stylized-heading {
        margin: 0 0 30px 0;
        display: flex;
        align-items: center;
        width: 100%;

        &:after {
            display: block;
            position: relative;
            content: '';
            width: 300px;
            height: 1px;
            background-color: var(--gray);
            margin-left: 20px;
        }
    }

    .blue {
        color: var(--blue);
    }
`;

export default GlobalStyle;
