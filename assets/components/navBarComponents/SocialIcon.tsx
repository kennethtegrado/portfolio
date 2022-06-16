import React, { FunctionComponent, Key, ReactElement } from 'react';
import { motion } from 'framer-motion';

const SocialIcon: FunctionComponent<SocialIconProps> = ({
    icon,
    link,
    styles,
    delay,
    name,
}) => {
    return (
        <motion.li
            variants={item}
            custom={delay}
            animate="visible"
            initial="hidden"
            className={styles['navbar__contacts-item']}
        >
            <a
                className={styles['navbar__contacts-icon']}
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                {icon} <span className="hidden">{name}</span>
            </a>
        </motion.li>
    );
};

export default SocialIcon;

interface SocialIconProps {
    icon: ReactElement;
    link: string;
    styles: { readonly [key: string]: string };
    key: Key;
    delay: number;
    name: string;
}

const item = {
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.3, delay: i * 0.3 + 2 },
    }),
    hidden: { opacity: 0, x: 20 },
};
