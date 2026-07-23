import * as React from 'react';

const translations = {
    en: {
        title: "Semester 5 Project: Barcode Scanners for Inventory Management",
        info: "Academic and Client Information: This project was carried out by Louis Pasquier during the 5th semester (2025/2026) in the Computer Science and Communication Systems program at HEIA-FR, under the supervision of Jacques Supcik and Frédéric Bapst. The project was commissioned by Mr. Sawwaf, director of the Albert le Grand bookstore.",
        overviewTitle: "Project Overview",
        overviewText: "This project aimed to modernize a bookstore's inventory management by developing new firmware for a barcode scanner based on a C SDK. In parallel, new data transfer software was designed to retrieve scanned information via Bluetooth or a wired station, with a strong portability constraint across modern operating systems (Mac, Linux, Windows).",
        responsibilitiesTitle: "Key Responsibilities and Applied Skills",
        resp1: "Embedded Firmware Development: Added new features to the scanner such as quantity entry after a scan, improved error correction (scrolling up the list from the end), and using the scanner as a keyboard.",
        resp2: "Bluetooth Communication: Analysis and integration of Bluetooth HDI (Human Interface Device) and SPP (Serial Port Profile) profiles to ensure wireless data transmission to the PC.",
        resp3: "Transfer Tool Development: Chose and used the Go language to design the data reception software, selected for its high portability and ease of installation compared to alternatives like Java or Python.",
        resp4: "Reverse Engineering and Linux Portability: Decompiled a Windows checksum tool (.exe) using Ghidra to make the firmware compilation compatible with Linux. The identified algorithm was then reconstructed in Python.",
        resp5: "Software Design: Modeled the software architecture through use-case UML diagrams to clearly define user interactions with the scanner and the PC software.",
        techTitle: "Technologies Used",
        techText: "C (SDK), Go, Python, Ghidra, Bluetooth (HDI & SPP Profiles), UML."
    },
    fr: {
        title: "Projet de Semestre 5 : Lecteurs de codes barres pour gestion de stock",
        info: "Informations académiques et mandant : Ce projet a été réalisé par Louis Pasquier lors du semestre 5 (2025/2026) au sein de la filière Informatique et Systèmes de Communication de la HEIA-FR, sous la supervision de Jacques Supcik et Frédéric Bapst. Le projet a été commandité par M. Sawwaf, directeur de la librairie Albert le Grand.",
        overviewTitle: "Aperçu du projet",
        overviewText: "Ce projet visait à moderniser la gestion de stock d'une librairie en développant un nouveau firmware pour un lecteur de codes-barres basé sur un SDK en C. En parallèle, un nouveau logiciel de transfert de données a été conçu pour récupérer les informations scannées via Bluetooth ou via une station filaire, avec une forte contrainte de portabilité sur des systèmes d'exploitation récents (Mac, Linux, Windows).",
        responsibilitiesTitle: "Responsabilités clés et compétences appliquées",
        resp1: "Développement de Firmware embarqué : Ajout de nouvelles fonctionnalités sur le scanner telles que la saisie de la quantité après un scan, l'amélioration de la correction d'erreurs (remontée de la liste depuis la fin), et l'utilisation de la douchette comme clavier.",
        resp2: "Communication Bluetooth : Analyse et intégration des profils Bluetooth HDI (Human Interface Device) et SPP (Serial Port Profile) pour assurer la transmission des données sans fil vers le PC.",
        resp3: "Développement de l'outil de transfert : Choix et utilisation du langage Go pour concevoir le logiciel de réception des données, sélectionné pour son haut niveau de portabilité et sa facilité d'installation face à des alternatives comme Java ou Python.",
        resp4: "Rétro-ingénierie et portabilité Linux : Décompilation d'un outil de checksum Windows (.exe) à l'aide de Ghidra afin de rendre la compilation du firmware compatible avec Linux. L'algorithme identifié a ensuite été reconstruit en Python.",
        resp5: "Conception logicielle : Modélisation de l'architecture logicielle à travers des diagrammes de cas d'utilisation (use-case UML) pour définir clairement les interactions de l'utilisateur avec le scanner et le logiciel PC.",
        techTitle: "Technologies utilisées",
        techText: "C (SDK), Go, Python, Ghidra, Bluetooth (Profils HDI et SPP), UML."
    }
};

function PS5Project({ language, isDarkMode }: { language: string, isDarkMode: boolean }) {
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

export default PS5Project;

const projectContainer: React.CSSProperties = {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '0 1rem',
    lineHeight: '1.6',
    fontFamily: 'system-ui, -apple-system, sans-serif'
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