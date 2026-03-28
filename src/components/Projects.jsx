import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaGamepad, FaLaptopCode, FaCogs, FaShieldAlt, FaChartBar, FaSearch, FaBrain, FaFilm } from 'react-icons/fa';
import WebClonesModal from './WebClonesModal';

// Project Screenshots
import shot1 from '../assets/Images/Screenshot 2026-02-08 142946.png'; // Disney
import shot2 from '../assets/Images/Screenshot 2026-02-08 143012.png'; // Coffee
import shot3 from '../assets/Images/Screenshot 2026-02-08 143026.png'; // Western
import shot4 from '../assets/Images/Screenshot 2026-02-08 143040.png'; // Celestial
import shot5 from '../assets/Images/Screenshot 2026-02-08 143054.png'; // Yeti
import shot6 from '../assets/Images/Screenshot 2026-02-08 143102.png'; // Santa Cruz
import shot7 from '../assets/Images/Screenshot 2026-02-08 143135.png'; // Weather
import shot8 from '../assets/Images/Screenshot 2026-02-08 143205.png'; // News
import drishtiSS from '../assets/Images/drishti_ss.png';
import truthstormSS from '../assets/Images/truthstorm_ss.png';
import debateAISS from '../assets/Images/debate_ai_visual.png';
import movieSS from '../assets/Images/movie_explorer_visual.png';

// Screenshots - Games
import shot9 from '../assets/Images/Screenshot 2026-02-08 143240.png';
import shot10 from '../assets/Images/Screenshot 2026-02-08 143327.png';
import shot11 from '../assets/Images/Screenshot 2026-02-08 143356.png';
import shot12 from '../assets/Images/Screenshot 2026-02-08 143409.png';
import shot13 from '../assets/Images/Screenshot 2026-02-08 143420.png';
import shot14 from '../assets/Images/Screenshot 2026-02-08 143453.png';
import shot15 from '../assets/Images/Screenshot 2026-02-08 143510.png';
import shot16 from '../assets/Images/Screenshot 2026-02-08 143522.png';

// Technology Icons
import { 
    SiTensorflow, SiTypescript, SiMongodb, SiNodedotjs, 
    SiExpress, SiTailwindcss, SiGooglecloud, SiPython, 
    SiPytorch, SiOpenai, SiReact, SiVite, SiFramer
} from 'react-icons/si';

const TechBadge = ({ icon, text }) => (
    <span style={{ 
        background: 'rgba(255, 255, 255, 0.05)', 
        color: 'var(--text-muted)', 
        padding: '0.4rem 0.8rem', 
        borderRadius: '12px', 
        fontSize: '0.75rem', 
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        border: '1px solid var(--glass-border)',
        backdropFilter: 'blur(5px)'
    }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--secondary)' }}>{icon}</span>
        {text}
    </span>
);

const Projects = () => {
    const [isClonesModalOpen, setIsClonesModalOpen] = useState(false);

    const featuredProjects = [
        {
            id: "drishti",
            title: "Drishti — The Third Eye",
            tagline: "AI Visual Assistant for the Visually Impaired",
            desc: "A production-grade, multi-modal AI system focusing on computer vision and LLMs. It turns any smartphone into an autonomous assistant that describes scenes, detects faces, and guides users with depth-aware obstacle warnings.",
            features: ["Scene Interpretation", "Obstacle Detection", "Biometric Face Recognition", "Fuzzy Voice Control"],
            tech: [
                { icon: <SiTensorflow />, name: "TensorFlow.js" },
                { icon: <SiGooglecloud />, name: "Gemini AI" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <SiPython />, name: "YOLOv8" }
            ],
            repo: "https://github.com/rishi919-rgb/Drishti",
            demo: "#",
            img: drishtiSS,
            size: "large",
            accent: "var(--secondary)"
        },
        {
            id: "truthstorm",
            title: "TruthStorm AI",
            tagline: "Digital Forensics Platform",
            desc: "Advanced investigation tool that exposes misinformation using multimodal AI. Verifies viral claims and images with real-time credibility scoring.",
            features: ["Multimodal Scans", "Veracity Scoring", "Secure Audit Log"],
            tech: [
                { icon: <SiReact />, name: "React 19" },
                { icon: <SiGooglecloud />, name: "Gemini 1.5" },
                { icon: <SiMongodb />, name: "MongoDB" }
            ],
            repo: "https://github.com/rishi919-rgb/truthstorm",
            demo: "https://truthstorm.netlify.app/",
            img: truthstormSS,
            size: "tall",
            accent: "#ec4899"
        },
        {
            id: "debate-ai",
            title: "Debate-AI",
            tagline: "AI Argument Coach",
            desc: "Real-time AI opponent for improving logic and public speaking. Detects fallacies and scores rhetoric performance.",
            features: ["Fallacy Detection", "Logic Scoring", "Real-time Metrics"],
            tech: [
                { icon: <SiOpenai />, name: "LLM Scoring" },
                { icon: <SiFramer />, name: "Framer Motion" }
            ],
            repo: "https://github.com/rishi919-rgb/Debate-AI",
            demo: "#",
            img: debateAISS,
            size: "wide",
            accent: "#f59e0b"
        },
        {
            id: "movie-explorer",
            title: "Movie Explorer",
            tagline: "Fluid Media Discovery",
            desc: "High-performance search application with local persistence and streaming-grade UI aesthetics.",
            features: ["OMDb Integration", "LocalStorage Sync", "Fluid UI"],
            tech: [
                { icon: <SiReact />, name: "React" },
                { icon: <SiVite />, name: "Vite" }
            ],
            repo: "https://github.com/rishi919-rgb/Movie-Explorer",
            demo: "#",
            img: movieSS,
            size: "standard",
            accent: "#10b981"
        }
    ];

    const coreProjects = [
        {
            title: "Weather Dashboard",
            desc: "Real-time weather station with historical tracking.",
            repo: "https://github.com/rishi919-rgb/AssignmentsCG/tree/main/Weather%20Api",
            img: shot7,
            accent: "#0ea5e9"
        },
        {
            title: "News Aggregator",
            desc: "Global news feed with dynamic filtering.",
            repo: "https://github.com/rishi919-rgb/AssignmentsCG",
            img: shot8,
            accent: "#ef4444"
        }
    ];

    const webClones = [
        { title: "Santa Cruz", demo: "https://rishikesh919.netlify.app/web%20clones/santacruz/", img: shot6 },
        { title: "Yeti Cycles", demo: "https://rishikesh919.netlify.app/web%20clones/yeticycles/", img: shot5 },
        { title: "Disney+ Clone", demo: "https://rishikesh919.netlify.app/web%20clones/disney/", img: shot1 },
        { title: "CoffeeHouse", demo: "https://rishikesh919.netlify.app/web%20clones/coffee/", img: shot2 },
        { title: "Western Rise", demo: "https://rishikesh919.netlify.app/web%20clones/westernrise/", img: shot3 },
        { title: "Celestial AI", demo: "https://rishikesh919.netlify.app/web%20clones/celestial/", img: shot4 }
    ];

    const games = [
        { title: "Tic Tac Toe", link: "https://rishikesh919.netlify.app/games/tic%20tac%20toe/", img: shot9 },
        { title: "Typing Master", link: "https://rishikesh919.netlify.app/games/typing%20maaster/", img: shot13 },
        { title: "Flip Cards", link: "https://rishikesh919.netlify.app/games/flip%20a%20card/", img: shot14 },
        { title: "To Do List", link: "https://rishikesh919.netlify.app/games/todo/", img: shot15 }
    ];

    return (
        <section id="projects" className="section-padding" style={{ position: 'relative' }}>
            <AnimatePresence>
                {isClonesModalOpen && (
                    <WebClonesModal
                        isOpen={isClonesModalOpen}
                        onClose={() => setIsClonesModalOpen(false)}
                        clones={webClones}
                    />
                )}
            </AnimatePresence>

            <div className="container-width">
                <center>
                    <div style={{ marginBottom: '6rem' }}>
                        <span style={{ 
                            color: 'var(--secondary)', 
                            fontWeight: '800', 
                            letterSpacing: '5px', 
                            fontSize: '0.8rem', 
                            textTransform: 'uppercase',
                            opacity: 0.6
                        }}>CURATED WORK</span>
                        <h2 className="section-title" style={{ marginTop: '0.5rem', fontWeight: '900', fontSize: 'clamp(2.5rem, 8vw, 5rem)', letterSpacing: '-2px' }}>Digital Matrix.</h2>
                    </div>
                </center>

                {/* --- BENTO MATRIX START --- */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridAutoRows: 'minmax(300px, auto)',
                    gap: '2.5rem',
                    marginBottom: '8rem'
                }}>
                    {/* Anchor Spotlight (Drishti) */}
                    {featuredProjects.filter(p => p.id === 'drishti').map(p => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                gridColumn: 'span 4',
                                display: 'grid',
                                gridTemplateColumns: '1.2fr 0.8fr',
                                minHeight: '550px',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '40px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                backdropFilter: 'blur(30px)',
                                overflow: 'hidden',
                                position: 'relative',
                                boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.5)'
                            }}
                            whileHover={{ borderColor: p.accent }}
                        >
                            <div style={{ padding: '4.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2rem' }}>
                                    <div style={{ background: p.accent, color: '#000', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: '900', letterSpacing: '1px' }}>FLAGSHIP</div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-muted)' }}>NETWORK ACTIVE</span>
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '3.5rem', color: 'var(--text-main)', fontWeight: '900', lineHeight: '1', marginBottom: '1.5rem', letterSpacing: '-1.5px' }}>{p.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem', maxWidth: '85%' }}>{p.desc}</p>
                                
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
                                    {p.tech.map((t, idx) => (
                                        <TechBadge key={idx} icon={t.icon} text={t.name} />
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                    <a href={p.repo} target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: 'none', padding: '1.2rem 2.5rem', borderRadius: '16px' }}>Explore Architecture</a>
                                    <a href={p.repo} target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.5rem', opacity: 0.6 }}><FaGithub /></a>
                                </div>
                            </div>
                            <div style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>
                                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #000 0%, transparent 100%)' }}></div>
                                <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', display: 'flex', gap: '0.5rem' }}>
                                    <div style={{ padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '12px', color: '#fff', fontSize: '0.7rem', fontWeight: 'bold' }}>CV + LLM</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Secondary - TruthStorm (Tall) */}
                    {featuredProjects.filter(p => p.id === 'truthstorm').map(p => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                gridColumn: 'span 1',
                                gridRow: 'span 2',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '40px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                backdropFilter: 'blur(30px)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                            }}
                            whileHover={{ y: -10, borderColor: p.accent }}
                        >
                            <div style={{ height: '350px', background: '#000', position: 'relative' }}>
                                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}></div>
                                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', color: p.accent, fontSize: '1.5rem' }}><FaShieldAlt /></div>
                            </div>
                            <div style={{ padding: '2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <span style={{ color: p.accent, fontWeight: '800', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '0.5rem' }}>INVESTIGATION</span>
                                <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-1px' }}>{p.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>{p.desc}</p>
                                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-muted)' }}>
                                        {p.tech.map((t, i) => <span key={i} title={t.name}>{t.icon}</span>)}
                                    </div>
                                    <a href={p.demo} target="_blank" rel="noreferrer" style={{ color: p.accent, fontWeight: '900', fontSize: '0.8rem', textTransform: 'uppercase', textDecoration: 'none' }}>Live →</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Secondary - Debate AI (Wide) */}
                    {featuredProjects.filter(p => p.id === 'debate-ai').map(p => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{
                                gridColumn: 'span 3',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '40px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                backdropFilter: 'blur(30px)',
                                overflow: 'hidden',
                                display: 'grid',
                                gridTemplateColumns: '0.6fr 0.4fr',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                            }}
                            whileHover={{ borderColor: p.accent }}
                        >
                            <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ color: p.accent, fontSize: '1.8rem', marginBottom: '1rem' }}><FaBrain /></div>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--text-main)', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-1px' }}>{p.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>{p.desc}</p>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <a href={p.repo} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.8rem 1.8rem', borderRadius: '12px' }}>Check Repo</a>
                                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '1.5rem' }}>
                                        {p.tech.map((t, i) => <span key={i}>{t.icon}</span>)}
                                    </div>
                                </div>
                            </div>
                            <div style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>
                                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.9), transparent)' }}></div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Secondary - Movie Explorer (Square) */}
                    {featuredProjects.filter(p => p.id === 'movie-explorer').map(p => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                gridColumn: 'span 2',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '40px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                backdropFilter: 'blur(30px)',
                                overflow: 'hidden',
                                display: 'grid',
                                gridTemplateColumns: '0.5fr 0.5fr',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                            }}
                            whileHover={{ borderColor: p.accent }}
                        >
                             <div style={{ position: 'relative', overflow: 'hidden' }}>
                                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.4))' }}></div>
                            </div>
                            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ color: p.accent, fontSize: '1.5rem', marginBottom: '0.8rem' }}><FaFilm /></div>
                                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', fontWeight: '900', marginBottom: '0.5rem' }}>{p.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Streaming-grade discovery engine with fluid animations.</p>
                                <a href={p.repo} target="_blank" rel="noreferrer" style={{ color: p.accent, fontWeight: 'bold', textDecoration: 'none', fontSize: '0.8rem' }}>EXPLORE SOURCE →</a>
                            </div>
                        </motion.div>
                    ))}

                    {/* UI Clones Collection - Bento Tile */}
                    <motion.div
                        onClick={() => setIsClonesModalOpen(true)}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            gridColumn: 'span 1',
                            border: '2px solid var(--secondary)',
                            borderRadius: '40px',
                            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(0,0,0,0.5))',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            textAlign: 'center',
                            padding: '2rem'
                        }}
                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)' }}
                    >
                        <FaLaptopCode style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '1.2rem' }} />
                        <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '900', marginBottom: '0.5rem' }}>UI/UX CLONES</h4>
                        <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: 'bold' }}>EXPLORE 6 PROJECTS →</span>
                    </motion.div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
                    <div style={{ flexGrow: 1, height: '1px', background: 'var(--glass-border)' }} />
                    <h2 style={{ fontSize: '1rem', fontWeight: '900', color: 'var(--text-muted)', letterSpacing: '3px', textTransform: 'uppercase' }}>Mini Experiments</h2>
                    <div style={{ flexGrow: 1, height: '1px', background: 'var(--glass-border)' }} />
                </div>

                {/* --- GAMES MINI GRID --- */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {games.map((game, index) => (
                        <motion.a
                            key={index}
                            href={game.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '24px',
                                padding: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.2rem',
                                textDecoration: 'none',
                                transition: '0.4s'
                            }}
                            whileHover={{ y: -5, background: 'rgba(255, 255, 255, 0.05)', borderColor: 'var(--secondary)' }}
                        >
                            <img src={game.img} alt={game.title} style={{ width: '45px', height: '45px', borderRadius: '12px', objectFit: 'cover' }} />
                            <span style={{ fontWeight: '700', color: 'var(--text-main)', fontSize: '0.95rem' }}>{game.title}</span>
                        </motion.a>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.4); opacity: 0.4; }
                    100% { transform: scale(1); opacity: 0.8; }
                }
            ` }} />
        </section>
    );
};

export default Projects;
