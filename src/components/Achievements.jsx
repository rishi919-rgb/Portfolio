import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaMedal } from 'react-icons/fa';

const Achievements = () => {
    const achievements = [
        {
            icon: <FaTrophy color="#f59e0b" />,
            title: "OpenCode'25 Finalist",
            desc: "Reached the final evaluation stage for OpenCode 2025 at IIIT Allahabad — a highly competitive open-source hackathon.",
            date: "Early 2025"
        },
        {
            icon: <FaMedal color="#22c55e" />,
            title: "🏆 2nd Place — Craftathon 2026",
            desc: "Secured 2nd in the GreenTech domain and ranked 10th overall out of 131 teams at Gandhinagar University's 36-hour hackathon with Fasal Rakshak.",
            date: "April 2026"
        },
        {
            icon: <FaStar color="#6366f1" />,
            title: "Dev Heat — IIIT Surat",
            desc: "Participated in Dev Heat Hackathon (Spring Fiesta) at IIIT Surat, building 'Debate AI' — an LLM-powered structured academic debate agent.",
            date: "2025"
        }
    ];

    return (
        <section id="achievements" className="section-padding">
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
                        }}>MILESTONES</span>
                        <h2 className="section-title" style={{ marginTop: '0.5rem', fontWeight: '900' }}>Achievements</h2>
                    </div>
                </center>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1.5rem',
                                padding: '2rem'
                            }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                flexShrink: 0
                            }}>
                                {item.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '0.5rem' }}>{item.desc}</p>
                                <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: '600' }}>{item.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
