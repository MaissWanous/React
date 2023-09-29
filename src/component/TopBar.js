import { Link } from "react-router-dom";

export default function TopBar() {
    return(
        <div className="d-flex container TopBar">
            <h1>Store</h1>
            <Link to="" style={{ textAlign: "center" }} className="register-nav">
              Go to  web Site
            </Link>
        </div>
    )
}