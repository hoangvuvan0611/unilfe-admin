import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Admin from "../pages/admin/Admin";

export const routers = createBrowserRouter([
    {
        path: "/", 
        element: <div>Home</div>
    },
    {
        path: "/auth",
        element: <div>Auth Page</div>
    },
    {
        path: "/admin", 
        element: <AdminLayout/>,
        children: [
            {index: true, element: <Admin/>},
        ]
    }
]);