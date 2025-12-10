"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en";

interface Translations {
    [key: string]: {
        id: string;
        en: string;
    };
}

export const translations: Translations = {
    // Navbar
    navHome: { id: "Beranda", en: "Home" },
    navAbout: { id: "Tentang", en: "About" },
    navServices: { id: "Layanan", en: "Services" },
    navTeam: { id: "Tim", en: "Team" },
    navContact: { id: "Kontak", en: "Contact" },
    navCta: { id: "Hubungi Kami", en: "Contact Us" },

    // Hero
    heroBadge: { id: "Solusi Digital Terpercaya", en: "Trusted Digital Solutions" },
    heroTitle1: { id: "Inovasi Digital", en: "Digital Innovation" },
    heroTitle2: { id: "Untuk Bisnis Anda", en: "For Your Business" },
    heroDesc: {
        id: "Kami adalah partner teknologi yang siap membantu transformasi digital bisnis Anda. Dari konsep hingga peluncuran, kami menghadirkan solusi yang modern dan berdampak.",
        en: "We are your technology partner ready to help your business digital transformation. From concept to launch, we deliver modern and impactful solutions.",
    },
    heroCta1: { id: "Jelajahi Layanan", en: "Explore Services" },
    heroCta2: { id: "Pelajari Lebih Lanjut", en: "Learn More" },
    heroStat1: { id: "Proyek Selesai", en: "Projects Done" },
    heroStat2: { id: "Klien Puas", en: "Happy Clients" },
    heroStat3: { id: "Tahun Pengalaman", en: "Years Experience" },
    heroStat4: { id: "Dukungan", en: "Support" },

    // About
    aboutBadge: { id: "Tentang Kami", en: "About Us" },
    aboutTitle1: { id: "Kami Adalah Partner", en: "We Are Your" },
    aboutTitle2: { id: "Digital Terbaik Anda", en: "Best Digital Partner" },
    aboutDesc1: {
        id: "Cliff Eleven adalah perusahaan teknologi yang berdedikasi untuk membantu bisnis berkembang melalui solusi digital inovatif. Dengan tim yang berpengalaman dan passionate di bidangnya, kami siap menjadi mitra terpercaya dalam perjalanan transformasi digital Anda.",
        en: "Cliff Eleven is a technology company dedicated to helping businesses grow through innovative digital solutions. With an experienced and passionate team, we are ready to be your trusted partner in your digital transformation journey.",
    },
    aboutDesc2: {
        id: "Kami percaya bahwa teknologi yang tepat dapat mengubah cara bisnis beroperasi, berkomunikasi dengan pelanggan, dan mencapai kesuksesan yang lebih besar.",
        en: "We believe that the right technology can transform how businesses operate, communicate with customers, and achieve greater success.",
    },
    aboutFeature1Title: { id: "Cepat & Efisien", en: "Fast & Efficient" },
    aboutFeature1Desc: { id: "Pengerjaan proyek yang tepat waktu dengan kualitas terbaik", en: "Timely project delivery with the best quality" },
    aboutFeature2Title: { id: "Fleksibel", en: "Flexible" },
    aboutFeature2Desc: { id: "Solusi yang dapat disesuaikan dengan kebutuhan bisnis Anda", en: "Solutions that can be tailored to your business needs" },
    aboutFeature3Title: { id: "Aman & Terpercaya", en: "Secure & Trusted" },
    aboutFeature3Desc: { id: "Keamanan data dan privasi adalah prioritas utama kami", en: "Data security and privacy are our top priorities" },

    // Services
    servicesBadge: { id: "Layanan Kami", en: "Our Services" },
    servicesTitle1: { id: "Solusi Digital", en: "Digital Solutions" },
    servicesTitle2: { id: "Untuk Setiap Kebutuhan", en: "For Every Need" },
    servicesDesc: {
        id: "Kami menyediakan berbagai layanan digital komprehensif untuk membantu bisnis Anda tumbuh dan berkembang di era digital",
        en: "We provide comprehensive digital services to help your business grow and thrive in the digital era",
    },
    servicesLearnMore: { id: "Pelajari Lebih Lanjut", en: "Learn More" },

    // Service Items
    serviceWeb: { id: "Pengembangan Web", en: "Web Development" },
    serviceWebDesc: { id: "Pembuatan website modern dengan teknologi terkini seperti Next.js, React, dan Node.js untuk performa optimal", en: "Modern website development with the latest technologies like Next.js, React, and Node.js for optimal performance" },
    serviceMobile: { id: "Aplikasi Mobile", en: "Mobile App" },
    serviceMobileDesc: { id: "Pengembangan aplikasi mobile cross-platform dengan Flutter dan React Native untuk iOS dan Android", en: "Cross-platform mobile app development with Flutter and React Native for iOS and Android" },
    serviceUI: { id: "Desain UI/UX", en: "UI/UX Design" },
    serviceUIDesc: { id: "Desain antarmuka yang intuitif dan menarik untuk meningkatkan pengalaman pengguna", en: "Intuitive and attractive interface design to enhance user experience" },
    serviceCloud: { id: "Solusi Cloud", en: "Cloud Solutions" },
    serviceCloudDesc: { id: "Migrasi dan pengelolaan infrastruktur cloud untuk skalabilitas dan keandalan bisnis Anda", en: "Cloud infrastructure migration and management for your business scalability and reliability" },
    serviceData: { id: "Analisis Data", en: "Data Analytics" },
    serviceDataDesc: { id: "Analisis data mendalam untuk insight bisnis yang actionable dan pengambilan keputusan yang lebih baik", en: "In-depth data analysis for actionable business insights and better decision making" },
    serviceIT: { id: "Dukungan IT", en: "IT Support" },
    serviceITDesc: { id: "Dukungan teknis profesional 24/7 untuk memastikan operasional bisnis Anda berjalan lancar", en: "24/7 professional technical support to ensure your business operations run smoothly" },

    // Team
    teamBadge: { id: "Tim Kami", en: "Our Team" },
    teamTitle1: { id: "Orang-Orang Hebat", en: "Great People" },
    teamTitle2: { id: "Di Balik Cliff Eleven", en: "Behind Cliff Eleven" },
    teamDesc: { id: "Tim profesional yang berdedikasi untuk memberikan solusi terbaik bagi bisnis Anda", en: "Professional team dedicated to providing the best solutions for your business" },

    // Contact
    contactBadge: { id: "Hubungi Kami", en: "Contact Us" },
    contactTitle1: { id: "Mari Bekerja", en: "Let's Work" },
    contactTitle2: { id: "Sama Bersama", en: "Together" },
    contactDesc: { id: "Punya proyek atau ide? Kami siap membantu mewujudkan visi digital Anda", en: "Have a project or idea? We're ready to help realize your digital vision" },
    contactName: { id: "Nama Lengkap", en: "Full Name" },
    contactEmail: { id: "Email", en: "Email" },
    contactSubject: { id: "Subjek", en: "Subject" },
    contactMessage: { id: "Pesan", en: "Message" },
    contactSend: { id: "Kirim Pesan", en: "Send Message" },
    contactSending: { id: "Mengirim...", en: "Sending..." },
    contactSent: { id: "Pesan Terkirim!", en: "Message Sent!" },
    contactAddress: { id: "Alamat", en: "Address" },
    contactPhone: { id: "Telepon", en: "Phone" },
    contactFollow: { id: "Ikuti Kami", en: "Follow Us" },
    contactMap: { id: "Lokasi Kami di Google Maps", en: "Our Location on Google Maps" },

    // Footer
    footerDesc: {
        id: "Partner teknologi terpercaya untuk transformasi digital bisnis Anda. Kami menghadirkan solusi inovatif yang modern dan berdampak.",
        en: "Your trusted technology partner for business digital transformation. We deliver modern and impactful innovative solutions.",
    },
    footerCompany: { id: "Perusahaan", en: "Company" },
    footerServices: { id: "Layanan", en: "Services" },
    footerSupport: { id: "Dukungan", en: "Support" },
    footerLegal: { id: "Legal", en: "Legal" },
    footerAbout: { id: "Tentang Kami", en: "About Us" },
    footerTeam: { id: "Tim", en: "Team" },
    footerCareer: { id: "Karir", en: "Career" },
    footerBlog: { id: "Blog", en: "Blog" },
    footerFaq: { id: "FAQ", en: "FAQ" },
    footerDocs: { id: "Dokumentasi", en: "Documentation" },
    footerStatus: { id: "Status", en: "Status" },
    footerPrivacy: { id: "Privasi", en: "Privacy" },
    footerTerms: { id: "Syarat & Ketentuan", en: "Terms & Conditions" },
    footerCookies: { id: "Cookies", en: "Cookies" },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("id");

    const t = (key: string): string => {
        const translation = translations[key];
        if (!translation) return key;
        return translation[language];
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
