import axios from "axios";
import { useEffect, useState } from "react";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept, setAccept] = useState(false);
  var flag;
  useEffect(() => {
    fetch("http://localhost:3333/DataOne")
      .then((res) => res.json())
      .then((data) => { 
        console.log(data)
        setName(data[0].Name)
        setEmail(data[0].Email)
        setPassword(data[0].Password)
        setPasswordR(data[0].Password)
       })
  }, [])
  async function Submit(e) {
    flag = true;
    e.preventDefault();
    setAccept(true);
    if (name === "" || password.length < 8 || passwordR !== password) {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        let res = await axios.post("http://localhost:3333/UpdateOne", {
          name: name,
          email: email,
          password: password,
          passwordR: passwordR,
        });
        console.log(res.status)
        if (res.status === 200) {
          window.location.pathname = "/dashboard/users"
        }
      }
    } catch (err) {
      console.log(err)
    }

  }
  return (
    <div className="parent">
      <div className="register">
        <form onSubmit={Submit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          {name === "" && accept && (
            <p className="error">username is required</p>
          )}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="password">password:</label>
          <input
            type="text"
            placeholder="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {password.length < 8 && accept && (
            <p className="error">password must be more than 8 char</p>
          )}
          <label htmlFor="Reapet password">Reapet password:</label>
          <input
            type="text"
            placeholder="Reapet password"
            id="Reapet password"
            value={passwordR}
            onChange={(e) => setPasswordR(e.target.value)}
          ></input>
          {passwordR !== password && accept && (
            <p className="error">password does not match</p>
          )}
          <div style={{ textAlign: "center" }}>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}