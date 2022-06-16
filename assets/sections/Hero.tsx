import React, { FunctionComponent } from 'react';

// NEXT JS Import
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Styles Import
import styles from '@styles/sections/index/Hero.module.css';

const DynamicHeroContent = dynamic(
    () => import('@components/heroComponents/HeroContent')
);

const DynamicFloatingIcons = dynamic(
    () => import('@components/heroComponents/FloatingIcons')
);

const DynamicAnimatedMouse = dynamic(
    () => import('@components/heroComponents/HeroMouse')
);

const HeroSection: FunctionComponent = () => {
    return (
        <section className={styles['hero__container']}>
            <Head>
                <title>Kenneth Tegrado - Full Stack Developer Portfolio</title>
            </Head>
            <div className={styles['hero__content']}>
                <DynamicHeroContent />
                <DynamicFloatingIcons />
                <DynamicAnimatedMouse />
            </div>
        </section>
    );
};

export default HeroSection;
