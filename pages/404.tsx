import { NextPage } from 'next';

import Link from 'next/link';

import Head from 'next/head';

import Image from 'next/image';
import styles from '@styles/PageNotFound.module.css';

import spaceImage from '@public/svg/lost-spaceship.svg';

const NotFoundPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className={styles['notFound__container']}>
                <div className={styles['notFound__content']}>
                    <div className={styles.leftContent}>
                        <h1>404</h1>
                        <h4>Page Not Found</h4>
                        <p className="body-2">
                            It seems like you are too far away! Let&apos;s get
                            back you right on track!
                        </p>
                        <div>
                            <Link href="/" passHref>
                                <button className="button button__secondary">
                                    Home
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={spaceImage}
                            alt="A lost spaceship traversing the galaxy"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
