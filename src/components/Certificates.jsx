import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBuilding, FaTrophy } from 'react-icons/fa';

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
    const [visibleCount, setVisibleCount] = useState(8);

    const credentialList = [
        { id: 'img-1', file: cert1, type: "image", title: "Appian AI Application Challenge", event: "Shaastra 2026", issuer: "IIT Madras", category: "Participation" },
        { id: 'img-2', file: cert2, type: "image", title: "Pulse Quest", event: "Elan & nVision 2026", issuer: "IIT Hyderabad", category: "Appreciation" },
        { id: 'img-3', file: cert3, type: "image", title: "Code Clash", event: "Elan & nVision 2026", issuer: "IIT Hyderabad", category: "Appreciation" },
        { id: 'img-4', file: cert4, type: "image", title: "Synapse: NeuroTech Challenge", event: "Parsec 6.0", issuer: "IIT Dharwad", category: "Participation" },
        { id: 'img-5', file: cert5, type: "image", title: "Synaptix Frontier AI Hack", event: "Shaastra 2026", issuer: "IIT Madras", category: "Participation" },
        { id: 'pdf-1', file: pdf1, type: "pdf", title: "OpenCode 2025", event: "Opencode'25", issuer: "IIIT Allahabad", category: "Participation" },
        { id: 'pdf-2', file: pdf2, type: "pdf", title: "Policy Hackathon", event: "Policy Conclave'26", issuer: "IIT Kanpur", category: "Participation" },
        { id: 'pdf-3', file: pdf3, type: "pdf", title: "GameTrade Hackathon", event: "Phase 1 - Storyboard & Concept", issuer: "IIT Madras", category: "Participation" },
        { id: 'pdf-4', file: pdf4, type: "pdf", title: "ArtPark CodeForge Hackathon", event: "Build & Submit (Quantum Syndicates)", issuer: "IISc Bangalore", category: "Participation" },
        { id: 'pdf-5', file: pdf5, type: "pdf", title: "GCET Hackathon 2026", event: "Hackathon", issuer: "G H Patel College", category: "Participation" },
        { id: 'pdf-6', file: pdf6, type: "pdf", title: "Pragati 2.0 Build-it On", event: "Hackathon (Indian Innovators)", issuer: "TCET Mumbai", category: "Participation" },
        { id: 'pdf-7', file: pdf7, type: "pdf", title: "Hack4Krche", event: "Idea Submission & Evaluation", issuer: "Kasturi Ram College", category: "Participation" },
        { id: 'pdf-8', file: pdf8, type: "pdf", title: "Dev Heat Hackathon", event: "Spring Fiesta", issuer: "IIIT Surat", category: "Participation" }
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
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1.5rem'
                }}>
                    {credentialList.slice(0, visibleCount).map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 4) * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'var(--secondary)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                            onClick={() => setSelectedCert(cert)}
                            className="glass-card"
                            style={{
                                width: '280px',
                                padding: '1rem',
                                cursor: 'zoom-in',
                                borderRadius: '16px',
                                border: '1px solid var(--glass-border)',
                                position: 'relative',
                                overflow: 'hidden',
                                background: 'rgba(255, 255, 255, 0.03)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{ aspectRatio: '1.414', overflow: 'hidden', borderRadius: '10px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }}>
                                {cert.type === 'image' ? (
                                    <img
                                        src={cert.file}
                                        alt="Certificate Preview"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                ) : (
                                    /* Pointer-events set to none so it doesn't hijack the click from the parent div */
                                    <iframe
                                        src={`${cert.file}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                            pointerEvents: 'none',
                                            transform: 'scale(1.08)',
                                            transformOrigin: 'center'
                                        }}
                                        tabIndex="-1"
                                    />
                                )}
                            </div>
                            
                            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0, fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={cert.title}>
                                    {cert.title}
                                </h3>
                                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <FaBuilding size={12} style={{ color: 'var(--secondary)' }} />
                                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={cert.issuer}>{cert.issuer}</span>
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                                    <FaTrophy size={11} />
                                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={cert.event}>{cert.event}</span>
                                </div>
                                <span style={{
                                    alignSelf: 'flex-start',
                                    marginTop: '0.5rem',
                                    padding: '0.2rem 0.6rem',
                                    fontSize: '0.65rem',
                                    borderRadius: '50px',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'var(--secondary)',
                                    fontWeight: '500',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {cert.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {credentialList.length > 8 && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                        <button
                            onClick={() => setVisibleCount(prev => prev === 8 ? credentialList.length : 8)}
                            style={{
                                padding: '0.8rem 2rem',
                                borderRadius: '50px',
                                background: 'transparent',
                                border: '1px solid var(--secondary)',
                                color: 'var(--secondary)',
                                cursor: 'pointer',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = 'var(--secondary)';
                                e.target.style.color = '#fff';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = 'var(--secondary)';
                            }}
                        >
                            {visibleCount === 8 ? 'Load More Credentials' : 'Show Less'}
                        </button>
                    </div>
                )}
            </div>

            {/* Smart Document Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
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
                            padding: '2rem',
                            cursor: 'zoom-out'
                        }}
                    >
                        {/* Globally restore native cursor while modal is open, since PDF iframes hijack custom cursors anyway */}
                        <style>{`
                            * { cursor: auto !important; }
                        `}</style>
                        <div 
                            onClick={(e) => e.stopPropagation()}
                            style={{ maxHeight: '90vh', maxWidth: '1100px', width: '100%', background: 'var(--bg-main)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 0 50px rgba(0,0,0,0.5)', cursor: 'default' }}
                        >
                            <div style={{ padding: '1.2rem 2rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--glass-bg)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#fff', fontWeight: '700' }}>{selectedCert.title}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: 'var(--secondary)', opacity: 0.9 }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FaBuilding size={12} /> {selectedCert.issuer}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FaTrophy size={11} /> {selectedCert.event}</span>
                                        <span style={{ padding: '0.1rem 0.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', fontSize: '0.75rem', color: '#fff' }}>{selectedCert.category}</span>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => setSelectedCert(null)}
                                    style={{ background: 'rgba(255, 255, 255, 0.1)', border: 'none', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.2s' }}
                                    onMouseOver={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.6)'}
                                    onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                                    aria-label="Close modal"
                                >
                                    <FaTimes size={18} style={{ pointerEvents: 'none' }} />
                                </button>
                            </div>
                            
                            <div style={{ flexGrow: 1, height: '70vh', backgroundColor: '#1a1a1a', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: selectedCert.type === 'image' ? '2rem' : '0' }}>
                                {selectedCert.type === 'image' ? (
                                    <img
                                        src={selectedCert.file}
                                        alt={selectedCert.title}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain',
                                            borderRadius: '8px',
                                            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                                        }}
                                    />
                                ) : (
                                    <iframe
                                        src={`${selectedCert.file}#toolbar=0`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                            background: '#fff',
                                            transform: 'scale(1.02)',
                                            transformOrigin: 'center'
                                        }}
                                        title={selectedCert.title}
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
