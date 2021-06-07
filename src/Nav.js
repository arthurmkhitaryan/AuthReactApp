import "./Nav.css";

function Nav() {
    return (
      <div className="Nav">
          <nav>
              <ul>
                  <li className="left-bar">
                      <a href="/home">Home</a>
                  </li>
                  <li className="auth">
                      <a href="/login">Sign In</a>
                      <a href="/register">Sign Up</a>
                  </li>
              </ul>
          </nav>
      </div>
    );
}

export default Nav;