import create from 'zustand';

export default create<NavbarState>()((set) => ({
    activeLink: '/',
    fixedNavbar: false,
    setActiveLink: (newLink: string) => set(() => ({ activeLink: newLink })),
    setFixedNavbar: (makeFix: boolean) => set(() => ({ fixedNavbar: makeFix })),
}));

interface NavbarState {
    activeLink: string;
    fixedNavbar: boolean;
    setFixedNavbar: (makeFix: boolean) => void;
    setActiveLink: (newLink: string) => void;
}
