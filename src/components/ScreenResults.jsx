function ScreenResults({ results, onRepair, repairing }) {
    if (!results) return null;

    return (
        <div>
        {results.map((result, index) => (
            <div key={index}>
                <p><strong>Name:</strong> {result.name}</p>
                <p><strong>Predicted Class:</strong> {result.status === "1" ? "Pathogenic" : "Benign"}</p>
                <p><strong>Benign Prob.:</strong> {(parseFloat(result.Prob_Benign) * 100).toFixed(2)}%</p>
                <p><strong>Pathogenic Prob.:</strong> {(parseFloat(result.Prob_Pathogenic) * 100).toFixed(2)}%</p>
            </div>
            ))}
        </div>
    );
}

export default ScreenResults;