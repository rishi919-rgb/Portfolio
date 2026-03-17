import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importing images directly
import cert1 from '../assets/WhatsApp Image 2026-02-04 a.jpeg';
import cert2 from '../assets/WhatsApp Image 2026-02-04 at 5.07.58 PM.jpeg';
import cert3 from '../assets/WhatsApp Image 2026-02-04 at 5.07.58.jpeg';
import cert4 from '../assets/WhatsApp Image 2026-02-04 at 5.07.59 PM.jpeg';
import cert5 from '../assets/WhatsApp Image 2026-02-04 at 5.07.59.jpeg';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const certificates = [cert1, cert2, cert3, cert4, cert5];

    return (
        <section id="certificates" className="section-padding">
            <div className="container-width">
                <h2 className="section-title">Certifications</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedCert(cert)}
                            className="glass-card"
                            style={{
                                padding: '0.8rem',
                                cursor: 'zoom-in',
                                borderRadius: '16px'
                            }}
                        >
                            <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: '12px' }}>
                                <img
                                    src={cert}
                                    alt={`Certificate ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        background: 'rgba(0,0,0,0.5)'
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal */}
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
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.95)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 10000,
                            cursor: 'zoom-out'
                        }}
                    >
                        <motion.img
                            src={selectedCert}
                            alt="Certificate Full View"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            style={{
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                borderRadius: '4px',
                                boxShadow: '0 0 50px rgba(0,0,0,0.5)'
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
