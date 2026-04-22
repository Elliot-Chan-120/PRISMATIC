function RepairResults({ result }) {
    if (!result) return null;

    return (
        <div>
            <pre>
                {result}
            </pre>
        </div>
    );
}

export default RepairResults;
