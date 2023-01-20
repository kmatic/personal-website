import React from 'react';
import styled from 'styled-components';
import ProjectCard from './projectCard';

const ProjectsContainer = styled.div`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: space-between;
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
                    <ProjectCard key={idx} project={project} />
                ))}
            </ProjectsContainer>
        </section>
    );
};

export default Projects;
