import type { FunctionComponent } from "react";
import dynamic from "next/dynamic";

const DynamicAboutCertifications = dynamic(
    () => import('@components/aboutComponents/AboutCertifications')
);
const DynamicProject = dynamic(
    () => import('@components/additionalComponents/Projects')
);

const AdditionalSection: FunctionComponent = () => {
    return (
        <section id="additional" className="section__container">
            {/* <DynamicAboutProfile /> */}
            {/* <DynamicAboutTechnologies /> */}
            <DynamicProject />
            <DynamicAboutCertifications />
        </section>
    );
};

export default AdditionalSection;