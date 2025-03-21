import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Products from "./components/Products";
import Orders from "./components/Orders";

const App = () =>
{
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <nav className="mt-4 flex gap-4">
          <Link to="/users" className="text-blue-500">Users</Link>
          <Link to="/products" className="text-blue-500">Products</Link>
          <Link to="/orders" className="text-blue-500">Orders</Link>
        </nav>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;