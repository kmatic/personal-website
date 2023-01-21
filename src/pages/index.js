import React from 'react';
import { Layout, Hero, About, Projects, Github, Seo } from '../components';

const IndexPage = () => {
    return (
        <Layout>
            <main>
                <Hero />
                <About />
                <Projects />
                <Github />
            </main>
        </Layout>
    );
};

export const Head = () => <Seo />;

export default IndexPage;
