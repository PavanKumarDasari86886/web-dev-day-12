function TransactionItem({ item, deleteTransaction }) {
    return (
        <div
            className="card"
            style={{
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div>
                <h3>{item.title}</h3>

                <p>
                    ₹{item.amount} | {item.type}
                </p>
            </div>

            <button
                style={{
                    background: "crimson",
                    color: "white",
                    border: "none",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    cursor: "pointer",
                }}
                onClick={() => deleteTransaction(item.id)}
            >
                Delete
            </button>
        </div>
    );
}

export default TransactionItem;