import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: auto;
`;

const StyledCredit = styled.div`
    display: flex;
    align-items: center;
    font-size: var(--sm);
    writing-mode: vertical-rl;

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

const Credit = () => {
    const github = 'https://github.com/bchiang7/v4/';

    return (
        <Wrapper>
            <StyledCredit>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    inspired by bchiang7
                </a>
            </StyledCredit>
        </Wrapper>
    );
};

export default Credit;
