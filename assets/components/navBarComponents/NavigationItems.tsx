import React, { FunctionComponent } from 'react';
import { NAVIGATION_LINKS } from '@data/index';
import styles from '@styles/ui/Navbar.module.css';
import Link from 'next/link';
import navbarStore from '@store/navbarStore';

const NavigationItems: FunctionComponent = () => {
    const activeLink = navbarStore(({ activeLink }) => activeLink);
    const setActiveLink = navbarStore(({ setActiveLink }) => setActiveLink);

    return (
        <div className={styles.navigation}>
            <ul className={styles.navigationItems}>
                {NAVIGATION_LINKS.map(({ name, link }, index) => (
                    <li
                        className={`${styles.navigationItem} ${
                            activeLink === link && 'active-link'
                        } body-1`}
                        key={index}
                        onClick={() => setActiveLink(link)}
                    >
                        <Link href={link}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavigationItems;
