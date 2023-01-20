import GlobalStyle from '../styles/GlobalStyle';
import React from 'react';
import { Header, Footer, Contact } from '../components';

const Layout = ({ children }) => {
    return (
        <div id="root">
            <GlobalStyle />
            <Header />
            {children}
            <Footer />
            <Contact />
        </div>
    );
};

export default Layout;
