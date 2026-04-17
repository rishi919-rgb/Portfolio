import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCopy, FaCheck, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaYoutube, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const copyEmail = () => {
        navigator.clipboard.writeText("rishikesh.singhges@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        emailjs.sendForm('service_tc8ef8m', 'template_ijvq0sc', form.current, 'mxcVLguSQvSSLgXcz')
            .then((result) => {
                setSubmitStatus('success');
                setIsSubmitting(false);
                e.target.reset();
            }, (error) => {
                setSubmitStatus('error');
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: 'clamp(1rem, 4vw, 2rem)',
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

                {/* Direct Contact Form */}
                <div className="glass-card" style={{
                    padding: 'clamp(1.5rem, 5vw, 3rem)',
                    maxWidth: '600px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    textAlign: 'left'
                }}>
                    <h3 style={{ fontSize: '1.8rem', margin: 0, textAlign: 'center' }}>Send a Message</h3>
                    
                    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Name</label>
                            <input type="text" name="user_name" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-main)', fontSize: '1rem' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</label>
                            <input type="email" name="user_email" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-main)', fontSize: '1rem' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                            <textarea name="message" required rows="4" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-main)', fontSize: '1rem', resize: 'vertical' }}></textarea>
                        </div>
                        <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ padding: '1rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginTop: '1rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}>
                            <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {submitStatus === 'success' && <p style={{ color: '#22c55e', textAlign: 'center', fontSize: '0.9rem', margin: 0 }}>Message sent successfully!</p>}
                        {submitStatus === 'error' && <p style={{ color: '#ef4444', textAlign: 'center', fontSize: '0.9rem', margin: 0 }}>Failed to send message. Please try again.</p>}
                    </form>
                </div>

                {/* Social Links for Consistency */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                    <a href="https://github.com/rishi919-rgb" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-main)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/rishikesh-singh-45661428a/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#0077b5'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/Rishike7157746" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#1DA1F2'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/_rishikesh_singh__" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#E1306C'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
                        <FaInstagram />
                    </a>
                    <a href="https://youtube.com/@rishikesh919" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#FF0000'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>
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
