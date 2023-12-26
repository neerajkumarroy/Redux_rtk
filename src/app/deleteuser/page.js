"use client"

import { useDispatch, useSelector } from "react-redux"

export default function Page() {
    const userData = useSelector((data) => data.users);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Remove User </h1>
            {
                userData.map((item) => (
                    <div>
                        <span>{item.name}</span>
                        <button onClick={()=>dispatch(deleteUser(item.id))}>Remove User</button>
                    </div>
                ))
            }
        </div>
    )
}