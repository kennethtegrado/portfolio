import React, { FunctionComponent, Fragment } from 'react';

// Framer Motion Import
import { motion } from 'framer-motion';

// Styles Import
import styles from '@styles/sections/index/Hero.module.css';

// Logo Import
import { FaReact, FaNodeJs } from 'react-icons/fa';

const FloatingIcons: FunctionComponent = () => {
    return (
        <Fragment>
            <motion.div
                className={`${styles['hero__icon']} ${styles['hero__icon--react']}`}
                variants={floatingIcons}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.3, delay: 0.5 }}
                drag
                dragConstraints={{
                    top: -30,
                    left: -30,
                    right: 30,
                    bottom: 30,
                }}
            >
                <FaReact className={styles['hero__icon--svg']} />
            </motion.div>
            <motion.div
                className={`${styles['hero__icon']} ${styles['hero__icon--node']}`}
                drag
                variants={floatingIcons}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.2, ease: 'easeIn', delay: 1 }}
                dragConstraints={{
                    top: -30,
                    left: -30,
                    right: 30,
                    bottom: 30,
                }}
            >
                <FaNodeJs className={styles['hero__icon--svg']} />
            </motion.div>
        </Fragment>
    );
};

export default FloatingIcons;

// Framer Motion Variant
const floatingIcons = {
    hidden: { scale: 0 },
    show: { scale: 1 },
};
