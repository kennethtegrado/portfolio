import React, { FunctionComponent } from 'react';

// Styles Import
import styles from '@styles/ui/Navbar.module.css';
import Link from 'next/link';
// Router Import

import { FaFireAlt } from 'react-icons/fa';

const MainLogo: FunctionComponent = () => {
    return (
        <Link href="/" passHref>
            <a className={styles.logo}>
                <FaFireAlt className="text-primary logo" />{' '}
                <span className="hidden">Go back to hero section</span>
            </a>
        </Link>
    );
};

export default MainLogo;
