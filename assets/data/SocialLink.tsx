import { ReactElement, Key } from 'react';
import { GrLinkedin} from 'react-icons/gr';
import { ImGithub } from 'react-icons/im';
import DATA from '../../User.info.json';

const SOCIAL_LINKS: Array<SocialItem> = [
    {
        socialMedia: 'Github',
        link: DATA['SOCIAL_MEDIA_LINKS']['GITHUB_URL'],
        icon: <ImGithub />,
        id: 1,
    },
    {
        socialMedia: 'LinkedIn',
        link: DATA['SOCIAL_MEDIA_LINKS']['LINKEDIN_URL'],
        icon: <GrLinkedin />,
        id: 2,
    },
];

export default SOCIAL_LINKS;

interface SocialItem {
    socialMedia: string;
    link: string;
    icon: ReactElement;
    id: Key;
}
