export default function Team() {
    const team = [
        {
            name: "Ahmad Rizki",
            role: "CEO & Founder",
            bio: "Visioner dengan 10+ tahun pengalaman di industri teknologi",
            avatar: "AR",
            color: "from-indigo-500 to-purple-600",
            social: {
                linkedin: "#",
                twitter: "#",
            },
        },
        {
            name: "Dewi Sartika",
            role: "CTO",
            bio: "Expert di cloud architecture dan sistem terdistribusi",
            avatar: "DS",
            color: "from-pink-500 to-rose-600",
            social: {
                linkedin: "#",
                twitter: "#",
            },
        },
        {
            name: "Budi Santoso",
            role: "Lead Developer",
            bio: "Full-stack developer dengan passion di React dan Node.js",
            avatar: "BS",
            color: "from-cyan-500 to-blue-600",
            social: {
                linkedin: "#",
                twitter: "#",
            },
        },
        {
            name: "Putri Maharani",
            role: "UI/UX Designer",
            bio: "Designer kreatif dengan fokus pada user experience",
            avatar: "PM",
            color: "from-amber-500 to-orange-600",
            social: {
                linkedin: "#",
                twitter: "#",
            },
        },
    ];

    return (
        <section id="team" className="py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 mb-6">
                        <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                            Tim Kami
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Orang-Orang Hebat
                        <span className="gradient-text block">Di Balik Cliff Eleven</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Tim profesional yang berdedikasi untuk memberikan solusi terbaik bagi bisnis Anda
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 text-center card-hover border border-gray-100 dark:border-gray-700"
                        >
                            {/* Avatar */}
                            <div className="relative inline-block mb-6">
                                <div className={`w-28 h-28 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {member.avatar}
                                </div>
                                {/* Online Status */}
                                <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-gray-50 dark:border-gray-800" />
                            </div>

                            {/* Info */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {member.name}
                            </h3>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                                {member.role}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                                {member.bio}
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center justify-center space-x-3">
                                <a
                                    href={member.social.linkedin}
                                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-indigo-500 hover:text-white transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a
                                    href={member.social.twitter}
                                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-indigo-500 hover:text-white transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
