import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Navbar onMenuToggle={handleMenuToggle} />
      <div className="content">
        <Sidebar isOpen={isSidebarOpen} onToggle={handleMenuToggle} />
        <div className="main-content">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default App;
