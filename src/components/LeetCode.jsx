import React from 'react';
import { motion } from 'framer-motion';

// REPLACE WITH YOUR REAL LEETCODE STATS HERE
const stats = {
    totalSolved: "350+",    // e.g., "450"
    easy: 120,              // e.g., 150
    medium: 180,            // e.g., 250
    hard: 50,               // e.g., 50
    profileUrl: "https://leetcode.com/u/rishi919/"
};

const LeetCode = () => {
    return (
        <section id="leetcode" className="section-padding">
            <div className="container-width">
                <center><h2 className="section-title">Coding Proficiency</h2></center>

                <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        padding: '3rem',
                        maxWidth: '900px',
                        margin: '0 auto',
                        borderRadius: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem'
                    }}
                >
                    {/* Header */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                            alt="LeetCode"
                            style={{ width: '60px', opacity: 0.9 }}
                        />
                        <div>
                            <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: 0, color: 'var(--text-main)' }}>LeetCode Statistics</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Problem Solving Journey</p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '2rem',
                        width: '100%',
                        marginTop: '1rem'
                    }}>
                        {/* Total */}
                        <div style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--input-bg)', borderRadius: '16px' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-main)' }}>{stats.totalSolved}</div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>Total Solved</div>
                        </div>

                        {/* Easy */}
                        <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(0, 184, 163, 0.1)', borderRadius: '16px' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00b8a3' }}>{stats.easy}</div>
                            <div style={{ fontSize: '0.9rem', color: '#00b8a3', fontWeight: '600' }}>dist/Easy</div>
                        </div>

                        {/* Medium */}
                        <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 192, 30, 0.1)', borderRadius: '16px' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffc01e' }}>{stats.medium}</div>
                            <div style={{ fontSize: '0.9rem', color: '#ffc01e', fontWeight: '600' }}>Medium</div>
                        </div>

                        {/* Hard */}
                        <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 55, 95, 0.1)', borderRadius: '16px' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ff375f' }}>{stats.hard}</div>
                            <div style={{ fontSize: '0.9rem', color: '#ff375f', fontWeight: '600' }}>Hard</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href={stats.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ marginTop: '1rem', padding: '1rem 3rem', fontSize: '1.1rem' }}
                    >
                        View Public Profile
                    </a>

                </motion.div>
            </div>
        </section>
    );
};

export default LeetCode;
