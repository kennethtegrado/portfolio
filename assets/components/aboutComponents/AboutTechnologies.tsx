import React, { FunctionComponent } from 'react';

import { motion } from 'framer-motion';

import styles from '@styles/sections/index/About.module.css';

import {
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiReact,
    SiMongodb,
} from 'react-icons/si';

const AboutTechnologies: FunctionComponent = () => {
    return (
        <motion.div
            variants={TechnologyVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.h5 variants={Text} className="section__title">
                Technologies Used
            </motion.h5>
            <motion.div
                className={styles['about__technologies']}
                variants={Icons}
            >
                <motion.div variants={Icon}>
                    <SiReact className="technologies__icon" />
                </motion.div>
                <motion.div variants={Icon}>
                    <SiNextdotjs className="technologies__icon" />
                </motion.div>
                <motion.div variants={Icon}>
                    <SiNodedotjs className="technologies__icon" />
                </motion.div>
                <motion.div variants={Icon}>
                    <SiExpress className="technologies__icon" />
                </motion.div>

                <motion.div variants={Icon}>
                    <SiMongodb className="technologies__icon" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default AboutTechnologies;

const TechnologyVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 1, delayChildren: 0.5, staggerChildren: 0.5 },
    },
};

const Text = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 },
};

const Icons = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const Icon = {
    hidden: { x: -20, opacity: 0, y: 10 },
    show: { x: 0, opacity: 1, y: 0 },
};
