import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import { featuredProjects } from './Projects';

const ProjectOverlay = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the project. If not found, project is undefined.
    const project = featuredProjects.find(p => p.id === id);

    // Prevent body scroll when overlay is open.
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [project]);

    if (!project) return null;

    const handleClose = () => {
        navigate('/');
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    background: `radial-gradient(circle at 50% 50%, ${project.accent}20 0%, rgba(10, 15, 30, 0.98) 70%)`,
                    backdropFilter: 'blur(20px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflowY: 'auto',
                    padding: '2rem'
                }}
            >
                {/* Close Button Background Area */}
                <div style={{ position: 'absolute', inset: 0 }} onClick={handleClose} />

                {/* Close Button - Fixed to Viewport so it never disappears */}
                <motion.button
                    onClick={handleClose}
                    whileHover={{ scale: 1.1, rotate: 90, backgroundColor: 'rgba(255,255,255,0.2)' }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        position: 'fixed',
                        top: '30px',
                        right: '30px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#fff',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10001,
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        outline: 'none'
                    }}
                >
                    <FaTimes size={20} />
                </motion.button>

                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    style={{
                        position: 'relative',
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: `1px solid rgba(255,255,255,0.15)`,
                        borderTop: `1px solid rgba(255,255,255,0.3)`,
                        borderRadius: '24px',
                        maxWidth: '1000px',
                        width: '100%',
                        margin: 'auto',
                        boxShadow: `0 30px 60px -15px ${project.accent}60`,
                        backdropFilter: 'blur(40px)',
                        zIndex: 10000
                    }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card
                >
                    {/* Content */}
                    <div style={{ padding: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{
                                padding: '0.4rem 1rem',
                                background: `${project.accent}20`,
                                color: project.accent || 'var(--primary)',
                                borderRadius: '50px',
                                fontSize: '0.8rem',
                                fontWeight: '700',
                                letterSpacing: '1px',
                                textTransform: 'uppercase'
                            }}>
                                Project Deep Dive
                            </span>
                        </div>
                        
                        <h1 style={{ fontSize: '3.5rem', margin: '0 0 1rem 0', color: '#fff', fontWeight: '800', letterSpacing: '-1px' }}>{project.title}</h1>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', maxWidth: '800px', lineHeight: 1.7 }}>{project.desc}</p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
                            {project.tech && project.tech.map((t, idx) => (
                                <span key={idx} style={{
                                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '0.6rem 1.2rem',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: '#fff',
                                    fontWeight: '500',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                                }}>
                                    {t.icon} {t.name}
                                </span>
                            ))}
                        </div>

                        {/* Interactive Demos Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem',
                            marginBottom: '3rem'
                        }}>
                            {/* YouTube Box */}
                            <motion.a 
                                href={project.youtube || "#"} 
                                target="_blank" 
                                rel="noreferrer"
                                whileHover={{ scale: 1.03, y: -5, boxShadow: `0 15px 35px -10px ${project.accent}80`, borderColor: project.accent }}
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '20px',
                                    padding: '2.5rem 2rem',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    color: '#fff'
                                }}
                            >
                                <FaYoutube size={50} color="#FF0000" style={{ marginBottom: '1.5rem', filter: 'drop-shadow(0 0 15px rgba(255,0,0,0.4))' }} />
                                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>YouTube Demo</h3>
                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '2rem' }}>Watch a full walkthrough of the application features.</p>
                                <div style={{ marginTop: 'auto', background: `${project.accent}20`, color: project.accent, padding: '0.6rem 1.5rem', borderRadius: '50px', fontWeight: 'bold' }}>Watch Video</div>
                            </motion.a>

                            {/* API Postman Box */}
                            <motion.a 
                                href={project.postman || "#"} 
                                target="_blank" 
                                rel="noreferrer"
                                whileHover={{ scale: 1.03, y: -5, boxShadow: `0 15px 35px -10px ${project.accent}80`, borderColor: project.accent }}
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '20px',
                                    padding: '2.5rem 2rem',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    color: '#fff'
                                }}
                            >
                                <SiPostman size={50} color="#FF6C37" style={{ marginBottom: '1.5rem', filter: 'drop-shadow(0 0 15px rgba(255,108,55,0.4))' }} />
                                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>API Documentation</h3>
                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '2rem' }}>Explore the backend endpoints via Postman.</p>
                                <div style={{ marginTop: 'auto', background: `${project.accent}20`, color: project.accent, padding: '0.6rem 1.5rem', borderRadius: '50px', fontWeight: 'bold' }}>View API</div>
                            </motion.a>

                        </div>

                        {/* Image Showcase */}
                        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <img src={project.img} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '4rem', flexWrap: 'wrap' }}>
                            <motion.a 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.repo} 
                                target="_blank" 
                                rel="noreferrer" 
                                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2.5rem', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.2)' }}
                            >
                                <FaGithub size={20} /> Source Code
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${project.accent}80` }}
                                whileTap={{ scale: 0.95 }}
                                href={project.demo} 
                                target="_blank" 
                                rel="noreferrer" 
                                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: project.accent, color: '#fff', padding: '1rem 2.5rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}
                            >
                                <FaExternalLinkAlt size={18} /> Live App
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectOverlay;
