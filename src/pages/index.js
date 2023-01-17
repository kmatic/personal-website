import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </main>
    </Layout>
  )
}

export const Head = () => <title>Kristopher Matic</title>

export default IndexPage