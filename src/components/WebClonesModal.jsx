import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaYoutube } from 'react-icons/fa';

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
                onClick={(e) => e.stopPropagation()}
                className="glass-card"
                style={{
                    width: '100%',
                    maxWidth: '1100px',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    padding: '3rem',
                    borderRadius: '24px',
                    position: 'relative',
                    background: 'var(--bg-dark)',
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
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem'
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
                                transition: 'all 0.3s',
                                height: '100%'
                            }}
                        >
                            <div style={{ height: '160px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={site.img}
                                    alt={site.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>

                            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-main)', margin: 0 }}>{site.title}</h3>
                                    <span style={{
                                        background: 'var(--secondary)',
                                        color: '#000',
                                        padding: '0.15rem 0.5rem',
                                        borderRadius: '6px',
                                        fontSize: '0.65rem',
                                        fontWeight: '700',
                                        flexShrink: 0
                                    }}>
                                        {index + 1}/6
                                    </span>
                                </div>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.85rem', lineHeight: '1.5', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{site.desc}</p>

                                <div className="clone-actions">
                                    <a href={site.demo} target="_blank" rel="noopener noreferrer" className="clone-btn clone-btn--demo">
                                        <FaExternalLinkAlt size={10} /> Demo
                                    </a>
                                    <a href={site.repo} target="_blank" rel="noopener noreferrer" className="clone-btn clone-btn--repo">
                                        <FaGithub size={12} /> Code
                                    </a>
                                    {site.youtube && (
                                        <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="clone-btn clone-btn--youtube">
                                            <FaYoutube size={12} /> Video
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <style>{`
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    .clone-actions {
                        display: flex;
                        flex-wrap: nowrap;
                        gap: 0.5rem;
                        margin-top: auto;
                        animation: fadeInUp 0.3s ease forwards;
                    }

                    .clone-btn {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.3rem;
                        text-decoration: none;
                        font-weight: 700;
                        font-size: 0.7rem;
                        letter-spacing: 0.02em;
                        padding: 0.45rem 0.75rem;
                        min-height: 32px;
                        border-radius: 6px;
                        border: 1px solid;
                        transition: all 0.2s ease;
                        cursor: pointer;
                        white-space: nowrap;
                        flex: 1;
                    }

                    .clone-btn:hover {
                        transform: translateY(-1px);
                        filter: brightness(1.08);
                    }

                    .clone-btn--demo {
                        background: var(--secondary);
                        color: #000;
                        border-color: var(--secondary);
                    }

                    .clone-btn--demo:hover {
                        background: #3b82f6;
                        border-color: #3b82f6;
                        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
                    }

                    .clone-btn--repo {
                        background: rgba(255, 255, 255, 0.04);
                        color: var(--text-muted);
                        border-color: var(--glass-border);
                    }

                    .clone-btn--repo:hover {
                        background: rgba(255, 255, 255, 0.08);
                        color: var(--text-main);
                        border-color: var(--secondary);
                    }

                    .clone-btn--youtube {
                        background: #FF4D4D;
                        color: #fff;
                        border-color: #FF4D4D;
                    }

                    .clone-btn--youtube:hover {
                        background: #dc2626;
                        border-color: #dc2626;
                        box-shadow: 0 4px 12px rgba(255, 77, 77, 0.25);
                    }

                    @media (max-width: 900px) {
                        .clone-actions {
                            flex-wrap: wrap;
                        }
                        
                        .clone-btn {
                            flex: 0 1 calc(50% - 0.25rem);
                        }
                    }

                    @media (max-width: 480px) {
                        .clone-btn {
                            flex: 1 1 100%;
                        }
                    }
                `}</style>
            </motion.div>
        </motion.div>
    );
};

export default WebClonesModal;
