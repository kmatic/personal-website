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
        font-size: var(--xl);
    }
`;

const StyledLinks = styled.div`
    font-size: var(--md);
    display: flex;

    ul {
        display: flex;
        align-items: center;
        gap: 26px;

        li {
            display: inline-block;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                width: 100%;
                transform: scaleX(0);
                height: 1px;
                bottom: 0;
                left: 0;
                background-color: var(--blue);
                transform-origin: bottom right;
                transition: transform 0.25s ease-out;
            }

            &:hover:after {
                transform: scaleX(1);
                transform-origin: bottom left;
            }
        }
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
                <h2 className="blue">
                    <a>KRISTOPHER MATIC</a>
                </h2>
                <StyledLinks>
                    <ul>
                        <li>
                            <a>about</a>
                        </li>
                        <li>
                            <a>projects</a>
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
