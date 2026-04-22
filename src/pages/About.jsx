import "../App.css"
import {Link} from "react-router-dom";
import {useState} from "react";

function About() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
        <nav className="hero-nav">
                <div className="hero-nav-logo">ABOUT_PRISMATIC</div>
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
                    background: "#d8dee9",
                    color: "black",
                    textAlign: "left",
                    }}>


                    PRISMATIC is a web-deployed ML-based prototype derived from its parent project "GEM". By presenting it
                    with the **chromosome number and sequence information alone**, it seeks to screen genetic mutations
                    and identify potential therapeutic candidates to reverse / reduce pathogenicity via an iterative
                    guided mutation algorithm named "ReGen".
                    GEM can be read about / accessed through my GitHub in "Contact".
                    <br />
                    <br />
                    It was built as a broader effort to better understand the intersection of bioinformatics, and ML.
                    This project is not intended for clinical use, but rather as a technical and conceptual exploration
                    of how biologically informed feature engineering and predictive modelling can be combined in a
                    unified system.
                    <br />
                    <br />
                    After being presented with the sequence info, 500+ features are extracted and used to create a
                    "mutation fingerprint", numerically characterizing the genetic variant's effects. The model uses
                    said fingerprint to predict if the mutation would result in a pathogenic or benign effect.
                    <br/>
                    <br/>
                    The machine-learning model in use for all outputs was dubbed "DiscriminatorModel" due to its overall
                    high-performance in pure discrimination with its downside being a slightly higher false negative
                    rate than its counterpart "ClinicalModel" that isn't in use here.
                    More on the feature extraction pipeline can be read in the "Pipeline Info" section.
                    <br />
                    <br />
                    DiscriminatorModel Stats:
                    <br />
                    Cross Validation Results: Mean ROC AUC: 0.8985, Mean PR AUC: 0.8938
                    <br />
                    Mean FNs: 5557.80, Mean FPs: 5252.60
                    <br />
                    ROC AUC: 0.9003
                    <br />
                    Precision-Recall AUC: 0.8967
                    <br />
                    Pathogenic F1-Score: 0.8059
                    <br />
                    F1-score: 0.82
                    <br />
                </div>
            </div>
        </div>
    );
}

export default About;
