import TransactionItem from "./TransactionItem";

function TransactionList({
    transactions,
    deleteTransaction,
}) {

    return (

        <div style={{ marginTop: "30px" }}>

            <h2>Transactions</h2>

            {transactions.length === 0 ? (

                <p>No Transactions Found</p>

            ) : (

                transactions.map((item) => (

                    <TransactionItem
                        key={item.id}
                        item={item}
                        deleteTransaction={deleteTransaction}
                    />

                ))

            )}

        </div>

    );
}

export default TransactionList;