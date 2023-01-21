import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { CSSTransition } from 'react-transition-group';

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 10px;
    font-size: var(--xl);

    &:after {
        content: '';
        display: block;
        width: 1px;
        height: 100px;
        background-color: var(--light-slate);
        margin-top: 5px;
    }

    a {
        transition: var(--transition);

        &:hover {
            transform: translateY(-10%);
            color: var(--blue);
        }
    }
`;

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: auto;

    @media (max-width: 480px) {
        display: none;
    }
`;

const Contact = () => {
    const [isMounted, setIsMounted] = useState(false);

    const email = 'kristophermatic7@gmail.com';
    const github = 'https://github.com/kmatic';
    const linkedin = 'https://www.linkedin.com/in/kristopher-matic/';

    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <Wrapper>
            <CSSTransition in={isMounted} timeout={2000} classNames="fade">
                <StyledContact>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <FiLinkedin />
                    </a>
                    <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                        <FiMail />
                    </a>
                </StyledContact>
            </CSSTransition>
        </Wrapper>
    );
};

export default Contact;
