import React from "react";

type FormationEvent = {
    id: number;
    title: string;
    description: string;
    date: string;
};

const events: FormationEvent[] = [
    {
        id: 1,
        title: "Started EMF",
        description: "CFC and maturity in computer science",
        date: "2019",
    },
    {
        id: 2,
        title: "Student job in elderly residence",
        description: "Student job at St-Joseph Morlon residence",
        date: "2022",
    },
    {
        id: 3,
        title: "Fair-IT internship",
        description: "Final year of EMF completed as an internship at Fair-IT",
        date: "2022",
    },
    {
        id: 4,
        title: "Started HEIA-FR",
        description: "Bachelor in computer science",
        date: "2023",
    },
    {
        id: 5,
        title: "Student job as a climbing instructor",
        description: "Weekly lessons as a climbing instructor at l'Entrepot",
        date: "2023",
    },
];

function Formation({ isDarkMode }: {isDarkMode: boolean}) {
    const theme = {
        background: isDarkMode ? "#1e1e1e" : "#ffffff",
        text: isDarkMode ? "#e0e0e0" : "#333333",
    };

    const containerStyle: React.CSSProperties = {
        position: "relative",
        padding: "60px 0",
        width: "100%",
        background: theme.background,
        color: theme.text,
        transition: "all 0.3s ease",
    };

    const lineStyle: React.CSSProperties = {
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        width: "4px",
        backgroundColor: isDarkMode ? "#444" : "#ddd",
        transform: "translateX(-50%)",
    };

    const eventContainer = (isLeft: boolean): React.CSSProperties => ({
        position: "relative",
        width: "50%",
        padding: "20px 40px",
        boxSizing: "border-box",
        left: isLeft ? 0 : "50%",
        textAlign: isLeft ? "right" : "left",
    });

    const cardStyle: React.CSSProperties = {
        background: isDarkMode ? "#2a2a2a" : "#ffffff",
        color: theme.text,
        padding: "18px 22px",
        borderRadius: "10px",
        display: "inline-block",
        maxWidth: "320px",
        boxShadow: isDarkMode
            ? "0 4px 12px rgba(0,0,0,0.6)"
            : "0 4px 12px rgba(0,0,0,0.1)",
        border: isDarkMode ? "1px solid #333" : "1px solid #eee",
        transition: "all 0.3s ease",
    };

    const dotBase: React.CSSProperties = {
        position: "absolute",
        top: "28px",
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        backgroundColor: isDarkMode ? "#6366f1" : "#4f46e5",
        border: `3px solid ${theme.background}`,
        zIndex: 1,
    };

    const dotLeft: React.CSSProperties = {
        ...dotBase,
        right: "-8px",
    };

    const dotRight: React.CSSProperties = {
        ...dotBase,
        left: "-8px",
    };

    return (
        <div style={containerStyle}>
            <div style={lineStyle}></div>

            {events.map((event, index) => {
                const isLeft = index % 2 === 0;

                return (
                    <div key={event.id} style={eventContainer(isLeft)}>
                        <div style={isLeft ? dotLeft : dotRight}></div>

                        <div style={cardStyle}>
                            <h3 style={{ margin: "0 0 8px 0" }}>{event.title}</h3>
                            <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                                {event.description}
                            </p>
                            <span
                                style={{
                                    fontSize: "12px",
                                    opacity: 0.7,
                                }}
                            >
                {event.date}
              </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Formation;

