import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Seo = () => {
    const data = useStaticQuery(graphql`
        query MetadataQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return <title>{data.site.siteMetadata.title}</title>;
};

export default Seo;
