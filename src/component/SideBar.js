import { Link } from "react-router-dom";

export default function SideBar() {
return(
    <div className="sideBar">
        <Link to="/dashboard/users" className="item">Users</Link>
    </div>
)
}