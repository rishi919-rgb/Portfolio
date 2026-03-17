import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    // Native motion values (GPU accelerated, no React state re-renders)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring configurations for smooth lag-free following
    const springConfigOuter = { damping: 25, stiffness: 200, mass: 0.5 };
    const springConfigInner = { damping: 40, stiffness: 800, mass: 0.1 };

    const outerX = useSpring(cursorX, springConfigOuter);
    const outerY = useSpring(cursorY, springConfigOuter);

    const innerX = useSpring(cursorX, springConfigInner);
    const innerY = useSpring(cursorY, springConfigInner);

    useEffect(() => {
        const mouseMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", mouseMove);
        return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    // If on mobile/touch device, don't render this heavy effect
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Outer Glowing Ring */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(96, 165, 250, 0.4)', // Faint primary
                    pointerEvents: 'none',
                    zIndex: 9998,
                    x: outerX,
                    y: outerY,
                    translateX: '-50%',
                    translateY: '-50%',
                    backgroundColor: 'rgba(96, 165, 250, 0.05)',
                    boxShadow: '0 0 20px rgba(96, 165, 250, 0.2)'
                }}
            />
            {/* Inner Core Dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: innerX,
                    y: innerY,
                    translateX: '-50%',
                    translateY: '-50%',
                    boxShadow: '0 0 10px var(--primary)'
                }}
            />
        </>
    );
};

export default CustomCursor;
