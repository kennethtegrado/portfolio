import type { ReactElement } from "react";
import React from "react";
import {
    SiDjango,
    SiFirebase,
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
    SiMongodb,
} from "react-icons/si";

import { FaVuejs, FaGithub, FaUbuntu } from "react-icons/fa";

const EXPERIENCES: Array<Experience> = [
    {
        company: "DigitalCreatives",
        date: "September 2022 - March 2024",
        jobPosition: "Full-Stack Developer",
        jobPoints: [
            "Spearheaded the creation of a continuous deployment pipeline utilizing Git, GitHub Actions, and Linux Server for applications hosted on online repositories, ensuring efficient and automated deployment processes.",
            "Delivered 19 localized versions of a client's main entry page within 3 weeks, enhancing SEO and user experience by allowing localization based on geolocation.",
            "Orchestrated the development of a Full-Stack solution using Vue.js, Express.js, MongoDB, and Git, enabling businesses to efficiently monitor lead activity and drive growth.",
        ],
        technologies: [
            { icon: <SiNextdotjs />, key: "nextjs" },
            { icon: <SiReact />, key: "reactjs" },
            { icon: <FaVuejs />, key: "vuejs" },
            { icon: <SiMongodb />, key: "mongodb" },
            { icon: <FaGithub />, key: "github" },
            { icon: <FaUbuntu />, key: "ubuntu" },
        ],
        key: "digital-creatives",
    },
    {
        company: "TeachShare Philippines",
        date: "February - June 2022",
        jobPosition: "Full-Stack Developer",
        jobPoints: [
            "Implemented React Context and optimized application re-renders by 47%, administered TypeScript interfaces for API responses, and developed 20+ UI components using Tailwind CSS, enhancing efficiency.",
            "Remodeled callback functions for user authentication, migrated email functionality to the frontend, and upgraded HTML's video player, demonstrating proficiency in ES6 asynchronous functions, frontend-backend integration, and user experience enhancements.",
            "Spearheaded frontend enhancements, including state management and UI development, significantly reducing development time and improving application performance while collaborating effectively with a multidisciplinary team of developers.",
        ],
        technologies: [
            { icon: <SiNextdotjs />, key: "nextjs" },
            { icon: <SiReact />, key: "reactjs" },
            { icon: <SiTypescript />, key: "typescript" },
            { icon: <SiFirebase />, key: "firebase" },
            { icon: <SiTailwindcss />, key: "tailwindcss" },
        ],
        key: "teachshare-ph",
    },
    {
        company: "Quicklink Philippines",
        date: "December 2021 - February 2022",
        jobPosition: "Software Engineering Intern",
        jobPoints: [
            "Led a cross-functional team to develop a full-stack application within 2 months, utilizing Next.js, React.js, and Django, resulting in a successful site launch.",
            "Implemented optimizations, including asset migration and client-side request throttling, reducing development time by two months and enhancing performance by 85%.",
            "Spearheaded the creation of 30+ responsive UI components and introduced state persistence, reducing loading time from 3 seconds to under 1 second.",
        ],
        technologies: [
            { icon: <SiNextdotjs />, key: "nextjs" },
            { icon: <SiReact />, key: "reactjs" },
            { icon: <SiJavascript />, key: "javascript" },
            { icon: <SiDjango />, key: "Django" },
            { icon: <SiStyledcomponents />, key: "styled-components" },
        ],
        key: "quicklink-ph",
    },
];

export default EXPERIENCES;

interface Experience {
    company: string;
    date: string;
    jobPosition: string;
    jobPoints: Array<string>;
    technologies: Array<{ icon: ReactElement; key: string }>;
    key: string;
}
