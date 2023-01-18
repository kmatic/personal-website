import GlobalStyle from '../styles/GlobalStyle';
import styled from 'styled-components';
import React from 'react';
import { Header, Footer, Contact, Credit } from '../components';

const Layout = ({ children }) => {
    return (
        <div id="root">
            <GlobalStyle />
            <Header />
            {children}
            <Footer />
            <Contact />
            <Credit />
        </div>
    );
};

const LayoutDiv = styled.div``;

export default Layout;
