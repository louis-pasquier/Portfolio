import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = [
    {
        category: "Software Engineering & Architecture",
        skills: [
            { name: "Object-Oriented Analysis & Design (OOAD)" },
            { name: "Design Patterns" },
            { name: "System Architecture" },
            { name: "Software Refactoring" },
            { name: "Enterprise Information Systems (IS Integration)" },
            { name: "Software Optimization" }
        ]
    },
    {
        category: "Programming Paradigms",
        skills: [
            { name: "Multi-paradigm Programming" },
            { name: "Advanced Java" },
            { name: "C/C++" },
            { name: "Systems & Low-Level Programming" }
        ]
    },
    {
        category: "Web & Mobile Applications",
        skills: [
            { name: "Native/Cross-platform Mobile App Development" },
            { name: "Full-Stack Web Development" },
            { name: "REST APIs" },
            { name: "Microservices" },
            { name: "UI/UX Principles & Human-Machine Interaction (HMI)" }
        ]
    },
    {
        category: "Data & Information Systems",
        skills: [
            { name: "Relational Databases" },
            { name: "System & Data Security" },
            { name: "Distributed Data Processing" }
        ]
    },
    {
        category: "Systems & Infrastructure",
        skills: [
            { name: "Computer Architecture" },
            { name: "Concurrent & Parallel Systems" },
            { name: "Operating Systems" },
            { name: "Networking & Telecommunications" }
        ]
    },
    {
        category: "Methodologies & Management",
        skills: [
            { name: "Agile/Scrum" },
            { name: "Project Management (GPIT)" },
            { name: "Version Control (Git)" },
            { name: "IT Law & Economics" },
            { name: "Collaborative Team Engineering" }
        ]
    }
];

function Skills() {
    const [openCategory, setOpenCategory] = useState<string | null>(skillsData[0].category);

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div style={skillsContainer}>
            <h1 style={pageTitle}>Skills</h1>
            <div style={treeContainer}>
                {skillsData.map((branch) => (
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
                                    <div style={skillList}>
                                        {branch.skills.length > 0 ? (
                                            branch.skills.map((skill) => (
                                                <div key={skill.name} style={skillItem}>
                                                    <span style={skillName}>{skill.name}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No skills listed in this category yet.</p>
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

export default Skills;

const skillsContainer: React.CSSProperties = {
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

const skillList: React.CSSProperties = {
    paddingTop: "1rem",
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem'
};

const skillItem: React.CSSProperties = {
    background: '#333',
    padding: "0.5rem 1rem",
    borderRadius: '5px',
};

const skillName: React.CSSProperties = {
    margin: 0,
    fontSize: '1rem',
    color: '#ccc'
};
