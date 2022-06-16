import React, { FunctionComponent, Fragment, useState } from 'react';

// NEXT JS Import
import dynamic from 'next/dynamic';
// Styles Import
import styles from '@styles/ui/Navbar.module.css';

// Framer Motion Import
import { AnimatePresence } from 'framer-motion';

// Component Import
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import navbarStore from '@store/navbarStore';

const DynamicSideBar = dynamic(() => import('./Sidebar'), { ssr: false });

const DynamicNavigationItems = dynamic(
    () => import('./navBarComponents/NavigationItems')
);

const DynamicContactItems = dynamic(
    () => import('./navBarComponents/ContactItems')
);

// Dynamic Logo
const DynamicMainLogo = dynamic(() => import('./navBarComponents/MainLogo'));

const NavBar: FunctionComponent = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const fixedNavbar = navbarStore(({ fixedNavbar }: any) => fixedNavbar);

    const handleSideBar = () => {
        setSidebarToggle((prev) => !prev);
    };

    return (
        <Fragment>
            {!sidebarToggle && (
                <header
                    className={`${styles.container} ${
                        fixedNavbar && styles.fixed
                    }`}
                >
                    <nav>
                        <DynamicMainLogo />
                        <DynamicNavigationItems />
                        <HiOutlineMenuAlt3
                            className={styles.burger}
                            onClick={handleSideBar}
                        />
                    </nav>
                </header>
            )}
            <DynamicContactItems />
            <AnimatePresence>
                {sidebarToggle && (
                    <DynamicSideBar handleSidebar={handleSideBar} />
                )}
            </AnimatePresence>
        </Fragment>
    );
};

export default NavBar;
