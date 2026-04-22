import {useState} from "react";
/*
import Home from "./components/Home"
import HeroTab from "./components/HeroTab
*/
import SequenceForm from "../components/SequenceForm"
import ScreenResults from "../components/ScreenResults"
import RepairResults from "../components/RepairResults"
import MutationPreview from "../components/MutationPreview"
import Hero from "../pages/Hero.jsx"
import "../App.css"

function Prismatic_() {
    const [form, setForm] = useState({
        gene_name: "", chr_num: "", ref_seq: "", alt_seq: "", flank1: "", flank2: "", iterations: "",
    })
    const [screenResults, setScreenResults] = useState(null);
    const [repairResults, setRepairResults] = useState(null);

     return (
         <div>
             <section id={"hero-section"} className={"Hero"}>
                <Hero/>
             </section>

             <section id={"in_out"}>
                 <div className="app-container">
                    <div className="layout">

                    {/* LEFT SIDE */}
                    <div className="input-panel">
                        [INPUT SEQUENCE DATA]
                        <p>
                            chr_num = chromosome number where X is 23 and Y is 24
                            <br />

                            'ref' and 'alt' = original and mutation sequences
                        </p>

                      <SequenceForm
                          form={form}
                          setForm={setForm}
                          onScreenResult={setScreenResults}
                          onRepairResult={setRepairResults}
                      />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="results-panel">

                      {/* TOP: Mutation Preview */}
                      <div className="preview-panel">
                          <div className={"mutation-card"}>
                              <h2 className="mutation-title">MUTATION PREVIEW</h2>
                              <MutationPreview form={form} />
                          </div>
                        {/* we’ll fill this later */}
                      </div>

                      {/* BOTTOM */}
                      <div className="results-bottom">

                        <div className="screen-panel">
                            <div className="screen-card">
                                <h2 className="screen-title">SCREEN RESULTS</h2>
                                <ScreenResults results={screenResults} />
                            </div>

                        </div>

                        <div className="repair-panel">
                            <div className={"repair-card"}>
                                <h2 className="repair-title">REPAIR RESULTS</h2>
                                <RepairResults result={repairResults} />
                            </div>
                        </div>

                      </div>
                    </div>

                    </div>
                </div>
             </section>

         </div>

  );
}

export default Prismatic_;