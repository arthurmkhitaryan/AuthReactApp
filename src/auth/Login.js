import "./css/Login.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
    const [ email, setEmail ] = useState("");
    const [ pass, setPass ] = useState("");

    const history = useHistory();


    function submit(e) {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users"));

        let user = users.find(user => user.email === email && user.password === pass);

        if(user) {
            history.push(`/profile/${user.id}`, { "name": user.name, "isLogin": user.isLogin })
            localStorage.setItem("loggedUser", JSON.stringify(user.id));
        }
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            <form action="#" method="post" onSubmit={submit}>
                <label htmlFor="email">
                    Email
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        type="password"
                        name="pass"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                    />
                </label>
                <button className="btn-sign-in" type="submit">Sign In</button>
                <a className="link" href="/forgot">Forgot Password</a>
                <a className="link" href="/register">Don't have an account?</a>
            </form>
        </div>
    );
}

export default Login;