import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiCplusplus, SiC, SiMongodb, SiExpress, SiNetlify, SiRedux, SiTailwindcss, SiPostman, SiVercel, SiRender } from 'react-icons/si';

const Skills = () => {
    // Main technical categories
    const skillCategories = [
        {
            title: "Frontend Development",
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
            title: "Backend & Database",
            skills: [
                { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
                { name: "Express", icon: <SiExpress />, color: "var(--text-main)" },
                { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
                { name: "Postman", icon: <SiPostman />, color: "#FF6C37" }
            ]
        },
        {
            title: "DevOps & Deployment",
            skills: [
                { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
                { name: "Vercel", icon: <SiVercel />, color: "var(--text-main)" },
                { name: "Render", icon: <SiRender />, color: "var(--text-main)" },
                { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" }
            ]
        }
    ];

    const programmingLanguages = [
        { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "C", icon: <SiC />, color: "#A8B9CC" }
    ];

    return (
        <section id="skills" className="section-padding" style={{ overflow: 'hidden' }}>
            <div className="container-width">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <h2 className="section-title" style={{ margin: 0 }}>Technical Arsenal</h2>
                        <div style={{ 
                            fontSize: '0.8rem', 
                            fontWeight: '800', 
                            letterSpacing: '5px', 
                            color: 'var(--secondary)', 
                            opacity: 0.6,
                            marginTop: '0.5rem',
                            textTransform: 'uppercase'
                        }}>
                             Specialized Expertise
                        </div>
                    </div>
                </div>

                {/* Symmetric Skill Grid (using flex for centered wrapping) */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '4rem 3rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {skillCategories.map((category, catIndex) => (
                        <motion.div 
                            key={category.title} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.15 }}
                            className="glass-card" 
                            style={{ 
                                flex: '1 1 340px',
                                maxWidth: '380px',
                                padding: '3rem 2rem', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center' 
                            }}
                        >
                            <h3 style={{
                                fontSize: '1rem',
                                marginBottom: '2.5rem',
                                color: 'var(--text-main)',
                                opacity: 0.8,
                                fontWeight: '800',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                borderBottom: '1px solid var(--glass-border)',
                                paddingBottom: '0.8rem'
                            }}>
                                {category.title}
                            </h3>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '1.2rem',
                                width: '100%'
                            }}>
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        title={skill.name}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.1,
                                            filter: `drop-shadow(0 0 15px ${skill.color}60)`
                                        }}
                                        style={{
                                            padding: '1.2rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '75px',
                                            height: '75px',
                                            cursor: 'pointer',
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '18px',
                                            transition: 'border 0.3s'
                                        }}
                                    >
                                        <span style={{ fontSize: '2.5rem', color: skill.color, display: 'flex' }}>
                                            {skill.icon}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Framed Programming Languages Section */}
                <center>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ 
                            marginTop: '6rem', 
                            padding: 'clamp(1.5rem, 4vw, 3rem)', 
                            maxWidth: '900px', 
                            background: 'rgba(255, 255, 255, 0.01)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '40px',
                            backdropFilter: 'blur(10px)',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '-1px',
                            left: '50%',
                            transform: 'translateX(-50%) translateY(-50%)',
                            background: 'var(--bg-dark)',
                            padding: '0.5rem 2rem',
                            color: 'var(--secondary)',
                            fontSize: '0.75rem',
                            fontWeight: '900',
                            letterSpacing: '5px',
                            textTransform: 'uppercase',
                            borderRadius: '50px',
                            border: '1px solid var(--glass-border)'
                        }}>
                            Foundational
                        </div>
                        
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 'clamp(2rem, 6vw, 5rem)',
                            flexWrap: 'wrap'
                        }}>
                            {programmingLanguages.map((lang) => (
                                <motion.div 
                                    key={lang.name}
                                    whileHover={{ y: -5 }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    }}
                                >
                                    <div style={{
                                        width: '65px',
                                        height: '65px',
                                        borderRadius: '20px',
                                        background: 'rgba(255,255,255,0.02)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        fontSize: '2.2rem',
                                        color: lang.color,
                                        boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
                                    }}>
                                        {lang.icon}
                                    </div>
                                    <span style={{ fontWeight: '700', color: 'var(--text-main)', fontSize: '0.9rem', opacity: 0.6, letterSpacing: '2px' }}>
                                        {lang.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </center>
            </div>
        </section>
    );
};

export default Skills;
