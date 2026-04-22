import "../App.css"
import {useState} from "react";
import {Link} from "react-router-dom";

function Contact() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
        <nav className="hero-nav">
                <div className="hero-nav-logo">CONTACT_INFORMATION</div>
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

            <div style={{
                overflow: "hidden",
                boxSizing: "border-box",
            }}>
                <div style={{
                    maxWidth: "100%",
                    padding: "80px",
                    fontSize: "1.1rem",
                    borderRadius: "20px",
                    background: "#5e81ac",
                    color: "black",
                    textAlign: "left",
                    }}>
                    <div className="contact-section">
                      <p>
                        Feel free to reach out!
                      </p>

                      <div className="contact-links">
                        <p>Email: <a href="mailto:elliotchan119@gmail.com" target="_blank"> elliotchan119@gmail.com</a></p>
                        <p>GitHub: <a href="https://github.com/Elliot-Chan-120" target="_blank">https://github.com/Elliot-Chan-120</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/elliot-chan-6206b01ba/" target="_blank">https://www.linkedin.com/in/elliot-chan-6206b01ba/</a></p>
                      </div>

                      <p className="contact-note">
                        Currently seeking entry-level opportunities in Bioinformatics and Data Science.
                      </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
