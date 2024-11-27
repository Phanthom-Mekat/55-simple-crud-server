import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadusers = useLoaderData()
    const [users,setUsers]=useState(loadusers)
    const handleDelete=(_id)=>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.deletedCount>0){
                alert('deleted data')
                const remaining=users.filter(user=> user._id!==_id)
                setUsers(remaining)
            }
        })
    }
    return (
        <div>
            {users.length}
            <div>
                {
                    users.map(user=> <p key={user._id}>{user.name} : {user.email}  
                    
                    <Link to={`/update/${user._id}`}>
                        <button>update</button>
                    </Link>

                    <button onClick={()=>handleDelete(user._id)}
                    >X</button></p> )
                }
            </div>
        </div>
    );
};

export default Users;