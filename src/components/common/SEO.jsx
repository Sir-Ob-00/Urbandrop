import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    canonical,
    keywords,
    image,
    type = 'website',
    structuredData,
    ogType,
    ogTitle,
    ogDescription,
    ogUrl
}) => {
    const location = useLocation();
    const siteUrl = 'https://urbandrop.io';
    const currentUrl = canonical || `${siteUrl}${location.pathname}`;
    const defaultImage = `${siteUrl}/images/og-image.jpg`;
    const metaDescription = description || "UrbanDrop® - The Home of Ethnic Groceries and Recipes";
    const metaTitle = title ? `${title} | UrbanDrop®` : "UrbanDrop®";
    const metaOgUrl = ogUrl || currentUrl;
    const metaOgType = ogType || type;
    const metaOgTitle = ogTitle || metaTitle;
    const metaOgDescription = ogDescription || metaDescription;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={metaOgType} />
            <meta property="og:url" content={metaOgUrl} />
            <meta property="og:title" content={metaOgTitle} />
            <meta property="og:description" content={metaOgDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={image || defaultImage} />

            {/* Structured Data (JSON-LD) */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}

            {/* Default Organization Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "UrbanDrop®",
                    "url": siteUrl,
                    "logo": `${siteUrl}/logo.png`,
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+1-555-555-5555", // Update with real number
                        "contactType": "customer service"
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
