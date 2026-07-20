import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const technologyTree = [
    {
        category: "Web Development",
        technologies: [
            { name: "React", url: "https://reactjs.org/" },
            { name: "TypeScript", url: "https://www.typescriptlang.org/" },
            { name: "VueJS", url: "https://vuejs.org/" },
        ]
    },
    {
        category: "Backend",
        technologies: [
            { name: "Spring Boot", url: "https://spring.io/projects/spring-boot" },
            { name: "Python", url: "https://www.python.org/" },
            { name: ".NET", url: "https://dotnet.microsoft.com/" }
        ]
    },
    {
        category: "Mobile App Development",
        technologies: [
            { name: "Flutter", url: "https://flutter.dev" },
            { name: "Android (Java/Kotlin)", url: "https://developer.android.com/" },
            { name: "iOS (Swift)", url: "https://developer.apple.com/swift/" },
            { name: "React Native", url: "https://reactnative.dev/" }
        ]
    },
    {
        category: "Embedded Systems",
        technologies: [
            { name: "C", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
            { name: "C++", url: "https://isocpp.org/" },
            { name: "Mbed OS", url: "https://os.mbed.com/" },
            { name: "Zephyr RTOS", url: "https://www.zephyrproject.org/" }
        ]
    },
    {
        category: "Databases",
        technologies: [
            { name: "PostgreSQL", url: "https://www.postgresql.org/" },
            { name: "MySQL", url: "https://www.mysql.com/" },
            { name: "Oracle DB", url: "https://www.oracle.com/database/" }
        ]
    },
    {
        category: "System & DevOps",
        technologies: [
            { name: "Windows Server", url: "https://www.microsoft.com/en-us/windows-server" },
            { name: "Linux", url: "https://www.linux.org/" },
            { name: "Gitlab", url: "https://about.gitlab.com/" },
            { name: "Github", url: "https://github.com/" },
            { name: "Jelastic", url: "https://jelastic.com/" },
            { name: "Kubernetes", url: "https://kubernetes.io/" }
        ]
    },
];

function Technologies() {
    const [openCategory, setOpenCategory] = useState<string | null>(technologyTree[0].category);

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div style={technologiesContainer}>
            <h1 style={pageTitle}>Technologies</h1>
            <div style={treeContainer}>
                {technologyTree.map((branch) => (
                    <div key={branch.category} style={categoryBranch}>
                        <h2 onClick={() => toggleCategory(branch.category)} style={categoryTitle}>
                            <motion.div animate={{ rotate: openCategory === branch.category ? 90 : 0 }} style={arrowStyle}>▸</motion.div>
                            {branch.category}
                        </h2>
                        <AnimatePresence>
                            {openCategory === branch.category && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div style={techList}>
                                        {branch.technologies.length > 0 ? (
                                            branch.technologies.map((tech) => (
                                                <a href={tech.url} target="_blank" rel="noopener noreferrer" key={tech.name} style={techItem}>
                                                    <span style={techName}>{tech.name}</span>
                                                </a>
                                            ))
                                        ) : (
                                            <p>No technologies listed in this category yet.</p>
                                        )}
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

export default Technologies;

const technologiesContainer: React.CSSProperties = {
    maxWidth: "900px",
    margin: "2rem auto",
    padding: "0 2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const pageTitle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '3rem',
    color: '#eee'
};

const treeContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
};

const categoryBranch: React.CSSProperties = {
    background: "#222",
    borderRadius: "8px",
    padding: "1rem 1.5rem",
};

const categoryTitle: React.CSSProperties = {
    cursor: "pointer",
    userSelect: "none",
    fontSize: "1.4rem",
    display: 'flex',
    alignItems: 'center',
    color: '#ddd'
};

const arrowStyle: React.CSSProperties = {
    marginRight: '1rem',
    display: 'inline-block'
};

const techList: React.CSSProperties = {
    paddingTop: "1rem",
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem'
};

const techItem: React.CSSProperties = {
    background: '#333',
    padding: "0.5rem 1rem",
    borderRadius: '5px',
    textDecoration: 'none',
    color: '#ccc',
    transition: 'background-color 0.2s',
};

const techName: React.CSSProperties = {
    margin: 0,
    fontSize: '1rem',
};
