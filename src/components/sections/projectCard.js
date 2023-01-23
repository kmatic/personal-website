import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FiGithub, FiPlusSquare } from 'react-icons/fi';

const Card = styled.div`
    background-color: var(--lighter-slate);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: var(--border-radius);
    transition: var(--transition);
    width: 100%;
    overflow-wrap: break-word;

    .img {
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 15px;
        width: 100%;
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
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;

    h2 {
        font-size: var(--xl);
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
            padding: 2px 4px;
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
        color: var(--lightest-slate);
    }
`;

const Links = styled.div`
    a {
        margin: 0 15px 0 0;
        font-size: var(--xl);
        transition: var(--transition);
        color: var(--lightest-slate);

        &:hover {
            color: var(--blue);
        }
    }
`;

const ProjectCard = ({ project }) => {
    const { body, frontmatter } = project;
    const image = getImage(frontmatter.img);

    return (
        <Card>
            <a href={frontmatter.github} target="_blank" rel="noopener noreferrer">
                <GatsbyImage image={image} className="img" alt={frontmatter.alt} />
            </a>
            <Info>
                <div>
                    <h2>{frontmatter.name}</h2>
                    <Technologies>
                        <ul>
                            {frontmatter.technologies.map((tech) => (
                                <li>{tech}</li>
                            ))}
                        </ul>
                    </Technologies>
                    <Description>
                        <p>{body}</p>
                    </Description>
                </div>
                <div>
                    <Links>
                        <a href={frontmatter.github} target="_blank" rel="noopener noreferrer">
                            <FiGithub />
                        </a>
                        <a href={frontmatter.live} target="_blank" rel="noopener noreferrer">
                            <FiPlusSquare />
                        </a>
                    </Links>
                </div>
            </Info>
        </Card>
    );
};

export default ProjectCard;
