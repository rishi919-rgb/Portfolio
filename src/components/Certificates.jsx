import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

// Importing images directly
import cert1 from '../assets/WhatsApp Image 2026-02-04 a.jpeg';
import cert2 from '../assets/WhatsApp Image 2026-02-04 at 5.07.58 PM.jpeg';
import cert3 from '../assets/WhatsApp Image 2026-02-04 at 5.07.58.jpeg';
import cert4 from '../assets/WhatsApp Image 2026-02-04 at 5.07.59 PM.jpeg';
import cert5 from '../assets/WhatsApp Image 2026-02-04 at 5.07.59.jpeg';

// Importing the new PDF Certificates
import pdf1 from '../assets/Images/certificates/17d6af07-09f2-44a9-aa48-e6bae5d27446.pdf';
import pdf2 from '../assets/Images/certificates/1871da43-db53-4ad7-8748-493cdf12ce67.pdf';
import pdf3 from '../assets/Images/certificates/24446510-643f-4972-bb09-007b12ccf01d.pdf';
import pdf4 from '../assets/Images/certificates/2e19c82d-ca38-4a6e-a312-0910c2d9dbd9.pdf';
import pdf5 from '../assets/Images/certificates/80252b2d-6bf3-4167-9458-6185ef86d19e.pdf';
import pdf6 from '../assets/Images/certificates/8cb4bd7b-e776-474a-93f5-4c86d5a5fc58.pdf';
import pdf7 from '../assets/Images/certificates/b289b404-6281-40e8-970f-08c576371ad1.pdf';
import pdf8 from '../assets/Images/certificates/b8686d9a-a9d6-42a4-a1af-37a49e11331c.pdf';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const credentialList = [
        // PDFs
        { 
            id: 'pdf-1', 
            title: "Core Technical Certification", 
            desc: "Demonstrates high proficiency in fundamental and advanced computer engineering concepts.", 
            file: pdf1, 
            type: "pdf" 
        },
        { 
            id: 'pdf-2', 
            title: "Specialized Training Credential", 
            desc: "Awarded upon successful completion of intensive specialized technical training modules.", 
            file: pdf2, 
            type: "pdf" 
        },
        { 
            id: 'pdf-3', 
            title: "Industry Skill Recognition", 
            desc: "Recognized by industry leaders for skill mastery and software development integration.", 
            file: pdf3, 
            type: "pdf" 
        },
        { 
            id: 'pdf-4', 
            title: "Advanced Coursework Completion", 
            desc: "Successful completion of rigorous academic-level coursework with practical evaluations.", 
            file: pdf4, 
            type: "pdf" 
        },
        { 
            id: 'pdf-5', 
            title: "Technical Validation", 
            desc: "Authorized validation of technical capabilities, logic building, and problem-solving.", 
            file: pdf5, 
            type: "pdf" 
        },
        { 
            id: 'pdf-6', 
            title: "System Architecture & Design", 
            desc: "Demonstrated competence in designing resilient systems and scalable application logic.", 
            file: pdf6, 
            type: "pdf" 
        },
        { 
            id: 'pdf-7', 
            title: "Security & Protocols", 
            desc: "Understanding of core application security, modern protocols, and API development.", 
            file: pdf7, 
            type: "pdf" 
        },
        { 
            id: 'pdf-8', 
            title: "Mastery Certification", 
            desc: "High-level certification denoting comprehensive technical mastery and engineering excellence.", 
            file: pdf8, 
            type: "pdf" 
        },
        
        // Images
        { id: 'img-1', title: "Early Professional Achievement", desc: "Awarded for exceptional performance in competitive technical domains.", file: cert1, type: "image", thumbnail: cert1 },
        { id: 'img-2', title: "Excellence Award", desc: "Acknowledging continued dedication to problem solving and software architecture.", file: cert2, type: "image", thumbnail: cert2 },
        { id: 'img-3', title: "Foundation Certification", desc: "Foundational capabilities in building accessible and performant systems.", file: cert3, type: "image", thumbnail: cert3 },
        { id: 'img-4', title: "Hackathon Merit", desc: "Recognized for rapid prototyping and innovative solution delivery.", file: cert4, type: "image", thumbnail: cert4 },
        { id: 'img-5', title: "Developer Credential", desc: "Demonstration of clean code practices and collaborative software engineering.", file: cert5, type: "image", thumbnail: cert5 }
    ];

    return (
        <section id="certificates" className="section-padding">
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
                        }}>VERIFIED CREDENTIALS</span>
                        <h2 className="section-title" style={{ marginTop: '0.5rem', fontWeight: '900' }}>Certifications</h2>
                    </div>
                </center>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {credentialList.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 4) * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'var(--secondary)' }}
                            onClick={() => setSelectedCert(cert)}
                            className="glass-card"
                            style={{
                                padding: '1.5rem',
                                cursor: 'pointer',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                border: '1px solid var(--glass-border)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Gradient Background Hint */}
                            <div style={{ position: 'absolute', top: '-50%', right: '-50%', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                            
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexGrow: 1 }}>
                                <div style={{ 
                                    minWidth: '50px', 
                                    height: '50px', 
                                    background: 'rgba(96, 165, 250, 0.1)', 
                                    borderRadius: '12px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    color: 'var(--secondary)'
                                }}>
                                    <FaAward size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 'bold', marginBottom: '0.4rem', lineHeight: '1.3' }}>
                                        {cert.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                                        {cert.desc}
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {cert.type === 'pdf' ? 'PDF Document' : 'Image Scan'}
                                </span>
                                <span style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                    Inspect <FaExternalLinkAlt size={12} />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Smart Document Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0, 0, 0, 0.85)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 10000,
                            padding: '2rem'
                        }}
                    >
                        <div style={{ maxWidth: '1000px', width: '100%', height: '85vh', background: 'var(--bg-main)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 0 50px rgba(0,0,0,0.5)' }}>
                            <div style={{ padding: '1.2rem 2rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--glass-bg)' }}>
                                <div>
                                    <h3 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: 'bold' }}>{selectedCert.title}</h3>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Verified Document Viewer</span>
                                </div>
                                <button 
                                    onClick={() => setSelectedCert(null)}
                                    style={{ background: 'rgba(255, 255, 255, 0.1)', border: 'none', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.2s' }}
                                    onMouseOver={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.6)'}
                                    onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                                >
                                    <FaTimes size={18} style={{ pointerEvents: 'none' }} />
                                </button>
                            </div>
                            
                            <div style={{ flexGrow: 1, backgroundColor: '#1a1a1a', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: selectedCert.type === 'image' ? '2rem' : '0' }}>
                                {selectedCert.type === 'image' ? (
                                    <img
                                        src={selectedCert.file}
                                        alt={selectedCert.title}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '8px'
                                        }}
                                    />
                                ) : (
                                    <iframe
                                        src={`${selectedCert.file}#toolbar=0`}
                                        title={selectedCert.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                            background: '#fff'
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
