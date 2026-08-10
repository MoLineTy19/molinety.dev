const SITE_URL = "https://molinety.ru";

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "MoLineTy",
    jobTitle: "Fullstack Developer",
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    email: "mailto:drcomprf@gmail.com",
    knowsLanguage: ["ru", "en"],
    knowsAbout: [
        "Python",
        "Go",
        "TypeScript",
        "React",
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "REST API",
    ],
    sameAs: [
        "https://github.com/MoLineTy19",
        "https://t.me/im_so_good",
        "https://kwork.ru/user/molinety",
    ],
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "MoLineTy · Fullstack Developer",
    description:
        "Fullstack-разработчик. Бэкенд на Python и Go, фронтенд на React/Next.js.",
    inLanguage: "ru-RU",
    author: { "@id": `${SITE_URL}/#person` },
};

export const jsonLdScripts = [personSchema, websiteSchema];
