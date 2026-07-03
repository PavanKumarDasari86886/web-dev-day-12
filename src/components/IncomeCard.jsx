function IncomeCard({ income }) {
    return (
        <div className="card income">
            <h2>Total Income</h2>
            <h1>₹{income}</h1>
        </div>
    );
}

export default IncomeCard;