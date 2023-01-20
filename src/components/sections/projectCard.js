import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { FiGithub, FiPlusSquare } from 'react-icons/fi';

const Card = styled.div`
    background-color: var(--lighter-slate);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: var(--border-radius);
    transition: var(--transition);
    width: 400px;

    .img {
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 15px;
    }

    &:hover {
        transform: scale(1.02);
    }

    @media (max-width: 768px) {
        width: 100%;

        > a {
            display: none;
        }
    }
`;

const Info = styled.div`
    padding: 26px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;

    h2 {
        font-size: var(--xxl);
    }
`;

const Technologies = styled.div`
    ul {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;

        & > li {
            font-family: var(--mono);
            font-size: var(--sm);
            padding: 2px 5px;
            background-color: var(--slate);
            color: var(--blue);
            border-radius: var(--border-radius);
        }
    }
`;

const Description = styled.div`
    p {
        margin-top: 15px;
        font-size: var(--md);
    }
`;

const Links = styled.div`
    a {
        margin: 0 15px 0 0;
        font-size: var(--xl);
        transition: var(--transition);

        &:hover {
            color: var(--blue);
        }
    }
`;

const ProjectCard = ({ project }) => {
    return (
        <Card>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
                <StaticImage
                    src="../../images/projects/cuisineconnoisseurs.png"
                    width={400}
                    className="img"
                    alt="preview"
                />
            </a>
            <Info>
                <div>
                    <h2>{project.name}</h2>
                    <Technologies>
                        <ul>
                            {project.technologies.map((tech) => (
                                <li>{tech}</li>
                            ))}
                        </ul>
                    </Technologies>
                    <Description>
                        <p>{project.description}</p>
                    </Description>
                </div>
                <div>
                    <Links>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <FiGithub />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <FiPlusSquare />
                        </a>
                    </Links>
                </div>
            </Info>
        </Card>
    );
};

export default ProjectCard;
