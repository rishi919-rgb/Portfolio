import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {

    return (
        <>
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px',
            paddingBottom: '2rem',
        }}>
            <div className="container-width grid-halves hero-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '4rem',
                alignItems: 'center',
                padding: '0 2rem',
                width: '100%',
            }}>
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ textAlign: 'left', zIndex: 10 }}
                >
                    <div style={{
                        display: 'inline-block',
                        padding: '0.4rem 1rem',
                        background: 'rgba(96, 165, 250, 0.1)',
                        border: '1px solid rgba(96, 165, 250, 0.2)',
                        borderRadius: '50px',
                        color: 'var(--secondary)',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem'
                    }}>
                        Available for Projects
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2rem, 7vw, 4rem)',
                        fontWeight: '900',
                        lineHeight: '1.1',
                        marginBottom: '1rem',
                        color: 'var(--text-main)',
                        letterSpacing: '-1px'
                    }}>
                        Rishikesh Singh.
                    </h1>

                    <h2 style={{
                        fontSize: 'clamp(1.2rem, 4vw, 2.2rem)',
                        fontWeight: '500',
                        color: 'var(--text-muted)',
                        marginBottom: '2.5rem',
                        minHeight: '40px'
                    }}>
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                1000,
                                'UI/UX Enthusiast',
                                1000,
                                'Open Source Contributor',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{ display: 'inline-block' }}
                        />
                    </h2>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <a 
                            href="/Rishikesh_Singh_Resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-primary" 
                            style={{ cursor: 'pointer' }}
                        >
                            <FaFileAlt /> View Resume
                        </a>

                        <div style={{ width: '1px', height: '30px', background: 'var(--glass-border)', margin: '0 0.5rem' }}></div>

                        <a href="https://github.com/rishi919-rgb" target="_blank" rel="noreferrer"
                            style={{ color: 'var(--text-muted)', fontSize: '1.8rem', transition: 'color 0.2s' }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            <FaGithub />
                        </a>
                        <a href="https://leetcode.com/u/rishi919/" target="_blank" rel="noreferrer"
                            style={{ color: 'var(--text-muted)', fontSize: '1.8rem', transition: 'color 0.2s' }}
                            onMouseEnter={(e) => e.target.style.color = '#FFA116'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            <SiLeetcode />
                        </a>
                        <a href="https://youtube.com/@rishikesh919?si=pFxVoG8UK41t6pYE" target="_blank" rel="noreferrer"
                            style={{ color: 'var(--text-muted)', fontSize: '1.8rem', transition: 'color 0.2s' }}
                            onMouseEnter={(e) => e.target.style.color = '#FF0000'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '380px',
                        height: 'clamp(300px, 50vw, 450px)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '20px 20px 60px rgba(0,0,0,0.4)',
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)',
                            zIndex: 1
                        }}></div>

                        <img
                            src="https://res.cloudinary.com/dpkugdw9y/image/upload/v1770537456/WhatsApp_Image_2026-02-08_at_1.26.32_PM_oc8mw6.jpg"
                            alt="Rishikesh Singh"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 20%',
                                transform: 'scale(1.1)'
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
        </>
    );
};

export default Hero;
