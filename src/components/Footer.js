import React from 'react';
import styled from 'styled-components';
import { FiGithub } from 'react-icons/fi';
import useIsMounted from './hooks/useIsMounted';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const StyledFooter = styled.footer`
    margin-top: auto;
    margin-bottom: 15px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: var(--sm);
        gap: 5px;

        & > a {
            display: inline;
            transition: var(--transition);

            &:hover {
                color: var(--blue);
            }
        }
    }
`;

const Footer = () => {
    const isMounted = useIsMounted();

    return (
        <TransitionGroup component={null}>
            {isMounted && (
                <CSSTransition timeout={500} classNames="fade">
                    <StyledFooter>
                        <div>
                            <a
                                href="https://github.com/kmatic"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                kmatic <FiGithub />
                            </a>
                            <a
                                href="https://github.com/bchiang7/v4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                inspired by bchiang7
                            </a>
                        </div>
                    </StyledFooter>
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};

export default Footer;
