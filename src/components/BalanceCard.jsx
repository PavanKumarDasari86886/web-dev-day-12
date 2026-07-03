function BalanceCard({ balance }) {
    return (
        <div className="card balance">
            <h2>Total Balance</h2>
            <h1>₹{balance}</h1>
        </div>
    );
}

export default BalanceCard;