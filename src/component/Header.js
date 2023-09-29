import { Link } from "react-router-dom";
export default function Header() {
  function handelLogOut() {
    window.localStorage.removeItem("Email")
    window.location.pathname = "/"
  }
  return (
    <div className="container">
      <nav className="d-flex">
        <div className="d-flex">
          <h6 className="h6">Home</h6>
          <h6 className="h6">About</h6>
        </div>
        <div className="d-flex">
          {!window.localStorage.getItem("Email") ? <>
            <Link to="/register" style={{ textAlign: "center" }} className="register-nav">
              Register
            </Link>
            <Link to="/login" style={{ textAlign: "center" }} className="register-nav">
              Login
            </Link>
          </>
            : <div className="register-nav" onClick={handelLogOut}>Log out</div>}
        </div>
      </nav>
    </div>
  );
}
