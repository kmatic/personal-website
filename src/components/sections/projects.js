import React from 'react';
import styled from 'styled-components';
import ProjectCard from './projectCard';
import { graphql, useStaticQuery } from 'gatsby';
import useIsMounted from '../hooks/useIsMounted';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const StyledSection = styled.section`
    max-width: 1150px;
    margin: 0 auto;
`;

const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
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
                    body
                }
            }
        }
    `);

    const isMounted = useIsMounted();

    return (
        <TransitionGroup component={null}>
            {isMounted && (
                <CSSTransition timeout={1000} classNames="fade">
                    <StyledSection id="projects">
                        <h1 className="stylized-heading">Projects</h1>
                        <ProjectsContainer>
                            {data.allMdx.nodes.map((project) => (
                                <ProjectCard key={project.frontmatter.name} project={project} />
                            ))}
                        </ProjectsContainer>
                    </StyledSection>
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};

export default Projects;
