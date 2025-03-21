import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000";

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

export default Products;