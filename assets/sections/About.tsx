import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';

const DynamicAboutProfile = dynamic(
    () => import('@components/aboutComponents/AboutProfile')
);

const DynamicAboutTechnologies = dynamic(
    () => import('@components/aboutComponents/AboutTechnologies')
);

const DynamicAboutCertifications = dynamic(
    () => import('@components/aboutComponents/AboutCertifications')
);

const AboutSection: FunctionComponent = () => {
    return (
        <section id="profile" className="section__container">
            <DynamicAboutProfile />
            <DynamicAboutTechnologies />
            <DynamicAboutCertifications />
        </section>
    );
};

export default AboutSection;
