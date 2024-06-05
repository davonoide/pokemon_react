import React, {useState, useEffect} from "react";



const Users = () => {

    const [users, setUsuarios] = useState([]);

    useEffect(()=>{

        const getUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if(!response.ok){
                console.log("Error")
            }else{
                const data = await response.json();
                setUsuarios(data);
                console.log(data);
            }

        };

        getUsers();

    },[]);


        return (
            <div>
                <h1>Users</h1>
                <ul>
                    {users.map(user =>(
                        <li key = {user.id}>
                            {user.name}{user.phone}

                        </li>
                    ))}
                </ul>

                
            </div>
        );
};

export default Users;
