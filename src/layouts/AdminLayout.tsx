import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import { useState } from "react"

export default function AdminLayout() {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    return (
        <div className="admin-layout flex">
            <div className={`admin-layout-sidebar ${sidebarOpen?'lg:w-64':''}`}>
                <Sidebar isOpen={sidebarOpen} setSidebarOpen={() => setSidebarOpen(!sidebarOpen)}/>
            </div>
            <div className="admin-layout-children">
                <Outlet />
            </div>
        </div>
    );
}