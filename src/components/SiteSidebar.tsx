import { useState, type ReactNode } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, type MenuItemStyles } from 'react-pro-sidebar';
import { Link, useNavigate } from "react-router-dom";
import { IoIosFolder, IoMdHome } from "react-icons/io";
import { VscFiles, VscTerminal } from "react-icons/vsc";

type TabId = 'files';

// Update Props interface to accept terminal controls
interface SiteSidebarProps {
    isTerminalOpen: boolean;
    toggleTerminal: () => void;
}

interface ActivityIconProps {
    icon: ReactNode;
    onClick: () => void;
    isActive: boolean;
}

// Accept props in the component
function SiteSidebar({ isTerminalOpen, toggleTerminal }: SiteSidebarProps) {
    const [activeTab, setActiveTab] = useState<TabId | null>(null);
    const navigate = useNavigate();

    const toggleTab = (tab: TabId) => {
        setActiveTab(prev => prev === tab ? null : tab);
    };

    const handleHomeClick = () => {
        setActiveTab(null);
        navigate('/');
    };

    const menuItemStyles: MenuItemStyles = {
        button: {
            [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
            },
            '&:hover': {
                backgroundColor: '#f3f3f3',
            }
        },
    };

    return (
        <div style={{ display: 'flex', height: '100%' }}>

            {/* --- ACTIVITY BAR --- */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '60px',
                backgroundColor: '#f0f0f0',
                borderRight: '1px solid #ddd',
                alignItems: 'center',
                paddingTop: '10px'
            }}>
                {/* Home */}
                <ActivityIcon
                    isActive={false}
                    onClick={handleHomeClick}
                    icon={<IoMdHome size={28}/>}
                />

                {/* Files */}
                <ActivityIcon
                    isActive={activeTab === 'files'}
                    onClick={() => toggleTab('files')}
                    icon={<VscFiles size={24} />}
                />

                <div style={{ flex: 1 }}></div>

                {/* Terminal */}
                <ActivityIcon
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
                backgroundColor="#fff"
                rootStyles={{
                    borderRight: '1px solid #e0e0e0',
                    height: '100%'
                }}
            >
                <div style={{ padding: '10px', fontWeight: 'bold', color: '#555' }}>
                    {activeTab?.toUpperCase()}
                </div>

                <Menu menuItemStyles={menuItemStyles}>
                    {activeTab === 'files' && (
                        <>
                            <SubMenu label="resume" icon={<IoIosFolder />}>
                                <MenuItem component={<Link to="/project1" />}> project1.js </MenuItem>
                            </SubMenu>
                            <SubMenu label="projects" icon={<IoIosFolder />}>
                                <MenuItem component={<Link to="/project1" />}> project1.js </MenuItem>
                            </SubMenu>
                        </>
                    )}
                </Menu>
            </Sidebar>
        </div>
    );
}

const ActivityIcon: React.FC<ActivityIconProps> = ({ icon, onClick, isActive }) => (
    <div
        onClick={onClick}
        style={{
            cursor: 'pointer',
            padding: '12px',
            color: isActive ? '#007acc' : '#666',
            borderLeft: isActive ? '3px solid #007acc' : '3px solid transparent',
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

export default SiteSidebar;