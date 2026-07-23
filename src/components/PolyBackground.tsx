import {type ReactElement} from 'react';
import * as React from "react";
import darkPolyImage1 from '../assets/low-poly-grid-haikei-dark.svg';
import darkPolyImage2 from '../assets/low-poly-grid-haikei-light.svg';

export default function PolyBackground({ isDarkMode, children }: { isDarkMode: boolean, children: ReactElement }) {

    console.log(isDarkMode)

    return (
        <div style={{
            ...backgroundLayer,
            backgroundImage: `url(${isDarkMode ? darkPolyImage1 : darkPolyImage2})`,
        }}>
            {children}
        </div>
    );
}

const backgroundLayer: React.CSSProperties = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
