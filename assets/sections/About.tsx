import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';

const DynamicAboutProfile = dynamic(
    () => import('@components/aboutComponents/AboutProfile')
);

const AboutSection: FunctionComponent = () => {
    return (
        <section id="profile" className="section__container">
            <DynamicAboutProfile />
        </section>
    );
};

export default AboutSection;
