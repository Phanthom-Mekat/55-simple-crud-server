import { useLoaderData } from "react-router-dom";

const Update = () => {
    const user = useLoaderData()

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const users = {name, email};
        console.log(users);
        fetch(`http://localhost:5000/users/${user?._id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(users)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            <p>update info of {user.name}</p>
            <form onSubmit={handleUpdate} >
                <input type="text" placeholder="name" name="name" defaultValue={user?.name} />
                <input type="email" placeholder="email" name="email" defaultValue={user?.email} />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;