"use client"
import { useState } from "react";
import { addUsers } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";


function AddUser() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const UserDispatch = () => {
        dispatch(addUsers(name));
    }

    return (
        <div className="add-user">
            <h3>User List</h3>
            <input className="add-input" type="text" placeholder="Add New User"
                onChange={(e) => setName(e.target.value)}></input><br />
            <button onClick={UserDispatch} className="add-button">Add User</button><br /><br />
            <span><Link href="deleteuser">remove User</Link></span>
        </div>
    )
}

export default AddUser;