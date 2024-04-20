import React from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const DynamicHeroSection = dynamic(() => import('@sections/Hero'));

const DynamicAboutSection = dynamic(() => import('@sections/About'));

// Experience section
const DynamicExperienceSection = dynamic(() => import('@sections/Experience'));

const DynamicAdditional = dynamic(() => import('@sections/Additional'));

const HomePage: NextPage = () => {
    return (
        <>
            <DynamicHeroSection />
            <DynamicAboutSection />
            <DynamicExperienceSection />
            <DynamicAdditional />
        </>
    );
};

export default HomePage;
