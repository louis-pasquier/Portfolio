import {useEffect, useState} from "react";
import Terminal from "./components/Terminal.tsx";
import Home from "./pages/Home.tsx";
import SiteSidebar from "./components/SiteSidebar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PS5Project from "./pages/projects/PS5Project.tsx";
import PS6Project from "./pages/projects/PS6Project.tsx";
import Resume from "./pages/Resume.tsx";
import Skills from "./pages/Skills.tsx";
import resumeUrl from './assets/resume/resume.pdf';
import Formation from "./pages/Formation.tsx";

function App() {
    const [isTerminalOpen, setIsTerminalOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'en' ? 'fr' : 'en'));
    };

    const changeLanguage = (lang: string) => {
        if (lang === 'en' || lang === 'fr') {
            setLanguage(lang);
        }
    };

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
                    language={language}
                    toggleLanguage={toggleLanguage}
                />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

                    <div style={{ flex: 1, overflow: 'auto' }}>
                        <Routes>
                            <Route path="/" element={<Home isDarkMode={isDarkMode} language={language}/>} />
                            <Route path="/projects/ps5-barcode-scanner" element={<PS5Project language={language} isDarkMode={isDarkMode}/>} />
                            <Route path="/projects/ps6-zephyr-safety" element={<PS6Project language={language} isDarkMode={isDarkMode}/>} />
                            <Route path="/resume" element={<Resume/>} />
                            <Route path="/formation" element={<Formation isDarkMode={isDarkMode} language={language}/>} />
                            <Route path="/skills" element={<Skills language={language} isDarkMode={isDarkMode}/>} />
                        </Routes>
                    </div>

                    {isTerminalOpen && (
                        <Terminal
                            isDarkMode={isDarkMode}
                            toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
                            language={language}
                            changeLanguage={changeLanguage}
                        />
                    )}

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
