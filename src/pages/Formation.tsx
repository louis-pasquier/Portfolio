import React from "react";
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
        event1_title: "CFC & Technical maturity in computer science",
        event1_desc: "Completed my apprenticeship and technical maturity at EMF, Fribourg.",
        event2_title: "Student job in elderly home",
        event2_desc: "Student job in housekeeping at the St. Joseph care home in Morlon",
        event3_title: "Internship at Fair-IT",
        event3_desc: "Final year internship focusing on backend development for CID ERP.",
        event4_title: "Bachelor in computer science",
        event4_desc: "Specialisation in software engineering at the school of engineering and architecture of Fribourg (HEIA-FR).",
        event5_title: "Student job as climbing instructor",
        event5_desc: "Teaching weekly climbing lessons at L'Entrepot, Bulle.",
    },
    fr: {
        pageTitle: "Mon Parcours",
        present: "Aujourd'hui",
        event1_title: "CFC & maturité technique en informatique",
        event1_desc: "Apprentissage et maturité technique terminés à l'EMF, Fribourg.",
        event2_title: "Job étudiant en EMS",
        event2_desc: "Job étudiant en intendance au foyer St. Joseph à Morlon.",
        event3_title: "Stage chez Fair-IT",
        event3_desc: "Stage de fin d'études axé sur le développement backend de CID ERP.",
        event4_title: "Bachelor en informatique",
        event4_desc: "Orientation ingénieurie logicielle à la haute école d'ingénierie et d'architecture de Fribourg (HEIA-FR).",
        event5_title: "Job étudiant comme moniteur d'escalade",
        event5_desc: "Donne des cours hebdomadaires d'escalade à L'Entrepot, Bulle.",
    }
};

function Formation({ isDarkMode, language }: { isDarkMode: boolean, language: string }) {
    const t = language === 'fr' ? translations.fr : translations.en;

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
        { id: 4, title: t.event4_title, description: t.event4_desc, startDate: 2023, endDate: 2026 },
        { id: 5, title: t.event5_title, description: t.event5_desc, startDate: 2023, endDate: 2026 },
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
                            <motion.div key={event.id} variants={itemVariants} style={eventWrapper(isLeft)}>
                                <div style={{ ...dotStyle(isLeft), ...theme.dot }}></div>
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
    padding: "2rem",
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
    left: "50%",
    top: 0,
    bottom: 0,
    width: "3px",
    transform: "translateX(-50%)",
};

const eventWrapper = (isLeft: boolean): React.CSSProperties => ({
    position: "relative",
    width: "50%",
    padding: `0 40px`,
    boxSizing: "border-box",
    left: isLeft ? 0 : "50%",
    textAlign: isLeft ? "right" : "left",
    marginBottom: "40px",
});

const dotStyle = (isLeft: boolean): React.CSSProperties => ({
    position: "absolute",
    top: "5px",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    zIndex: 1,
    ...(isLeft ? { right: "-8.5px" } : { left: "-6.5px" }),
});

const cardStyle: React.CSSProperties = {
    padding: "20px 25px",
    borderRadius: "10px",
    display: "inline-block",
    position: "relative",
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