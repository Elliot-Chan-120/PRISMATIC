<img src="public/screenshots/web_logo.png" alt="prismatic website logo" width="700">

##### Gene Variant Pathogenicity Prediction and Repair
**Live-Demo Link: [PRISMATIC](https://prismatic-xi.vercel.app)**

Web-deployed ML platform for computational genetic variant pathogenicity 
screening and repair

### Overview and Usage
PRISMATIC is a full-stack ML application allowing users to input genetic
mutation data in the following form:

**Chromosome Number**: integers 1-24 where Y = 23 and X = 24

**Reference Sequence (Original DNA Allele)** e.g. "ATCG"

**Alternate Sequence (Variant DNA Allele)** e.g. "ACAT"

**Flank 1 ("Left" side of the alleles)**

**Flank 2 ("Right" side of the alleles)**

<img src="public/screenshots/input_and_preview.png" alt="input + preview demonstration entry" width="1000">


<br>

PRISMATIC will take the input strings and output:
- Pathogenicity probability and classification status (Pathogenic / Benign)
- Potential therapeutic candidates generated using my algorithm "ReGen"

<img src="public/screenshots/demo_results.png" alt="demo_results" width="1000">

### Model Performance
- **90.0% ROC-AUC**
- **89.7% PR-AUC**
- **82.0% F1**
- **80.6% Pathogenic F1**


### Stack
- Backend: Python / FastAPI, deployed on Hugging Face Spaces (Docker)
  - ML: Scikit-learn, XGBoost
  - Algorithm logic and feature engineering pipeline source code in GEM / PRISM (see GitHub profile)
- Frontend: React, CSS, deployed on Vercel

### Background
- Derived from GEM and PRISM (see GitHub). Built to explore bioinformatics + ML integration and its potential in the future of medicine.

### Disclaimer: Not intended for clinical use
This project is intended for educational and research purposes only.
This is not a medical tool and should not be used for clinical decision-making

