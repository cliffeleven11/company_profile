"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t("navHome"), href: "#home" },
        { name: t("navAbout"), href: "#about" },
        { name: t("navServices"), href: "#services" },
        { name: t("navTeam"), href: "#team" },
        { name: t("navContact"), href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
                    : "bg-white/80 backdrop-blur-sm"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">C</span>
                        </div>
                        <span className="text-xl font-bold gradient-text">Cliff Eleven</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="flex items-center space-x-1 bg-gray-100 rounded-full p-1">
                            <button
                                onClick={() => setLanguage("id")}
                                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${language === "id"
                                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                                        : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                ID
                            </button>
                            <button
                                onClick={() => setLanguage("en")}
                                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${language === "en"
                                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                                        : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                EN
                            </button>
                        </div>

                        <Link
                            href="#contact"
                            className="gradient-btn px-6 py-2.5 rounded-full text-white text-sm font-medium"
                        >
                            {t("navCta")}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-screen" : "max-h-0"
                    }`}
            >
                <div className="bg-white px-4 py-4 space-y-3 shadow-lg border-t border-gray-100">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile Language Switcher */}
                    <div className="flex items-center space-x-2 px-4 py-2">
                        <span className="text-sm text-gray-500">Language:</span>
                        <button
                            onClick={() => setLanguage("id")}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${language === "id"
                                    ? "bg-indigo-500 text-white"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            ID
                        </button>
                        <button
                            onClick={() => setLanguage("en")}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${language === "en"
                                    ? "bg-indigo-500 text-white"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            EN
                        </button>
                    </div>

                    <Link
                        href="#contact"
                        className="block gradient-btn px-6 py-3 rounded-full text-white text-center font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {t("navCta")}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
