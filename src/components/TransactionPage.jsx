import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function TransactionPage() {
    const { transactions, deleteTransaction } = useContext(TransactionContext);

    return (
        <main className="dashboard">
            <h1>💳 Transactions</h1>

            <p style={{ marginBottom: "20px", color: "#555" }}>
                Manage all your income and expense transactions.
            </p>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    background: "#fff",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
            >
                <thead>
                    <tr style={{ background: "#2563eb", color: "#fff" }}>
                        <th style={{ padding: "12px" }}>Title</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.length === 0 ? (
                        <tr>
                            <td
                                colSpan="6"
                                style={{
                                    textAlign: "center",
                                    padding: "20px",
                                }}
                            >
                                No Transactions Found
                            </td>
                        </tr>
                    ) : (
                        transactions.map((item) => (
                            <tr key={item.id}>
                                <td style={{ padding: "12px" }}>{item.title}</td>

                                <td>{item.category}</td>

                                <td
                                    style={{
                                        color:
                                            item.type === "Income"
                                                ? "green"
                                                : "red",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {item.type}
                                </td>

                                <td>₹{item.amount}</td>

                                <td>{item.date}</td>

                                <td>
                                    <button
                                        onClick={() => deleteTransaction(item.id)}
                                        style={{
                                            background: "#ef4444",
                                            color: "#fff",
                                            border: "none",
                                            padding: "8px 14px",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </main>
    );
}

export default TransactionPage;