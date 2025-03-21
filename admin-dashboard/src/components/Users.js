import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000";

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

export default Users;