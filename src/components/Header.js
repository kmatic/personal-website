import styled from 'styled-components';
import React from 'react';

const StyledHeader = styled.header``;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLinks = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <StyledNav>
                <h1>Kristopher Matic</h1>
                <StyledLinks>
                    <li>about</li>
                    <li>projects</li>
                    <li>resume</li>
                </StyledLinks>
            </StyledNav>
        </StyledHeader>
    );
};

export default Header;
