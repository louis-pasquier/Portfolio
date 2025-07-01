import * as React from "react";
import {ResizableBox} from "react-resizable";
import "react-resizable/css/styles.css";
import {type ChangeEvent, type KeyboardEvent, useEffect, useRef, useState} from "react";

export default function Terminal() {

    const [path, setPath] = useState('');
    const newCommand: string = 'user:~'+path+'$ ';
    const historyEndRef = useRef<null | HTMLDivElement>(null)

    const [history, setHistory] = useState([
        'Welcome to my portfolio',
        '',
        'Use this terminal to navigate in the website',
        'Type help to check out the commands',
        ''
    ]);

    const [content, setContent] = useState('');

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const scrollToBottom = () => {
        historyEndRef.current?.scrollIntoView();
    }

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
    }

    const handleHelp = ()=>  {
        setHistory(prev => [...prev, 'This command is currently not implemented !']);
    }

    const handleCd = (tokens: string[])=>  {
        setPath(tokens[0]);
        setHistory(prev => [...prev, 'This command is currently not implemented !']);
    }

    return (
        <div style={resizeBoxWrapper}>
            <ResizableBox width={window.innerWidth} height={200} minConstraints={[window.innerWidth, 100]} maxConstraints={[window.innerWidth, 300]}
                          resizeHandles={['n']} axis="y" style={resizeBox} handle={<span className="custom-handle custom-handle-n" />}>
                <div style={contentWrapper}>
                    <div style={contentStyle}>
                        {history.map((line, key) => (
                            <span key={key}>
                                {line}
                                <br/>
                            </span>
                        ))}
                        {newCommand}
                        <input
                            style={inputStyle}
                            type="text"
                            value={content}
                            onChange={handleInputChange}
                            onKeyDown={handleInputSubmit}
                        />
                        <div ref={historyEndRef} />
                    </div>
                </div>

            </ResizableBox>
        </div>
    );
}

const terminalColor: string = '#202020';
const terminalPolice: string = 'Consolas, monospace';

const resizeBoxWrapper: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
};

const resizeBox : React.CSSProperties = {
    width: '100%',
    height: '100%',
    padding: '1%',
    backgroundColor: terminalColor,
    fontFamily: terminalPolice,
    position: "relative",
    overflow: 'hidden',
    boxSizing: 'border-box',
    color: "white",
};

const contentWrapper: React.CSSProperties = {
    height: "100%",
    overflowY: "auto",
    paddingTop: 8,
};

const contentStyle: React.CSSProperties = {
    color: "white",
    padding: "0 1rem",
    textAlign: 'left',
};

const inputStyle: React.CSSProperties = {
    WebkitAppearance: 'none',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',

    backgroundColor: terminalColor,
    fontFamily: terminalPolice,
    lineHeight: 1.5,
    fontWeight: 400,
    fontSize: 16,
    width: "90%",
    color: 'white',
}
