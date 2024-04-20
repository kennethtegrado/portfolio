const PROJECTS: Array<Content> = [
    {
        name: 'MyPlant',
        tag: 'Web Development',
        description: 'An e-commerce site with an integrated content management system inspired for small businesses.',
        link: 'https://myplant.kennethtegrado.dev/',
        github: 'https://github.com/kennethtegrado/myplant'
    },
    {
        name: 'URSHRT',
        tag: 'Web Development',
        description: 'An e-commerce site built with Shopify for a shirt printing business with a unique design studio.',
        link: 'https://www.urshrt.com/',
    },
    {
        name: 'ShareToDo',
        tag: 'Mobile Application',
        description: 'Flutter-based mobile application where friends can track ToDo\'s of each other leveraging Firebase.',
        github: 'https://github.com/kennethtegrado/sharetodo-flutter',
    },
    // {
    //     name: 'URSHRT',
    //     tag: 'Web ',
    //     description: 'An e-commerce site built with Shopify for a shirt printing business with a unique design studio.',
    //     link: 'https://www.urshrt.com/',
    // },
];

export default PROJECTS;

interface Content {
    name: string;
    tag: string;
    link?: string;
    github?: string;
    description: string;
}
