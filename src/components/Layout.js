import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components"
import React from "react";

const Layout = ({ children }) => {
    return (
        <div>
            <GlobalStyle />
            {children}
        </div>
    )
}

const LayoutDiv = styled.div`

`;

export default Layout