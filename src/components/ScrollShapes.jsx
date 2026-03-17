import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollShapes = () => {
    const { scrollYProgress } = useScroll();

    // Distinct shape parallax mappings
    // 0 = top of page, 1 = absolute bottom

    // Shape 1: Top Right, moves down fast
    const yShape1 = useTransform(scrollYProgress, [0, 1], ['5vh', '80vh']);
    const rotateShape1 = useTransform(scrollYProgress, [0, 1], [0, 180]);

    // Shape 2: Mid Left, moves up very fast
    const yShape2 = useTransform(scrollYProgress, [0, 1], ['60vh', '-20vh']);
    const rotateShape2 = useTransform(scrollYProgress, [0, 1], [45, -90]);

    // Shape 3: Bottom Right, moves up slowly
    const yShape3 = useTransform(scrollYProgress, [0, 1], ['90vh', '10vh']);

    // Shape 4: Mid Right, subtle drift and rotation
    const yShape4 = useTransform(scrollYProgress, [0, 1], ['30vh', '50vh']);
    const rotateShape4 = useTransform(scrollYProgress, [0, 1], [0, 360]);

    // Common style for all shapes to keep them explicitly mid-ground
    const shapeStyles = {
        position: 'fixed',
        zIndex: -1, // Behind main content, above deep background
        pointerEvents: 'none',
        opacity: 0.5, // Increased for better core visibility
        filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))' // Creates depth in both modes
    };

    return (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>

            {/* Outline Circle */}
            <motion.div
                style={{
                    ...shapeStyles,
                    top: yShape1,
                    right: '10vw',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    border: '3px solid var(--secondary)',
                    opacity: 0.2
                }}
            />

            {/* Subtle Floating Triangle */}
            <motion.div
                style={{
                    ...shapeStyles,
                    top: yShape2,
                    right: '15vw', // Moved to the right side
                    rotate: rotateShape2,
                    color: 'var(--accent-purple)',
                    opacity: 0.2 // Reduced opacity so it blends in better
                }}
            >
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
                    <polygon points="50,10 90,90 10,90" />
                </svg>
            </motion.div>

            {/* Hollow Square */}
            <motion.div
                style={{
                    ...shapeStyles,
                    top: yShape3,
                    right: '25vw',
                    width: '90px',
                    height: '90px',
                    border: '3px solid var(--text-muted)',
                    rotate: 25, // initial offset
                    opacity: 0.1
                }}
            />

            {/* Dotted Circle Outline */}
            <motion.div
                style={{
                    ...shapeStyles,
                    top: yShape4,
                    right: '5vw',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    border: '2px dashed var(--primary)',
                    rotate: rotateShape4,
                    opacity: 0.15
                }}
            />
        </div>
    );
};

export default ScrollShapes;
