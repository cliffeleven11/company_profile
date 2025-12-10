"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50" />

            {/* Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-float delay-200" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-float delay-400" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="animate-fade-in-down inline-flex items-center px-6 py-2 rounded-full bg-white border border-indigo-100 shadow-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                        <span className="text-sm font-medium text-indigo-600">
                            {t("heroBadge")}
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                        <span className="block text-gray-900">{t("heroTitle1")}</span>
                        <span className="block gradient-text mt-2">{t("heroTitle2")}</span>
                    </h1>

                    {/* Description */}
                    <p className="animate-fade-in-up delay-200 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                        {t("heroDesc")}
                    </p>

                    {/* CTA Buttons */}
                    <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#services"
                            className="gradient-btn px-8 py-4 rounded-full text-white font-semibold text-lg animate-pulse-glow"
                        >
                            {t("heroCta1")}
                            <svg
                                className="inline-block w-5 h-5 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                        <Link
                            href="#about"
                            className="px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold text-lg hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300"
                        >
                            {t("heroCta2")}
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="animate-fade-in-up delay-400 pt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
                        {[
                            { number: "100+", label: t("heroStat1") },
                            { number: "50+", label: t("heroStat2") },
                            { number: "5+", label: t("heroStat3") },
                            { number: "24/7", label: t("heroStat4") },
                        ].map((stat, index) => (
                            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 shadow-sm">
                                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
