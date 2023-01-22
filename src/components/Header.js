import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import useOutsideChecker from './hooks/useOutsideClick';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useIsMounted from './hooks/useIsMounted';

const StyledHeader = styled.header`
    height: var(--header-height);
    padding: 40px 0 0 0;
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > a {
        font-size: var(--lg);
        color: var(--white);
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

        & > li:hover {
            color: var(--blue);
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const ResumeLink = styled.a`
    font-family: var(--mono);
    color: var(--blue);
    border: 1px solid var(--blue);
    border-radius: var(--border-radius);
    padding: 6px 10px;
    transition: var(--transition);
    margin-left: 26px;

    &:hover {
        background-color: var(--blue-highlight);
    }
`;

const Hamburger = styled.div`
    display: none;
    position: relative;
    color: var(--white);

    .icon {
        font-size: var(--xxl);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        display: block;
    }
`;

const HamburgerMenu = styled.div`
    position: absolute;
    z-index: 10;
    bottom: -var(--ham-menu-height);
    right: 0;
    height: var(--ham-menu-height);
    background-color: var(--lighter-slate);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 15px;
    border-radius: var(--border-radius);
    padding: 25px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: var(--md);

    a:hover {
        color: var(--blue);
    }
`;

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const isMounted = useIsMounted();

    const navRef = useRef(null);
    useOutsideChecker(navRef, setNavOpen);

    return (
        <StyledHeader>
            <TransitionGroup component={null}>
                {isMounted && (
                    <CSSTransition timeout={500} classNames="fade">
                        <StyledNav>
                            <a href="/">KRISTOPHER MATIC</a>
                            <StyledLinks>
                                <ul>
                                    <li>
                                        <a href="#about" className="stylized-link">
                                            about
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#projects" className="stylized-link">
                                            projects
                                        </a>
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
                            <Hamburger ref={navRef}>
                                <div className="icon" onClick={() => setNavOpen((prev) => !prev)}>
                                    <RxHamburgerMenu />
                                </div>
                                <CSSTransition in={navOpen} timeout={200} classNames="fade-down">
                                    <HamburgerMenu
                                        style={navOpen ? { display: 'flex' } : { display: 'none' }}
                                        onClick={() => setNavOpen(false)}
                                    >
                                        <a href="#about" className="stylized-link">
                                            about
                                        </a>
                                        <a href="#projects" className="stylized-link">
                                            projects
                                        </a>
                                        <a
                                            href="https://www.google.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="stylized-link"
                                        >
                                            resume
                                        </a>
                                    </HamburgerMenu>
                                </CSSTransition>
                            </Hamburger>
                        </StyledNav>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </StyledHeader>
    );
};

export default Header;
