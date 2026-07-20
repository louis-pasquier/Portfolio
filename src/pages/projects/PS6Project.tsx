import * as React from 'react';

function PS6Project() {
    return (
        <div style={projectContainer}>
            <h1 style={title}>Projet de Semestre 6 : Zephyr RTOS est-il Safe ?</h1>

            <div style={infoBox}>
                <p><strong>Informations académiques :</strong> Ce projet a été réalisé par Louis Pasquier pour l'année 2025/2026 au sein de la filière Informatique et Systèmes de Communication (orientation Ingénierie logicielle) de la Haute école d'ingénierie et d'architecture Fribourg (HEIA-FR). Il a été supervisé par Haab Luca et Ayer Serge.</p>
            </div>

            <div style={section}>
                <h2>Aperçu du projet</h2>
                <p>
                    L'enjeu de ce projet est de déterminer si Zephyr, un système d'exploitation temps réel (RTOS) open-source, est suffisamment sécurisé pour être utilisé dans des systèmes critiques tels que l'aérospatiale, l'automobile ou les dispositifs médicaux. La problématique centrale se concentre sur l'étanchéité logicielle, en analysant comment exploiter les mécanismes de séparation des privilèges de Zephyr pour garantir l'intégrité du système grâce à l'isolation spatiale et temporelle.
                </p>
            </div>

            <div style={section}>
                <h2>Responsabilités clés et compétences appliquées</h2>
                <ul>
                    <li><strong>Gestion de Projet Agile :</strong> Découpage du projet en six sprints de deux semaines, avec un suivi rigoureux des tâches et du temps de développement estimé sur Gitlab.</li>
                    <li><strong>Développement C++ sur système embarqué :</strong> Structuration de l'application via des fichiers CMakeLists.txt et prj.conf, et implémentation du code en C++ en utilisant la librairie maison zpp_lib.</li>
                    <li><strong>Séparation des privilèges :</strong> Mise en place des modes utilisateur et superviseur en activant la configuration CONFIG_USERSPACE et en gérant spécifiquement les permissions d'accès aux objets du noyau.</li>
                    <li><strong>Analyse de l'unité de protection mémoire (MPU) :</strong> Réalisation de tests de plantage (Crash Tests) en provoquant des violations d'accès mémoire en mode utilisateur pour vérifier et valider l'intervention sécuritaire du MPU.</li>
                    <li><strong>Débogage matériel :</strong> Résolution de problèmes de communication entre Windows et la cible matérielle en configurant manuellement les pilotes de l'interface BULK vers le driver JLink Segger.</li>
                </ul>
            </div>

            <div style={section}>
                <h2>Technologies utilisées</h2>
                <p>
                    Zephyr RTOS, C++, CMake, Gitlab, JLink Segger, MPU (Memory Protection Unit).
                </p>
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
    background: '#f4f6f8',
    border: '1px solid #c8d1d9',
    borderRadius: '8px',
    padding: '1rem 1.5rem',
    marginBottom: '2rem',
    fontStyle: 'italic',
    color: '#24292f'
};

const section: React.CSSProperties = {
    marginBottom: '2rem',
};