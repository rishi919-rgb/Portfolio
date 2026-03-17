import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode } from 'react-icons/fa';

const CodingProfile = () => {
    return (
        <section id="coding-profile" className="section-padding">
            <div className="container-width">
                <center><h2 className="section-title">Coding Profile</h2></center>

                <div className="grid-halves" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem',
                    alignItems: 'stretch'
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
                        <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, background: 'var(--glass-bg)' }}>
                            {/* Dynamic GitHub Stats Card */}
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=rishi919-rgb&show_icons=true&theme=transparent&hide_border=true&title_color=00b8a3&text_color=94a3b8&icon_color=00b8a3&count_private=true"
                                alt="GitHub Stats"
                                style={{ width: '100%', maxWidth: '500px' }}
                            />
                        </div>
                        <div style={{ padding: '1rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
                            <a href="https://github.com/rishi919-rgb" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'none', fontWeight: '600' }}>
                                View Profile &rarr;
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CodingProfile;
