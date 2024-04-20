import React, { FunctionComponent } from "react";

// NEXT JS Import
import Image from "next/image";

// Framer Motion Import
import { motion } from "framer-motion";

// Styles import
import styles from "@styles/sections/index/About.module.css";

// Image Import
import profile from "@public/images/profile-photo.webp";
import figures from "@public/svg/figures.svg";

const AboutProfile: FunctionComponent = () => {
    return (
        <motion.div
            className={styles["about__profile"]}
            variants={aboutVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
        >
            <motion.div className="header__caption" variants={aboutChildren}>
                <h6 className="text-blue">Profile</h6>
                <div className="header__caption--line"></div>
            </motion.div>
            <motion.h3 className="section__title" variants={aboutChildren}>
                About Me
            </motion.h3>
            <motion.div
                className={styles["about__profile-content"]}
                variants={aboutChildren}
            >
                <motion.div
                    className={styles["profile__description"]}
                    variants={aboutChildren}
                >
                    <p className="body-1">
                        Hey there! I'm <strong>Kenneth Tegrado</strong>, a
                        detail-oriented
                        <strong className="text-primary">
                            {" "}
                            Full-Stack Developer{" "}
                        </strong>
                        with a passion for exploring the intersection of web
                        development, machine learning, and data science. While I
                        specialize in MERN stack development, I'm also deeply
                        interested in leveraging machine learning algorithms and
                        data analysis techniques to derive valuable insights and
                        enhance the functionality of web applications.
                    </p>
                    <p className="body-1">
                        Whether it's building robust web applications or diving
                        into the world of data science, I'm always eager to
                        tackle new challenges and expand my skill set. Feel free
                        to reach out to me via email at
                        <a
                            href="mailto:kentegrado@gmail.com"
                            className="text-blue"
                        >
                            kentegrado@gmail.com{" "}
                        </a>
                        or by connecting with me on{" "}
                        <a
                            href="https://www.linkedin.com/in/kennethtegrado/"
                            className="text-blue"
                        >
                            LinkedIn{" "}
                        </a>{" "}
                        to discuss opportunities or projects in Web Development,
                        Machine Learning, or Data Science.
                    </p>
                </motion.div>

                <motion.div
                    className={styles["profile__image"]}
                    variants={childrenRight}
                >
                    <motion.div
                        className={styles["profile__image-figure"]}
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 2.5,
                        }}
                    >
                        <Image
                            src={figures}
                            alt="Desaturated photo of Kenneth Tegrado"
                        ></Image>
                    </motion.div>
                    <Image
                        src={profile}
                        alt="Desaturated photo of Kenneth Tegrado"
                    ></Image>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default AboutProfile;

const aboutVariant = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: { duration: 1, delayChildren: 0.5, staggerChildren: 0.4 },
    },
};

const aboutChildren = {
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
