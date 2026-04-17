import React from 'react';
import { motion } from 'framer-motion';
import { FaFigma, FaExternalLinkAlt } from 'react-icons/fa';
import edtechImg from '../assets/Images/edtech_figma.png';
import railyatriImg from '../assets/Images/railyatri_figma.png';

const FigmaDesigns = () => {
    const figmaProjects = [
        {
            title: "EdTech Student LMS UI",
            desc: "A comprehensive Learning Management interface featuring real-time course tracking, task calendars, achievement badging, and third-party coding platform integrations.",
            link: "https://www.figma.com/design/4fYUX71AGbIBLB1eZoPCew/Untitled?node-id=0-1&p=f&t=C8Qiw9n2J4d27nZ7-0",
            img: edtechImg 
        },
        {
            title: "RailYatri Booking UI",
            desc: "A modern railway booking dashboard featuring a unified train search engine, real-time PNR status tracking, live train status modules, and a clean, user-friendly navigation layout.",
            link: "https://www.figma.com/design/4fYUX71AGbIBLB1eZoPCew/Untitled?node-id=318-13&p=f&t=C8Qiw9n2J4d27nZ7-0",
            img: railyatriImg
        }
    ];

    return (
        <section id="figma-designs" className="section-padding">
            <div className="container-width">
                <center>
                    <div style={{ marginBottom: '4rem' }}>
                        <span style={{ 
                            color: 'var(--secondary)', 
                            fontWeight: '800', 
                            letterSpacing: '3px', 
                            fontSize: '0.8rem', 
                            textTransform: 'uppercase',
                            opacity: 0.8
                        }}>UI/UX PORTFOLIO</span>
                        <h2 className="section-title" style={{ marginTop: '0.5rem', fontWeight: '900' }}>Figma Designs</h2>
                    </div>
                </center>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {figmaProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '1.5rem',
                                borderRadius: '16px',
                                border: '1px solid var(--glass-border)'
                            }}
                        >
                            <div style={{
                                width: '100%',
                                backgroundColor: 'var(--glass-bg)',
                                borderRadius: '10px',
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.05)',
                                overflow: 'hidden'
                            }}>
                                {project.img && (project.img.startsWith('/') || project.img.startsWith('http') || project.img.startsWith('data:') || !project.img.includes('Figma-logo.svg')) ? (
                                    <img src={project.img} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <FaFigma size={48} color="#F24E1E" style={{ opacity: 0.5 }} />
                                    </div>
                                )}
                            </div>
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                                {project.desc}
                            </p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', width: '100%' }}>
                                <FaExternalLinkAlt /> View in Figma
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FigmaDesigns;
