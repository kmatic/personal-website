import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { FiGithub, FiPlusSquare } from 'react-icons/fi';

const ProjectsContainer = styled.div`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
`;

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

    :hover {
        transform: scale(1.02);
    }
`;

const Info = styled.div`
    padding: 24px 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;

    h2 {
        font-size: var(--xxl);
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

const Technologies = styled.div`
    ul {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;

        > li {
            font-size: var(--sm);
            padding: 2px 6px;
            background-color: var(--slate);
            color: var(--blue);
            border-radius: var(--border-radius);
        }
    }
`;

const Projects = () => {
    const projectsList = [
        {
            name: 'CuisineConnoisseurs',
            technologies: ['React', 'Express', 'Tailwind', 'MongoDB', 'AWS S3'],
            img: '../../images/projects/cuisineconnoisseurs.png',
            description:
                'A web app for rating restaurants. Rate your meals, provide detailed reviews, and share great restaurants. Follow others and interact with their posts.',
            github: 'https://github.com/kmatic/cuisine-connoisseurs-client',
            live: 'https://cuisineconnoisseurs.onrender.com/',
        },
        {
            name: 'Todo-list',
            technologies: ['React', 'styled-components', 'Redux', 'Firebase'],
            img: '../../images/projects/todolist.png',
            description:
                'A todo-list web app built with React and Redux for state management. Uses firebase auth and firestore for the BaaS. Create different projects and modify todos.',
            github: 'https://github.com/kmatic/todo-list-react',
            live: 'https://kmatic.github.io/todo-list-react/',
        },
        {
            name: 'Personal Website',
            technologies: ['Gatsby', 'React', 'styled-components'],
            img: '../../images/projects/personalwebsite.png',
            description:
                'My personal website to showcase my projects and information. Bootstrapped with Gatsby to make use of static site generation benefits.',
            github: 'https://github.com/kmatic/todo-list-react',
            live: 'https://kmatic.github.io/todo-list-react/',
        },
    ];

    return (
        <section id="projects">
            <h1 className="stylized-heading">Projects</h1>
            <ProjectsContainer>
                {projectsList.map((project, idx) => (
                    <Card key={idx}>
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
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiGithub />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiPlusSquare />
                                    </a>
                                </Links>
                            </div>
                        </Info>
                    </Card>
                ))}
            </ProjectsContainer>
        </section>
    );
};

export default Projects;
