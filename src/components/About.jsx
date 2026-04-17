import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container-width grid-halves" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                overflow: 'hidden',
            }}>
                {/* Left: Casual Image */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                     style={{ position: 'relative' }}
                >
                    <div className="glass-card" style={{ padding: '10px', borderRadius: '24px', transform: 'rotate(-2deg)' }}>
                        <img
                            src="https://res.cloudinary.com/dpkugdw9y/image/upload/v1770272999/new_ybxph5.jpg"
                            alt="Rishikesh Casual"
                            style={{
                                width: '100%',
                                borderRadius: '16px',
                                display: 'block',
                                filter: 'contrast(1.1)'
                            }}
                        />
                    </div>
                </motion.div>

                {/* Right: Content & Stats */}
                <div>
                    <h2 className="section-title" style={{ textAlign: 'left', margin: 0, marginBottom: '1.5rem' }}>
                        About Me.
                    </h2>

                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Computer Science student crafting digital experiences at <strong>Coding Gita</strong>. I architect full-stack solutions with a passion for clean code and scalable systems — from MongoDB backends to React frontends. Driven by curiosity, fueled by challenge.
                    </p>

                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        I thrive on solving complex algorithmic problems and transforming ideas into production-ready applications. My recent work spans AI integrations, real-time data systems, and intuitive user interfaces that prioritize both performance and experience.
                    </p>

                    {/* Stats Grid - Visible & Styled */}
                    {/* Stats Grid - Generalized */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1rem',
                        marginBottom: '2rem'
                    }}>
                        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center' }}>
                            <FaCode size={20} color="var(--secondary)" style={{ marginBottom: '0.5rem' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>500+</h3>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Hours Coding</p>
                        </div>
                        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center' }}>
                            <FaLaptopCode size={20} color="var(--accent-purple)" style={{ marginBottom: '0.5rem' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>20+</h3>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Projects</p>
                        </div>
                        <div className="glass-card" style={{ padding: '1rem', textAlign: 'center' }}>
                            <FaRocket size={20} color="#10b981" style={{ marginBottom: '0.5rem' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>CS</h3>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Student</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
