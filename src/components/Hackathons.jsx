import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaLightbulb, FaAward, FaBuilding, FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt, FaTrophy } from 'react-icons/fa';
import groupImg1 from '../assets/Images/group image 1 .jpeg';
import groupImg2 from '../assets/Images/group image 2.jpeg';
import devHeatCert from '../assets/Images/certificates/b8686d9a-a9d6-42a4-a1af-37a49e11331c.pdf';

const Hackathons = () => {
    const hackathons = [
        {
            name: "Craftathon 2026",
            tagline: "36-Hour Coding Survival Challenge",
            org: "Gandhinagar University",
            location: "Gandhinagar, Gujarat",
            date: "April 3–4, 2026",
            track: "GreenTech Track",
            accentColor: '#22c55e',
            images: [groupImg1, groupImg2],
            problem: "Leverage AI and IoT technologies to create an accessible, early warning system for crop diseases that helps small and marginal farmers reduce crop loss — designed specifically for low-connectivity rural environments with voice-first accessibility.",
            solution: "Built 'Fasal Rakshak', an AI-powered IoT early warning system. Integrated a TensorFlow/Keras CNN model capable of identifying 26 crop diseases across 14 species. Backed by a Django REST API, offline-capable PWA with voice navigation, and proactive community outbreak alerts using anonymized farm data.",
            outcome: "🏆 2nd Place in GreenTech Domain  •  🎯 Ranked 10th Overall out of 131 Teams",
        },
        {
            name: "Dev Heat Hackathon",
            tagline: "Spring Fiesta — AI & Innovation Track",
            org: "IIIT Surat",
            location: "Surat, Gujarat",
            date: "2025",
            track: "AI Innovation",
            accentColor: '#6366f1',
            certLink: devHeatCert,
            problem: "Design and build an AI-powered system capable of structuring coherent arguments, identifying logical fallacies in real-time, and moderating high-stakes academic debate sessions autonomously.",
            solution: "Built 'Debate AI', an LLM-powered conversational agent built using LangChain and OpenAI. The system formulates fact-checked rebuttals, evaluates argument strength, detects logical fallacies, and can moderate point-counterpoint exchanges with contextual memory across rounds.",
            outcome: "Certificate of Participation — Indian Institute of Information Technology (IIIT), Surat",
        }
    ];

    return (
        <section id="hackathons" className="section-padding" style={{ background: 'rgba(0,0,0,0.2)' }}>
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
                        }}>COMPETITIVE CODING</span>
                        <h2 className="section-title" style={{ marginTop: '0.5rem', fontWeight: '900' }}>Hackathons</h2>
                    </div>
                </center>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {hackathons.map((hack, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            className="glass-card"
                            style={{
                                padding: '0',
                                overflow: 'hidden',
                                borderLeft: `4px solid ${hack.accentColor}`,
                                borderRadius: '16px'
                            }}
                        >
                            {/* Image Grid (only for Craftathon) */}
                            {hack.images && (
                                <div style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: '1fr 1fr', 
                                    gap: '3px',
                                    height: '300px',
                                    background: '#000'
                                }}>
                                    {hack.images.map((img, i) => (
                                        <div key={i} style={{ overflow: 'hidden', position: 'relative' }}>
                                            <img 
                                                src={img} 
                                                alt={`${hack.name} ${i + 1}`} 
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover', 
                                                    objectPosition: 'center top',
                                                    transition: 'transform 0.4s ease',
                                                    display: 'block'
                                                }} 
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Content */}
                            <div style={{ padding: '2rem' }}>

                                {/* Header */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div>
                                        <div style={{ 
                                            display: 'inline-block',
                                            background: `${hack.accentColor}20`,
                                            color: hack.accentColor,
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            letterSpacing: '2px',
                                            textTransform: 'uppercase',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '20px',
                                            border: `1px solid ${hack.accentColor}40`,
                                            marginBottom: '0.7rem'
                                        }}>
                                            {hack.track}
                                        </div>
                                        <h3 style={{ fontSize: '1.7rem', color: 'var(--text-main)', marginBottom: '0.3rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                            <FaLaptopCode color={hack.accentColor} /> {hack.name}
                                        </h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem', fontStyle: 'italic' }}>{hack.tagline}</p>
                                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                <FaBuilding color={hack.accentColor} /> {hack.org}
                                            </span>
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                <FaMapMarkerAlt color={hack.accentColor} /> {hack.location}
                                            </span>
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                <FaCalendarAlt color={hack.accentColor} /> {hack.date}
                                            </span>
                                        </div>
                                    </div>
                                    {hack.certLink && (
                                        <a href={hack.certLink} target="_blank" rel="noopener noreferrer" style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.65rem 1.3rem',
                                            background: `${hack.accentColor}15`,
                                            color: hack.accentColor,
                                            border: `1px solid ${hack.accentColor}50`,
                                            borderRadius: '30px',
                                            fontSize: '0.85rem',
                                            fontWeight: '700',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            whiteSpace: 'nowrap'
                                        }}
                                        onMouseOver={e => { e.currentTarget.style.background = `${hack.accentColor}30`; e.currentTarget.style.boxShadow = `0 0 20px ${hack.accentColor}30`; }}
                                        onMouseOut={e => { e.currentTarget.style.background = `${hack.accentColor}15`; e.currentTarget.style.boxShadow = 'none'; }}
                                        >
                                            <FaExternalLinkAlt size={12} /> View Certificate
                                        </a>
                                    )}
                                </div>

                                {/* Divider */}
                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.5rem' }} />

                                {/* 3-Block Details */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                                    {/* Problem Statement */}
                                    <div style={{ background: 'rgba(245,158,11,0.05)', padding: '1.2rem 1.4rem', borderRadius: '10px', borderLeft: '3px solid #f59e0b' }}>
                                        <h4 style={{ color: '#f59e0b', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <FaLightbulb /> Problem Statement
                                        </h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{hack.problem}</p>
                                    </div>

                                    {/* Proposed Solution */}
                                    <div style={{ background: 'rgba(99,102,241,0.05)', padding: '1.2rem 1.4rem', borderRadius: '10px', borderLeft: '3px solid #6366f1' }}>
                                        <h4 style={{ color: '#818cf8', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <FaLaptopCode /> Proposed Solution
                                        </h4>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{hack.solution}</p>
                                    </div>

                                    {/* Outcome */}
                                    <div style={{ background: `${hack.accentColor}08`, padding: '1.2rem 1.4rem', borderRadius: '10px', borderLeft: `3px solid ${hack.accentColor}` }}>
                                        <h4 style={{ color: hack.accentColor, fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <FaTrophy /> Outcome
                                        </h4>
                                        <p style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: '600', margin: 0 }}>{hack.outcome}</p>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;
