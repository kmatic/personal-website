import React from 'react';
import styled from 'styled-components';
import { FiGithub } from 'react-icons/fi';

const StyledFooter = styled.footer`
    margin-top: auto;
    margin-bottom: 15px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: var(--sm);
        gap: 5px;

        > a {
            display: inline;
            transition: var(--transition);

            &:hover {
                color: var(--blue);
            }
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <a href="https://github.com/kmatic" target="_blank" rel="noopener noreferrer">
                    kmatic <FiGithub />
                </a>

                <a href="https://github.com/bchiang7/v4" target="_blank" rel="noopener noreferrer">
                    inspired by bchiang7
                </a>
            </div>
        </StyledFooter>
    );
};

export default Footer;
