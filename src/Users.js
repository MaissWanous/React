import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Users() {
    const [users, setUser] = useState([])
    const [runUseEffect, setRun] = useState(0)
    useEffect(() => {
        fetch('http://localhost:3333/data').then((res) => res.json().then((data) => setUser(data)))
    }, [runUseEffect])
    async function deleteUser(e) {
        await axios.post("http://localhost:3333/delete", {
            email: e,
        });
        setRun((p) => p + 1)
    }
       async function Update(e) {
        await axios.post("http://localhost:3333/update", {
            email: e,
        });
      
    }
    const showUser = users.map((user, i) =>
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{user.Name}</td>
            <td>{user.Email} </td>
            <td>
                <Link to={'update'}>
                    <i onClick={() => Update(user.Email)}
                        className="fa-solid fa-pen-to-square"
                        style={{ color: "#74afb9", fontSize: '20px', padding: '7px' }}></i>
                </Link>
                <i onClick={() => deleteUser(user.Email)}
                    className="fa-solid fa-trash"
                    style={{ color: "#d13232", fontSize: '20px', padding: '7px', cursor: "pointer" }}></i>
            </td>
        </tr>
    )

    return (
        <div style={{ padding: '20px' }}>
            <table>
                <thead>
                    <tr>

                        <th>Id</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {showUser}
                </tbody>
            </table>
        </div>
    )
}