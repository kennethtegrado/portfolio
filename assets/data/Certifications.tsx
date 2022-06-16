const CERTIFICATIONS: Array<Content> = [
    {
        name: 'React JS Basic Certification',
        certifiedBy: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/0b83af7e0b2e',
    },
    {
        name: 'Software Engineer Certification',
        certifiedBy: 'TripleByte',
        link: 'https://triplebyte.com/tb/kenneth-renz-tegrado-p3vbofd/certificate',
    },
    {
        name: 'JavaScript Intermediate Certification',
        certifiedBy: 'HackerRank',
        link: 'https://www.hackerrank.com/certificates/5ea20c27dd76',
    },
];

export default CERTIFICATIONS;

interface Content {
    name: string;
    certifiedBy: string;
    link: string;
}
