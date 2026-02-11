import {useEffect, useState} from "react";
import Terminal from "./components/Terminal.tsx";
import Home from "./pages/Home.tsx";
import SiteSidebar from "./components/SiteSidebar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project1 from "./pages/projects/Project1.tsx";
import Resume from "./pages/Resume.tsx";
import Objectives from "./pages/Objectives.tsx";
import resumeUrl from './assets/resume.pdf';

function App() {
    const [isTerminalOpen, setIsTerminalOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const theme = {
        background: isDarkMode ? '#1e1e1e' : '#ffffff',
        text: isDarkMode ? '#e0e0e0' : '#333333',
    };

    useEffect(() => {
        fetch(resumeUrl);
    }, []);

    return (
        <BrowserRouter>
            <div style={{
                display: 'flex',
                height: '100dvh',
                width: '100%',
                overflow: 'hidden',
                backgroundColor: theme.background,
                color: theme.text,
                transition: 'background-color 0.3s ease'
            }}>

                <SiteSidebar
                    isTerminalOpen={isTerminalOpen}
                    toggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
                    isDarkMode={isDarkMode}
                    toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
                />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

                    <div style={{ flex: 1, overflow: 'auto' }}>
                        <Routes>
                            <Route path="/" element={<Home isDarkMode={isDarkMode}/>} />
                            <Route path="/projects/project1" element={<Project1/>} />
                            <Route path="/resume" element={<Resume/>} />
                            <Route path="/objectives" element={<Objectives/>} />
                        </Routes>
                    </div>

                    {isTerminalOpen && (
                        <Terminal isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}/>
                    )}

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;