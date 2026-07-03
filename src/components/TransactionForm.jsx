import { useState } from "react";
import "../styles/Form.css";

function TransactionForm({ addTransaction }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");
    const [type, setType] = useState("Expense");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const transaction = {
            id: Date.now(),
            title,
            amount,
            category,
            type,
            date,
        };

        addTransaction(transaction);

        setTitle("");
        setAmount("");
        setCategory("Food");
        setType("Expense");
        setDate("");
    };

    return (
        <form className="transaction-form" onSubmit={handleSubmit}>

            <h2>Add New Transaction</h2>

            <input
                type="text"
                placeholder="Transaction Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option>Food</option>
                <option>Shopping</option>
                <option>Travel</option>
                <option>Bills</option>
                <option>Salary</option>
            </select>

            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option>Income</option>
                <option>Expense</option>
            </select>

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />

            <button type="submit">
                Add Transaction
            </button>

        </form>
    );
}

export default TransactionForm;