function ExpenseCard({ expense }) {
    return (
        <div className="card expense">
            <h2>Total Expense</h2>
            <h1>₹{expense}</h1>
        </div>
    );
}

export default ExpenseCard;