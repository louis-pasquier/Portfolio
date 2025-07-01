import * as React from "react";
import { SocialIcon } from 'react-social-icons'

export default function Home () {

    return (
        <div style={main}>
            <div style={contentWrapper}>
            <div style={titleWrapper}>
                <div style={title}>Welcome to my portfolio</div>
                <div style={subTitle}>
                    Louis Pasquier
                </div>
            </div>
            <div style={iconBar}>
                <SocialIcon url="https://gitlab.com/louispasquier" />
                <SocialIcon url="https://linkedin.com/in/pasquier-louis/" />
                <SocialIcon url="mailto:louis.pasquier@outlook.com" />
            </div>
        </div>
        </div>
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
