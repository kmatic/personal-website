import styled from 'styled-components';
import React from 'react';

const StyledHeader = styled.header`
    padding: 30px 0;
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: var(--lg);
    }
`;

const StyledLinks = styled.div`
    font-size: var(--md);
    display: flex;
    color: var(--white);

    ul {
        display: flex;
        align-items: center;
        gap: 26px;
    }
`;

const ResumeLink = styled.a`
    color: var(--blue);
    border: 1px solid;
    border-color: var(--blue);
    border-radius: var(--border-radius);
    padding: 6px 10px;
    transition: var(--transition);
    margin-left: 26px;

    &:hover,
    &:active {
        background-color: var(--blue-tint);
        outline: none;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <StyledNav>
                <h2>
                    <a>KRISTOPHER MATIC</a>
                </h2>
                <StyledLinks>
                    <ul>
                        <li>
                            <a className="stylized-link">about</a>
                        </li>
                        <li>
                            <a className="stylized-link">projects</a>
                        </li>
                    </ul>
                    <div>
                        <ResumeLink
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.google.com/"
                        >
                            Resume
                        </ResumeLink>
                    </div>
                </StyledLinks>
            </StyledNav>
        </StyledHeader>
    );
};

export default Header;
