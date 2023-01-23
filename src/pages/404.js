import React from 'react';
import { Link } from 'gatsby';
import { Layout, Seo } from '../components';
import styled from 'styled-components';
import useIsMounted from '../components/hooks/useIsMounted';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const StyledSection = styled.section`
    min-height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1 {
        font-family: var(--mono);
        color: var(--blue);
        font-size: clamp(40px, 10vw, 100px);
    }
`;

const StyledLink = styled(Link)`
    align-self: center;
    margin-top: 30px;
    font-size: var(--xxl);
    color: var(--white);
    border: 1px solid var(--white);
    border-radius: var(--border-radius);
    padding: 6px 10px;
    transition: var(--transition);

    &:hover {
        background-color: lightgrey;
    }
`;

const NotFoundPage = () => {
    const isMounted = useIsMounted();

    return (
        <Layout>
            <main>
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition timeout={1000} classNames="fade">
                            <StyledSection>
                                <h1>404</h1>
                                <h1>NOT FOUND</h1>
                                <StyledLink to="/">Go Home</StyledLink>
                            </StyledSection>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </main>
        </Layout>
    );
};

export default NotFoundPage;

export const Head = () => <Seo title="404 Not Found" />;
