import React, { FunctionComponent } from 'react';
import styles from '@styles/ui/Sidebar.module.css';
import { IoMdClose } from 'react-icons/io';
import { NAVIGATION_LINKS } from '@data/index';
import { motion } from 'framer-motion';
import Link from 'next/link';

import navbarStore from '@store/navbarStore';

const SideBar: FunctionComponent<Props> = ({ handleSidebar }) => {
    const activeLink = navbarStore(({ activeLink }) => activeLink);
    const setActiveLink = navbarStore(({ setActiveLink }) => setActiveLink);

    const changeLink = (name: string) => {
        setActiveLink(name);
        handleSidebar();
    };

    return (
        <motion.div
            className={styles.container}
            key="sidebar"
            variants={sideBarContainer}
            initial="hidden"
            animate="show"
            exit="exiting"
        >
            <div className={styles.left} onClick={handleSidebar}></div>

            <div className={styles.right}>
                <IoMdClose className={styles.close} onClick={handleSidebar} />

                <ul className={styles.lists}>
                    {NAVIGATION_LINKS.map(({ name, link }, index) => (
                        <li key={index}>
                            <Link href={link} passHref>
                                <span
                                    className={`${styles.link} ${
                                        activeLink === link && styles.activeLink
                                    }`}
                                    onClick={() => changeLink(link)}
                                >
                                    {name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default SideBar;

interface Props {
    handleSidebar: () => void;
}

const sideBarContainer = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1 },
    exiting: { x: 500, opacity: 0 },
};
