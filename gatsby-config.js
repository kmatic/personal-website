/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Kristopher Matic`,
        siteUrl: `https://kristophermatic.com`,
        description: `Personal website for Kristopher Matic`,
        twitterUsername: `@krismatic7`,
        image: `/preview.png`,
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-plugin-mdx',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/favicon.png', // Relative to the project's root folder
                name: 'Kristopher Matic',
                short_name: 'Kristopher Matic',
                start_url: '/',
                background_color: '#1e293b',
                theme_color: '#334155',
                display: 'minimal-ui',
            },
        },
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `projects`,
                path: `${__dirname}/content/projects`,
            },
        },
    ],
};
