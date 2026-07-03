import "../styles/Sidebar.css";
import {
    FaHome,
    FaMoneyBillWave,
    FaChartPie,
    FaCog,
} from "react-icons/fa";

function Sidebar({ page, setPage }) {
    return (
        <aside className="sidebar">
            <h2>MENU</h2>

            <ul>
                <li
                    className={page === "dashboard" ? "active" : ""}
                    onClick={() => setPage("dashboard")}
                >
                    <FaHome />
                    Dashboard
                </li>

                <li
                    className={page === "transactions" ? "active" : ""}
                    onClick={() => setPage("transactions")}
                >
                    <FaMoneyBillWave />
                    Transactions
                </li>

                <li
                    className={page === "analytics" ? "active" : ""}
                    onClick={() => setPage("analytics")}
                >
                    <FaChartPie />
                    Analytics
                </li>

                <li
                    className={page === "settings" ? "active" : ""}
                    onClick={() => setPage("settings")}
                >
                    <FaCog />
                    Settings
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;