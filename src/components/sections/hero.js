import React from 'react';
import styled, { keyframes } from 'styled-components';
import { RxDoubleArrowDown } from 'react-icons/rx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useIsMounted from '../hooks/useIsMounted';

const StyledSection = styled.section`
    min-height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    max-width: 1150px;

    p {
        max-width: 600px;
    }

    h2 {
        font-family: var(--mono);
        font-weight: 400;
        font-size: var(--lg);
    }

    h1 {
        margin: 0 0 15px;
        font-size: clamp(35px, 8vw, 80px);
    }

    @media (max-width: 480px) {
        p,
        h2 {
            font-size: var(--md);
        }
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

    @media (max-width: 480px) {
        font-size: var(--sm);
    }
`;

const Hero = () => {
    const isMounted = useIsMounted();

    return (
        <StyledSection>
            <TransitionGroup component={null}>
                {isMounted && (
                    <>
                        <CSSTransition in={isMounted} timeout={500} classNames="fade-right">
                            <div>
                                <h2 className="blue">Hey, I'm</h2>
                                <h1>Kristopher Matic.</h1>
                                <p>
                                    I'm a mechanical engineer turned full-stack developer from
                                    Vancouver, Canada. Currently, I'm focused on further improving
                                    my skills in my chosen tech stack (MERN).
                                </p>
                            </div>
                        </CSSTransition>
                        <CSSTransition in={isMounted} timeout={500} classNames="fade">
                            <AnimationDiv>
                                <a href="#about">
                                    <RxDoubleArrowDown />
                                </a>
                            </AnimationDiv>
                        </CSSTransition>
                    </>
                )}
            </TransitionGroup>
        </StyledSection>
    );
};

export default Hero;
