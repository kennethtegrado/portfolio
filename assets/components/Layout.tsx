import { FunctionComponent, ReactNode, useEffect } from 'react';

import { useRouter } from 'next/router';

import NavBar from '@components/NavBar';
import Footer from '@components/Footer';

import navbarStore from '@store/navbarStore';

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    const setActiveLink = navbarStore(
        ({ setActiveLink }: any) => setActiveLink
    );
    const setFixedNavbar = navbarStore(
        ({ setFixedNavbar }: any) => setFixedNavbar
    );

    const router = useRouter();

    useEffect(() => {
        setActiveLink(router.pathname);
        if (router.pathname == '/') setFixedNavbar(true);
        else setFixedNavbar(false);
    }, [router.pathname, setActiveLink, setFixedNavbar]);

    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;

interface LayoutProps {
    children: ReactNode;
}
