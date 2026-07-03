import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import "../styles/Dashboard.css";

function Dashboard() {

    const {
        balance,
        totalIncome,
        totalExpense,
    } = useContext(TransactionContext);

    return (
        <main className="dashboard">

            <div className="welcome">
                <h1>Welcome Back 👋</h1>

                <p>
                    Manage your personal finances with confidence.
                </p>
            </div>

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

        </main>
    );
}

export default Dashboard;