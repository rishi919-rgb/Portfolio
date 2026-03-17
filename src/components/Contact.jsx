import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCopy, FaCheck, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("rishikesh.singhges@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '2rem' // Minimal padding to prevent overflow but stick edges
        }}>
            <div className="container-width" style={{ maxWidth: '800px', width: '100%' }}>

                {/* Header with Live Status */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(34, 197, 94, 0.1)',
                        color: '#22c55e',
                        padding: '0.4rem 1rem',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(34, 197, 94, 0.2)'
                    }}>
                        <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
                            <span style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', background: '#22c55e', opacity: 0.75, animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
                            <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', width: '8px', height: '8px', background: '#22c55e' }}></span>
                        </span>
                        Available for new opportunities
                    </div>

                    <h2 className="section-title" style={{ marginBottom: '1rem', display: 'block' }}>Let's Talk.</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                        Have a project in mind or just want to say hi?
                    </p>

                    {/* Quick Copy Email */}
                    <button
                        onClick={copyEmail}
                        style={{
                            marginTop: '1.5rem',
                            background: 'transparent',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-muted)',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            transition: 'all 0.2s'
                        }}
                    >
                        rishikesh.singhges@gmail.com
                        {copied ? <FaCheck color="#22c55e" /> : <FaCopy />}
                    </button>
                </div>

                {/* Direct Contact Card */}
                <div className="glass-card" style={{
                    padding: '3rem',
                    textAlign: 'center',
                    maxWidth: '600px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(34, 197, 94, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        color: '#22c55e',
                        marginBottom: '0.5rem'
                    }}>
                        <FaEnvelope />
                    </div>

                    <h3 style={{ fontSize: '1.8rem', margin: 0 }}>Shoot me an email</h3>

                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '400px' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a
                        href="mailto:rishikesh.singhges@gmail.com"
                        className="btn-primary"
                        style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            marginTop: '1rem'
                        }}
                    >
                        <FaPaperPlane /> Say Hello
                    </a>
                </div>

                {/* Social Links for Consistency */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                    <a href="https://github.com/rishi919-rgb" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/rishikesh-singh-45661428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#0077b5'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/_rishikesh_singh__?igsh=MWc1YWhvbDhhYnBldA==" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#E1306C'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                        <FaInstagram />
                    </a>
                    <a href="https://youtube.com/@rishikesh919?si=pFxVoG8UK41t6pYE" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#FF0000'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                        <FaYoutube />
                    </a>
                    <a href="mailto:rishikesh.singhges@gmail.com" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#EA4335'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                        <FaEnvelope />
                    </a>
                </div>

                <footer style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', opacity: 0.5 }}>
                    © 2026 Rishikesh Singh. Create with passion.
                </footer>
            </div>
        </section>
    );
};

export default Contact;
