import React from 'react';
import Logo from './Logo'; // Убедитесь, что путь корректный
import { Facebook, Instagram, Twitter, Github, Linkedin } from 'lucide-react';

const SOCIAL_MEDIA_LINKS = [
    { href: "https://www.facebook.com/ilya.hvostenko/?locale=ru_RU", icon: <Facebook size={24} className="hover:text-blue-500 transition" /> },
    { href: "https://www.instagram.com/ilyahvostenko?igsh=Y3ZseWc2c2ViMG41", icon: <Instagram size={24} className="hover:text-pink-500 transition" /> },
    { href: "https://x.com/ilyajavadev?t=Pw_d8gBFzXQ0udIKbj9yDQ&s=35", icon: <Twitter size={24} className="hover:text-blue-400 transition" /> },
    { href: "https://github.com/ilyajavadeveloper", icon: <Github size={24} className="hover:text-gray-300 transition" /> },
    { href: "https://www.linkedin.com/in/ilya-hvostenko-a03347298/", icon: <Linkedin size={24} className="hover:text-blue-600 transition" /> }
];

const Footer = () => {
    return (
        <footer className='mb-8 mt-20 text-center text-gray-400'>
            {/* Логотип */}
            <div className='flex items-center justify-center'>
                <Logo />
            </div>

            {/* Социальные сети */}
            <div className='flex items-center justify-center gap-6'>
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a key={index} href={link.href} target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:scale-110 transition-transform'>
                        {link.icon}
                    </a>
                ))}
            </div>

            {/* Подпись */}
            <p className='mt-6 text-sm tracking-wide'>
                &copy; {new Date().getFullYear()} Ilya Hvostenko. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
