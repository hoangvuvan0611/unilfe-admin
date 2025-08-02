import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/sidebar/Sidebar.tsx";
import { useState } from "react"

export default function AdminLayout() {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    return (
        <div className="admin-layout flex flex-row flex-1 min-h-screen min-w-screen max-w-screen">
            <div
                style={{borderRight: '1px solid #B8B8B8'}}
                className={`admin-layout-sidebar p-2 min-w-1/7 max-w-1/7 ${!sidebarOpen?'lg:w-45':''} border-r-1`}
            >
                <Sidebar isOpen={sidebarOpen} setSidebarOpen={() => setSidebarOpen(!sidebarOpen)}/>
            </div>
            <div className={`admin-layout-children min-w-6/7 max-w-6/7 ${!sidebarOpen?'lg:w-60':''}`}>
                <Outlet />
            </div>
        </div>
    );
}