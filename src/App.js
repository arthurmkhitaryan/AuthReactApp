import './App.css';
import { Route } from "react-router-dom";
import Nav from "./Nav";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Profile from "./profile/Profile";
import UserNav from "./profile/UserNav";

function App() {

    function isLogin() {
        const loggedUser = localStorage.getItem("loggedUser");
        if (loggedUser !== null) {
            return <UserNav />
        }else {
            return <Nav />
        }
    }

    return (
        <div className="App">
            {isLogin()}
            <div className="app-wrapper">
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
            </div>
        </div>
    );
}

export default App;
