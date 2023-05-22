"use client"

import { useEffect, useState } from "react";

const ScrollIndicator = ({ children }) => {
    const [scroll, setScroll] = useState(0);

    const onScrollProgress = () => {
        const html = document.documentElement;
        const scrollPx = html.scrollTop;
        const winHeightPx = html.scrollHeight - html.clientHeight;
        const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

        setScroll(scrolled);
    };
    useEffect(() => {
        window.addEventListener('scroll', onScrollProgress);

        return () => {
            window.removeEventListener('scroll', onScrollProgress);
        };
    }, []);

    const inlineStyle = {
        height: '6px',
        background: '#e62b74',
        width: scroll,
    };

    return (
        <>
            <div className="bottom-0 left-0 w-screen h-1.5 fixed z-40 bg-transparent">
                <div style={inlineStyle} />
            </div>
            {children}
        </>
    );
};

export default ScrollIndicator;