import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function Analytics() {
    const {
        transactions,
        balance,
        totalIncome,
        totalExpense,
    } = useContext(TransactionContext);

    const categoryTotals = {};

    transactions
        .filter((item) => item.type === "Expense")
        .forEach((item) => {
            categoryTotals[item.category] =
                (categoryTotals[item.category] || 0) + Number(item.amount);
        });

    return (
        <main className="dashboard">
            <h1>📊 Analytics</h1>

            <div className="cards">
                <div className="card balance">
                    <h3>Total Balance</h3>
                    <h1>₹{balance}</h1>
                </div>

                <div className="card income">
                    <h3>Total Income</h3>
                    <h1>₹{totalIncome}</h1>
                </div>

                <div className="card expense">
                    <h3>Total Expense</h3>
                    <h1>₹{totalExpense}</h1>
                </div>
            </div>

            <br />

            <div
                style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "15px",
                    marginTop: "20px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
            >
                <h2>Total Transactions : {transactions.length}</h2>

                <h3 style={{ marginTop: "25px" }}>
                    Expense by Category
                </h3>

                <ul style={{ marginTop: "15px" }}>
                    {Object.entries(categoryTotals).map(([category, amount]) => (
                        <li
                            key={category}
                            style={{
                                marginBottom: "12px",
                                fontSize: "18px",
                            }}
                        >
                            {category} : ₹{amount}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Analytics;