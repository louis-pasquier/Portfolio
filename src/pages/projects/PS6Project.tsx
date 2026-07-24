import * as React from 'react';

const translations = {
    en: {
        title: "Semester 6 Project: Is Zephyr RTOS Safe?",
        info: "Academic Information: This project was carried out during the 6th semester (2026) in the Computer Science and Communication Systems program (Software Engineering specialization) at the School of Engineering and Architecture of Fribourg (HEIA-FR). It was supervised by Luca Haab and Serge Ayer.",
        overviewTitle: "Project Overview",
        overviewText: "The challenge of this project is to determine if Zephyr, an open-source real-time operating system (RTOS), is safe enough to be used in critical systems such as aerospace, automotive, or medical devices. The central issue focuses on software sealing, analyzing how to leverage Zephyr's privilege separation mechanisms to ensure system integrity.",
        responsibilitiesTitle: "Key Responsibilities and Applied Skills",
        resp1: "Agile Project Management: Divided the project into six two-week sprints, with rigorous tracking of tasks and estimated development time on Gitlab.",
        resp2: "C++ Development on Embedded Systems: Structured the application via CMakeLists.txt and prj.conf files, and implemented the code in C++ using the in-house zpp_lib library.",
        resp3: "Privilege Separation: Implemented user and supervisor modes by activating the CONFIG_USERSPACE configuration and specifically managing access permissions to kernel objects.",
        resp4: "Memory Protection Unit (MPU) Analysis: Conducted crash tests by causing memory access violations in user mode to verify and validate the MPU intervention.",
        resp5: "Open-Source Contribution: Identified and reported a bug in the Zephyr GPIO API where `gpio_pin_set_dt` caused an MPU fault in user mode unlike `gpio_pin_toggle_dt`. Opened an issue on the official Zephyr repository to document this behavior.",
        techTitle: "Technologies Used",
        techText: "Zephyr RTOS, C++, CMake, Gitlab, JLink Segger, MPU (Memory Protection Unit)."
    },
    fr: {
        title: "Projet de Semestre 6 : Zephyr RTOS est-il Safe ?",
        info: "Informations académiques : Ce projet a été réalisé lors du semestre 6 (2026) au sein de la filière Informatique et Systèmes de Communication (orientation Ingénierie logicielle) de la Haute école d'ingénierie et d'architecture Fribourg (HEIA-FR). Il a été supervisé par Luca Haab et Serge Ayer.",
        overviewTitle: "Aperçu du projet",
        overviewText: "L'enjeu de ce projet est de déterminer si Zephyr, un système d'exploitation temps réel (RTOS) open-source, est suffisamment sûr pour être utilisé dans des systèmes critiques tels que l'aérospatiale, l'automobile ou les dispositifs médicaux. La problématique centrale se concentre sur l'étanchéité logicielle, en analysant comment exploiter les mécanismes de séparation des privilèges de Zephyr pour garantir l'intégrité du système.",
        responsibilitiesTitle: "Responsabilités clés et compétences appliquées",
        resp1: "Gestion de Projet Agile : Découpage du projet en six sprints de deux semaines, avec un suivi rigoureux des tâches et du temps de développement estimé sur Gitlab.",
        resp2: "Développement C++ sur système embarqué : Structuration de l'application via des fichiers CMakeLists.txt et prj.conf, et implémentation du code en C++ en utilisant la librairie maison zpp_lib.",
        resp3: "Séparation des privilèges : Mise en place des modes utilisateur et superviseur en activant la configuration CONFIG_USERSPACE et en gérant spécifiquement les permissions d'accès aux objets du noyau.",
        resp4: "Analyse de l'unité de protection mémoire (MPU) : Réalisation de tests de plantage (Crash Tests) en provoquant des violations d'accès mémoire en mode utilisateur pour vérifier et valider l'intervention du MPU.",
        resp5: "Contribution Open-Source : Identification et signalement d'un bug dans l'API GPIO de Zephyr où `gpio_pin_set_dt` provoquait une erreur MPU en mode utilisateur contrairement à `gpio_pin_toggle_dt`. Ouverture d'une issue sur le dépôt officiel de Zephyr pour documenter ce comportement.",
        techTitle: "Technologies utilisées",
        techText: "Zephyr RTOS, C++, CMake, Gitlab, JLink Segger, MPU (Memory Protection Unit)."
    }
};

function PS6Project({ language, isDarkMode }: { language: string, isDarkMode: boolean }) {
    const t = language === 'fr' ? translations.fr : translations.en;

    const theme = {
        infoBox: {
            background: isDarkMode ? '#2d2d2d' : '#f4f6f8',
            color: isDarkMode ? '#ccc' : '#24292f',
            border: isDarkMode ? '1px solid #444' : '1px solid #c8d1d9',
        }
    };

    return (
        <div style={projectContainer}>
            <h1 style={title}>{t.title}</h1>

            <div style={{...infoBox, ...theme.infoBox}}>
                <p><strong>{t.info.split(':')[0]}:</strong>{t.info.split(':')[1]}</p>
            </div>

            <div style={section}>
                <h2>{t.overviewTitle}</h2>
                <p>{t.overviewText}</p>
            </div>

            <div style={section}>
                <h2>{t.responsibilitiesTitle}</h2>
                <ul>
                    <li><strong>{t.resp1.split(':')[0]}:</strong>{t.resp1.split(':')[1]}</li>
                    <li><strong>{t.resp2.split(':')[0]}:</strong>{t.resp2.split(':')[1]}</li>
                    <li><strong>{t.resp3.split(':')[0]}:</strong>{t.resp3.split(':')[1]}</li>
                    <li><strong>{t.resp4.split(':')[0]}:</strong>{t.resp4.split(':')[1]}</li>
                    <li><strong>{t.resp5.split(':')[0]}:</strong>{t.resp5.split(':')[1]}</li>
                </ul>
            </div>

            <div style={section}>
                <h2>{t.techTitle}</h2>
                <p>{t.techText}</p>
            </div>
        </div>
    );
}

export default PS6Project;

const projectContainer: React.CSSProperties = {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '0 1rem',
    lineHeight: '1.6',
};

const title: React.CSSProperties = {
    borderBottom: '2px solid #444',
    paddingBottom: '0.5rem',
    marginBottom: '1.5rem',
};

const infoBox: React.CSSProperties = {
    borderRadius: '8px',
    padding: '1rem 1.5rem',
    marginBottom: '2rem',
    fontStyle: 'italic',
};

const section: React.CSSProperties = {
    marginBottom: '2rem',
};
