import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import DATA from '@info';

const DocumentPage = () => {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <meta
                    name="description"
                    content={DATA['META_TAGS']['META_DESCRIPTION']}
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={DATA['META_TAGS']['META_TITLE']}
                />
                <meta
                    property="og:description"
                    content={DATA['META_TAGS']['META_DESCRIPTION']}
                />
                <meta
                    property="og:image"
                    content={DATA['META_TAGS']['META_IMAGE_URL']}
                />
                <meta
                    property="og:url"
                    content={DATA['META_TAGS']['META_WEBSITE_URL']}
                />
                <meta
                    property="og:site_name"
                    content={DATA['META_TAGS']['META_TITLE']}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:creator"
                    content={DATA['META_TAGS']['TWITTER_USERNAME']}
                />
                <meta name="robots" content="all" />
                <link rel="icon" href="favicon.ico" />
                <link rel="shortcut icon" href="favicon.ico" type="image/ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default DocumentPage;
