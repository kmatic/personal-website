import React from 'react';
import { Layout, Hero, About, Projects } from '../components';

const IndexPage = () => {
    return (
        <Layout>
            <main>
                <Hero />
                <About />
                <Projects />
            </main>
        </Layout>
    );
};

export const Head = () => <title>Kristopher Matic</title>;

export default IndexPage;
