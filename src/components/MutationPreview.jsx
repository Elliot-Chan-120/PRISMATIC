import "../App.css"

const NUCLEOTIDE_colorS = {
    "A": "#bf616a",
    "T": "#a3be8c",
    "C": "#ebcb8b",
    "G": "#5e81ac",
}

function NucleotideChar({ char, isDiff }) {
    const color = NUCLEOTIDE_colorS[char] ?? "#D8DEE9";
    return (
        <span style={{
            color,
            fontFamily: "monospace",
            fontSize: "13px",
            fontWeight: isDiff ? "700" : "400",
            background: isDiff ? "#2e3440" : "transparent",
        }}>
            {char}
        </span>
    )
}

function SequenceRow({ label, flank1, sequence, flank2, compareSeq }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
      <span style={{ fontSize: "11px", color: "#4a6080", width: "40px",
        textTransform: "uppercase", letterSpacing: "0.04em" }}>
        {label}
      </span>
      <div style={{ fontFamily: "monospace", fontSize: "15px",
        background: "#0b0f17", borderRadius: "8px", padding: "8px 12px",
        border: "0.5px solid #1e2d3d", letterSpacing: "2px" }}>
        <span style={{ color: "#3d4f6a" }}>{flank1}</span>
        {sequence.split("").map((char, i) => (
          <NucleotideChar
            key={i}
            char={char}
            isDiff={compareSeq && compareSeq[i] && compareSeq[i] !== char}
          />
        ))}
        <span style={{ color: "#3d4f6a" }}>{flank2}</span>
      </div>
    </div>
  );
}

function MutationPreview({ form }) {
  const { ref_seq, alt_seq, flank1, flank2 } = form;
  const hasContent = ref_seq || alt_seq;

  return (
    <div className="preview-panel">
          {ref_seq && (
            <SequenceRow
              label="ref"
              flank1={flank1}
              sequence={ref_seq}
              flank2={flank2}
              compareSeq={alt_seq}
            />
          )}
          {alt_seq && (
            <SequenceRow
              label="alt"
              flank1={flank1}
              sequence={alt_seq}
              flank2={flank2}
              compareSeq={ref_seq}
            />
          )}
        </div>
      )
}

export default MutationPreview;