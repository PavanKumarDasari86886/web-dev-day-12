import { createContext, useState } from "react";

export const TransactionContext = createContext();

export function TransactionProvider({ children }) {
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            title: "Salary",
            amount: 50000,
            type: "Income",
            category: "Salary",
            date: "2026-07-01",
        },
        {
            id: 2,
            title: "Freelance Project",
            amount: 15000,
            type: "Income",
            category: "Freelance",
            date: "2026-07-05",
        },
        {
            id: 3,
            title: "House Rent",
            amount: 12000,
            type: "Expense",
            category: "Rent",
            date: "2026-07-02",
        },
        {
            id: 4,
            title: "Groceries",
            amount: 3500,
            type: "Expense",
            category: "Food",
            date: "2026-07-04",
        },
        {
            id: 5,
            title: "Petrol",
            amount: 2500,
            type: "Expense",
            category: "Transport",
            date: "2026-07-10",
        },
        {
            id: 6,
            title: "Electricity Bill",
            amount: 1800,
            type: "Expense",
            category: "Bills",
            date: "2026-07-12",
        },
        {
            id: 7,
            title: "Shopping",
            amount: 4200,
            type: "Expense",
            category: "Shopping",
            date: "2026-07-15",
        },
    ]);

    const addTransaction = (transaction) => {
        setTransactions((prev) => [...prev, transaction]);
    };

    const deleteTransaction = (id) => {
        setTransactions((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    const totalIncome = transactions
        .filter((item) => item.type === "Income")
        .reduce((sum, item) => sum + Number(item.amount), 0);

    const totalExpense = transactions
        .filter((item) => item.type === "Expense")
        .reduce((sum, item) => sum + Number(item.amount), 0);

    const balance = totalIncome - totalExpense;

    return (
        <TransactionContext.Provider
            value={{
                transactions,
                addTransaction,
                deleteTransaction,
                totalIncome,
                totalExpense,
                balance,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
}