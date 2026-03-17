import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiCplusplus, SiC, SiMongodb, SiExpress, SiNetlify, SiRedux, SiTailwindcss, SiPostman, SiVercel, SiRender } from 'react-icons/si';

const Skills = () => {
    // Grouped Skills for Categorized Layout
    const skillCategories = [
        {
            title: "Frontend Tools",
            skills: [
                { name: "React", icon: <FaReact />, color: "#61dafb" },
                { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
                { name: "Redux", icon: <SiRedux />, color: "#764abc" },
                { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
                { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
                { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
                { name: "Figma", icon: <FaFigma />, color: "#F24E1E" }
            ]
        },
        {
            title: "Backend Tools",
            skills: [
                { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
                { name: "Express", icon: <SiExpress />, color: "var(--text-main)" }, // Changed from SiExpressjs to SiExpress
                { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
                { name: "Postman", icon: <SiPostman />, color: "#FF6C37" }
            ]
        },
        {
            title: "Version Control & Deployment",
            skills: [
                { name: "Git", icon: <FaGitAlt />, color: "#f05032", special: true },
                { name: "Vercel", icon: <SiVercel />, color: "var(--text-main)" },
                { name: "Render", icon: <SiRender />, color: "var(--text-main)" },
                { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7", special: true }
            ]
        },
        {
            title: "Languages",
            skills: [
                { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
                { name: "Java", icon: <FaJava />, color: "#f89820" },
                { name: "C", icon: <SiC />, color: "#A8B9CC" }
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding" style={{ overflow: 'hidden' }}>
            <div className="container-width">
                <center><h2 className="section-title">Technical Arsenal</h2></center>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem',
                    marginTop: '3rem',
                    maxWidth: '1100px',
                    margin: '3rem auto 0'
                }}>
                    {skillCategories.map((category, catIndex) => (
                        <div key={category.title} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: '1.5rem',
                                color: 'var(--text-main)',
                                borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
                                paddingBottom: '0.5rem',
                                width: '100%',
                                textAlign: 'center'
                            }}>
                                {category.title}
                            </h3>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '1rem'
                            }}>
                                {category.skills.map((skill, index) => (
                                    <div key={skill.name} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                        {skill.special && (
                                            <span style={{
                                                position: 'absolute',
                                                top: '-8px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                background: skill.color,
                                                color: '#fff',
                                                fontSize: '0.6rem',
                                                padding: '2px 8px',
                                                borderRadius: '10px',
                                                zIndex: 10,
                                                fontWeight: 'bold',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}>
                                                Core
                                            </span>
                                        )}
                                        <motion.div
                                            title={skill.name}
                                            whileHover={{
                                                y: -5,
                                                scale: 1.1,
                                                filter: `drop-shadow(0 0 10px ${skill.color})`
                                            }}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20, delay: (catIndex * 0.1) + (index * 0.05) }}
                                            style={{
                                                padding: '1rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '70px',
                                                height: '70px',
                                                cursor: 'pointer',
                                                background: 'var(--skill-bg)',
                                                border: skill.special ? `2px solid ${skill.color}` : '1px solid var(--skill-border)',
                                                borderRadius: '50%',
                                                boxShadow: skill.special ? `0 0 15px ${skill.color}40` : 'none'
                                            }}
                                        >
                                            <span style={{ fontSize: '2.2rem', color: skill.color, display: 'flex', transition: 'all 0.3s' }}>
                                                {skill.icon}
                                            </span>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
