import {type ReactElement, useEffect, useState} from 'react';
import * as React from "react";
import darkPolyImage1 from '../assets/low-poly-grid-haikei-dark.svg';
import darkPolyImage2 from '../assets/low-poly-grid-haikei-light.svg';

export default function PolyBackground({ isDarkMode, children }: { isDarkMode: boolean, children: ReactElement }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const imageUrl = isDarkMode ? darkPolyImage1 : darkPolyImage2;

    useEffect(() => {
        setImageLoaded(false);
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            setImageLoaded(true);
        };
    }, [imageUrl]);

    const backgroundLayerStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${imageUrl})`,
        transition: 'opacity 0.4s ease-in',
        opacity: imageLoaded ? 1 : 0,
    };

    const containerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '100%',
    };

    return (
        <div style={containerStyle}>
            <div style={backgroundLayerStyle} />
            {children}
        </div>
    );
}
