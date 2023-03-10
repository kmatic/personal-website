import { createGlobalStyle, css } from 'styled-components';
import '@fontsource/open-sans';
import '@fontsource/roboto-mono';

const variables = css`
    :root {
        --white: white;
        --blue: #38bdf8;
        --blue-highlight: rgba(56, 189, 248, 0.2);
        --slate: #1e293b; // tailwind color palette
        --lighter-slate: #334155;
        --light-slate: #94a3b8; // this is lighter than lighter-slate above
        --lightest-slate: #cbd5e1;
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

        --header-height: 80px;

        --ham-menu-height: 125px;
        --ham-menu-width: 125px;
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

    ::selection {
        background-color: var(--blue);
        color: var(--white);
    }

    // scrollbar

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
        padding: 0px 100px;

        @media (max-width: 1080px) {
            padding: 0px 30px;
        }

        @media (max-width: 768px) {
            padding: 0 15px 0 25px;
        }

        @media (max-width: 480px) {
            padding: 0 15px;
        }
    }

    main {
        max-width: 1500px;
        margin: 0 auto;
        width: 100%;
        min-height: 100vh;
        padding: 0px 100px;

        @media (max-width: 1080px) {
            padding: 0px 60px;
        }

        @media (max-width: 768px) {
            padding: 0 25px 0 50px;
        }

        @media (max-width: 480px) {
            padding: 0 15px;
        }
    }

    section {
        margin: 0 auto;
        padding: 100px 0;

        @media (max-width: 768px) {
            padding: 50px 0;
        }

        @media (max-width: 480px) {
            padding: 25px 0;
        }
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
        margin: 0 0 15px 0;
        font-weight: 600;
        color: var(--white);
        line-height: 1.1;
    }
    
    p {
        margin: 0 0 15px 0;
    }

    .stylized-heading {
        margin: 0 0 30px 0;
        display: flex;
        align-items: center;
        width: 100%;
        white-space: nowrap;

        &:after {
            display: block;
            position: relative;
            content: '';
            width: 300px;
            height: 1px;
            background-color: var(--gray);
            margin-left: 20px;

            @media (max-width: 1080px) {
                width: 180px;
            }

            @media (max-width: 768px) {
                width: 100%;
            }
        }
    }

    .blue {
        color: var(--blue);
    }

    // transitions

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        opacity: 1;
        transition: opacity 1000ms;
    }

    .fade-right-enter {
        opacity: 0;
        transform: translateX(-40px);
    }

    .fade-right-enter-active {
        opacity: 1;
        transform: translateX(0px);
        transition: all 1000ms;
    }

    .fade-down-enter {
        opacity: 0;
        transform: translateY(-15px);
    }

    .fade-down-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: all 200ms;
    }

    // .fade-down-exit {
    //     opacity: 1;
    //     transform: translateY(0px);
    // }

    // .fade-down-exit-active {
    //     opacity: 0;
    //     transform: translateY(-15px);
    // }
`;

export default GlobalStyle;
