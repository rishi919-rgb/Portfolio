import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundAnimation = () => {
    const { scrollYProgress } = useScroll();

    // Dramatic Parallax for the Auroras
    const yAurora1 = useTransform(scrollYProgress, [0, 1], ['0vh', '-100vh']);
    const yAurora2 = useTransform(scrollYProgress, [0, 1], ['0vh', '120vh']);
    const yAurora3 = useTransform(scrollYProgress, [0, 1], ['0vh', '-60vh']);

    // Rotation tied to scroll for dynamic morphing
    const rotateAurora1 = useTransform(scrollYProgress, [0, 1], [0, 720]);
    const rotateAurora2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            overflow: 'hidden',
            zIndex: -2, // Deepest layer
            pointerEvents: 'none',
            background: 'var(--bg-dark)' // Solid base
        }}>
            {/* --- LAYER 1: The Technical Grid --- */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                opacity: 0.9, // Amplified for dark mode visibility
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }} />

            {/* --- LAYER 2: The Auroras (Distorted, glowing shapes) --- */}

            {/* Aurora 1: Subtle Bright Glow */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '50vw', // Reduced size
                    height: '40vw', // Reduced size
                    background: 'linear-gradient(135deg, var(--aurora-cyan) 0%, transparent 60%)', // Tightened gradient
                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                    filter: 'blur(50px)', // Sharpened blur slightly
                    y: yAurora1,
                    rotate: rotateAurora1
                }}
                animate={{
                    borderRadius: ['40% 60% 70% 30% / 40% 50% 60% 50%', '60% 40% 30% 70% / 60% 30% 70% 40%', '40% 60% 70% 30% / 40% 50% 60% 50%'],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Aurora 2: Subtle Warm Glow */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    right: '-10%',
                    width: '60vw', // Reduced size
                    height: '50vw', // Reduced size
                    background: 'linear-gradient(45deg, var(--aurora-purple) 0%, transparent 60%)', // Tightened gradient
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                    filter: 'blur(60px)', // Sharpened blur
                    y: yAurora2,
                    rotate: rotateAurora2
                }}
                animate={{
                    borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 70% 70% 30% / 50% 60% 40% 50%', '60% 40% 30% 70% / 60% 30% 70% 40%'],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />

            {/* Aurora 3: Core Highlight */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '30%',
                    width: '40vw', // Reduced size
                    height: '30vw', // Reduced size
                    background: 'radial-gradient(circle, var(--aurora-core) 0%, transparent 50%)', // Tighter core
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    y: yAurora3
                }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* --- LAYER 3: Data Streams / Fast Light Streaks --- */}
            {Array.from({ length: 15 }).map((_, i) => {
                const isVertical = Math.random() > 0.5;
                const position = Math.random() * 100;
                const duration = Math.random() * 3 + 2; // Fast! 2-5 seconds
                const delay = Math.random() * 10;

                // Color palette for streaks (Theme-dependent)
                const colors = ['var(--streak-color)', 'var(--aurora-purple)', 'var(--aurora-cyan)'];
                const color = colors[Math.floor(Math.random() * colors.length)];

                return (
                    <motion.div
                        key={`streak-${i}`}
                        style={{
                            position: 'absolute',
                            background: `linear-gradient(${isVertical ? 'to bottom' : 'to right'}, transparent, ${color}, transparent)`,
                            ...(isVertical
                                ? { left: `${position}vw`, width: '1px', height: '15vh', top: '-20vh' }
                                : { top: `${position}vh`, height: '1px', width: '15vw', left: '-20vw' })
                        }}
                        animate={{
                            ...(isVertical
                                ? { y: ['0vh', '140vh'] } // Shoot down
                                : { x: ['0vw', '140vw'] })  // Shoot right
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: delay
                        }}
                    />
                );
            })}
        </div>
    );
};

export default BackgroundAnimation;
