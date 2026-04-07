import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

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
        { id: 'img-1', file: cert1, type: "image" },
        { id: 'img-2', file: cert2, type: "image" },
        { id: 'img-3', file: cert3, type: "image" },
        { id: 'img-4', file: cert4, type: "image" },
        { id: 'img-5', file: cert5, type: "image" },
        { id: 'pdf-1', file: pdf1, type: "pdf" },
        { id: 'pdf-2', file: pdf2, type: "pdf" },
        { id: 'pdf-3', file: pdf3, type: "pdf" },
        { id: 'pdf-4', file: pdf4, type: "pdf" },
        { id: 'pdf-5', file: pdf5, type: "pdf" },
        { id: 'pdf-6', file: pdf6, type: "pdf" },
        { id: 'pdf-7', file: pdf7, type: "pdf" },
        { id: 'pdf-8', file: pdf8, type: "pdf" }
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
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {credentialList.map((cert, index) => (
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
                                padding: '0.5rem',
                                cursor: 'zoom-in',
                                borderRadius: '16px',
                                border: '1px solid var(--glass-border)',
                                position: 'relative',
                                overflow: 'hidden',
                                background: 'rgba(255, 255, 255, 0.03)'
                            }}
                        >
                            <div style={{ aspectRatio: '1.414', overflow: 'hidden', borderRadius: '10px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
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
                                            pointerEvents: 'none'
                                        }}
                                        tabIndex="-1"
                                    />
                                )}
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
                            <div style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', background: 'var(--glass-bg)' }}>
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
                                        alt="Verified Certificate"
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
