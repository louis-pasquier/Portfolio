import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Translation = { [key: string]: string };

const translations: { en: Translation; fr: Translation } = {
    en: {
        pageTitle: "Skills",

        cat1: "Software Engineering & Architecture",
        desc1: "Strong foundation in object-oriented programming, algorithms, data structures, design patterns, and concurrent programming. Experience designing maintainable software architectures, with academic exposure to compiler construction, code optimization, and machine learning.",

        cat2: "Frontend",
        desc2: "Development of modern web and cross-platform mobile applications with responsive, maintainable, and user-focused interfaces.",

        cat3: "Backend & Databases",
        desc3: "Design and development of APIs, distributed systems, microservice-based architectures, message-driven communication, and relational database design.",

        cat4: "Embedded Systems",
        desc4: "Low-level software development for ARM Cortex-M microcontrollers, including STM32, Nordic nRF, and Raspberry Pi Pico platforms, using RTOS and bare-metal programming.",

        cat5: "Systems & Infrastructure",
        desc5: "Administration of Linux and Windows environments, virtualization, networking, containerization, and orchestration for reliable and scalable infrastructure.",

        cat6: "DevOps & GitOps",
        desc6: "CI/CD pipeline automation, infrastructure deployment, and GitOps workflows for consistent software delivery and operational reliability.",

        cat7: "IT Management",
        desc7: "Experience working with Agile/Scrum and Waterfall methodologies, technical specifications, project documentation, meeting facilitation, and stakeholder communication.",
    },

    fr: {
        pageTitle: "Compétences",

        cat1: "Ingénierie & Architecture Logicielle",
        desc1: "Solides bases en programmation orientée objet, algorithmes, structures de données, design patterns et programmation concurrente. Expérience dans la conception d'architectures logicielles maintenables, avec une formation en construction de compilateurs, optimisation de code et apprentissage automatique.",

        cat2: "Frontend",
        desc2: "Développement d'applications web modernes et d'applications mobiles multiplateformes avec des interfaces réactives, maintenables et centrées sur l'utilisateur.",

        cat3: "Backend & Bases de données",
        desc3: "Conception et développement d'APIs, de systèmes distribués, d'architectures orientées microservices, de communications par messagerie et de bases de données relationnelles.",

        cat4: "Systèmes embarqués",
        desc4: "Développement logiciel bas niveau pour microcontrôleurs ARM Cortex-M, notamment STM32, Nordic nRF et Raspberry Pi Pico, avec RTOS et programmation bare-metal.",

        cat5: "Systèmes & Infrastructure",
        desc5: "Administration d'environnements Linux et Windows, virtualisation, réseaux, conteneurisation et orchestration pour des infrastructures fiables et évolutives.",

        cat6: "DevOps & GitOps",
        desc6: "Automatisation des pipelines CI/CD, déploiement d'infrastructures et mise en œuvre de workflows GitOps pour une livraison logicielle fiable et reproductible.",

        cat7: "Gestion IT",
        desc7: "Expérience des méthodologies Agile/Scrum et Waterfall, rédaction de spécifications techniques, documentation de projet, animation de réunions et communication avec les parties prenantes.",
    }
};

const skillsData = [
    {
        categoryKey: "cat1",
        descriptionKey: "desc1",
        technologies: ["Java", "C++", "Python", "Go", "C#"]
    },
    {
        categoryKey: "cat2",
        descriptionKey: "desc2",
        technologies: ["React", "TypeScript", "Flutter", "Kotlin", "Swift"]
    },
    {
        categoryKey: "cat3",
        descriptionKey: "desc3",
        technologies: ["Spring Boot", ".NET", "REST API", "GraphQL", "MQTT", "PostgreSQL", "MySQL", "Oracle"]
    },
    {
        categoryKey: "cat4",
        descriptionKey: "desc4",
        technologies: ["C", "C++", "MbedOS", "Zephyr RTOS"]
    },
    {
        categoryKey: "cat5",
        descriptionKey: "desc5",
        technologies: ["Linux", "Windows Server", "VMware", "Cisco (switches, routers)", "Docker", "Kubernetes"]
    },
    {
        categoryKey: "cat6",
        descriptionKey: "desc6",
        technologies: ["GitLab CI/CD", "ArgoCD", "GitHub Actions"]
    },
    {
        categoryKey: "cat7",
        descriptionKey: "desc7",
        technologies: ["Agile/Scrum"]
    }
];


function Skills({ language, isDarkMode }: { language: string, isDarkMode: boolean }) {
    const t = language === 'fr' ? translations.fr : translations.en;
    const [openCategory, setOpenCategory] = useState<string | null>(skillsData[0].categoryKey);

    const theme = {
        pageTitle: { color: isDarkMode ? '#eee' : '#333' },
        categoryBranch: { background: isDarkMode ? "#222" : "#f9f9f9" },
        categoryTitle: { color: isDarkMode ? '#ddd' : '#333' },
        description: { color: isDarkMode ? '#bbb' : '#555' },
        techItem: {
            background: isDarkMode ? '#333' : '#eee',
            color: isDarkMode ? '#ccc' : '#333',
        }
    };

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div style={styles.container}>
            <h1 style={{ ...styles.pageTitle, ...theme.pageTitle }}>{t.pageTitle}</h1>
            <div style={styles.treeContainer}>
                {skillsData.map((skill) => (
                    <div key={skill.categoryKey} style={{ ...styles.categoryBranch, ...theme.categoryBranch }}>
                        <h2 onClick={() => toggleCategory(skill.categoryKey)} style={{ ...styles.categoryTitle, ...theme.categoryTitle }}>
                            <motion.div animate={{ rotate: openCategory === skill.categoryKey ? 90 : 0 }} style={styles.arrow}>▸</motion.div>
                            {t[skill.categoryKey]}
                        </h2>
                        <AnimatePresence>
                            {openCategory === skill.categoryKey && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <p style={{ ...styles.description, ...theme.description }}>{t[skill.descriptionKey]}</p>
                                    <div style={styles.techList}>
                                        {skill.technologies.map((tech) => (
                                            <div key={tech} style={{ ...styles.techItem, ...theme.techItem }}>
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        maxWidth: "900px",
        margin: "2rem auto",
        padding: "0 2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    pageTitle: {
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '3rem',
    },
    treeContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    categoryBranch: {
        borderRadius: "8px",
        padding: "1rem 1.5rem",
    },
    categoryTitle: {
        cursor: "pointer",
        userSelect: "none",
        fontSize: "1.4rem",
        display: 'flex',
        alignItems: 'center',
    },
    arrow: {
        marginRight: '1rem',
        display: 'inline-block'
    },
    description: {
        margin: "1rem 0",
        lineHeight: 1.6,
    },
    techList: {
        paddingTop: "1rem",
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem'
    },
    techItem: {
        padding: "0.5rem 1rem",
        borderRadius: '5px',
        fontSize: '0.9rem',
    },
};