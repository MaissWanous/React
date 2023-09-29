import { Outlet, Route, Router, Routes } from "react-router-dom";
import Users from "./Users";
import SideBar from "./component/SideBar";
import TopBar from "./component/TopBar";

export default function Dashboard() {
    return (
        <div>
            <TopBar />
            <div className="flex">
                <SideBar />
                <div style={{ width: '80%'}}>
                  <Outlet/>
                </div>
            </div>
        </div>
    )
}