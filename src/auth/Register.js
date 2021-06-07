import "./css/Register.css";
import {useState} from "react";

function Register() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [day, setDay] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const [pass, setPass] = useState("");
    const [re_pass, setRePass] = useState("");
    const [msg, setMsg] = useState("");

    function submit(e) {
        e.preventDefault();

        const user = {
            "id": Date.now(),
            "name": name,
            "surname": surname,
            "bird-day": day,
            "email": email,
            "gender": gender,
            "password": pass
        }

        const users = JSON.parse(localStorage.getItem("users") || null) || [];
        const currentUser = users.find(user => user.email === email);
        let newMsg = "";

        if(pass !== re_pass) {
            newMsg = setMsg("Password mismatch!");
        }

        if(name === "" || surname === "" || email === "" || day === "" || pass === "" || re_pass === "") {
            newMsg = setMsg('All fields must be filled!');
        }

        if (currentUser) {
            newMsg = setMsg('This mail is already registered!');
        }

        if(newMsg === "") {
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }
    }

    return (
        <div className="Register">
            <h1>Register</h1>
            <form className="form" action="#" method='post' onSubmit={submit}>
                <p className="msg">{msg}</p>
                <label htmlFor="name">
                    Name
                    <input
                        name="name"
                        id="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="surname">
                    Surname
                    <input
                        name="surname"
                        id="surname"
                        type="text"
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                    />
                </label>
                <label htmlFor="bird-day">
                    Bird Day
                    <input
                        name="day"
                        id="bird-day"
                        type="date"
                        value={day}
                        onChange={e => setDay(e.target.value)}
                    />
                </label>
                <label htmlFor="email">
                    Email
                    <input
                        name="email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label className='gender' htmlFor="Gender">
                    Gender
                    <select
                        name="gender"
                        id="gender"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                    >
                        <option name="gender" value="Male">Male</option>
                        <option name="gender" value="Female">Female</option>
                        <option name="gender" value="Other">Other</option>
                    </select>
                </label>
                <label htmlFor="pass">
                    Password
                    <input
                        name="pass"
                        d="pass"
                        type="password"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                    />
                </label>
                <label htmlFor="re-pass">
                    Confirm Password
                    <input
                        name="re_pass"
                        id="re-pass"
                        type="password"
                        value={re_pass}
                        onChange={e => setRePass(e.target.value)}
                    />
                </label>
                <button className="btn-sign-up" type="submit">Sign Up</button>
            </form>
            <a className="link" href="/login">Already have an account?</a>
        </div>
    );
}

export default Register;