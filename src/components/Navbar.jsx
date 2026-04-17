import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Figma', href: '#figma-designs', id: 'figma-designs' },
    { name: 'Hackathons', href: '#hackathons', id: 'hackathons' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Community', href: '#code-community', id: 'code-community' }
];

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
    };
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll spy based on viewport position rather than intersection threshold.
    // This keeps long sections like Projects and edge-aligned sections like Hackathons
    // highlighted reliably while the user scrolls.
    useEffect(() => {
        const updateActiveSection = () => {
            const scrollPosition = window.scrollY + 140;
            let currentSection = 'hero';

            navLinks.forEach(link => {
                const element = document.getElementById(link.id);
                if (!element) return;

                const sectionTop = element.offsetTop;
                if (scrollPosition >= sectionTop) {
                    currentSection = link.id;
                }
            });

            setActiveSection(currentSection);
        };

        updateActiveSection();
        window.addEventListener('scroll', updateActiveSection, { passive: true });
        window.addEventListener('resize', updateActiveSection);

        return () => {
            window.removeEventListener('scroll', updateActiveSection);
            window.removeEventListener('resize', updateActiveSection);
        };
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    return (
        <>
            {/* --- SCROLL PROGRESS BAR --- */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, rgba(96, 165, 250, 0.8), rgba(167, 139, 250, 0.8))',
                    boxShadow: '0 0 8px rgba(96, 165, 250, 0.5)',
                    transformOrigin: '0% 50%',
                    zIndex: 2000,
                    scaleX: scaleX // Explicitly use scaleX mapped here
                }}
            />

            {/* --- DESKTOP NAVBAR (Hidden on Mobile via CSS) --- */}
            <div className="desktop-nav" style={{
                position: 'fixed',
                top: scrolled ? '15px' : '25px', // Slight movement on scroll
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                zIndex: 1000,
                pointerEvents: 'none',
                transition: 'top 0.3s ease'
            }}>
                <motion.nav
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                        background: scrolled ? 'var(--nav-glass)' : 'var(--nav-glass)', // Always use the theme variable, which handles opacity well
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid var(--nav-border)',
                        borderRadius: '50px',
                        padding: '0.6rem 1.5rem',
                        pointerEvents: 'auto',
                        boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.3)' : '0 10px 30px -10px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                        transition: 'all 0.3s ease',
                        opacity: scrolled ? 1 : 0.95 // Add a tiny bit of opacity difference if needed
                    }}
                >
                    <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
                        {navLinks.map((link, index) => {
                            const isActive = activeSection === link.id;
                            return (
                                <li key={index} style={{ position: 'relative' }}>
                                    <a href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}
                                        style={{
                                            textDecoration: 'none',
                                            color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                                            fontSize: '0.9rem',
                                            fontWeight: isActive ? '700' : '500',
                                            transition: 'all 0.3s ease',
                                            display: 'block',
                                            padding: '0.2rem 0'
                                        }}
                                        onMouseEnter={(e) => { if (!isActive) e.target.style.color = 'var(--text-main)' }}
                                        onMouseLeave={(e) => { if (!isActive) e.target.style.color = 'var(--text-muted)' }}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '-4px',
                                                    left: '0',
                                                    right: '0',
                                                    height: '2px',
                                                    background: 'var(--text-main)', // Use text main, stronger contrast
                                                    borderRadius: '2px'
                                                }}
                                            />
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} style={{
                        background: 'var(--primary)',
                        color: 'var(--bg-dark)',
                        padding: '0.4rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        border: 'none',
                    }}>
                        Let's Talk
                    </a>

                    <ThemeToggle />
                </motion.nav>
            </div>

            {/* --- MOBILE NAVBAR (Visible only on Mobile) --- */}
            <div className="mobile-nav-toggle" style={{
                position: 'fixed',
                top: '20px',
                left: '20px',
                right: '20px',
                zIndex: 1100,
                display: 'none', // Shown via CSS media query
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <ThemeToggle />

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        style={{
                            background: 'var(--nav-glass)',
                            border: '1px solid var(--nav-border)',
                            color: 'var(--text-main)',
                            fontSize: '1.2rem',
                            padding: '0.8rem',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <FaBars />
                    </button>
                </div>
            </div>

            {/* --- MOBILE MENU OVERLAY --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'var(--bg-dark)',
                            zIndex: 1200,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem'
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '30px',
                                right: '30px',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--text-main)',
                                fontSize: '2rem',
                                cursor: 'pointer'
                            }}
                        >
                            <FaTimes />
                        </button>

                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={`#${link.id}`}
                                    onClick={(e) => { setIsOpen(false); handleNavClick(e, link.id); }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    style={{
                                        color: 'var(--text-main)',
                                        textDecoration: 'none',
                                        fontSize: '2rem',
                                        fontWeight: '700'
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                onClick={(e) => { setIsOpen(false); handleNavClick(e, 'contact'); }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                style={{
                                    marginTop: '1rem',
                                    background: 'var(--primary)',
                                    color: 'var(--bg-dark)',
                                    padding: '1rem 3rem',
                                    borderRadius: '50px',
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    textDecoration: 'none'
                                }}
                            >
                                Let's Talk
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
