import React, { FunctionComponent } from "react";

import { motion } from "framer-motion";

import styles from "@styles/sections/index/About.module.css";

import { FaGithub, FaLink } from "react-icons/fa";
import { PROJECTS } from "@data/index";

const ProjectsComponent: FunctionComponent = () => {
    return (
        <motion.div
            variants={CertificationVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h5 variants={Text} className="section__title">
                Projects
            </motion.h5>
            <motion.div
                className={styles["about__certificates"]}
                variants={Certificates}
            >
                {PROJECTS.map(
                    ({ name, link, tag, github, description }, index) => (
                        <motion.div
                            key={index}
                            variants={Certificate}
                            className={styles["project"]}
                        >
                            <div className={styles.tagContainer}>
                                <p className={`${styles.tag} body-2`}>{tag}</p>
                            </div>
                            <h6>{name}</h6>
                            <p className="body-1">{description}</p>
                            <div className={styles.contacts}>
                                {link ? (
                                    <a href={link}>
                                        <FaLink className={styles.linkIcons} />
                                    </a>
                                ) : undefined}

                                {github ? (
                                    <a href={github}>
                                        <FaGithub
                                            className={styles.linkIcons}
                                        />
                                    </a>
                                ) : undefined}
                            </div>
                        </motion.div>
                    )
                )}
            </motion.div>
        </motion.div>
    );
};

export default ProjectsComponent;

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
