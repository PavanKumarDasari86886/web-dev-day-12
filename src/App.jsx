import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import TransactionPage from "./components/TransactionPage";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";

import "./styles/App.css";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app">
      <Navbar />

      <div className="main-layout">

        <Sidebar page={page} setPage={setPage} />

        {page === "dashboard" && <Dashboard />}
        {page === "transactions" && <TransactionPage />}
        {page === "analytics" && <Analytics />}
        {page === "settings" && <Settings />}

      </div>
    </div>
  );
}

export default App;