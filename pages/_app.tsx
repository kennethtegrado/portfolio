import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress color="#435fff" height={2} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
