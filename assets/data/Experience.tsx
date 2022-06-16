import type { ReactElement } from 'react';
import React from 'react';
import {
    SiDjango,
    SiFirebase,
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

const EXPERIENCES: Array<Experience> = [
    {
        company: 'TeachShare Philippines',
        date: 'February - June 2022',
        jobPosition: 'Full Stack Developer',
        jobPoints: [
            'Implemented React Context to standardize the propagation of props from any component and optimized unnecessary re-renders of the application by 47% using a memoized distribution of states.',
            'Administered the interface used in TypeScript for generating the responses from the API to increase the speed of backend development by 50%.',
            'Developed more than 20 UI components from Figma to React.js using Tailwind CSS and reduced the total development time from 1 month to 2 weeks.',
            'Remodeled 15 callback functions for authenticating user sign-up and log-in using ES6 asynchronous function to remove callback hell and create a readable code for six developers.',
            'Migrated email function from a web service layer to the frontend using Email.js and shortened the number of functions implemented by the backend by 6%.',
            "Upgraded HTML's native video player using TypeScript and CSS modules and added three additional functions to improve user experience.",
        ],
        technologies: [
            { icon: <SiNextdotjs />, key: 'nextjs' },
            { icon: <SiReact />, key: 'reactjs' },
            { icon: <SiTypescript />, key: 'typescript' },
            { icon: <SiFirebase />, key: 'firebase' },
            { icon: <SiTailwindcss />, key: 'tailwindcss' },
        ],
        key: 'teachshare-ph',
    },
    {
        company: 'Quicklink Philippines',
        date: 'December 2021 - February 2022',
        jobPosition: 'Software Engineering Intern',
        jobPoints: [
            'Spearheaded an end-to-end application development with three software engineers and finished the site in 2 months.',
            'Supervised the migration of static assets served by the webserver to a frontend service layer using Next.js and significantly reduced the development time from 3 months to 1 month.',
            'Devised an algorithm to throttle requests from the client-side to the Django REST API server using React.js packages and minimized the number of requests on search functions by 85%.',
            'Oversaw the development of new UI components from Figma to React.js using Styled-Components and delivered more than 30 responsive and animated components in 1 month.',
            'Installed state persistence on the merchant-side of the application to persist data after reload and diminished the total loading time from 3 seconds to less than 1 second.',
        ],
        technologies: [
            { icon: <SiNextdotjs />, key: 'nextjs' },
            { icon: <SiReact />, key: 'reactjs' },
            { icon: <SiJavascript />, key: 'javascript' },
            { icon: <SiDjango />, key: 'Django' },
            { icon: <SiStyledcomponents />, key: 'styled-components' },
        ],
        key: 'quicklink-ph',
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
