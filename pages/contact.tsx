import type { NextPage } from 'next';

import Head from 'next/head';
import Image from 'next/image';

import { motion } from 'framer-motion';

import styles from '@styles/Contact.module.css';

import emailSVG from '@public/svg/email.svg';
import { MdEmail, MdLocationPin, MdPhone } from 'react-icons/md';

import dynamic from 'next/dynamic';

const DynamicForm = dynamic(
    () => import('@components/formComponents/ContactForm')
);

const ContactPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contact Me | Kenneth Tegrado</title>
            </Head>
            <motion.section
                id="contact"
                className="section__container"
                variants={contactVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div variants={contactChildren}>
                    <motion.div
                        className="header__caption"
                        variants={contactChildren}
                    >
                        <h6 className="text-blue">Contact</h6>
                        <div className="header__caption--line"></div>
                    </motion.div>
                    <motion.h3 variants={contactChildren}>
                        Let&apos;s talk
                    </motion.h3>
                </motion.div>
                <motion.div
                    className={styles.contactContainer}
                    variants={contactChildren}
                >
                    <motion.div
                        className={styles.leftContent}
                        variants={contactChildren}
                    >
                        <div className={styles.imageContainer}>
                            <Image
                                src={emailSVG}
                                alt="A cute email illustration"
                            ></Image>
                        </div>
                        <div className={styles.contactsContainer}>
                            <ul className={styles.contactLists}>
                                <li className={styles.contactList}>
                                    <span className={styles.listIcon}>
                                        <MdPhone />
                                    </span>
                                    <p className="body-1">(+63) 915 922 3351</p>
                                </li>
                                <li className={styles.contactList}>
                                    <span className={styles.listIcon}>
                                        <MdEmail />
                                    </span>
                                    <p className="body-1">
                                        kentegrado@gmail.com
                                    </p>
                                </li>
                                <li className={styles.contactList}>
                                    <span className={styles.listIcon}>
                                        <MdLocationPin />
                                    </span>
                                    <p className="body-1">Metro Manila</p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        className={styles.rightContent}
                        variants={contactChildren}
                    >
                        <DynamicForm />
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    );
};

export default ContactPage;

const contactVariant = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: { duration: 1, delayChildren: 0.5, staggerChildren: 0.4 },
    },
};

const contactChildren = {
    hidden: {
        opacity: 0,
        y: 20,
        x: -20,
    },
    show: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 0.5, staggerChildren: 0.3 },
    },
};
