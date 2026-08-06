import React, {useEffect, useState} from "react";
import { motion, type Variants } from "framer-motion";

type FormationEvent = {
    id: number;
    title: string;
    description: string;
    startDate: number;
    endDate?: number | string;
};

const translations = {
    en: {
        pageTitle: "My Journey",
        present: "Present",
        event1_title: "CFC & Technical Maturity in Computer Science",
        event1_desc: "Completed my apprenticeship and technical maturity at EMF, Fribourg.",
        event2_title: "Student job in elderly home",
        event2_desc: "Student Job in Housekeeping at the St. Joseph Morlon Residence",
        event3_title: "Internship at Fair-IT",
        event3_desc: "Final year internship focusing on full-stack development and enterprise solutions.",
        event4_title: "Bachelor of Science in Computer Science",
        event4_desc: "Currently studying at the School of Engineering and Architecture of Fribourg (HEIA-FR).",
        event5_title: "Student Job as Climbing Instructor",
        event5_desc: "Teaching weekly climbing lessons at L'Entrepot, Bulle.",
    },
    fr: {
        pageTitle: "Mon Parcours",
        present: "Aujourd'hui",
        event1_title: "CFC & Maturité Technique en Informatique",
        event1_desc: "Apprentissage et maturité technique terminés à l'EMF, Fribourg.",
        event2_title: "Job étudiant en EMS",
        event2_desc: "Job étudiant en intendance à la Résidence St. Joseph Morlon.",
        event3_title: "Stage chez Fair-IT",
        event3_desc: "Stage de fin d'études axé sur le développement full-stack et les solutions d'entreprise.",
        event4_title: "Bachelor of Science en Informatique",
        event4_desc: "Actuellement en études à la Haute école d'ingénierie et d'architecture de Fribourg (HEIA-FR).",
        event5_title: "Job étudiant comme moniteur d'escalade",
        event5_desc: "Donne des cours hebdomadaires d'escalade à L'Entrepot, Bulle.",
    }
};

function Formation({ isDarkMode, language }: { isDarkMode: boolean, language: string }) {
    const t = language === 'fr' ? translations.fr : translations.en;

    // State to track mobile screen size
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        // Set initial state and add listener
        setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // Cleanup listener on unmount
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);


    const theme = {
        pageContainer: {
            color: isDarkMode ? "#eee" : "#333",
        },
        line: {
            backgroundColor: isDarkMode ? "#333" : "#ddd",
        },
        dot: {
            backgroundColor: "#6366f1",
            border: `3px solid ${isDarkMode ? "#1e1e1e" : "#fff"}`,
        },
        card: {
            background: isDarkMode ? "#222" : "#f9f9f9",
            border: `1px solid ${isDarkMode ? "#333" : "#ddd"}`,
        },
        cardTitle: {
            color: isDarkMode ? "#ddd" : "#333",
        },
        cardDescription: {
            color: isDarkMode ? "#aaa" : "#666",
        }
    };

    const events: FormationEvent[] = [
        { id: 1, title: t.event1_title, description: t.event1_desc, startDate: 2019, endDate: 2023 },
        { id: 2, title: t.event2_title, description: t.event2_desc, startDate: 2020, endDate: 2023 },
        { id: 3, title: t.event3_title, description: t.event3_desc, startDate: 2022, endDate: 2023 },
        { id: 4, title: t.event4_title, description: t.event4_desc, startDate: 2023, endDate: t.present },
        { id: 5, title: t.event5_title, description: t.event5_desc, startDate: 2023, endDate: t.present },
    ];

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <div style={{ ...pageContainer, ...theme.pageContainer }}>
            <h1 style={pageTitle}>{t.pageTitle}</h1>
            <div style={timelineContainer}>
                <div style={{ ...lineStyle, ...theme.line }}></div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {events.map((event, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <motion.div key={event.id} variants={itemVariants} style={eventWrapper(isLeft, isMobile)}>
                                <div style={{ ...dotStyle(isLeft, isMobile), ...theme.dot }}></div>
                                <div style={{ ...cardStyle, ...theme.card }}>
                                    <h3 style={{...cardTitle, ...theme.cardTitle}}>{event.title}</h3>
                                    <p style={{...cardDescription, ...theme.cardDescription}}>{event.description}</p>
                                    <span style={dateStyle}>
                                        {event.startDate} {event.endDate ? ` - ${event.endDate}` : ''}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}

export default Formation;

// Styles
const pageContainer: React.CSSProperties = {
    maxWidth: "900px",
    margin: "2rem auto",
    padding: "2rem 1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const pageTitle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '4rem',
};

const timelineContainer: React.CSSProperties = {
    position: "relative",
    padding: "20px 0",
};

const lineStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "3px",
    left: "50%",
    transform: "translateX(-50%)",
};

const eventWrapper = (isLeft: boolean, isMobile: boolean): React.CSSProperties => ({
    position: "relative",
    boxSizing: "border-box",
    marginBottom: "40px",
    // --- Desktop Styles ---
    ...(!isMobile && {
    width: "50%",
    padding: `0 40px`,
    left: isLeft ? 0 : "50%",
    textAlign: isLeft ? "right" : "left",
    }),
    // --- Mobile Styles ---
    ...(isMobile && {
        width: "100%",
        padding: '30px 25px 0 25px',
        textAlign: 'center', // Center the card within the wrapper
    }),
});

const dotStyle = (isLeft: boolean, isMobile: boolean): React.CSSProperties => ({
    position: "absolute",
    top: "0",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    zIndex: 1,
    // --- Desktop Styles ---
    ...(!isMobile && (isLeft ? { right: "-8.5px", top: "5px" } : { left: "-6.5px", top: "5px" })),
    // --- Mobile Styles ---
    ...(isMobile && {
        left: '50%',
        transform: 'translateX(-50%)',
    }),
});

const cardStyle: React.CSSProperties = {
    padding: "20px 25px",
    borderRadius: "10px",
    display: "inline-block",
    position: "relative",
    textAlign: 'left',
    width: '100%',
    boxSizing: 'border-box',
    maxWidth: '400px',
};

const cardTitle: React.CSSProperties = {
    margin: "0 0 10px 0",
    fontSize: "1.2rem",
};

const cardDescription: React.CSSProperties = {
    margin: "0 0 12px 0",
    fontSize: "0.95rem",
    lineHeight: 1.5,
};

const dateStyle: React.CSSProperties = {
    fontSize: "0.85rem",
    color: "#6366f1",
    fontWeight: "bold",
};