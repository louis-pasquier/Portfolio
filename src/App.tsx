import { useState } from "react";
import Terminal from "./components/Terminal.tsx";
import Home from "./pages/Home.tsx";
import SiteSidebar from "./components/SiteSidebar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project1 from "./pages/Project1.tsx";

function App() {
    const [isTerminalOpen, setIsTerminalOpen] = useState(true);

    return (
        <BrowserRouter>
            <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>

                <SiteSidebar
                    isTerminalOpen={isTerminalOpen}
                    toggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
                />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

                    <div style={{ flex: 1, overflow: 'auto', padding: '20px' }}>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/project1" element={<Project1/>} />
                        </Routes>
                    </div>

                    {isTerminalOpen && (
                        <Terminal/>
                    )}

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App