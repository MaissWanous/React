import { useState } from "react";
import axios from "axios";
export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [accept, setAccept] = useState(false);
    const [emailError, setEmailError] = useState("");
    var flag;

    async function Submit(e) {
        flag = true;
        e.preventDefault();
        setAccept(true);
        if (password.length < 8) {
            flag = false;
        } else {
            flag = true;
        }
        try {
            if (flag) {
                let res = await axios.post("http://localhost:3333/login", {

                    email: email,
                    password: password,

                });
                if (res.status === 200) {
                    window.location.pathname = "/"
                    window.localStorage.setItem("Email", email)
                }
            }
        } catch (err) {
            setEmailError(err.response.status);
        }
    }
    return (
        <div className="parent">
            <div className="register">
                <form onSubmit={Submit}>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    {accept && emailError === 422 && (
                        <p className="error"></p>
                    )}
                    <label htmlFor="password">password:</label>
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    {password.length < 8 && accept && (
                        <p className="error">password must be more than 8 char</p>
                    )}

                    <div style={{ textAlign: "center" }}>
                        {accept && emailError === 422 && (
                            <p className="error">Uncorrect password or the Email you entered not exist</p>
                        )}
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
