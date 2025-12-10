export default function Services() {
    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Web Development",
            description: "Pembuatan website modern dengan teknologi terkini seperti Next.js, React, dan Node.js untuk performa optimal",
            features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: "Mobile App",
            description: "Pengembangan aplikasi mobile cross-platform dengan Flutter dan React Native untuk iOS dan Android",
            features: ["Cross Platform", "Native Performance", "Offline Support"],
            color: "from-indigo-500 to-purple-500",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            title: "UI/UX Design",
            description: "Desain antarmuka yang intuitif dan menarik untuk meningkatkan pengalaman pengguna",
            features: ["User Research", "Wireframing", "Prototyping"],
            color: "from-pink-500 to-rose-500",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
            title: "Cloud Solutions",
            description: "Migrasi dan pengelolaan infrastruktur cloud untuk skalabilitas dan keandalan bisnis Anda",
            features: ["AWS & GCP", "Auto Scaling", "24/7 Monitoring"],
            color: "from-emerald-500 to-teal-500",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "Data Analytics",
            description: "Analisis data mendalam untuk insight bisnis yang actionable dan pengambilan keputusan yang lebih baik",
            features: ["BI Dashboard", "Data Visualization", "Predictive Analysis"],
            color: "from-amber-500 to-orange-500",
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: "IT Support",
            description: "Dukungan teknis profesional 24/7 untuk memastikan operasional bisnis Anda berjalan lancar",
            features: ["24/7 Support", "Remote Assistance", "On-site Service"],
            color: "from-violet-500 to-purple-500",
        },
    ];

    return (
        <section id="services" className="py-24 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mb-6">
                        <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                            Layanan Kami
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Solusi Digital
                        <span className="gradient-text block">Untuk Setiap Kebutuhan</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Kami menyediakan berbagai layanan digital komprehensif untuk membantu
                        bisnis Anda tumbuh dan berkembang di era digital
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-gray-900 rounded-3xl p-8 card-hover shadow-lg border border-gray-100 dark:border-gray-700"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2">
                                {service.features.map((feature, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Arrow */}
                            <div className="mt-6 flex items-center text-indigo-600 dark:text-indigo-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                                <span>Pelajari Lebih Lanjut</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
