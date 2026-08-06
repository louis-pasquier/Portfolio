import * as React from "react";
import { SocialIcon } from 'react-social-icons'
import PolyBackground from "../components/PolyBackground.tsx";

export default function Home ({ isDarkMode, language }: { isDarkMode: boolean, language: string }) {

    const translations = {
        en: {
            welcome: 'Welcome to my portfolio',
        },
        fr: {
            welcome: 'Bienvenue sur mon portfolio',
        }
    };

    const t = language === 'fr' ? translations.fr : translations.en;

    // Use state to track if the screen is mobile-sized
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        // This media query will match screens with a max-width of 768px
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        // Set the initial state
        setIsMobile(mediaQuery.matches);

        // Create a listener function to update state on change
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        // Add the listener
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // Cleanup listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    // Create a dynamic style for the subtitle
    const dynamicSubTitleStyle: React.CSSProperties = {
        ...subTitle, // Inherit base styles
        alignSelf: isMobile ? 'center' : 'end', // Center on mobile, align end on desktop
    };

    return (
        <PolyBackground isDarkMode={isDarkMode}>
            <div style={main}>
                <div style={contentWrapper}>
                    <div style={titleWrapper}>
                        <div style={title}>{t.welcome}</div>
                        <div style={dynamicSubTitleStyle}>
                            Louis Pasquier
                        </div>
                    </div>
                    <div style={iconBar}>
                        <SocialIcon url="https://gitlab.com/louispasquier" />
                        <SocialIcon url="https://github.com/louis-pasquier" />
                        <SocialIcon url="https://linkedin.com/in/pasquier-louis/" />
                        <SocialIcon url="mailto:louis.pasquier@outlook.com" />
                    </div>
                </div>
            </div>
        </PolyBackground>
    );
}

const main: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'eurostile, sans-serif',
    position: 'relative',
    top: '-10vh',
};

const contentWrapper: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '60px',
};

const titleWrapper: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
};

const title: React.CSSProperties = {
    fontSize: 36,
};

const subTitle: React.CSSProperties = {
    fontSize: 24,
    alignSelf: 'end',
};

const iconBar: React.CSSProperties = {
    display: 'flex',
    gap: '40px',
};
