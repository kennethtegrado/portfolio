import React, { FunctionComponent } from 'react';

// Styles import
import styles from '@styles/ui/Footer.module.css';

// Data Import
import { SOCIAL_LINKS } from '@data/index';

import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const FooterSection: FunctionComponent = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.left}>
                <h5 className="text-primary">Kenneth Tegrado</h5>
                <p className="subtitle-2">
                    I am open for opportunities to learn and share my skills
                    with the latest technologies in development.
                </p>
                <p className="subtitle-2">
                    <BsTelephoneFill className="text-primary" /> (+63) 915 922
                    3351
                </p>
                <p className="subtitle-2">
                    <MdEmail className="text-primary" />{' '}
                    <a
                        className={styles.link}
                        href="mailto:kennethtegrado@gmail.com"
                    >
                        kentegrado@gmail.com
                    </a>
                </p>
            </div>
            <div className={styles.right}>
                <p>
                    <strong className="subtitle-2">
                        Made by Kenneth Tegrado
                    </strong>
                </p>
                <div className={styles.contacts}>
                    {SOCIAL_LINKS.map(({ socialMedia, icon, link }, index) => (
                        <a key={index} href={link} className={styles.linkIcons}>
                            {icon} <span className="hidden">{socialMedia}</span>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
