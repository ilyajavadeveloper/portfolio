import React from 'react';
import Logo from './Logo';
import { Facebook, Instagram, Twitter, Github, Linkedin } from 'lucide-react';

const SOCIAL_MEDIA_LINKS = [
    { href: "https://www.facebook.com/ilya.hvostenko/?locale=ru_RU", icon: <Facebook size={36} /> },
    { href: "https://www.instagram.com/ilyahvostenko?igsh=Y3ZseWc2c2ViMG41", icon: <Instagram size={36} /> },
    { href: "https://x.com/ilyajavadev?t=Pw_d8gBFzXQ0udIKbj9yDQ&s=35", icon: <Twitter size={36} /> },
    { href: "https://github.com/ilyajavadeveloper", icon: <Github size={36} /> },
    { href: "https://www.linkedin.com/in/ilya-hvostenko-a03347298/", icon: <Linkedin size={36} /> }
];

const Footer = () => {
    return (
        <footer
            className="
                mt-28 mb-12 
                px-4 pt-16 pb-14
                text-center text-white/70
                border-t border-white/10
                bg-white/5 backdrop-blur-xl
                rounded-t-3xl
                shadow-[0_-15px_45px_rgba(255,255,255,0.08)]
                w-full
            "
        >
            {/* Logo */}
            <div className="flex items-center justify-center mb-8 scale-[1.15]">
                <Logo />
            </div>

            {/* Name */}
            <p className="text-lg md:text-xl font-semibold text-white/85 tracking-wide mb-10">
                © {new Date().getFullYear()} <span className="text-white">Ilya Hvostenko</span>
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-10 mb-6">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            text-white/60 transition-all duration-300
                            hover:text-white hover:scale-125
                            hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.55)]
                        "
                    >
                        {link.icon}
                    </a>
                ))}
            </div>

            {/* Bottom Spacing */}
            <div className="h-2" />
        </footer>
    );
};

export default Footer;
