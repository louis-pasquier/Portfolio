import * as React from 'react';

function PS5Project() {
    return (
        <div style={projectContainer}>
            <h1 style={title}>Projet de Semestre 5 : Lecteurs de codes barres pour gestion de stock</h1>

            <div style={infoBox}>
                <p><strong>Informations académiques et mandant :</strong> Ce projet a été réalisé par Louis Pasquier lors du semestre 5 (2025/2026) au sein de la filière Informatique et Systèmes de Communication de la HEIA-FR, sous la supervision de Jacques Supcik et Frédéric Bapst. Le projet a été commandité par M. Sawwaf, directeur de la librairie Albert le Grand.</p>
            </div>

            <div style={section}>
                <h2>Aperçu du projet</h2>
                <p>
                    Ce projet visait à moderniser la gestion de stock d'une librairie en développant un nouveau firmware pour un lecteur de codes-barres basé sur un SDK en C. En parallèle, un nouveau logiciel de transfert de données a été conçu pour récupérer les informations scannées via Bluetooth ou via une station filaire, avec une forte contrainte de portabilité sur des systèmes d'exploitation récents (Mac, Linux, Windows).
                </p>
            </div>

            <div style={section}>
                <h2>Responsabilités clés et compétences appliquées</h2>
                <ul>
                    <li><strong>Développement de Firmware embarqué :</strong> Ajout de nouvelles fonctionnalités sur le scanner telles que la saisie de la quantité après un scan, l'amélioration de la correction d'erreurs (remontée de la liste depuis la fin), et l'utilisation de la douchette comme clavier.</li>
                    <li><strong>Communication Bluetooth :</strong> Analyse et intégration des profils Bluetooth HDI (Human Interface Device) et SPP (Serial Port Profile) pour assurer la transmission des données sans fil vers le PC.</li>
                    <li><strong>Développement de l'outil de transfert :</strong> Choix et utilisation du langage Go pour concevoir le logiciel de réception des données, sélectionné pour son haut niveau de portabilité et sa facilité d'installation face à des alternatives comme Java ou Python.</li>
                    <li><strong>Rétro-ingénierie et portabilité Linux :</strong> Décompilation d'un outil de checksum Windows (.exe) à l'aide de Ghidra afin de rendre la compilation du firmware compatible avec Linux. L'algorithme, identifié comme une somme additive 16 bits, a ensuite été reconstruit en Python.</li>
                    <li><strong>Conception logicielle :</strong> Modélisation de l'architecture logicielle à travers des diagrammes de cas d'utilisation (use-case UML) pour définir clairement les interactions de l'utilisateur avec le scanner et le logiciel PC.</li>
                </ul>
            </div>

            <div style={section}>
                <h2>Technologies utilisées</h2>
                <p>
                    C (SDK), Go, Python, Ghidra, Bluetooth (Profils HDI et SPP), UML.
                </p>
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