import React from 'react';
import useSiteMetadata from './hooks/useSiteMetadata';

const Seo = ({ title, description, pathname, children }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image,
        siteUrl,
        twitterUsername,
    } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername,
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />

            <meta name="twitter:card" content="summary_image_large" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterUsername} />

            <meta
                name="google-site-verification"
                content="tsealZXQ2Ja-aBfHIFaH6TuEEyGIYH8IRamtsfe_lIs"
            />

            {children}
        </>
    );
};

export default Seo;
