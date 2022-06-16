const NavigationLinks: Array<NavigationLink> = [
    { name: 'Home', link: '/' },
    { name: 'Contact', link: '/contact' },
];

export default NavigationLinks;

interface NavigationLink {
    name: string;
    link: string;
}
