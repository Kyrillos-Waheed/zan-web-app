import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000";

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

const Home = () => <h2 className="text-xl font-bold">Welcome to the Admin Dashboard</h2>;

const Users = () =>
{
    const [users, setUsers] = useState([]);

    useEffect(() =>
    {
        axios.get(`${API_URL}/users`).then((res) => setUsers(res.data));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.UserID}>{user.FullName} - {user.Email}</li>
                ))}
            </ul>
        </div>
    );
};

const Products = () =>
{
    const [products, setProducts] = useState([]);

    useEffect(() =>
    {
        axios.get(`${API_URL}/products`).then((res) => setProducts(res.data));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.ProductID}>{product.ProductName} - ${product.Price}</li>
                ))}
            </ul>
        </div>
    );
};

const Orders = () =>
{
    const [orders, setOrders] = useState([]);

    useEffect(() =>
    {
        axios.get(`${API_URL}/orders`).then((res) => setOrders(res.data));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Orders</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.OrderID}>Order {order.OrderID} - ${order.TotalAmount}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;