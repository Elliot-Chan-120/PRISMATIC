import "../App.css"
import {useState} from "react";
import {Link} from "react-router-dom";

function Pipeline_info() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
        <nav className="hero-nav">
                <div className="hero-nav-logo">PIPELINE_INFO</div>
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
                    padding: "50px",
                    fontSize: "1.1rem",
                    borderRadius: "20px",
                    background: "#ebcb8b",
                    color: "black",
                    textAlign: "left",
                    }}>
                    The general workflow of this project is as follows:
                    <div className="pipeline-wrapper">
                      <div className="pipeline">

                        <div className="pipeline-step">
                          <div className="step-number">01</div>
                          <h3>Input</h3>
                          <p>Mutation sequence and genomic context are provided by the user.</p>
                        </div>

                        <div className="pipeline-arrow">→</div>

                        <div className="pipeline-step">
                          <div className="step-number">02</div>
                          <h3>Feature Engineering</h3>
                          <p>Sequence-derived features and biological signals assembled into a "Mutation Fingerprint".</p>
                        </div>

                        <div className="pipeline-arrow">→</div>

                        <div className="pipeline-step">
                          <div className="step-number">03</div>
                          <h3>ML Prediction</h3>
                          <p>Model classifies variants as pathogenic or benign.</p>
                        </div>

                        <div className="pipeline-arrow">→</div>

                        <div className="pipeline-step">
                          <div className="step-number">04</div>
                          <h3>Potential Mutation Repair</h3>
                          <p>Pathogencity-reducing candidates are computationally generated.</p>
                        </div>
                      </div>
                    </div>
                    <p>
                        <br/>
                        The star of the show lies in the Feature Engineering.
                        A 500+ feature extraction system composed of 4 modules are responsible for extracting features relevant to their own domains:
                        <br/>
                        <br/>
                        <div className="pipeline-wrapper">
                          <div className="pipeline">

                            <div className="pipeline-step">
                              <div className="step-number">01</div>
                              <h3>CompositeDNA</h3>
                              <p>[F1] Raw DNA physicochemical property changes + [F2] HMM-based genomic domain composition changes.</p>
                            </div>

                            <div className="pipeline-arrow">→</div>

                            <div className="pipeline-step">
                              <div className="step-number">02</div>
                              <h3>CompositeProt</h3>
                              <p>[F1] Protein Sequence estimation + [F2] Physicochemical property changes.</p>
                            </div>

                            <div className="pipeline-arrow">→</div>

                            <div className="pipeline-step">
                              <div className="step-number">03</div>
                              <h3>DNAMatrix</h3>
                              <p>DNA motif analysis with scoring relative to mutation zone proximity. Analyzes motifs relevant to DNA transcription.</p>
                            </div>

                            <div className="pipeline-arrow">→</div>

                            <div className="pipeline-step">
                              <div className="step-number">04</div>
                              <h3>ProtMatrix</h3>
                              <p>Near-identical analysis scheme to DNAMatrix. Analyzes motifs relevant to post-translational modification and protein interactions.</p>
                            </div>
                          </div>
                        </div>
                        Specific feature details can be read from GEM's README.md in my GitHub.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Pipeline_info;
