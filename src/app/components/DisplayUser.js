"use client"
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

function DisplyUser(){
const userData = useSelector((data)=>data.users);
const dispatch = useDispatch();
console.log(userData);
    return(
        <div className="display-user">
            <h3 className="static">Show User List</h3>
            {
                userData.map((item)=>(
                    <div className="user-item">{item.name}<span>
                        <button onClick={()=>dispatch(removeUser(item.id))}>Remove</button></span></div>
                ))
            }
        </div>
    )
}

export default DisplyUser;