import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
// import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';

const ProjectsContainer = styled.div`
    display: flex;
`;

const Card = styled.div`
    background-color: var(--lighter-slate);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: var(--border-radius);
    transition: var(--transition);
    height: 500px;

    .img {
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
    }

    :hover {
        transform: scale(1.02);
    }
`;

const Info = styled.div`
    padding: 24px 24px;
    width: 400px;
`;

const Description = styled.div`
    p {
        margin-top: 15px;
    }
`;

const Links = styled.div``;

const Technologies = styled.div`
    ul {
        display: flex;
        gap: 6px;

        > li {
            font-size: var(--sm);
            padding: 2px 8px;
            background-color: var(--slate);
            border-radius: var(--border-radius);
        }
    }
`;

const Projects = () => {
    return (
        <section id="projects">
            <h1 className="stylized-heading">Projects</h1>
            <ProjectsContainer>
                <Card>
                    <a
                        href="https://github.com/kmatic/cuisine-connoisseurs-client"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StaticImage
                            src="../../images/projects/cuisineconnoisseurs.png"
                            width={400}
                            className="img"
                            alt="preview"
                        />
                    </a>
                    <Info>
                        <h2>CuisineConnoisseurs</h2>
                        <Technologies>
                            <ul>
                                <li>React</li>
                                <li>Node</li>
                            </ul>
                        </Technologies>
                        <Description>
                            <p>This web app is a food rating social media.</p>
                        </Description>
                        <Links>
                            <a>
                                <FiGithub />
                            </a>
                            <a>{/* <HiOutlineArrowTopRightOnSquare /> */}</a>
                        </Links>
                    </Info>
                </Card>
            </ProjectsContainer>
        </section>
    );
};

export default Projects;
