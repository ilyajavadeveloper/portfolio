import React from "react";
import Logo from "./Logo";
import { Facebook, Instagram, Twitter, Github, Linkedin } from "lucide-react";

const SOCIAL_MEDIA_LINKS = [
    { href: "https://www.facebook.com/ilya.hvostenko/?locale=ru_RU", icon: Facebook },
    { href: "https://www.instagram.com/ilyahvostenko?igsh=Y3ZseWc2c2ViMG41", icon: Instagram },
    { href: "https://x.com/ilyajavadev?t=Pw_d8gBFzXQ0udIKbj9yDQ&s=35", icon: Twitter },
    { href: "https://github.com/ilyajavadeveloper", icon: Github },
    { href: "https://www.linkedin.com/in/ilya-hvostenko-a03347298/", icon: Linkedin },
];

const Footer = () => {
    return (
        <footer className="relative mt-28">
            {/* soft divider */}
            <div className="mx-auto h-px max-w-6xl bg-white/10" />

            <div className="mx-auto max-w-7xl px-6 py-14">
                {/* LOGO */}
                <div className="mb-8 flex justify-center opacity-80">
                    <Logo />
                </div>

                {/* SOCIAL ICONS */}
                <div className="mb-10 flex justify-center gap-8">
                    {SOCIAL_MEDIA_LINKS.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="social link"
                                className="
                  group flex h-14 w-14 items-center justify-center
                  rounded-full border border-white/10
                  bg-white/5 text-white/50
                  backdrop-blur transition
                  hover:border-white/25 hover:bg-white/10
                  hover:text-white/80
                "
                            >
                                <Icon
                                    size={26}
                                    className="transition-transform group-hover:scale-105"
                                />
                            </a>
                        );
                    })}
                </div>

                {/* COPYRIGHT */}
                <div className="text-center">
                    <p className="text-sm text-white/40">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-medium text-white/55">
              Ilya Hvostenko
            </span>
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
