import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);

    const colors = [
        "#bf616a",
        "#d08770",
        "#ebcb8b",
        "#a3be8c",
        "#b48ead",
        "#88c0d0",
        "#5e81ac",
        "#8fbcbb",
    ]

    const scrollToPrismatic = () => {
        document.getElementById("in_out")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="hero-wrapper">
            <nav className="hero-nav">
                <div className="hero-nav-logo">Elliot Chan</div>
                <div className="hero-nav-menu">
                    <button
                        className="hero-menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        Menu &#9662;
                    </button>
                    {menuOpen && (
                        <div className="hero-dropdown">
                            <Link to="/" onClick={() => setMenuOpen(false)}> Home</Link>
                            <Link to="/about" onClick={() => setMenuOpen(false)}>About PRISMATIC</Link>
                            <Link to="/pipeline_info" onClick={() => setMenuOpen(false)}>Pipeline Info</Link>
                            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                        </div>
                    )}
                </div>
            </nav>

            <div className="hero-content">
                <h1 className="hero-title">PRISMATIC</h1>
                    <div
                        style={{ background: `linear-gradient(to right, ${colors.join(', ')})`,
                            height: '6px',
                            width: '60%',
                            margin: '30px 0',
                            borderRadius: '50px',
                        }}
                    />

                <div className="hero-subtitle-row">
                    <p className="hero-subtitle">
                        <br />
                        Computationally screen genetic variants for pathogenicity & identify potential therapeutic candidates.
                        <br />
                        <br />
                        Disclaimer: PRISMATIC is a research and educational prototype and is not intended for clinical or diagnostic use. Results should not be used for medical decision-making.

                    </p>
                    <button className="hero-cta" onClick={scrollToPrismatic}>
                        Launch Tool &#8595;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
