import * as React from "react";
import { useState } from "react";

const technologyTree = [
    {
        category: "Web Development",
        technologies: [
            {
                name: "React",
                description: "Extensive experience building dynamic and responsive user interfaces with React.",
                url: "https://reactjs.org/"
            },
            {
                name: "TypeScript",
                description: "Leveraged TypeScript to build scalable and maintainable web applications with static typing.",
                url: "https://www.typescriptlang.org/"
            },
            {
                name: "VueJS",
                description: "Gained experience with the Vue.js framework through dedicated coursework at HEIA-FR.",
                url: "https://vuejs.org/"
            },
        ]
    },
    {
        category: "Backend",
        technologies: [
            {
                name: "Spring Boot",
                description: "Primary framework for building robust, high-performance backend services and REST APIs.",
                url: "https://spring.io/projects/spring-boot"
            },
            {
                name: "Python",
                description: "Developed efficient backend services using Python with frameworks like FastAPI.",
                url: "https://www.python.org/"
            },
            {
                name: ".NET",
                description: "Developed applications using the .NET framework for academic projects.",
                url: "https://dotnet.microsoft.com/"
            }
        ]
    },
    {
        category: "Mobile App Development",
        technologies: [
            {
                name: "Flutter",
                description: "Built cross-platform mobile applications with Flutter through comprehensive coursework, also exploring alternatives like Cordova, .NET MAUI, and KMP.",
                url: "https://flutter.dev"
            },
            {
                name: "Android (Java/Kotlin)",
                description: "Developed native Android applications as part of a dedicated university course.",
                url: "https://developer.android.com/"
            },
            {
                name: "iOS (Swift)",
                description: "Gained experience in native iOS development using Swift through a focused university course.",
                url: "https://developer.apple.com/swift/"
            },
            {
                name: "React Native",
                description: "Utilized React Native for building cross-platform mobile apps in academic projects.",
                url: "https://reactnative.dev/"
            }
        ]
    },
    {
        category: "Embedded Systems",
        technologies: [
            {
                name: "C",
                description: "Utilized for low-level system programming and performance-critical applications in embedded environments.",
                url: "https://en.wikipedia.org/wiki/C_(programming_language)"
            },
            {
                name: "C++",
                description: "Applied for object-oriented development on embedded systems, balancing high-level abstractions with performance.",
                url: "https://isocpp.org/"
            },
            {
                name: "Mbed OS",
                description: "Developed applications on Arm's Mbed OS, focusing on IoT devices and connectivity.",
                url: "https://os.mbed.com/"
            },
            {
                name: "Zephyr RTOS",
                description: "Experience with Zephyr, a scalable and secure real-time operating system for resource-constrained devices.",
                url: "https://www.zephyrproject.org/"
            }
        ]
    },
    {
        category: "Databases",
        technologies: [
            {
                name: "PostgreSQL",
                description: "Designed and managed relational database schemas, writing complex SQL queries and ensuring data integrity.",
                url: "https://www.postgresql.org/"
            },
            {
                name: "MySQL",
                description: "Experience with MySQL for web application backends and data storage solutions.",
                url: "https://www.mysql.com/"
            },
            {
                name: "Oracle DB",
                description: "Worked with Oracle Database for enterprise-level data management during academic projects.",
                url: "https://www.oracle.com/database/"
            }
        ]
    },
    {
        category: "System & DevOps",
        technologies: [
            {
                name: "Windows Server",
                description: "Managed and administered Windows Server environments, including services like Active Directory, during my time at EMF.",
                url: "https://www.microsoft.com/en-us/windows-server"
            },
            {
                name: "Linux",
                description: "Proficient in using and administering Linux-based systems (e.g., Ubuntu, CentOS) for development and deployment.",
                url: "https://www.linux.org/"
            },
            {
                name: "Gitlab",
                description: "Utilized Gitlab for source code management, CI/CD pipelines, and collaborative project tracking.",
                url: "https://about.gitlab.com/"
            },
            {
                name: "Github",
                description: "Experienced in using Github for version control, code reviews, and open-source collaboration.",
                url: "https://github.com/"
            },
            {
                name: "Jelastic",
                description: "Deployed and managed applications on the Jelastic cloud platform, leveraging its PaaS capabilities.",
                url: "https://jelastic.com/"
            },
            {
                name: "Kubernetes",
                description: "Gained foundational knowledge in container orchestration with Kubernetes for deploying and scaling applications.",
                url: "https://kubernetes.io/"
            }
        ]
    },
];

function Technologies() {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div style={technologiesContainer}>
            <h1>Technologies</h1>
            <div style={treeContainer}>
                {technologyTree.map((branch) => (
                    <div key={branch.category} style={categoryBranch}>
                        <h2 onClick={() => toggleCategory(branch.category)} style={categoryTitle}>
                            {branch.category} {openCategory === branch.category ? '▾' : '▸'}
                        </h2>
                        {openCategory === branch.category && (
                            <div style={techList}>
                                {branch.technologies.length > 0 ? (
                                    branch.technologies.map((tech, index) => (
                                        <div key={tech.name} style={{...techItem, borderBottom: index === branch.technologies.length - 1 ? 'none' : '1px solid #333'}}>
                                            <a href={tech.url} target="_blank" rel="noopener noreferrer" style={techLink}>
                                                <h3 style={techName}>{tech.name}</h3>
                                                <p style={techDescription}>{tech.description}</p>
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <p>No technologies listed in this category yet.</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Technologies;

const technologiesContainer: React.CSSProperties = {
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

const techList: React.CSSProperties = {
    paddingLeft: "1rem",
};

const techItem: React.CSSProperties = {
    padding: "1rem 0",
};

const techLink: React.CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
};

const techName: React.CSSProperties = {
    margin: 0,
    marginBottom: '0.25rem',
    fontSize: '1.1rem',
};

const techDescription: React.CSSProperties = {
    margin: 0,
    color: '#aaa',
    fontSize: '0.9rem',
};
