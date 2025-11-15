import React, { useState, useEffect } from "react";
import { HERO, NAVIGATION_LINKS } from "../constants/index.jsx";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // ✔ Добавляем ссылку Projects ведущую на секцию #projects
    const EXTENDED_NAVIGATION_LINKS = [
        ...NAVIGATION_LINKS,
        { label: "Projects", href: "#projects" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const handleLinkClick = (e, href) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            setIsMobileMenuOpen(false);

            const id = href.replace("#", "");
            const target = document.getElementById(id);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    };

    // ✔ Прокрутка если в URL есть hash при загрузке
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);

            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 150);
            }
        }
    }, []);

    return (
        <nav className="fixed left-0 right-0 top-0 z-50 bg-black/50 backdrop-blur-lg py-4 px-6">
            <div className="flex justify-between items-center max-w-7xl mx-auto">

                {/* Logo / Name */}
                <div className="text-white text-2xl font-bold">{HERO.name}</div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-6">
                    {EXTENDED_NAVIGATION_LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-white text-lg hover:text-gray-400 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-black/90 text-white py-6 px-4 flex flex-col items-center gap-6 lg:hidden">
                    {EXTENDED_NAVIGATION_LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-lg hover:text-gray-400 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default NavBar;
