import React from 'react';
import styled, { keyframes } from 'styled-components';
import { RxDoubleArrowDown } from 'react-icons/rx';

const StyledSection = styled.section`
    min-height: calc(100vh - var(--header-height));
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    p {
        max-width: 600px;
    }

    h2 {
        font-family: var(--mono);
        font-weight: 400;
        font-size: var(--lg);
    }

    h1 {
        margin: 0 0 15px -6px;
    }
`;

const bouncing = keyframes`
    0%, 50%, 100% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-20px);
    }
    75% {
        transform: translateY(-20px);
    }
`;

const AnimationDiv = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -20px;
    width: 40px;
    height: 40px;
    animation: ${bouncing} 2s linear infinite;
    font-size: var(--xxl);
`;

const Hero = () => {
    return (
        <StyledSection>
            <h2 className="blue">Hey, I'm</h2>
            <h1 className="big-heading">Kristopher Matic.</h1>
            <p>
                I'm a mechanical engineer turned full-stack developer from Vancouver, Canada.
                Currently, I'm focused on further improving my skills in my chosen tech stack
                (MERN).
            </p>
            <AnimationDiv>
                <a href="#about">
                    <RxDoubleArrowDown />
                </a>
            </AnimationDiv>
        </StyledSection>
    );
};

export default Hero;
