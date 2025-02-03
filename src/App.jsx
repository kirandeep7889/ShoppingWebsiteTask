import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Import Router and Routes
import "./App.css";

import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import QuotePage from "./pages/QuotePage";
// Import the QuotePage component

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Define the Routes */}
        <Routes>
          {/* Route for ProductPage */}
          <Route path="/" element={<ProductPage />} />

          {/* Route for QuotePage */}
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
