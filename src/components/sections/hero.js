import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    p {
        max-width: 600px;
    }

    h2 {
        font-family: var(--mono);
        font-weight: 400;
    }
`;

const Hero = () => {
    return (
        <StyledSection>
            <h2 className="blue">Hey, my name is</h2>
            <h1 className="big-heading">Kristopher Matic.</h1>
            <p>
                I'm a mechanical engineer turned junior full-stack developer from Vancouver, Canada.
                Currently, I'm focused on further improving my skills in my chosen tech stack
                (MERN).
            </p>
        </StyledSection>
    );
};

export default Hero;
