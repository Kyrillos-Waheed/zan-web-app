import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000";

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

export default Orders;