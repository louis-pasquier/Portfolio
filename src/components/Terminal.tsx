import * as React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { type ChangeEvent, type KeyboardEvent, useEffect, useRef, useState } from "react";

interface TerminalProps {
    isDarkMode: boolean;
}

export default function Terminal({isDarkMode}: TerminalProps) {

    const [path, setPath] = useState('');
    const newCommand: string = 'user:~' + path + '$ ';
    const historyEndRef = useRef<null | HTMLDivElement>(null);

    const [history, setHistory] = useState([
        'Welcome to my portfolio',
        '',
        'Use this terminal to navigate in the website',
        'Type help to check out the commands',
        ''
    ]);

    const [content, setContent] = useState('');

    const theme = {
        bg: isDarkMode ? '#1e1e1e' : '#f3f3f3',
        text: isDarkMode ? '#cccccc' : '#333333',
        inputBg: isDarkMode ? '#1e1e1e' : '#f3f3f3',
        border: isDarkMode ? '#333333' : '#cccccc',
        font: 'Consolas, "Courier New", monospace'
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const scrollToBottom = () => {
        historyEndRef.current?.scrollIntoView();
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    const handleInputSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            parseCommand();
            setContent('');
        }
    };

    const parseCommand = () => {
        setHistory(prev => [...prev, newCommand + content]);
        const tokens: string[] = content.split(' ');
        switch (tokens[0]) {
            case 'help':
                handleHelp();
                break;
            case 'cd':
                handleCd(tokens.slice(1));
                break;
        }
    };

    const handleHelp = () => {
        setHistory(prev => [...prev, 'This command is currently not implemented !']);
    };

    const handleCd = (tokens: string[]) => {
        setPath(tokens[0]);
        setHistory(prev => [...prev, 'This command is currently not implemented !']);
    };

    return (
        <div style={{ ...resizeBoxWrapper, backgroundColor: theme.bg }}>
            <ResizableBox
                width={Infinity}
                height={200}
                minConstraints={[Infinity, 100]}
                maxConstraints={[Infinity, 500]}
                resizeHandles={['n']}
                axis="y"
                style={{
                    ...resizeBox,
                    backgroundColor: theme.bg,
                    color: theme.text,
                    fontFamily: theme.font,
                    borderTop: `1px solid ${theme.border}`
                }}
                handle={<span className="custom-handle custom-handle-n" />}
            >
                <div style={contentWrapper}>
                    <div style={{ ...contentStyle, color: theme.text }}>
                        {history.map((line, key) => (
                            <span key={key}>
                                {line}
                                <br />
                            </span>
                        ))}
                        {newCommand}
                        <input
                            style={{
                                ...inputStyle,
                                backgroundColor: theme.inputBg,
                                color: theme.text,
                                fontFamily: theme.font
                            }}
                            type="text"
                            value={content}
                            onChange={handleInputChange}
                            onKeyDown={handleInputSubmit}
                            autoFocus
                        />
                        <div ref={historyEndRef} />
                    </div>
                </div>
            </ResizableBox>
        </div>
    );
}

// Fixed base styles
const resizeBoxWrapper: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    transition: 'background-color 0.3s ease',
};

const resizeBox: React.CSSProperties = {
    width: '100% !important',
    height: '100%',
    padding: '10px',
    position: "relative",
    overflow: 'hidden',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
};

const contentWrapper: React.CSSProperties = {
    height: "100%",
    overflowY: "auto",
};

const contentStyle: React.CSSProperties = {
    padding: "0 1rem",
    textAlign: 'left',
    fontSize: '14px',
    lineHeight: '1.6'
};

const inputStyle: React.CSSProperties = {
    WebkitAppearance: 'none',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    fontWeight: 400,
    fontSize: 14,
    width: "80%",
};