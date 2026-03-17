import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

const WebClonesModal = ({ isOpen, onClose, clones }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(10px)',
                zIndex: 4000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                overflowY: 'auto'
            }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                className="glass-card"
                style={{
                    width: '100%',
                    maxWidth: '1100px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    padding: '3rem',
                    borderRadius: '24px',
                    position: 'relative',
                    background: 'var(--bg-dark)', // Use standard background for content area
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-main)',
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                >
                    <FaTimes />
                </button>

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: '800' }}>Frontend Clones</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        A collection of pixel-perfect UI recreations focusing on aesthetic layouts and CSS proficiency.
                    </p>
                </div>

                {/* Clones Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {clones.map((site, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid var(--glass-border)',
                                background: 'var(--glass-bg)',
                                transition: 'all 0.3s'
                            }}
                        >
                            <div style={{ height: '180px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={site.img}
                                    alt={site.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>

                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{site.title}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5', flexGrow: 1 }}>{site.desc}</p>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                    <a href={site.demo} target="_blank" rel="noopener noreferrer"
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'var(--secondary)', fontWeight: '600', fontSize: '0.9rem' }}>
                                        <FaExternalLinkAlt size={12} /> Live Demo
                                    </a>
                                    <a href={site.repo} target="_blank" rel="noopener noreferrer"
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '500', fontSize: '0.9rem' }}>
                                        <FaGithub size={14} /> Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default WebClonesModal;
