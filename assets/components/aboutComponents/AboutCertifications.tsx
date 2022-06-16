import React, { FunctionComponent } from 'react';

import { motion } from 'framer-motion';

import styles from '@styles/sections/index/About.module.css';
import { CERTIFICATIONS } from '@data/index';

const AboutCertifications: FunctionComponent = () => {
    return (
        <motion.div
            variants={CertificationVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h5 variants={Text} className="section__title">
                Certifications
            </motion.h5>
            <motion.div
                className={styles['about__certificates']}
                variants={Certificates}
            >
                {CERTIFICATIONS.map(({ name, link, certifiedBy }, index) => (
                    <motion.div
                        key={index}
                        variants={Certificate}
                        className={styles['about__certificate']}
                    >
                        <h6>{name}</h6>
                        <p className="body-1">
                            <a href={link}>{certifiedBy}</a>
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default AboutCertifications;

const CertificationVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 1, delayChildren: 0.5, staggerChildren: 0.5 },
    },
};

const Certificates = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const Text = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 },
};

const Certificate = {
    hidden: { x: -20, opacity: 0, y: 10 },
    show: { x: 0, opacity: 1, y: 0 },
};
