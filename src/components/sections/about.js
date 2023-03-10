import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useIsMounted from '../hooks/useIsMounted';

const StyledSection = styled.section`
    max-width: 1000px;

    a {
        color: var(--blue);
    }

    @media (max-width: 480px) {
        p {
            font-size: var(--md);
        }
    }
`;

const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 8fr 7fr;
    gap: 40px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 15px;
    }
`;

const StyledImg = styled.div`
    align-self: center;

    .img {
        border-radius: var(--border-radius);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: var(--transition);

        &:hover {
            transform: scale(1.1);
        }
    }

    @media (max-width: 768px) {
        justify-self: center;
    }
`;

const About = () => {
    const isMounted = useIsMounted();

    return (
        <TransitionGroup component={null}>
            {isMounted && (
                <CSSTransition timeout={1000} classNames="fade">
                    <StyledSection id="about">
                        <h1 className="stylized-heading">About Me</h1>
                        <AboutContainer>
                            <div>
                                <p>
                                    I initially have a background in mechanical engineering where I
                                    first gained experience and interest in software development by
                                    writing data analysis/visualization tools in python at an
                                    internship. Fast-forward to recently, unhappy with where my
                                    career had been going, I began learning to code again in my
                                    evenings after work through the{' '}
                                    <a
                                        href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
                                        className="stylized-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        famous CS50 course
                                    </a>
                                    . Interested in the underlying technologies of the web, I have
                                    decided to pursue software development.
                                </p>
                                <p>
                                    While I primarily use the{' '}
                                    <a
                                        href="https://www.mongodb.com/mern-stack"
                                        className="stylized-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        MERN stack
                                    </a>{' '}
                                    (MongoDB, Express, ReactJS, Node.JS), picking up a new language
                                    or framework isn't a problem.
                                </p>
                                <p>
                                    When I'm not working on my personal projects, you can find me
                                    working out at the gym, catching up on the latest movies/tv
                                    shows, trying new restaurants, and playing video games.
                                </p>
                            </div>
                            <StyledImg>
                                <StaticImage
                                    src="../../images/kris.jpg"
                                    alt="headshot"
                                    width={375}
                                    className="img"
                                />
                            </StyledImg>
                        </AboutContainer>
                    </StyledSection>
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};

export default About;
