import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    max-width: 650px;
    text-align: center;
    margin-bottom: 125px;

    p {
        margin-bottom: 30px;

        @media (max-width: 480px) {
            font-size: var(--md);
        }
    }

    a {
        color: var(--blue);
        font-size: var(--md);
        font-family: var(--mono);
        color: var(--blue);
        border: 1px solid var(--blue);
        border-radius: var(--border-radius);
        padding: 10px 12px;
        transition: var(--transition);

        &:hover,
        &:active {
            background-color: var(--blue-highlight);
        }
    }
`;

const Github = () => {
    return (
        <StyledSection>
            <h1>Want to see more?</h1>
            <p>
                Check out my github below for all the projects I have worked on throughout my
                self-taught journey. It will also include any future ones as I will not always keep
                this website updated. If you would like to contact me feel free to reach out at any
                of my socials.
            </p>
            <a>view my github</a>
        </StyledSection>
    );
};

export default Github;
