import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaJava } from 'react-icons/fa';
import { SiLeetcode, SiCplusplus } from 'react-icons/si';

const SocialHub = () => {
    return (
        <section id="social-hub" className="section-padding">
            <div className="container-width">

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Code & Community</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        I don't just write code; I ship it. Check out my activity.
                    </p>
                </div>

                <div className="grid-halves" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem'
                }}>
                    {/* GitHub Card */}
                    <motion.a
                        href="https://github.com/rishi919-rgb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.3)' }}
                        style={{
                            textDecoration: 'none',
                            padding: '3rem',
                            background: 'linear-gradient(145deg, rgba(24, 23, 23, 0.8), rgba(0, 0, 0, 0.9))',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '280px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Background Decoration */}
                        <div style={{ position: 'absolute', top: '-20%', right: '-10%', fontSize: '12rem', opacity: 0.05, transform: 'rotate(15deg)' }}>
                            <FaGithub />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                            <FaGithub style={{ fontSize: '3rem', color: '#fff' }} />
                            <div>
                                <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: 0 }}>GitHub</h3>
                                <p style={{ color: '#8b949e', margin: 0 }}>@rishi919-rgb</p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>20+</h4>
                                <span style={{ color: '#8b949e', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FaCodeBranch /> Repositories
                                </span>
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>Active</h4>
                                <span style={{ color: '#8b949e', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <FaStar /> Contributor
                                </span>
                            </div>
                        </div>
                    </motion.a>

                    {/* LeetCode Card - Corrected Stats */}
                    <motion.a
                        href="https://leetcode.com/u/rishi919/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, borderColor: 'rgba(255, 161, 22, 0.3)' }}
                        style={{
                            textDecoration: 'none',
                            padding: '3rem',
                            background: 'linear-gradient(145deg, rgba(40, 40, 40, 0.8), rgba(20, 20, 20, 0.9))',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '280px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Background Decoration */}
                        <div style={{ position: 'absolute', top: '-20%', right: '-10%', fontSize: '12rem', opacity: 0.05, transform: 'rotate(15deg)', color: '#FFA116' }}>
                            <SiLeetcode />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                            <SiLeetcode style={{ fontSize: '3rem', color: '#FFA116' }} />
                            <div>
                                <h3 style={{ color: '#d7d7d7', fontSize: '1.5rem', margin: 0 }}>LeetCode</h3>
                                <p style={{ color: '#8b949e', margin: 0 }}>Problem Solving</p>
                            </div>
                        </div>

                        {/* Corrected Stats Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1fr', gap: '2rem', position: 'relative', zIndex: 1 }}>
                            <div>
                                <h4 style={{ color: '#eff1f6', fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>20</h4>
                                <span style={{ color: '#8b949e', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    Problems Solved
                                </span>
                            </div>
                            <div>
                                <h4 style={{ color: '#eff1f6', fontSize: '1.2rem', fontWeight: 'bold', margin: 0, marginBottom: '0.5rem' }}>Top Langs</h4>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <FaJava color="#f89820" size={20} title="Java" />
                                    <SiCplusplus color="#00599C" size={20} title="C++" />
                                </div>
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default SocialHub;
