import * as React from "react";

const data = [
    {
        title: "Computer Science 💻",
        goals: [
            "Learn Rust",
            "Basic Minecraft clone",
            "Finish portfolio website"
        ]
    },
    {
        title: "Climbing 🧗",
        goals: [
            "10 V11 : [===       ] 30%",
            "10 8a : [=         ] 10%"
        ]
    }
]

function Objectives() {
    return (
        <div style={objectives}>
            {data.map((section) => (
                <div key={section.title} style={card}>
                    <h2>{section.title}</h2>
                    <ul>
                        {section.goals.map((goal) => (
                            <li key={goal}>{goal}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Objectives

const objectives: React.CSSProperties = {
    display: "grid",
    gap: "2rem",
    maxWidth: "600px",
    margin: "2rem auto",
}

const card: React.CSSProperties = {
    background: "#111",
    padding: "1.5rem",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    border: "1px solid #222",
}

