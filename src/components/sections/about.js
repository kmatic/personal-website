import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const StyledSection = styled.section`
    max-width: 900px;

    a {
        color: var(--blue);
    }
`;

const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 5fr 4fr;
    gap: 40px;
`;

const StyledImg = styled.div`
    .img {
        border-radius: var(--border-radius);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: var(--transition);

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const About = () => {
    return (
        <StyledSection>
            <h1 className="stylized-heading">About Me</h1>
            <AboutContainer>
                <div id="about">
                    <p>
                        I initially have a background in mechanical engineering where I first gained
                        experience and interest in software development by writing data
                        analysis/visualization tools in python at an internship. Fast-forward to
                        recently, unhappy with where my career had been going, I began learning to
                        code again in my evenings after work through the{' '}
                        <a
                            href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
                            className="stylized-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            famous CS50
                        </a>
                        . Interested in the underlying technologies of the web, I have decided to
                        pursue software development.
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
                        (MongoDB, Express, ReactJS, Node.JS), picking up a new language or framework
                        isn't a problem.
                    </p>
                    <p>
                        When I'm not working on my personal projects, you can find me working out at
                        the gym, catching up on the latest movies/tv shows, trying new restaurants,
                        and playing video games.
                    </p>
                </div>
                <StyledImg>
                    <StaticImage
                        src="../../images/me.jpg"
                        alt="headshot"
                        width={350}
                        className="img"
                    />
                </StyledImg>
            </AboutContainer>
        </StyledSection>
    );
};

export default About;
