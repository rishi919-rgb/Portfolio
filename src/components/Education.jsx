import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const educationData = [
        {
            school: "Swaminarayan University (Coding Gita)",
            degree: "B.Tech Computer Science",
            year: "Present",
            desc: "Focusing on Advanced Full Stack Development & AI Algorithms. Maintaining a strong GPA while building real-world projects."
        },
        {
            school: "RSK Public School",
            degree: "Higher Secondary (CBSE)",
            year: "Completed",
            desc: "Specialized in Science & Mathematics with a focus on Computer Applications."
        },
        {
            school: "GEMS English School",
            degree: "Secondary (ICSE)",
            year: "Completed",
            desc: "Built a strong foundation in English literature and basic programming logic."
        }
    ];

    return (
        <section id="education" className="section-padding">
            <div className="container-width" style={{ maxWidth: '900px' }}>
                <h2 className="section-title" style={{ width: '100%' }}>Education Journey</h2>

                <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: 'linear-gradient(to bottom, var(--secondary), transparent)'
                    }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ position: 'relative' }}
                            >
                                {/* Timeline Dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-2.6rem',
                                    top: '1.5rem',
                                    width: '1.2rem',
                                    height: '1.2rem',
                                    background: 'var(--bg-dark)',
                                    border: '2px solid var(--secondary)',
                                    borderRadius: '50%',
                                    zIndex: 2
                                }}></div>

                                <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                                        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', margin: 0 }}>{edu.school}</h3>
                                        <span style={{
                                            fontSize: '0.85rem',
                                            color: 'var(--secondary)',
                                            fontWeight: '600',
                                            padding: '0.4rem 1rem',
                                            background: 'rgba(59, 130, 246, 0.1)',
                                            borderRadius: '50px'
                                        }}>
                                            {edu.year}
                                        </span>
                                    </div>

                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: '500', marginBottom: '0.5rem' }}>{edu.degree}</h4>
                                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{edu.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
