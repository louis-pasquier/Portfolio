import * as React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { type ChangeEvent, type KeyboardEvent, useEffect, useRef, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";

interface TerminalProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    language: string;
    changeLanguage: (language: string) => void;
}

interface Command {
    description: string,
    execute: (args: string[]) => void,
}

export default function Terminal({isDarkMode, toggleDarkMode, language, changeLanguage}: TerminalProps) {

    const location = useLocation();
    const newCommand: string = 'user:~' + location.pathname + '$ ';
    const historyEndRef = useRef<null | HTMLDivElement>(null);
    const navigate = useNavigate();

    const translations = {
        en: {
            welcome: 'Welcome to my portfolio',
            navigate: 'Use this terminal to navigate in the website',
            help: 'Type help to check out the commands',
            helpDescription: "Display help for available commands",
            themeDescription: "Change theme color",
            langDescription: "Change language (en of fr)",
            cdDescription: "Change directory. Usage: cd [path|..|home]",
            lsDescription: "List directory contents",
            availableCommands: "Available commands",
            unknownCommand: "Unknown command",
            typeHelp: "Type 'help' to see the list of commands."
        },
        fr: {
            welcome: 'Bienvenue sur mon portfolio',
            navigate: 'Utilisez ce terminal pour naviguer sur le site',
            help: 'Tapez help pour voir les commandes disponibles',
            helpDescription: "Affiche l'aide pour les commandes disponibles",
            themeDescription: "Changer le thème de couleur",
            langDescription: "Changer la langue (en ou fr)",
            cdDescription: "Changer de répertoire. Usage: cd [chemin|..|home]",
            lsDescription: "Lister le contenu du répertoire",
            availableCommands: "Commandes disponibles",
            unknownCommand: "Commande inconnue",
            typeHelp: "Tapez 'help' pour voir la liste des commandes."
        }
    };

    const t = language === 'fr' ? translations.fr : translations.en;

    const welcomeMessages = [
        t.welcome,
        '',
        t.navigate,
        t.help,
        ''
    ];

    const [cmdHistoryIndex, setCmdHistoryIndex] = useState(0);
    const [cmdHistory, setCmdHistory] = useState<string[]>([]);
    const [history, setHistory] = useState<string[]>([]);
    const [content, setContent] = useState('');

    const theme = {
        bg: isDarkMode ? '#1e1e1e' : '#f3f3f3',
        text: isDarkMode ? '#cccccc' : '#333333',
        inputBg: isDarkMode ? '#1e1e1e' : '#f3f3f3',
        border: isDarkMode ? '#333333' : '#cccccc',
        font: 'Consolas, "Courier New", monospace'
    };

    const frPathMap: { [key: string]: string } = {
        'cv': 'resume',
        'compétences': 'skills',
        'projets': 'projects',
        'formation': 'formation'
    };

    const enPathMap: { [key: string]: string } = Object.fromEntries(Object.entries(frPathMap).map(([fr, en]) => [en, fr]));

    const fileSystem: { [key: string]: string[] } = {
        '/': ['resume', 'formation', 'skills', 'projects/'],
        '/projects': ['ps5-barcode-scanner', 'ps6-zephyr-safety']
    };

    const commands = new Map<string, Command>();

    commands.set('help', {
        description: t.helpDescription,
        execute: () => {
            printTerminal(t.availableCommands);
            commands.forEach((value, key) => {
                printTerminal(`${key.padEnd(10)} : ${value.description}`);
            });
        }
    })

    commands.set('theme', {
        description: t.themeDescription,
        execute: args => {
            if ((args[0] === 'dark' && !isDarkMode)
            || (args[0] === 'light' && isDarkMode)) {
                toggleDarkMode()
            }
        }
    })

    commands.set('lang', {
        description: t.langDescription,
        execute: args => {
            if ((args[0] === 'en' && language === 'fr')
                || (args[0] === 'fr' && language === 'en')) {
                changeLanguage(args[0])
            }
        }
    })

    commands.set('cd', {
        description: t.cdDescription,
        execute: args => {
            let path = args[0];

            if (language === 'fr') {
                const pathParts = path.split('/');
                const translatedParts = pathParts.map(part => frPathMap[part] || part);
                path = translatedParts.join('/');
            }

            if (path === '..') {
                const { pathname } = location;
                if (pathname === '/') return; // Already at root
                const newPath = pathname.substring(0, pathname.lastIndexOf('/')) || '/';
                navigate(newPath);
            } else if (path === 'home' || path === '~' || !path) {
                navigate('/');
            } else {
                // This will handle absolute paths like '/resume' and relative paths from current location
                navigate(path);
            }
        }
    })

    commands.set('ls', {
        description: t.lsDescription,
        execute: () => {
            const { pathname } = location;
            const normalizedPath = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
            const listing = fileSystem[normalizedPath];

            if (listing) {
                let processedListing;
                if (language === 'fr') {
                    processedListing = listing.map(item => {
                        const key = item.replace('/', '');
                        const translated = enPathMap[key];
                        return translated || key;
                    });
                } else {
                    processedListing = listing.map(item => item.replace('/', ''));
                }
                printTerminal(processedListing.join('    '));
            }
        }
    });

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const scrollToBottom = () => {
        historyEndRef.current?.scrollIntoView();
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    const handleTabCompletion = () => {
        const [commandName, ...args] = content.split(' ');

        if (args.length > 0) {
            return;
        }

        const currentInput = commandName.trim();
        if (!currentInput) {
            return;
        }

        const commandList = Array.from(commands.keys());
        const possibleCompletions = commandList.filter(cmd => cmd.startsWith(currentInput));

        if (possibleCompletions.length === 1) {
            setContent(possibleCompletions[0] + ' ');
        } else if (possibleCompletions.length > 1) {
            let lcp = '';
            const first = possibleCompletions[0];
            for (let i = 0; i < first.length; i++) {
                const prefix = first.substring(0, i + 1);
                if (possibleCompletions.every(c => c.startsWith(prefix))) {
                    lcp = prefix;
                } else {
                    break;
                }
            }

            if (lcp.length > currentInput.length) {
                setContent(lcp);
            } else {
                printTerminal(newCommand + content);
                printTerminal(possibleCompletions.join('    '));
            }
        }
    };

    const handleInputSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            parseCommand();
            setContent('');
            setCmdHistoryIndex(cmdHistory.length+1)
        } else if (event.key == 'ArrowUp') {
            if (cmdHistoryIndex > 0) {
                const newIndex = cmdHistoryIndex - 1;
                setCmdHistoryIndex(newIndex);
                setContent(cmdHistory[newIndex])
            } else if (cmdHistoryIndex == 0) {
                setContent(cmdHistory[cmdHistoryIndex])
            }
        } else if (event.key == 'ArrowDown') {
            if (cmdHistoryIndex < cmdHistory.length - 1) {
                const newIndex = cmdHistoryIndex + 1;
                setCmdHistoryIndex(newIndex);
                setContent(cmdHistory[newIndex]);
            } else {
                setCmdHistoryIndex(cmdHistory.length);
                setContent('');
            }
        } else if (event.key === 'Tab') {
            event.preventDefault();
            handleTabCompletion();
        }
    };

    const parseCommand = () => {
        setHistory(prev => [...prev, newCommand + content]);
        setCmdHistory(prev => [...prev, content])

        const [name, ...args] = content.split(' ');
        const command = commands.get(name);

        if (!command) {
            printTerminal(`${t.unknownCommand} : ${name}. ${t.typeHelp}`)
        }

        command?.execute(args)
    };

    const printTerminal = (text: string) => {
        setHistory(prev => [...prev, text]);
    }

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
                        {welcomeMessages.map((line, key) => (
                            <span key={key}>
                                {line}
                                <br />
                            </span>
                        ))}
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