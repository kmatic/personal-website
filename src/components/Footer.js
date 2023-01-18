import React from 'react';
import styled from 'styled-components';
import { FiGithub } from 'react-icons/fi';

const StyledFooter = styled.footer`
    margin-top: 0 auto;

    div {
        display: flex;
        justify-content: center;

        > a {
            margin: 15px 0 15px 0;
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
            </div>
        </StyledFooter>
    );
};

export default Footer;
