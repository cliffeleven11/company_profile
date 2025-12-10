"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: t("aboutFeature1Title"),
            description: t("aboutFeature1Desc"),
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            ),
            title: t("aboutFeature2Title"),
            description: t("aboutFeature2Desc"),
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: t("aboutFeature3Title"),
            description: t("aboutFeature3Desc"),
        },
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
                            <span className="text-sm font-medium text-indigo-600">
                                {t("aboutBadge")}
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                            {t("aboutTitle1")}
                            <span className="gradient-text block">{t("aboutTitle2")}</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            <strong className="text-gray-900">Cliff Eleven</strong> {t("aboutDesc1").replace("Cliff Eleven adalah perusahaan teknologi yang berdedikasi", "adalah perusahaan teknologi yang berdedikasi").replace("Cliff Eleven is a technology company dedicated", "is a technology company dedicated")}
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t("aboutDesc2")}
                        </p>

                        {/* Features List */}
                        <div className="space-y-6 pt-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Visual */}
                    <div className="relative">
                        {/* Main Image Container */}
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
                                <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
                                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            Cliff Eleven
                                        </h3>
                                        <p className="text-gray-600">
                                            Digital Solutions & Innovation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-200/50 rounded-full blur-2xl" />
                        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-indigo-200/50 rounded-full blur-2xl" />

                        {/* Floating Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-4 z-20 animate-float border border-gray-100">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">100+ {t("heroStat1")}</p>
                                    <p className="text-xs text-gray-500">{t("aboutFeature1Title")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
