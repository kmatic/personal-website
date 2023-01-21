import React from 'react';
import styled from 'styled-components';
import ProjectCard from './projectCard';
import { graphql, useStaticQuery } from 'gatsby';

const ProjectsContainer = styled.div`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Projects = () => {
    const data = useStaticQuery(graphql`
        query ProjectsQuery {
            allMdx(sort: { frontmatter: { order: ASC } }) {
                nodes {
                    frontmatter {
                        alt
                        github
                        live
                        name
                        order
                        technologies
                        img {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    excerpt
                }
            }
        }
    `);

    return (
        <section id="projects">
            <h1 className="stylized-heading">Projects</h1>
            <ProjectsContainer>
                {data.allMdx.nodes.map((project) => (
                    <ProjectCard key={project.frontmatter.name} project={project} />
                ))}
            </ProjectsContainer>
        </section>
    );
};

export default Projects;
