import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { GitHubCalendar } from 'react-github-calendar';

const CodeAndCommunity = () => {
    return (
        <section id="code-community" className="section-padding">
            <div className="container-width">
                <center><h2 className="section-title">Code & Community</h2></center>

                {/* --- PART 1: CODING PROFILE (LeetCode & GitHub) --- */}
                <div className="grid-halves" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem',
                    alignItems: 'stretch',
                    marginBottom: '4rem'
                }}>
                    {/* LeetCode Stats */}
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" style={{ width: '24px', opacity: 0.8 }} />
                            <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-main)' }}>LeetCode</h3>
                        </div>
                        <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, background: 'var(--glass-bg)' }}>
                            {/* Dynamic LeetCode Card */}
                            <img
                                src="https://leetcard.jacoblin.cool/rishi919?theme=dark&font=Inter&ext=heatmap"
                                alt="LeetCode Stats"
                                style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }}
                            />
                        </div>
                        <div style={{ padding: '1rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
                            <a href="https://leetcode.com/u/rishi919/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'none', fontWeight: '600' }}>
                                View Profile &rarr;
                            </a>
                        </div>
                    </motion.div>

                    {/* GitHub Stats */}
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    >
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaGithub size={24} color="var(--text-main)" />
                            <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-main)' }}>GitHub</h3>
                        </div>
                        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, background: 'var(--glass-bg)', position: 'relative' }}>

                            {/* Decorative Header for Heatmap */}
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', padding: '0 0.5rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-main)' }}>Commit History</h4>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Open Source Contributions</span>
                                </div>
                                <div style={{
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    color: '#22c55e',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '12px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    border: '1px solid rgba(34, 197, 94, 0.2)'
                                }}>
                                    Live Activity
                                </div>
                            </div>

                            {/* React GitHub Calendar */}
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <GitHubCalendar
                                    username="rishi919-rgb"
                                    colorScheme="dark"
                                    blockSize={12}
                                    blockMargin={5}
                                    fontSize={12}
                                    theme={{
                                        dark: [
                                            '#161b22', // Empty
                                            '#0e4429', // L1
                                            '#006d32', // L2
                                            '#26a641', // L3
                                            '#39d353', // L4
                                        ],
                                    }}
                                    style={{
                                        color: 'var(--text-muted)',
                                        margin: '0 auto'
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{ padding: '1rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
                            <a href="https://github.com/rishi919-rgb" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'none', fontWeight: '600' }}>
                                View Profile &rarr;
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* --- END OF CODING PROFILE --- */}
            </div>
        </section>
    );
};

export default CodeAndCommunity;
