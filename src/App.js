import React from "react";
// import react router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Pages
import Handler from "./pages/Handler";
import ProductDetails from "./pages/ProductDetails";
// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="overflow-hidden">
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Handler />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};
export default App;