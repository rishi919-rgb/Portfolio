import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaGamepad, FaLaptopCode } from 'react-icons/fa';
import WebClonesModal from './WebClonesModal';

// Local Project Screenshots - Websites (1-8)
import shot1 from '../assets/Images/Screenshot 2026-02-08 142946.png'; // Disney
import shot2 from '../assets/Images/Screenshot 2026-02-08 143012.png'; // Coffee
import shot3 from '../assets/Images/Screenshot 2026-02-08 143026.png'; // Western
import shot4 from '../assets/Images/Screenshot 2026-02-08 143040.png'; // Celestial
import shot5 from '../assets/Images/Screenshot 2026-02-08 143054.png'; // Yeti
import shot6 from '../assets/Images/Screenshot 2026-02-08 143102.png'; // Santa Cruz
import shot7 from '../assets/Images/Screenshot 2026-02-08 143135.png'; // Weather
import shot8 from '../assets/Images/Screenshot 2026-02-08 143205.png'; // News

// Local Project Screenshots - Games (9-16)
import shot9 from '../assets/Images/Screenshot 2026-02-08 143240.png';
import shot10 from '../assets/Images/Screenshot 2026-02-08 143327.png';
import shot11 from '../assets/Images/Screenshot 2026-02-08 143356.png';
import shot12 from '../assets/Images/Screenshot 2026-02-08 143409.png';
import shot13 from '../assets/Images/Screenshot 2026-02-08 143420.png';
import shot14 from '../assets/Images/Screenshot 2026-02-08 143453.png';
import shot15 from '../assets/Images/Screenshot 2026-02-08 143510.png';
import shot16 from '../assets/Images/Screenshot 2026-02-08 143522.png';

const Projects = () => {
    const [isClonesModalOpen, setIsClonesModalOpen] = useState(false);

    // Full Stack / Core Projects
    const coreProjects = [
        {
            title: "Weather API",
            desc: "Real-time weather dashboard fetching dynamic data.",
            demo: "https://rishikesh919.netlify.app/weather%20api/",
            repo: "https://github.com/rishi919-rgb/AssignmentsCG/tree/main/Weather%20Api",
            img: shot7
        },
        {
            title: "News App",
            desc: "Latest headlines aggregator utilizing REST APIs.",
            demo: "https://rishikesh919.netlify.app/news/",
            repo: "https://github.com/rishi919-rgb/AssignmentsCG",
            img: shot8
        }
    ];

    // HTML/CSS Clones - Prioritizing Yeti & Santa Cruz
    const webClones = [
        {
            title: "Santa Cruz",
            desc: "Skateboard brand portfolio clone. Aesthetic landing page.",
            demo: "https://rishikesh919.netlify.app/web%20clones/santacruz/",
            repo: "https://github.com/rishi919-rgb/AssignmentsCG/tree/main/Web%20Clones/santacruz",
            img: shot6
        },
        {
            title: "Yeti Cycles",
            desc: "Mountain bike showcase site with extreme visuals.",
            demo: "https://rishikesh919.netlify.app/web%20clones/yeticycles/",
            repo: "https://github.com/rishi919-rgb/AssignmentsCG/tree/main/Web%20Clones/yeticycles",
            img: shot5
        },
        {
            title: "Disney+ Clone",
            desc: "Responsive replica of Disney+ interface.",
            demo: "https://rishikesh919.netlify.app/web%20clones/disney/",
            repo: "https://github.com/rishi919-rgb/AssignmentsCG/tree/main/Web%20Clones/disney",
            img: shot1
        },
        {
            title: "CoffeeHouse",
            desc: "Warm & inviting coffee shop landing page.",
            demo: "https://rishikesh919.netlify.app/web%20clones/coffee/",
            repo: "https://github.com/rishi919-rgb/AssignmentsCG/tree/main/Web%20Clones/coffee",
            img: shot2
        },
        {
            title: "Western Rise",
            desc: "E-commerce fashion store clone.",
            demo: "https://rishikesh919.netlify.app/web%20clones/westernrise/",
            repo: "https://github.com/rishi919-rgb/AssignmentsCG/tree/main/Web%20Clones/westernrise",
            img: shot3
        },
        {
            title: "Celestial AI",
            desc: "Futuristic AI landing page.",
            demo: "https://rishikesh919.netlify.app/web%20clones/celestial/",
            repo: "https://github.com/rishi919-rgb/AssignmentsCG/tree/main/Web%20Clones/Celestial",
            img: shot4
        }
    ];

    const games = [
        { title: "Tic Tac Toe", link: "https://rishikesh919.netlify.app/games/tic%20tac%20toe/", img: shot9 },
        { title: "Click Counter", link: "https://rishikesh919.netlify.app/games/click%20counter/", img: shot10 },
        { title: "Color Display", link: "https://rishikesh919.netlify.app/games/colordisplay.html/", img: shot11 },
        { title: "Whack a Mole", link: "https://rishikesh919.netlify.app/games/whack%20a%20amole/", img: shot12 },
        { title: "Typing Master", link: "https://rishikesh919.netlify.app/games/typing%20maaster/", img: shot13 },
        { title: "Flip Cards", link: "https://rishikesh919.netlify.app/games/flip%20a%20card/", img: shot14 },
        { title: "To Do List", link: "https://rishikesh919.netlify.app/games/todo/", img: shot15 },
        { title: "Pacman", link: "https://rishikesh919.netlify.app/games/pacman/pacman/", img: shot16 }
    ];

    return (
        <section id="projects" className="section-padding">
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
                <center><h2 className="section-title">Featured Work</h2></center>

                {/* WEBSITES GRID - Core Projects + Clones Aggregate Tile */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Slightly wider for core projects
                    gap: '2rem',
                    marginBottom: '6rem'
                }}>
                    {coreProjects.map((site, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            style={{
                                padding: '0',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                overflow: 'hidden',
                                border: '1px solid var(--glass-border)'
                            }}
                            whileHover={{
                                y: -5,
                                borderColor: 'var(--secondary)',
                                boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            {/* Image Thumbnail */}
                            <div style={{ height: '200px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={site.img}
                                    alt={site.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6))' }}></div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)' }}>{site.title}</h3>
                                    <span style={{ fontSize: '0.7rem', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', padding: '0.2rem 0.5rem', borderRadius: '10px' }}>Frontend App</span>
                                </div>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5', flexGrow: 1 }}>{site.desc}</p>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                    <a href={site.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'var(--secondary)', fontWeight: '600', fontSize: '0.85rem' }}>
                                        <FaExternalLinkAlt size={12} /> Live Demo
                                    </a>
                                    <a href={site.repo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'var(--text-muted)', fontWeight: '500', fontSize: '0.85rem' }}>
                                        <FaGithub size={14} /> Source
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Aggregate Web Clones Tile */}
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        onClick={() => setIsClonesModalOpen(true)}
                        style={{
                            padding: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            overflow: 'hidden',
                            border: '1px solid var(--glass-border)',
                            cursor: 'pointer',
                            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)'
                        }}
                        whileHover={{
                            y: -5,
                            borderColor: 'var(--accent-purple)',
                            boxShadow: '0 15px 30px -10px rgba(168, 85, 247, 0.2)'
                        }}
                    >
                        {/* Collage/Gradient Thumbnail */}
                        <div style={{ height: '200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--input-bg)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'radial-gradient(var(--text-muted) 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                            <img src={shot6} alt="Santa Cruz Cover" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, mixBlendMode: 'overlay', filter: 'blur(1px)' }} />
                            <FaLaptopCode size={50} color="var(--accent-purple)" style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))' }} />
                        </div>

                        {/* Content */}
                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)' }}>UI/UX Clones</h3>
                                <span style={{ fontSize: '0.7rem', background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent-purple)', padding: '0.2rem 0.5rem', borderRadius: '10px' }}>6 Projects</span>
                            </div>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.5', flexGrow: 1 }}>
                                A dedicated collection of pixel-perfect frontend recreations, featuring complex CSS layouts and modern aesthetics.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-purple)', fontWeight: '600', fontSize: '0.85rem' }}>
                                    Explore Collection →
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <center><h2 className="section-title">Interactive Games</h2></center>

                {/* GAMES GRID - Compact Image Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {games.map((game, index) => (
                        <motion.a
                            key={index}
                            href={game.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card"
                            whileHover={{
                                y: -5,
                                borderColor: 'var(--accent-purple)',
                                boxShadow: '0 10px 30px -5px rgba(168, 85, 247, 0.2)'
                            }}
                            style={{
                                textDecoration: 'none',
                                padding: '0',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                height: '100%'
                            }}
                        >
                            {/* Game Thumbnail */}
                            <div style={{ height: '120px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={game.img}
                                    alt={game.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5))' }}></div>
                            </div>

                            <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'var(--glass-bg)' }}>
                                <div style={{
                                    background: 'var(--input-bg)',
                                    borderRadius: '50%',
                                    padding: '0.5rem',
                                    display: 'flex',
                                    color: 'var(--secondary)',
                                    fontSize: '0.9rem'
                                }}>
                                    <FaGamepad />
                                </div>
                                <span style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>{game.title}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
