import React from "react";
import logo from "./logo.svg";
import "./App.css";

import HomePage from "./components/homepage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Item from "./components/item";
import InvoiceInfo from "./components/invoiceinfo";
import NavBar from "./components/navbar";
function App() {
  return (
    <React.Fragment>
      <div className="container">
        <NavBar />
        <Router>
          <Routes>
            {/* <Route path="invoice" element={<SavePdf  />} /> */}
            {/* <Route path="item" element={<Item />} /> */}
            <Route path="/" element={<HomePage message="{hello}" />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
