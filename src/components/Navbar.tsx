"use client"

import {useEffect, useState} from "react";
import Link from "next/link";

export default function Navbar({ fixed = true }: {fixed?: boolean}) {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`bg-opacity-80 text-white px-6 py-3 transition-transform ${
                showNavbar || !fixed ? "translate-y-0" : "-translate-y-full"
            } ${ fixed ? "fixed top-0 left-0 bg-gray-800 right-0 shadow-lg" : "" } backdrop-blur-lg flex items-center justify-between z-50`}
        >
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold drop-shadow-sm">
                <img src="/neural-edge.svg" alt="Neural Edge" className="w-6" /> Neural Edge
            </Link>
            <div className="space-x-6">
                <Link href="/#features" className="hover:text-gray-300">
                    Features
                </Link>
                <Link href="/#plans" className="hover:text-gray-300">
                    Plans
                </Link>
                <Link href="/news" className="hover:text-gray-300">
                    News
                </Link>
                <Link href="/#contact" className="hover:text-gray-300">
                    Contact
                </Link>
            </div>
        </nav>
    );
}
