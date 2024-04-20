import React, { FunctionComponent, Fragment } from 'react';

// Framer Motion Import
import { motion } from 'framer-motion';

import Link from 'next/link';
// Styles Import
import styles from '@styles/sections/index/Hero.module.css';

// Dynamic data from user info
import DATA from '@info';

const HeroContent: FunctionComponent = () => {
    return (
        <Fragment>
            <motion.h6
                className="text-blue"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Hi! I am
            </motion.h6>
            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {DATA['SHORT_PROFILE']['FULL_NAME']}
            </motion.h2>
            <motion.h4
                className="text-blue"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {DATA['SHORT_PROFILE']['JOB_POSITION']}
            </motion.h4>
            <motion.p
                className="body-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                {DATA['SHORT_PROFILE']['SHORT_DESCRIPTION']}
            </motion.p>
            <div className={styles['hero__button-container']}>
                <Link href="/contact" passHref>
                    <motion.span
                        className="button button__primary"
                        initial={{ opacity: 0, x: -15, translateY: 50 }}
                        animate={{ opacity: 1, x: 0, translateY: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                    >
                        Contact Me
                    </motion.span>
                </Link>

                <motion.a
                    className="button button__secondary"
                    href={'https://www.kennethtegrado.dev/docs/resume.pdf'}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -15, translateY: 50 }}
                    animate={{ opacity: 1, x: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 1 }}
                >
                    View Resume
                </motion.a>
            </div>
        </Fragment>
    );
};

export default HeroContent;
