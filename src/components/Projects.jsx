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
    <span className="tech-badge">
        <span className="tech-icon">{icon}</span>
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
        <section id="projects" className="projects-section">
            <AnimatePresence>
                {isClonesModalOpen && (
                    <WebClonesModal
                        isOpen={isClonesModalOpen}
                        onClose={() => setIsClonesModalOpen(false)}
                        clones={webClones}
                    />
                )}
            </AnimatePresence>

            <div className="projects-wrapper">
                {/* Section Header */}
                <div className="projects-header">
                    <span className="projects-label">SELECTED WORK</span>
                    <h2 className="projects-heading">Featured Projects</h2>
                </div>

                {/* Main Projects Grid */}
                <div className="projects-grid">
                    {/* Drishti - Hero Card */}
                    {featuredProjects.filter(p => p.id === 'drishti').map(p => (
                        <motion.div
                            key={p.id}
                            className="project-card project-card--hero"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="project-hero-content">
                                <div className="project-hero-top">
                                    <span className="project-badge">FLAGSHIP PROJECT</span>
                                    <div className="project-status">
                                        <span className="status-pulse"></span>
                                        <span>Live</span>
                                    </div>
                                </div>
                                <h3 className="project-hero-title">{p.title}</h3>
                                <p className="project-hero-desc">{p.desc}</p>
                                <div className="project-hero-tech">
                                    {p.tech.map((t, idx) => (
                                        <TechBadge key={idx} icon={t.icon} text={t.name} />
                                    ))}
                                </div>
                                <div className="project-hero-links">
                                    <a href={p.repo} target="_blank" rel="noreferrer" className="btn-primary">
                                        View Code
                                    </a>
                                    <a href={p.repo} target="_blank" rel="noreferrer" className="project-icon-btn">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                            <div className="project-hero-image">
                                <img src={p.img} alt={p.title} />
                                <div className="hero-image-overlay"></div>
                                <span className="hero-image-tag">Computer Vision + LLM</span>
                            </div>
                        </motion.div>
                    ))}

                    {/* TruthStorm */}
                    {featuredProjects.filter(p => p.id === 'truthstorm').map(p => (
                        <motion.div
                            key={p.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            whileHover={{ y: -8, borderColor: p.accent }}
                            style={{ '--card-accent': p.accent }}
                        >
                            <div className="project-card-image">
                                <img src={p.img} alt={p.title} />
                                <div className="card-image-overlay"></div>
                                <FaShieldAlt className="card-type-icon" style={{ color: p.accent }} />
                            </div>
                            <div className="project-card-body">
                                <span className="project-card-category" style={{ color: p.accent }}>Forensics</span>
                                <h3 className="project-card-title">{p.title}</h3>
                                <p className="project-card-desc">{p.desc}</p>
                                <div className="project-card-footer">
                                    <div className="card-tech-row">
                                        {p.tech.map((t, i) => <span key={i} title={t.name}>{t.icon}</span>)}
                                    </div>
                                    <a href={p.demo} target="_blank" rel="noreferrer" className="card-link" style={{ color: p.accent }}>
                                        Visit Site →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Debate AI */}
                    {featuredProjects.filter(p => p.id === 'debate-ai').map(p => (
                        <motion.div
                            key={p.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            whileHover={{ y: -8, borderColor: p.accent }}
                            style={{ '--card-accent': p.accent }}
                        >
                            <div className="project-card-image">
                                <img src={p.img} alt={p.title} />
                                <div className="card-image-overlay"></div>
                                <FaBrain className="card-type-icon" style={{ color: p.accent }} />
                            </div>
                            <div className="project-card-body">
                                <span className="project-card-category" style={{ color: p.accent }}>AI Coach</span>
                                <h3 className="project-card-title">{p.title}</h3>
                                <p className="project-card-desc">{p.desc}</p>
                                <div className="project-card-footer">
                                    <div className="card-tech-row">
                                        {p.tech.map((t, i) => <span key={i} title={t.name}>{t.icon}</span>)}
                                    </div>
                                    <a href={p.repo} target="_blank" rel="noreferrer" className="card-link" style={{ color: p.accent }}>
                                        GitHub →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Movie Explorer */}
                    {featuredProjects.filter(p => p.id === 'movie-explorer').map(p => (
                        <motion.div
                            key={p.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            whileHover={{ y: -8, borderColor: p.accent }}
                            style={{ '--card-accent': p.accent }}
                        >
                            <div className="project-card-image">
                                <img src={p.img} alt={p.title} />
                                <div className="card-image-overlay"></div>
                                <FaFilm className="card-type-icon" style={{ color: p.accent }} />
                            </div>
                            <div className="project-card-body">
                                <span className="project-card-category" style={{ color: p.accent }}>Media</span>
                                <h3 className="project-card-title">{p.title}</h3>
                                <p className="project-card-desc">{p.desc}</p>
                                <div className="project-card-footer">
                                    <div className="card-tech-row">
                                        {p.tech.map((t, i) => <span key={i} title={t.name}>{t.icon}</span>)}
                                    </div>
                                    <a href={p.repo} target="_blank" rel="noreferrer" className="card-link" style={{ color: p.accent }}>
                                        GitHub →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* UI Clones */}
                    <motion.div
                        className="project-card project-card--special"
                        onClick={() => setIsClonesModalOpen(true)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                    >
                        <div className="special-card-content">
                            <FaLaptopCode className="special-icon" />
                            <h3 className="special-title">UI/UX Clones</h3>
                            <p className="special-desc">6 pixel-perfect recreations of popular websites</p>
                            <span className="special-cta">View Collection →</span>
                        </div>
                    </motion.div>
                </div>

                {/* Mini Experiments Section */}
                <div className="mini-section">
                    <div className="mini-header">
                        <div className="mini-line"></div>
                        <h3 className="mini-title">Mini Experiments</h3>
                        <div className="mini-line"></div>
                    </div>

                    <div className="mini-grid">
                        {games.map((game, index) => (
                            <motion.a
                                key={index}
                                href={game.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mini-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ y: -3, borderColor: 'var(--secondary)' }}
                            >
                                <img src={game.img} alt={game.title} />
                                <span>{game.title}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* All Styles */}
            <style>{`
                .projects-section {
                    padding: 5rem 1.5rem;
                    position: relative;
                }

                .projects-wrapper {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                /* Header */
                .projects-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .projects-label {
                    color: var(--secondary);
                    font-weight: 700;
                    letter-spacing: 4px;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    opacity: 0.7;
                }

                .projects-heading {
                    margin-top: 0.5rem;
                    font-weight: 800;
                    font-size: clamp(1.8rem, 5vw, 3rem);
                    letter-spacing: -1px;
                    color: var(--text-main);
                }

                /* Projects Grid - 3 columns on desktop */
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 4rem;
                }

                /* Base Card */
                .project-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid var(--glass-border);
                    border-radius: 20px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }

                .project-card:hover {
                    border-color: var(--card-accent, var(--secondary));
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }

                /* Hero Card (Drishti) - spans full width */
                .project-card--hero {
                    grid-column: span 3;
                    flex-direction: row;
                    min-height: 420px;
                }

                .project-hero-content {
                    flex: 1;
                    padding: 2.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .project-hero-top {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .project-badge {
                    background: var(--secondary);
                    color: #000;
                    padding: 0.35rem 0.9rem;
                    border-radius: 20px;
                    font-size: 0.7rem;
                    font-weight: 800;
                    letter-spacing: 0.5px;
                }

                .project-status {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    font-weight: 600;
                }

                .status-pulse {
                    width: 8px;
                    height: 8px;
                    background: #22c55e;
                    border-radius: 50%;
                    box-shadow: 0 0 8px #22c55e;
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.3); }
                }

                .project-hero-title {
                    font-size: clamp(1.6rem, 3vw, 2.2rem);
                    font-weight: 800;
                    color: var(--text-main);
                    margin-bottom: 1rem;
                    letter-spacing: -0.5px;
                    line-height: 1.2;
                }

                .project-hero-desc {
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                    max-width: 95%;
                }

                .project-hero-tech {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.6rem;
                    margin-bottom: 1.5rem;
                }

                .tech-badge {
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--text-muted);
                    padding: 0.35rem 0.75rem;
                    border-radius: 8px;
                    font-size: 0.75rem;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }

                .tech-icon {
                    font-size: 0.85rem;
                    color: var(--secondary);
                }

                .project-hero-links {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .project-icon-btn {
                    color: var(--text-main);
                    font-size: 1.4rem;
                    opacity: 0.6;
                    transition: opacity 0.2s;
                }

                .project-icon-btn:hover {
                    opacity: 1;
                }

                .project-hero-image {
                    flex: 0.8;
                    position: relative;
                    min-width: 350px;
                    background: #000;
                }

                .project-hero-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.85;
                }

                .hero-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 60%);
                }

                .hero-image-tag {
                    position: absolute;
                    bottom: 1.5rem;
                    right: 1.5rem;
                    padding: 0.4rem 0.8rem;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 8px;
                    font-size: 0.7rem;
                    font-weight: 600;
                    color: #fff;
                }

                /* Standard Cards */
                .project-card-image {
                    position: relative;
                    height: 180px;
                    overflow: hidden;
                    background: #000;
                }

                .project-card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.9;
                    transition: transform 0.3s ease;
                }

                .project-card:hover .project-card-image img {
                    transform: scale(1.05);
                }

                .card-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
                }

                .card-type-icon {
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                    font-size: 1.3rem;
                }

                .project-card-body {
                    padding: 1.5rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .project-card-category {
                    font-size: 0.7rem;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                }

                .project-card-title {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: var(--text-main);
                    margin-bottom: 0.75rem;
                    letter-spacing: -0.3px;
                    line-height: 1.3;
                }

                .project-card-desc {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    line-height: 1.6;
                    margin-bottom: 1.25rem;
                    flex: 1;
                }

                .project-card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .card-tech-row {
                    display: flex;
                    gap: 0.7rem;
                    color: var(--text-muted);
                    font-size: 1.1rem;
                }

                .card-link {
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: opacity 0.2s;
                }

                .card-link:hover {
                    opacity: 0.8;
                }

                /* Special Card (UI Clones) */
                .project-card--special {
                    background: linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(59, 130, 246, 0.05));
                    border: 2px solid var(--secondary);
                    cursor: pointer;
                    min-height: 320px;
                }

                .special-card-content {
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    height: 100%;
                }

                .special-icon {
                    font-size: 2.5rem;
                    color: var(--secondary);
                    margin-bottom: 1rem;
                }

                .special-title {
                    font-size: 1.3rem;
                    font-weight: 800;
                    color: var(--text-main);
                    margin-bottom: 0.5rem;
                }

                .special-desc {
                    font-size: 0.85rem;
                    color: var(--text-muted);
                    margin-bottom: 1.5rem;
                    line-height: 1.5;
                }

                .special-cta {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: var(--secondary);
                }

                /* Mini Section */
                .mini-section {
                    margin-top: 2rem;
                }

                .mini-header {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    margin-bottom: 1.5rem;
                }

                .mini-line {
                    flex: 1;
                    height: 1px;
                    background: var(--glass-border);
                }

                .mini-title {
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: var(--text-muted);
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }

                .mini-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                }

                .mini-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid var(--glass-border);
                    border-radius: 12px;
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .mini-card img {
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    object-fit: cover;
                }

                .mini-card span {
                    font-weight: 600;
                    color: var(--text-main);
                    font-size: 0.9rem;
                }

                /* ========== TABLET (1024px) ========== */
                @media (max-width: 1024px) {
                    .projects-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .project-card--hero {
                        grid-column: span 2;
                        flex-direction: column;
                        min-height: auto;
                    }

                    .project-hero-image {
                        min-width: auto;
                        height: 250px;
                        order: -1;
                    }

                    .hero-image-overlay {
                        background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%);
                    }

                    .hero-image-tag {
                        bottom: 1rem;
                        right: 1rem;
                    }

                    .mini-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                /* ========== MOBILE (768px) ========== */
                @media (max-width: 768px) {
                    .projects-section {
                        padding: 3rem 1rem;
                    }

                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 1.2rem;
                    }

                    .project-card--hero {
                        grid-column: span 1;
                    }

                    .project-hero-content {
                        padding: 1.8rem;
                    }

                    .project-hero-image {
                        height: 200px;
                    }

                    .project-card-image {
                        height: 160px;
                    }

                    .project-card-body {
                        padding: 1.3rem;
                    }

                    .mini-header {
                        gap: 1rem;
                    }

                    .mini-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0.8rem;
                    }

                    .mini-card {
                        padding: 0.8rem;
                    }
                }

                /* ========== SMALL MOBILE (480px) ========== */
                @media (max-width: 480px) {
                    .projects-header {
                        margin-bottom: 2rem;
                    }

                    .project-hero-content {
                        padding: 1.5rem;
                    }

                    .project-hero-top {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }

                    .project-hero-links {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .project-hero-tech {
                        gap: 0.5rem;
                    }

                    .tech-badge {
                        padding: 0.3rem 0.6rem;
                        font-size: 0.7rem;
                    }

                    .project-card-footer {
                        flex-direction: column;
                        gap: 1rem;
                        align-items: flex-start;
                    }

                    .mini-grid {
                        grid-template-columns: 1fr;
                    }

                    .mini-card {
                        flex-direction: row;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
