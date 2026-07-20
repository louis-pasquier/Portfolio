import * as React from "react";
import { useState } from "react";

const skillsData = [
    {
        category: "Software Engineering & Architecture",
        skills: [
            {
                name: "Object-Oriented Analysis & Design (OOAD)",
                description: "Proficiency in analyzing and designing systems using object-oriented principles."
            },
            {
                name: "Design Patterns",
                description: "Application of design patterns for creating flexible, reusable, and maintainable software."
            },
            {
                name: "System Architecture",
                description: "Designing scalable and robust system architectures for enterprise-level applications."
            },
            {
                name: "Software Refactoring",
                description: "Improving internal structure of existing software without changing its external behavior."
            },
            {
                name: "Enterprise Information Systems (IS Integration)",
                description: "Integrating heterogeneous software components and enterprise information systems."
            },
            {
                name: "Software Optimization",
                description: "Profiling and optimizing software for performance, memory usage, and resource efficiency."
            }
        ]
    },
    {
        category: "Programming Paradigms",
        skills: [
            {
                name: "Multi-paradigm Programming",
                description: "Experience with Object-Oriented, Functional, and Concurrent programming paradigms."
            },
            {
                name: "Advanced Java",
                description: "In-depth knowledge of Java for building complex and high-performance applications."
            },
            {
                name: "C/C++",
                description: "Strong skills in C/C++ for systems and low-level programming."
            },
            {
                name: "Systems & Low-Level Programming",
                description: "Understanding of computer architecture, memory management, and OS internals."
            }
        ]
    },
    {
        category: "Web & Mobile Applications",
        skills: [
            {
                name: "Native/Cross-platform Mobile App Development",
                description: "Building robust mobile applications with a focus on resource constraints and modern UI."
            },
            {
                name: "Full-Stack Web Development",
                description: "Developing both front-end and back-end components of web applications."
            },
            {
                name: "REST APIs",
                description: "Designing and implementing RESTful APIs for communication between services."
            },
            {
                name: "Microservices",
                description: "Building applications as a suite of small, independently deployable services."
            },
            {
                name: "UI/UX Principles & Human-Machine Interaction (HMI)",
                description: "Applying UI/UX best practices to create intuitive and user-friendly interfaces."
            }
        ]
    },
    {
        category: "Data & Information Systems",
        skills: [
            {
                name: "Relational Databases",
                description: "Proficiency in SQL, schema design, and performance tuning for relational databases."
            },
            {
                name: "System & Data Security",
                description: "Implementing security standards, threat modeling, and secure software development practices."
            },
            {
                name: "Distributed Data Processing",
                description: "Experience with processing large datasets in a distributed environment."
            }
        ]
    },
    {
        category: "Systems & Infrastructure",
        skills: [
            {
                name: "Computer Architecture",
                description: "Deep understanding of computer hardware and its interaction with software."
            },
            {
                name: "Concurrent & Parallel Systems",
                description: "Mastery of multithreading, process synchronization, and asynchronous execution."
            },
            {
                name: "Operating Systems",
                description: "Knowledge of operating system internals and concepts."
            },
            {
                name: "Networking & Telecommunications",
                description: "Understanding of network protocols and telecommunication systems."
            }
        ]
    },
    {
        category: "Methodologies & Management",
        skills: [
            {
                name: "Agile/Scrum",
                description: "Experience in Agile software development methodologies, including Scrum."
            },
            {
                name: "Project Management (GPIT)",
                description: "Knowledge of project management principles and practices."
            },
            {
                name: "Version Control (Git)",
                description: "Proficient in using Git for version control and collaborative development."
            },
            {
                name: "IT Law & Economics",
                description: "Understanding of legal and economic aspects of the IT industry."
            },
            {
                name: "Collaborative Team Engineering",
                description: "Experience in working effectively in a team-oriented engineering environment."
            }
        ]
    }
];

function Skills() {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div style={skillsContainer}>
            <h1>Skills</h1>
            <div style={treeContainer}>
                {skillsData.map((branch) => (
                    <div key={branch.category} style={categoryBranch}>
                        <h2 onClick={() => toggleCategory(branch.category)} style={categoryTitle}>
                            {branch.category} {openCategory === branch.category ? '▾' : '▸'}
                        </h2>
                        {openCategory === branch.category && (
                            <div style={skillList}>
                                {branch.skills.length > 0 ? (
                                    branch.skills.map((skill, index) => (
                                        <div key={skill.name} style={{...skillItem, borderBottom: index === branch.skills.length - 1 ? 'none' : '1px solid #333'}}>
                                            <h3 style={skillName}>{skill.name}</h3>
                                            <p style={skillDescription}>{skill.description}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No skills listed in this category yet.</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;

const skillsContainer: React.CSSProperties = {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "0 1rem",
};

const treeContainer: React.CSSProperties = {
    marginTop: "2rem",
};

const categoryBranch: React.CSSProperties = {
    marginBottom: "1.5rem",
};

const categoryTitle: React.CSSProperties = {
    cursor: "pointer",
    userSelect: "none",
    fontSize: "1.5rem",
    borderBottom: "1px solid #333",
    paddingBottom: "0.5rem",
    marginBottom: "1rem"
};

const skillList: React.CSSProperties = {
    paddingLeft: "1rem",
};

const skillItem: React.CSSProperties = {
    padding: "1rem 0",
};

const skillName: React.CSSProperties = {
    margin: 0,
    marginBottom: '0.25rem',
    fontSize: '1.1rem',
};

const skillDescription: React.CSSProperties = {
    margin: 0,
    color: '#aaa',
    fontSize: '0.9rem',
};
