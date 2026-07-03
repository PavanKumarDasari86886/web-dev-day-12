import "../styles/Navbar.css";

import { FaWallet } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">

                <FaWallet />

                <span>Expense Tracker Pro</span>

            </div>

            <div className="profile">

                <img
                    src="https://i.pravatar.cc/50"
                    alt="Profile"
                />

            </div>

        </nav>
    );
}

export default Navbar;