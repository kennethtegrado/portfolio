import sanityClient from '@sanity/client';

export default sanityClient({
    dataset: 'production',
    projectId: 'x04wsuje',
    apiVersion: '2022-06-14',
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_TOKEN,
});
