import React, { FunctionComponent } from 'react';

// NEXT JS Import
import dynamic from 'next/dynamic';

// Framer Motion Import
import { motion } from 'framer-motion';

// Styles Import
import styles from '@styles/ui/Navbar.module.css';

// Data Imprt
import { SOCIAL_LINKS } from '@data/index';

const ContactItems: FunctionComponent = () => {
    return (
        <div className={styles['navbar__contacts']}>
            <motion.ul
                className={styles['navbar__contacts-lists']}
                variants={list}
                initial="hidden"
                animate="show"
            >
                {SOCIAL_LINKS.map(({ icon, link, id, socialMedia }, index) => (
                    <DynamicSocialIcon
                        icon={icon}
                        link={link}
                        key={id}
                        name={socialMedia}
                        styles={styles}
                        delay={index + 1}
                    />
                ))}
            </motion.ul>
        </div>
    );
};

export default ContactItems;

// Dynamic Social Icon
const DynamicSocialIcon = dynamic(() => import('./SocialIcon'));

// Framer Motion Variants
const list = {
    hidden: {
        y: 80,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { delay: 2, duration: 0.3 },
    },
};
