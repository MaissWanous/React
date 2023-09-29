import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Header from "./component/Header";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Users from "./Users";
import Update from "./Update";
export default function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="register" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="users/update" element={<Update />} />
        </Route>
      </Routes>

    </div>
  );
}
