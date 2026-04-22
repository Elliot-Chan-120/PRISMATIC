import { useState } from "react";

function SequenceForm({ form, setForm, onScreenResult, onRepairResult }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const maxFlankLength=500;
  const maxAlleleLength=30;

  function handleChange(e) {
    let { name, value } = e.target;

    const sequenceFields = ["ref_seq", "alt_seq", "flank1", "flank2"];
    if (sequenceFields.includes(name)) {
      value = value.toUpperCase();
    }

    setForm({ ...form, [name]: value });
  }

  function validateForm() {
  const requiredFields = ["gene_name", "chr_num", "ref_seq", "alt_seq", "flank1", "flank2"];

  for (let field of requiredFields) {
    if (!form[field] || form[field].toString().trim() === "") {
      return `${field} is required`;
    }
  }


  const validNameRegex = /^[A-Xa-z0-9_]+$/;
  const name = form.gene_name;
  if (!validNameRegex.test(name)) {
    return "Gene name can only have characters, numbers and underscores (_) "
  }

  const chr = parseInt(form.chr_num);
  if (isNaN(chr) || chr < 1 || chr > 24) {
    return "Chromosome number must be between 1 and 24. Note: X=23, Y=24";
  }

  const iter = parseInt(form.iterations);
  if (isNaN(iter) || iter < 1 || iter > 10) {
    return "Iterations must be between 1 and 10";
  }

  const flankRegex = /^[ATCG]+$/i;
  const flankFields = ["flank1", "flank2"]

  const alleleRegex = /^[ATCG]+$/i;
  const alleleFields = ["ref_seq", "alt_seq"]

  for (let field of flankFields) {
    if (!flankRegex.test(form[field])) {
      return `${field} must contain ATCG (base nucleotides)`;
    }
    if (form[field].length > maxFlankLength) {
      return `${field} must be <= ${maxFlankLength} bp`;
    }
  }

  for (let field of alleleFields) {
    if (!alleleRegex.test(form[field])) {
      return `${field} must only contain ATCG nucleotides`;
    }

    if (form[field].length > maxAlleleLength) {
      return `${field} must be <= ${maxAlleleLength} bp`;
    }
  }

  return null;
}

  async function handleScreen() {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/screen`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, chr_num: parseInt(form.chr_num) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail);
      onScreenResult(data.output);
    } catch (err) {
      setError("Screening failed. Please check your inputs and try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleRepair() {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/repair`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, chr_num: parseInt(form.chr_num) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail);
      onRepairResult(data.output);
    } catch (err) {
      setError("Repair failed. Please check your inputs and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2></h2>

      {["gene_name", "chr_num", "ref_seq", "alt_seq", "flank1", "flank2"].map((field) => (
        <div key={field} className={"input-card"}>
          <label>{field}</label>
          <input
            name={field}
            value={form[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}

      <div className={"input-card"}>
        <label>Repair Iterations</label>
        <input
          name="iterations"
          type="int"
          value={form.iterations}
          onChange={handleChange}
          min={1}
          max={10}
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="button-group">
        <button onClick={handleScreen} disabled={loading}>
          {loading ? "Running..." : "Screen"}
        </button>

        <button onClick={handleRepair} disabled={loading}>
          {loading ? "Running..." : "Repair"}
        </button>
      </div>
    </div>
  );
}

export default SequenceForm;