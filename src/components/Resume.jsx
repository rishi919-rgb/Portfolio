import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaTimes, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const Resume = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(10px)',
                zIndex: 3000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                overflowY: 'auto'
            }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
                className="glass-card"
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    padding: '3rem 2rem',
                    borderRadius: '24px',
                    position: 'relative'
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        color: 'var(--text-main)',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        transition: 'background 0.3s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                >
                    <FaTimes />
                </button>

                {/* Header */}
                <div style={{ textAlign: 'center', borderBottom: '1px solid var(--glass-border)', paddingBottom: '2rem', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Rishikesh Singh</h2>
                    <p style={{ color: 'var(--secondary)', fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>Full Stack Developer</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        <span>rishikesh.singhges@gmail.com</span>
                        <span>•</span>
                        <span>github.com/rishi919-rgb</span>
                    </div>

                    {/* Fake Print/Download button to make it look professional */}
                    <button
                        onClick={() => window.print()}
                        className="btn-primary"
                        style={{ marginTop: '1.5rem', padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
                    >
                        <FaDownload /> Download as PDF
                    </button>
                </div>

                {/* Resume Content */}
                <div style={{ display: 'grid', gap: '2rem' }}>

                    {/* Education */}
                    <section>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                            <FaGraduationCap /> Education
                        </h3>
                        <div style={{ background: 'var(--input-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                <strong style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>BSc Computer Science</strong>
                                <span style={{ color: 'var(--text-muted)' }}>2022 - 2025</span>
                            </div>
                            <p style={{ color: 'var(--secondary)', marginBottom: '0.5rem' }}>University of Delhi</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                Comprehensive study of computer science fundamentals including Data Structures, Algorithms, Web Technologies, Database Management Systems, and Software Engineering.
                            </p>
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                            <FaLaptopCode /> Technical Skills
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div>
                                <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Frontend</strong>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>React.js, JavaScript (ES6+), HTML5/CSS3, Tailwind CSS, Framer Motion</p>
                            </div>
                            <div>
                                <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Backend & Database</strong>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Node.js, Express, MongoDB, RESTful APIs</p>
                            </div>
                            <div>
                                <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Tools & Deployment</strong>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Git, GitHub, Vercel, Netlify, VS Code, Postman</p>
                            </div>
                            <div>
                                <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Languages</strong>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Java (OOP, Data Structures), JavaScript, Python (Basics)</p>
                            </div>
                        </div>
                    </section>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Resume;
