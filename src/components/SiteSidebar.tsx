import { useState, type ReactNode } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, type MenuItemStyles } from 'react-pro-sidebar';
import { Link, useNavigate } from "react-router-dom";
import { IoIosFolder, IoMdHome } from "react-icons/io";
import { FaFile } from "react-icons/fa";
import { VscFiles, VscTerminal } from "react-icons/vsc";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type TabId = 'files';

interface SiteSidebarProps {
    isTerminalOpen: boolean;
    toggleTerminal: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

interface ActivityIconProps {
    icon: ReactNode;
    onClick: () => void;
    isActive: boolean;
    isDarkMode: boolean;
}

function SiteSidebar({ isTerminalOpen, toggleTerminal, isDarkMode, toggleDarkMode }: SiteSidebarProps) {
    const [activeTab, setActiveTab] = useState<TabId | null>(null);
    const navigate = useNavigate();

    const theme = {
        activityBarBg: isDarkMode ? '#1e1e1e' : '#f0f0f0',
        sidebarBg: isDarkMode ? '#252526' : '#fff',
        border: isDarkMode ? '#333' : '#ddd',
        text: isDarkMode ? '#cccccc' : '#555',
        iconDefault: isDarkMode ? '#858585' : '#666',
        iconActive: isDarkMode ? '#fff' : '#007acc',
        hover: isDarkMode ? '#2a2d2e' : '#f3f3f3',
    };

    const toggleTab = (tab: TabId) => {
        setActiveTab(prev => prev === tab ? null : tab);
    };

    const handleHomeClick = () => {
        setActiveTab(null);
        navigate('/');
    };

    const menuItemStyles: MenuItemStyles = {
        root: {
            color: theme.text,
        },
        button: {
            '&:hover': {
                backgroundColor: theme.hover,
            },
            [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
            },
        },
        subMenuContent: {
            backgroundColor: theme.sidebarBg,
        },
    };

    return (
        <div style={{ display: 'flex', height: '100%', transition: 'background 0.3s ease' }}>

            {/* --- ACTIVITY BAR --- */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '60px',
                backgroundColor: theme.activityBarBg,
                borderRight: `1px solid ${theme.border}`,
                alignItems: 'center',
                paddingTop: '10px',
                transition: 'all 0.3s ease'
            }}>
                <ActivityIcon
                    isDarkMode={isDarkMode}
                    isActive={false}
                    onClick={handleHomeClick}
                    icon={<IoMdHome size={28}/>}
                />
                <ActivityIcon
                    isDarkMode={isDarkMode}
                    isActive={activeTab === 'files'}
                    onClick={() => toggleTab('files')}
                    icon={<VscFiles size={24} />}
                />

                <div style={{ flex: 1 }}></div>

                <ActivityIcon
                    isDarkMode={isDarkMode}
                    isActive={false}
                    onClick={toggleDarkMode}
                    icon={isDarkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
                />

                <ActivityIcon
                    isDarkMode={isDarkMode}
                    isActive={isTerminalOpen}
                    onClick={toggleTerminal}
                    icon={<VscTerminal size={24} />}
                />
            </div>

            {/* --- SIDEBAR PANEL --- */}
            <Sidebar
                collapsed={activeTab === null}
                collapsedWidth="0px"
                width="250px"
                backgroundColor={theme.sidebarBg}
                rootStyles={{
                    borderRight: `1px solid ${theme.border}`,
                    height: '100%',
                    transition: 'all 0.3s ease'
                }}
            >
                <div style={{ padding: '10px', fontWeight: 'bold', color: theme.text }}>
                    {activeTab?.toUpperCase()}
                </div>

                <Menu menuItemStyles={menuItemStyles}>
                    {activeTab === 'files' && (
                        <>
                            <MenuItem component={<Link to="/resume" />} icon={<FaFile/>}>resume</MenuItem>
                            <MenuItem component={<Link to="/formation" />} icon={<FaFile/>}>formation</MenuItem>
                            <MenuItem component={<Link to="/technologies" />} icon={<FaFile/>}>technologies</MenuItem>
                            <MenuItem component={<Link to="/skills" />} icon={<FaFile/>}>skills</MenuItem>
                            <SubMenu label="projects" icon={<IoIosFolder />}>
                                <MenuItem component={<Link to="/projects/ps5-barcode-scanner" />} icon={<FaFile/>}>ps5-barcode-scanner</MenuItem>
                                <MenuItem component={<Link to="/projects/ps6-zephyr-safety" />} icon={<FaFile/>}>ps6-zephyr-safety</MenuItem>
                            </SubMenu>
                        </>
                    )}
                </Menu>
            </Sidebar>
        </div>
    );
}

const ActivityIcon: React.FC<ActivityIconProps> = ({ icon, onClick, isActive, isDarkMode }) => {
        const activeColor = isDarkMode ? '#fff' : '#007acc';
        const idleColor = isDarkMode ? '#858585' : '#666';

        return (
        <div
            onClick={onClick}
            style={{
                cursor: 'pointer',
                padding: '12px',
                    color: isActive ? activeColor : idleColor,
                    borderLeft: isActive ? `3px solid ${activeColor}` : '3px solid transparent',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                transition: 'all 0.2s'
            }}
        >
            {icon}
        </div>
    );
};

export default SiteSidebar;