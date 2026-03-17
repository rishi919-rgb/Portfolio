import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="glass-card theme-toggle-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1100,
                cursor: 'pointer',
                padding: 0,
                borderRadius: '50%',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
        >
            <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                {theme === 'dark' ? (
                    <FaSun style={{ fontSize: '1.2rem', color: '#fbbf24' }} /> // Golden Sun
                ) : (
                    <FaMoon style={{ fontSize: '1.2rem', color: '#6a0dad' }} />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;                                  
