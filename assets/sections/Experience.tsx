import React, { FunctionComponent, useState, ReactElement } from 'react';

// styles import
import styles from '@styles/sections/index/Experience.module.css';

import { EXPERIENCES } from '@data/index';

import { motion } from 'framer-motion';

const ExperienceSection: FunctionComponent = () => {
    const [currentExperience, setCurrentExperience] = useState<Experience>(
        EXPERIENCES[0]
    );
    const [activeExperience, setActiveExperience] = useState(0);

    const changeExperience = (experience: Experience, index: number): void => {
        if (activeExperience === index) return;
        setCurrentExperience(experience);
        setActiveExperience(index);
    };
    return (
        <section id="experience" className={styles.container}>
            <motion.div
                variants={experienceVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div
                    className="header__caption"
                    variants={experienceChildren}
                >
                    <h6 className="text-blue">Experience</h6>
                    <div className="header__caption--line"></div>
                </motion.div>
                <motion.h3
                    className="section__title"
                    variants={experienceChildren}
                >
                    Prior Jobs
                </motion.h3>
            </motion.div>
            <motion.div
                className={styles.experienceContainer}
                variants={experienceVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div>
                    <motion.ul
                        className={styles.companyLists}
                        variants={experienceChildren}
                    >
                        {EXPERIENCES.map(({ company, key }, index) => (
                            <motion.li
                                key={key}
                                onClick={() => {
                                    changeExperience(EXPERIENCES[index], index);
                                }}
                                className={
                                    activeExperience === index
                                        ? `${styles.activeExperience} text-primary`
                                        : ''
                                }
                                variants={experienceChildren}
                            >
                                <p className={styles.companyTitle}>
                                    {company.split(' ')[0]}
                                </p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
                <motion.div
                    className={styles.rightContainer}
                    variants={childrenRight}
                >
                    <h5>{currentExperience.jobPosition}</h5>
                    <h6 className="text-blue">{currentExperience.company}</h6>
                    <p className={styles.experienceDate}>
                        {currentExperience.date}
                    </p>
                    <ul className={styles.experienceBullet}>
                        {currentExperience.jobPoints.map((point, index) => (
                            <li key={index} className="body-1">
                                {point}
                            </li>
                        ))}
                    </ul>
                    <h6 className={styles.technologies}>
                        Relevant Technologies
                    </h6>
                    <div className={styles.technologiesContainer}>
                        {currentExperience.technologies.map(({ icon, key }) => (
                            <div key={key} className={styles.technologyIcon}>
                                {icon}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ExperienceSection;

interface Experience {
    company: string;
    date: string;
    jobPosition: string;
    jobPoints: Array<string>;
    technologies: Array<{ icon: ReactElement; key: string }>;
    key: string;
}
const experienceVariant = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: { duration: 1, delayChildren: 0.5, staggerChildren: 0.5 },
    },
};

const experienceChildren = {
    hidden: {
        opacity: 0,
        x: -20,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, staggerChildren: 0.3 },
    },
};

const childrenRight = {
    hidden: {
        opacity: 0,
        x: 20,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 },
    },
};
